const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({result: "Hello world"}));

module.exports = app;