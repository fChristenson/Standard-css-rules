const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/v1", (req, res) => {
  res.render("index-v1");
});

app.get("/v2", (req, res) => {
  res.render("index-v2");
});

module.exports = app;
