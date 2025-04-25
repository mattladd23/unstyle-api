import express from 'express';
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const session = require("express-session");
const dummyText = 'Howay the lasses';

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  rolling: true,
  saveUninitialized: false,
  cookie: {
      expires: 600000
  }
}));

app.get('/', (req, res) => {
  res.send(`Welcome to Unstyle.io ${dummyText}`);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
