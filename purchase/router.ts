import express from "express"
import { contact1 } from "./controller"
const router = express.Router()

router.post('/contact1',contact1)
export default router