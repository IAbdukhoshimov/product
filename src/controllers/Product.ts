import { NextFunction, Request, Response } from "express"
import { logger } from "../config/logger"
import { storage } from "../storage/main"
import AppError from "../utils/appError"
import catchAsync from "../utils/catchAsync"

export class ProductController {
    getAll = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const Products = await storage.Product.find(req.query)

        res.status(200).json({
            success: true,
            data: {
                Products
            }
        })
    })

    get = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const Product = await storage.Product.findById(req.params.id)

        res.status(200).json({
            success: true,
            data: {
                Product
            }
        })
    })

    create = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const Product = await storage.Product.create(req.body)

        res.status(201).json({
            success: true,
            data: {
                Product
            }
        })
    })

    update = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const Product = await storage.Product.update(req.params.id, req.body)

        res.status(200).json({
            success: true,
            data: {
                Product
            }
        })
    })

    delete = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        await storage.Product.delete(req.params.id)

        res.status(204).json({
            success: true,
            data: null
        })
    })
}
