import mongoose, { Schema, Document } from "mongoose"

export interface IGroup extends Document {
    _id: string
    name: string
    sub_group: string
}

let groupSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    sub_group: {
        type: String
    }
})

export default mongoose.model<IGroup>("Group", groupSchema)
