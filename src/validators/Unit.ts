import Joi, { string } from "joi"
import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/catchAsync"

export class UnitValidator {
    keys = {
        required: "required",
        optional: "optional"
    }

    unitSchema = Joi.object({
        name: Joi.string().required(),
        full_name: Joi.string()
    })

    updateSchema = Joi.object({
        name: Joi.string().required(),
        full_name: Joi.string()
    })

    create = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { error } = this.unitSchema.validate(req.body)
        if (error) return next(error)

        next()
    })

    update = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { error } = this.updateSchema.validate(req.body)
        if (error) return next(error)

        next()
    })
}
