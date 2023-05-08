import { Request,Response } from "express";
import { insertUser,getUsers,getUser,updateUser,deleteUser} from "../services/user";
import { handleHttp } from "../utils/error.handle";
import { deleteGrupo, exitGrupo, getGrupo, getGrupos, insertGrupo, insertTicketGrupo, joinGrupo, updateGrupo,pagadoAnfitrionGrupo } from "../services/grupo";

const get_Grupo=async({params}:Request,res:Response)=>{
    try{
        const {idGrupo}=params;
        const response=await getGrupo(idGrupo);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_GRUPO");
    }
};

const get_Grupos=async(req:Request,res:Response)=>{
    try{
        const response=await getGrupos();
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_GRUPOS");
    }
};

const update_Grupo=async ({params,body}:Request,res:Response)=>{
    try{
        const {idGrupo}=params;
        const response=await updateGrupo(idGrupo,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_GRUPO");
    }
};

const create_Grupo=async ({body}:Request,res:Response)=>{
    try{
        const responsePerson=await insertGrupo(body);
        res.send(responsePerson);
    }catch(e){
        handleHttp(res,"ERROR_CREATE_GRUPO");
    }
};


const delete_Grupo=async ({params}:Request,res:Response)=>{
    try{
        const {idGrupo}=params;
        const response=await deleteGrupo(idGrupo);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_GRUPO");
    }
};

const join_Grupo=async ({body}:Request,res:Response)=>{
    try{
        const { idUser, codigo, } = body;
        const responseGrupo = await joinGrupo(idUser, codigo);
        res.send(responseGrupo);
    }catch(e){
        handleHttp(res,"ERROR_JOIN_GRUPO");
    }
};

const exit_Grupo=async ({body}:Request,res:Response)=>{
    try{
        const { idUser, idGrupo  } = body;
        const responseGrupo = await exitGrupo(idUser, idGrupo );
        res.send(responseGrupo);
    }catch(e){
        handleHttp(res,"ERROR_EXIT_GRUPO");
    }
};

const insert_TicketGrupo=async ({body}:Request,res:Response)=>{
    try{
        const { idGrupo, idTicket  } = body;
        const responseGrupo = await insertTicketGrupo(idGrupo, idTicket );
        res.send(responseGrupo);
    }catch(e){
        handleHttp(res,"ERROR_INSERT_TICKET");
    }
};

const get_populateGrupo=async({params}:Request,res:Response)=>{
    try{
        const {idGrupo}=params;
        const response=await pagadoAnfitrionGrupo(idGrupo);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_GRUPO");
    }
};




export{get_Grupo, get_Grupos, join_Grupo, update_Grupo, delete_Grupo, create_Grupo, insert_TicketGrupo, exit_Grupo,get_populateGrupo};