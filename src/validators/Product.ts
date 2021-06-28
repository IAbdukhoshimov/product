import Joi from "joi"
import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/catchAsync"

export class ProductValidator {
    keys = {
        required: "required",
        optional: "optional"
    }

    productSchema = Joi.object({
        org_id: Joi.string().required(),
        owner_id: Joi.string().required(),
        name: Joi.string().required(),
        barcode: Joi.string().required(),
    })

    updateSchema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required()
    })

    create = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { error } = this.productSchema.validate(req.body)
        if (error) return next(error)

        next()
    })

    update = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { error } = this.updateSchema.validate(req.body)
        if (error) return next(error)

        next()
    })
}
