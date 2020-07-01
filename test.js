const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const sonde = require("./backend/sonde");

sonde.hello = (name, age) => {
  return {
    message: `hello ${name}, you are ${age}`,
    name: "who are you",
  };
};

app.use(express.static("frontend"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/test.html");
});

app.post("/sondeapi", (req, res) => {
  res.json(sonde(req.body.name, ...req.body.args));
});

app.listen(8080);
