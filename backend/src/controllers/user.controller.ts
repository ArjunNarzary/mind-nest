import { Request, Response } from "express"
import bcrypt from "bcrypt"
import { generateUsername, insertUser } from "../services/user.service"
import asyncHandler from "../utils/asyncHandler"

export const signUp = asyncHandler(async (req: Request, res: Response) => {
  // Genarete username
  const username = await generateUsername(req.body)

  // Hash password
  const password = bcrypt.hashSync(req.body.password, 10)

  // insert user to database
  const user = await insertUser({ ...req.body, password, username })

  // send response
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: user,
  })
})
export const signIn = async (req: Request, res: Response) => {
  // Generate
}
