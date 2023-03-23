import {  Schema, Types, model, Model } from "mongoose";
import { ProductoUsuario } from "../interfaces/ProductoUsuario.interface";

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
        ticket:{
            type: [Schema.Types.ObjectId],
            ref:'tickets',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const GrupoModel = model('ProductosUsuarios', SubjectSchema);

export default GrupoModel;