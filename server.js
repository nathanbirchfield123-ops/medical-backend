const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "3.214.216.195",
  user: "webuser",
  password: "Password1!",
  database: "medicalportal"
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/records", (req, res) => {
  db.query("SELECT * FROM records", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Database query failed", details: err.message });
    } else {
      res.json(results);
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});