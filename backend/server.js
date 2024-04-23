const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ayush@1406',
  database: 'student'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

app.use(express.json());

app.post('/submit-form', (req, res) => {
  const { name, email } = req.body;

  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      res.status(500).send('Error submitting form');
      throw err;
    }
    res.send('Form submitted successfully');
  });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});