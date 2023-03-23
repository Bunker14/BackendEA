import {  Schema, Types, model, Model } from "mongoose";
import { ProductoUsuario } from "../interfaces/ProductoUsuario";

const SubjectSchema = new Schema<ProductoUsuario>(
    {
        usuario:{
            type: [Schema.Types.ObjectId],
            ref:'users',
        },
        producto:{
            type: [Schema.Types.ObjectId],
            ref:'productos',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const GrupoModel = model('grupos', SubjectSchema);

export default GrupoModel;