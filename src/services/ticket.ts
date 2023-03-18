//In charge to connect with the dB
import { Grupo } from "../interfaces/grupo.interface";
import { Types } from "mongoose";
import { User } from "../interfaces/user.interface";
import GrupoModel from "../models/grupo";
import UserModel from "../models/user";
import { Ticket } from "../interfaces/ticket.interface";
import TicketModel from "../models/ticket";

const insertTicket = async(item: Ticket) => {
    const responseInsert = await TicketModel.create(item);
    return responseInsert;
};

const getTickets = async() => {
    const responseItem = await TicketModel.find({});
    return responseItem;
};

const getTicket = async(id: string) => {
    const responseItem = await TicketModel.findOne({_id: id});
    return responseItem;
};


const deleteTicket = async(id: string) => {
    const responseItem = await TicketModel.findOneAndRemove({_id: id});
    return responseItem;
}

const insertProductoToTicket = async(idTicket: string, idProducto: string) => {
    const responseItem = await TicketModel.findOneAndUpdate({_id:idTicket},
        {$addToSet: {productos: new Types.ObjectId(idProducto)}},
        {new: true}).populate('productos');
    console.log(responseItem);
    return responseItem;
}

// const deleteProductoToTicket = async(idTicket: string, idProducto: string) => {
//     const responseItem = await GrupoModel.findOneAndUpdate({_id:idTicket},
//         {$addToSet: {producto: new Types.ObjectId(idProducto)}},
//         {new: true}).populate('productos');
// }



export {insertTicket, getTickets, getTicket, deleteTicket, insertProductoToTicket};
