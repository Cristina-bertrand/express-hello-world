/* require modules */
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

/* Middlewares config */
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', 'layout');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/* Routes */

app.get("/", (req, res) => {
  res.send("Hola");
});

app.get("/hello", (req, res) => {
  let number = Math.random();

  res.render("hello", { randomNumber: number });
});

app.get("/bye", (req, res) => {
  let someValues = ["A", "B", "C"];

  res.render("bye", { values: someValues });
});

app.listen(3000, () => console.log("Ready!"));








