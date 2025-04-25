import express from 'express';
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Unstyle.io');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
