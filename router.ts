import express from "express"
import productRouter from "./product/router"
import purchaseRouter from "./purchase/router"
const router = express.Router()

router.use('/:entity(product)',productRouter)
router.use('/:entity(purchase)',purchaseRouter)

export default router   