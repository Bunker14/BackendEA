import { ObjectId } from "mongoose";

export interface ProductoUsuario {
    usuario: ObjectId[];
    producto: ObjectId[];
    ticket: ObjectId[];
}