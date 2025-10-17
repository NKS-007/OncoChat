import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = 3000;

// Required for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files (index.html, script.js, etc.) from this same folder
app.use(express.static(__dirname));

// Serve the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});

app.get("/api/key", (req, res) => {
    res.json({ key: process.env.API_KEY });
  });
  