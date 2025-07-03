import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { callAPI } from "./routes/api.js";
import { prodDb } from "./data/db.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.get("/", (req: Request, res: Response) => {
  setTimeout(() => {    
    res.redirect(301, "/api/get");    
  }, 3000)
});

app.get("/api/update", (req: Request, res: Response) => {  
  res.send("Calling Unstyle API");
  res.status(200);
  callAPI();
});

app.get("/api/get", async (_req: Request, res: Response) => {
  await prodDb.read();
  res.json(prodDb.data || { initialValues: [] });
  res.status(200);
});

app.get("*", (req: Request, res: Response) => {
  res.status(404).send("Route not found");
});

export default app;