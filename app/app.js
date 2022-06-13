const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({}));

const pathStatic = path.resolve(__dirname, '../html');
if (fs.existsSync(pathStatic)) {
    app.use(express.static(pathStatic));
}

app.get('*', (req, res) => {
    const pathIndex = path.resolve(__dirname, '../html/index.html');

    res.sendFile(pathIndex);
});

module.exports = app;