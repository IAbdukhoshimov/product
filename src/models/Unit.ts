import mongoose, { Schema, Document } from "mongoose"

export interface IUnit extends Document {
    _id: string
    name: string
    full_name: string
}

let unitSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    full_name: {
        type: String
    }
})

export default mongoose.model<IUnit>("Unit", unitSchema)
