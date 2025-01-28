import { z } from "zod";

export const signupSchema = z.object({
  firstName: z.string().max(50),
  lastName: z.string().max(50),
  username: z.string().min(3).max(30),
  password: z.string().min(6),
});

export const signinSchema = z.object({
  username: z.string().min(3).max(30),
  password: z.string().min(6),
});

export const createRoomSchema = z.object({
    name : z.string().min(3).max(20)
})