import { Router } from "express"
import productRouter from "./Product"

const router = Router({ mergeParams: true })

router.use("/product", productRouter)

export default router
