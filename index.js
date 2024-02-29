const express = require('express');
const app = express();
const cors = require("cors");


app.use(cors());
const PORT = 8080;
app.use(express.json());

const mysql2 = require('mysql2');
const conn = mysql2.createConnection({
    host: 'localhost', // Replace with your host name
    user: 'root',      // Replace with your database username
    password: 'root',      // Replace with your database password
    database: 'ecommerce' 
})

  conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
  });

  app.get('/', (req, res) => {
    const sql = 'SELECT * FROM product';
    conn.query(sql, (err, data) => {
      if (err) throw err;
      console.log(data);
      res.json(data);
    });
  });

app.listen(PORT, () => {
    console.log(`Server running at : http://localhost:${PORT}/`);
});