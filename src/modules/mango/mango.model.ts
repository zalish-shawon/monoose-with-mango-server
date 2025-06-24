import { model, Schema } from "mongoose";
import { IMango } from "./mango.interface";

const mangoSchema = new Schema<IMango>({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: String,
        required: true,
    },
    origin: {
        type: String,
        required: true,
    },
    session: {
        type: String,
        enum: ["Summer", "Winter"],
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
})

const Mango = model<IMango>("Mango", mangoSchema);

export default Mango;