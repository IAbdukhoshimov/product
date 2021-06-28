import Joi, { string } from "joi"
import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/catchAsync"

export class GroupValidator {
    keys = {
        required: "required",
        optional: "optional"
    }

    groupSchema = Joi.object({
        name: Joi.string().required(),
        sub_group: Joi.string()
    })

    updateSchema = Joi.object({
        name: Joi.string().required(),
        sub_group: Joi.string()
    })

    create = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { error } = this.groupSchema.validate(req.body)
        if (error) return next(error)

        next()
    })

    update = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const { error } = this.updateSchema.validate(req.body)
        if (error) return next(error)

        next()
    })
}
