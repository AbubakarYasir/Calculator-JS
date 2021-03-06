const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/index.html", function (req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

app.listen(port, () => {
    console.log("Server started at http://localhost:" + port);
});
