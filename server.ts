import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory storage for demo purposes
  const submissions = {
    contact: [] as any[],
    partner: [] as any[]
  };

  // API routes
  app.post("/api/contact", (req, res) => {
    const data = req.body;
    console.log("New Contact Submission:", data);
    submissions.contact.push({ ...data, timestamp: new Date() });
    res.json({ success: true, message: "Inquiry received successfully" });
  });

  app.post("/api/partner", (req, res) => {
    const data = req.body;
    console.log("New Partner Application:", data);
    submissions.partner.push({ ...data, timestamp: new Date() });
    res.json({ success: true, message: "Application received successfully" });
  });

  // For debugging/verification
  app.get("/api/submissions", (req, res) => {
    res.json(submissions);
  });

  const distPath = path.resolve(__dirname, "dist");
  const isProduction = process.env.NODE_ENV === "production" || fs.existsSync(distPath);

  // Vite middleware for development
  if (!isProduction) {
    console.log("Starting in development mode...");
    try {
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } catch (e) {
      console.error("Failed to load Vite:", e);
    }
  } else {
    console.log(`Starting in production mode. Serving from: ${distPath}`);
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get("*", (req, res) => {
        const indexPath = path.resolve(distPath, "index.html");
        if (fs.existsSync(indexPath)) {
          res.sendFile(indexPath);
        } else {
          res.status(404).send("index.html not found in dist folder");
        }
      });
    } else {
      console.error("DIST folder not found! Make sure to run 'npm run build' first.");
      app.get("*", (req, res) => {
        res.status(500).send("Production build not found. Please run build first.");
      });
    }
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
