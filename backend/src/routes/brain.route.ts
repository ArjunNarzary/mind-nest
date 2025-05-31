import express from "express"
import {
  createSharableLink,
  getSharedContent,
} from "../controllers/brain.controller"

const router = express.Router()

router.route("/share").post(createSharableLink)
router.route("/:link").get(getSharedContent)

export default router
