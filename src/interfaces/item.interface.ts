import { ObjectExpression, ObjectId } from "mongoose";

export interface Item {
    name: string;
    quantity: number;
    price: number;
    totalprice: number;
}