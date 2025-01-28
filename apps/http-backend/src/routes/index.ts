import express from "express";
import { Router } from "express";
import { userRouter } from "./userRouter";

export const router : Router = Router();

router.use("/user",userRouter);