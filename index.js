const express = require("express");
const port = 3000;
const app = express();
const path = require('path');

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.listen(port, () => {
    console.log("Server started at http://localhost:" + port);
});