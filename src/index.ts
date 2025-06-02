import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { callAPI } from "./routes/api.js";
import { db } from "./routes/api.js"

dotenv.config();

const app = express();
const port: number = Number(process.env.PORT) || 3000;

app.get("/", (req: Request, res: Response) => {
  setTimeout(() => {
    res.redirect("/api/get");
  }, 3000)
});

app.get("/api/update", (req: Request, res: Response) => {
  res.send("Running Unstyle API");
  callAPI();
});

app.get("/api/get", async (_req: Request, res: Response) => {
  await db.read();
  res.json(db.data?.initialValues || []);
})

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});
