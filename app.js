const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

app.get("/", (req, res) => {
  db.query("SELECT 1 + 1 AS result", (err, results) => {
    if (err) return res.send("DB Error");
    res.send("DB Connected: " + results[0].result);
  });
});

app.listen(5000, () => console.log("Backend running"));
