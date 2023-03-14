import {  Schema, Types, model, Model } from "mongoose";
import { Ticket } from "../interfaces/ticket.interface";

const UserSchema = new Schema<Ticket>(
    {
        items:{
            type: [Schema.Types.ObjectId],
            ref:'tickets',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//Once the Schema is created, it must be implemented
//1st argument ('users') is the name of the collection
//2nd argument (UserSchema) is what it feds it
const TicketModel = model('tickets', UserSchema);

export default TicketModel;