import { ObjectExpression, ObjectId } from "mongoose";

export interface Ticket {
    nombre: string;
    items?: ObjectId[];
    location?: string[]; 
}