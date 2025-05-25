import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { callAPI } from "./routes/api.js";

dotenv.config();

const app = express();
const port: number = Number(process.env.PORT) || 3000;

app.get("/", (req: Request, res: Response) => {
  setTimeout(() => {
    res.redirect("/api");
  }, 3000)  
});

app.get("/api", (req: Request, res: Response) => {
  res.send("Unstyle API");
  callAPI();
});

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});
