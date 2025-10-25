import express from "express";
import cors from "cors";
import PHONES from "../data/phones";
import type { Request, Response } from "express";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/phones", (_req: Request, res: Response) => {
  res.json(PHONES);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server listening on http://localhost:${port}`);
});
