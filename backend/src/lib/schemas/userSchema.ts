import { z } from "zod"

export const userLoginSchema = z.object({
  username: z.string(),
  password: z
    .string()
    .min(4, { message: "Password should be between 4 to 16 characters" })
    .max(16, { message: "Password should be between 4 to 16 characters" }),
})

export const userRegisterSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Name should be between 4 to 16 characters" })
    .max(16, { message: "Name should be between 4 to 16 characters" }),
  email: z.string().email({ message: "Please enter valid email" }),
  password: z
    .string()
    .min(4, { message: "Password should be between 4 to 16 characters" })
    .max(16, { message: "Password should be between 4 to 16 characters" }),
})
