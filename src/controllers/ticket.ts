import { Request,Response } from "express";
import { insertUser,getUsers,getUser,updateUser,deleteUser} from "../services/user";
import { handleHttp } from "../utils/error.handle";
import { deleteGrupo, getGrupo, getGrupos, insertGrupo, joinGrupo, updateGrupo } from "../services/grupo";
import { deleteTicket, getTicket, getTickets, insertTicket } from "../services/ticket";

const get_Ticket=async({params}:Request,res:Response)=>{
    try{
        const {idTicket}=params;
        const response=await getTicket(idTicket);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_TICKET");
    }
};

const get_Tickets=async(req:Request,res:Response)=>{
    try{
        const response=await getTickets();
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_TICKETS");
    }
};


const create_Ticket=async ({body}:Request,res:Response)=>{
    try{
        const responsePerson=await insertTicket(body);
        res.send(responsePerson);
    }catch(e){
        handleHttp(res,"ERROR_CREATE_TICKET");
    }
};


const delete_Ticket=async ({params}:Request,res:Response)=>{
    try{
        const {idGrupo}=params;
        const response=await deleteTicket(idGrupo);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_TICKET");
    }
};

export{get_Ticket, get_Tickets, create_Ticket, delete_Ticket};