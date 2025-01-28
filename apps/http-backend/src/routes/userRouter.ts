import { Router } from "express";
import bcrypt from "bcrypt";
export const userRouter: Router = Router();
import dotenv from "dotenv";
import {signupSchema, signinSchema, createRoomSchema} from "@repo/common/types";
dotenv.config();
import {JWT_SECRET} from "@repo/backend-common/config";

const secret = JWT_SECRET;

userRouter.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, username, password } = req.body;

    const validUser = signupSchema.safeParse(req.body);
    if (!validUser.success) {
      res.json({
        message: "Invalid signup schema",
      });
      return;
    }

    // add check to identify if user already exists in the database

    const hashedPassword = await bcrypt.hash(password, 10);

    // now create a new user and push all this to the data base;

    res.json({
      message: "User created successfully!",
    });
  } catch (e) {
    res.json({
      message: "Error occurred while signup",
    });
    return;
  }
});

userRouter.post("/signin", async (req, res) => {

    const {username, password} = req.body;

    const validUser = signinSchema.safeParse(req.body);

    // write code to check if the user exists in the given database

    // write code to check if the found users password matches with the entered password

    // if it matches, then return the jwt to the user with their username and unique identity stored in it

    // res.json the jwt of the user

    
});
