import { Router } from "express"
import { ProductController } from "../controllers/Product"
import { ProductValidator } from "../validators/Product"

const router = Router({ mergeParams: true })
const controller = new ProductController()
const validator = new ProductValidator()

router.route("/").get(controller.getAll).post(validator.create, controller.create)
router
    .route("/:id")
    .get(controller.get)
    .patch(validator.update, controller.update)
    .delete(controller.delete)

export default router
