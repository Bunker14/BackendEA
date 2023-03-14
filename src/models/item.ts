import {  Schema, Types, model, Model } from "mongoose";
import { Item } from "../interfaces/item.interface";

const SubjectSchema = new Schema<Item>(
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
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ItemModel = model('items', SubjectSchema);

export default ItemModel;