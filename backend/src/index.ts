import "dotenv/config"
import express from "express"
import cors from "cors"
import userRouter from "./routes/user.route"
import contentRouter from "./routes/content.route"
import brainRouter from "./routes/brain.route"
import "./lib/db/index"
import { errorHandlerMiddleware } from "./middlewares/error-handler"

const app = express()

app.use(express.json())
app.use(cors())

app.use(`${process.env.API_VERSION}/user`, userRouter)
app.use(`${process.env.API_VERSION}/content`, contentRouter)
app.use(`${process.env.API_VERSION}/brain`, brainRouter)

app.use(errorHandlerMiddleware)

app.listen(process.env.PORT, () => {
  console.log(`App is running at port ${process.env.PORT}`)
})
