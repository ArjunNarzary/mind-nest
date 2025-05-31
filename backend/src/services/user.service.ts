import { userRegisterSchema } from "./../lib/schemas/userSchema"
import User from "../model/user.model"
import { z } from "zod"

export async function insertUser(
  data: z.infer<typeof userRegisterSchema> & { username: string }
) {
  return User.create(data)
}

export async function findByEmailOrUsername(userNameorEmail: string) {
  return User.findOne({
    $or: [{ username: userNameorEmail }, { email: userNameorEmail }],
  })
}

export async function findByUsername(userNameorEmail: string) {
  return User.findOne({ username: userNameorEmail })
}

export async function generateUsername(
  data: z.infer<typeof userRegisterSchema>
) {
  // Genarete username by removing spaces and any symbols/characters from name
  const username = data.name.replace(/[^a-zA-Z0-9]/g, "")

  // Check if username already exists
  const user = await findByUsername(username)
  if (user) {
    const uniqueUsername = `${username}_${Math.floor(Math.random() * 1000)}`
    return generateUsername({ ...data, name: uniqueUsername })
  }
  return username
}
