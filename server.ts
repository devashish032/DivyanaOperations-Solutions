import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

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

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
