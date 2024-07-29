const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World, mai aa gya hoon");
});
app.get("/twitter", function (req, res) {
  res.send("Hello from twitter");
});

app.listen(3000, () => {
  console.log("its working");
});
