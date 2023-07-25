import express, { Application, json, Request, Response } from "express";

const app: Application = express();
app.use(express.json());

// app.post("/users", (req: Request, res: Response): Response => {
//   return res.status(201).json(req.body);
// });

const PORT: number = 3000;
const runningMsg: string = `Example app listening on port ${PORT}`;
app.listen(PORT, () => {
  console.log(runningMsg);
});
