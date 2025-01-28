import express from "express";
import { Router } from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use('/api/v1',router);

app.listen(3001);

