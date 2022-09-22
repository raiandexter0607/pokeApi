import express, { Request, Response } from "express";
import api from './api/routes';
const app: express.Application = express();

app.use("/api", api);
app.use("/health-check", (req, res) => {
  res.send({
    code: 200,
    status: "OK",
    message: "Server is running",
  });
});

export default app;
