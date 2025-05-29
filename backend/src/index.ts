import "dotenv/config"
import express from "express"
import cors from "cors"
import userRouter from "./routes/user.route"
import "./lib/db/index"

const app = express()

app.use(express.json())
app.use(cors())

app.use(`${process.env.API_VERSION}/user`, userRouter)

app.listen(process.env.PORT, () => {
  console.log(`App is running at port ${process.env.PORT}`)
})
