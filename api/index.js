const express = require('express');
const path = require('path');
const app = express();

// Serve file statis dari folder public
app.use(express.static(path.join(__dirname, '../public')));

// Route fallback ke index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Penting untuk Vercel: Export app
module.exports = app;
