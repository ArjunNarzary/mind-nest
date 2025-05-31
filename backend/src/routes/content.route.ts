import express from "express"
import {
  addContent,
  deleteContent,
  getAllContent,
} from "../controllers/content.controller"
const router = express.Router()

router.route("/").post(addContent).get(getAllContent).delete(deleteContent)

export default router
