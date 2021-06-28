import mongoose, { Schema, Document } from "mongoose"

export interface IProduct extends Document {
    _id: string
    org_id: string
    owner_id: string
    name: Object
    description: string
    barcode: string
    sku: string
    image?: String
    // unit: Array<T>
    // group: Array<T>
    vender_code: string
    weight: string
    volume: string
    VAT: Number
    is_shared: Boolean
    update_history: string
}

let productSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    org_id: {
        type: String,
        required: true
    },
    owner_id: {
        type: String,
        required: true
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String
        }
    },
    description: {
        type: String
    },
    barcode: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    image:{
        type:String
    },
    unit:{
        
    }

})

export default mongoose.model<IProduct>("Product", productSchema)
