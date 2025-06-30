import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { callAPI } from "./routes/api.js";
import { prodDb } from "./data/db.js";

dotenv.config();

const app = express();
const port: number = Number(process.env.PORT) || 3001;

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.get("/", (req: Request, res: Response) => {
  setTimeout(() => {
    res.redirect("/api/get");
  }, 3000)
});

app.get("/api/update", (req: Request, res: Response) => {
  res.send("Calling Unstyle API");
  callAPI();
});

app.get("/api/get", async (_req: Request, res: Response) => {
  await prodDb.read();
  res.json(prodDb.data || { initialValues: [] });
});

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});
