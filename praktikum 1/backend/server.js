    const express = require('express');
    const mysql = require('mysql2');
    const app = express();

    // Koneksi MySQL
    const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fullstack'
    });

    db.connect((err) => {
    if (err) throw err;
    console.log('Terhubung ke MySQL!');
    });

    // Contoh route
    app.get('/', (req, res) => {
    res.send('Backend berjalan!');
    });

    app.listen(5000, () => {
    console.log('Server backend berjalan di http://localhost:5000');
    });