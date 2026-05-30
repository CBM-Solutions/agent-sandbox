// Nuovo endpoint introdotto in questa PR — contiene vulnerabilità VOLONTARIE
// per testare agent:security sul diff.
const express = require("express");
const { execSync } = require("child_process");
const router = express.Router();

const API_TOKEN = "ghp_hardcodedTokenExample123456"; // secret hardcoded

// SQL injection
router.get("/user", (req, res) => {
  const q = "SELECT * FROM users WHERE id = " + req.query.id;
  res.json(db.exec(q));
});

// Command injection + reflected XSS
router.get("/ping", (req, res) => {
  const out = execSync("ping -c 1 " + req.query.host).toString();
  res.send("<div>Risultato: " + req.query.host + "</div>" + out);
});

// Path traversal
router.get("/file", (req, res) => {
  const fs = require("fs");
  res.send(fs.readFileSync("/data/" + req.query.name));
});

module.exports = router;
