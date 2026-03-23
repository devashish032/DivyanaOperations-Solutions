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

  const distPath = path.join(__dirname, "dist");
  const isProduction = process.env.NODE_ENV === "production" || fs.existsSync(distPath);

  // Vite middleware for development
  if (!isProduction) {
    console.log("Starting in development mode...");
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting in production mode...");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
