import {  Schema, Types, model, Model } from "mongoose";
import { Producto } from "../interfaces/producto.interface";

const SubjectSchema = new Schema<Producto>(
    {
        name:{
            type: String,
            required:true,
        },
        quantity:{
            type: Number,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        totalprice:{
            type: Number,
            required: false,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ProductoModel = model('items', SubjectSchema);

export default ProductoModel;