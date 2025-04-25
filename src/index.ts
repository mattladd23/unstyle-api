import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port: number = Number(process.env.PORT) || 3000;
const dummyText: string = "Howay the lasses";

app.get("/", (req, res) => {
  res.send(`Welcome to Unstyle.io ${dummyText}`);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
