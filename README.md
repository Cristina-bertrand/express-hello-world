# express-hello-world

`npm init`

`npm install --save express ejs express-ejs-layouts`

```js
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

/* App routes */
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/hello', (req, res) => {
  ...
});

app.get('/bye', (req, res) => {
  ...
});

app.listen(3000, () => console.log("ready!"));
```
