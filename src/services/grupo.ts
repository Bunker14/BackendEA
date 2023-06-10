//In charge to connect with the dB
import { Grupo } from "../interfaces/grupo.interface";
import { Types } from "mongoose";
import { User } from "../interfaces/user.interface";
import GrupoModel from "../models/grupo";
import UserModel from "../models/user";
import AsignacionModel from "../models/asignacion";


const insertGrupo = async(item: Grupo) => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo: string;
    do{
        codigo = '';
        for (let i = 0; i < 6; i++) {
            codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        item.codigo = codigo;
    } while (await GrupoModel.exists({ codigo: codigo }));

    if (item.name.trim() === "") {
        return "NOMBRE_VACIO";
    }
    
    const responseInsert = await GrupoModel.create(item);
    return responseInsert;
};

const getGrupoCodigo = async(id: string) => {
    const grupo1 = await GrupoModel.findOne({_id: id});
    const responseItem = grupo1?.codigo; 
    return responseItem;
};

const getAllGrupoCodigos = async () => {
    const grupos = await GrupoModel.find({});
    const codigos = grupos.map(grupo => grupo.codigo);
    return codigos;
};

const getGrupos = async() => {
    const responseItem = await GrupoModel.find({});
    return responseItem;
};

const getGrupo = async(id: string) => {
    const responseItem = await GrupoModel.findOne({_id: id});
    return responseItem;
};

const updateGrupo = async(id: string, data: Grupo) => {
    const responseItem = await GrupoModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};

const deleteGrupo = async(id: string) => {
    const responseItem = await GrupoModel.findOneAndRemove({_id: id});
    return responseItem;
}

const joinGrupo = async(UserName: string, codigo: string ) => {
    const GrupoSeleccionado = await GrupoModel.findOne({codigo:codigo});
    console.log(GrupoSeleccionado);
    if(!GrupoSeleccionado){
        return null;
    }
    const PasswordGrupo = GrupoSeleccionado?.codigo;
    if ( PasswordGrupo === codigo) {
    const responseItem = await GrupoModel.findOneAndUpdate({codigo:codigo},
        {$addToSet: {users: new Types.ObjectId(UserName)}},
        {new: true}).populate('users');

        console.log(responseItem?.users);
        return responseItem;
    } 
    else{
        console.log('Error: codigo incorrecta')
    } 

}
const insertTicketGrupo = async(idGrupo:string,idTicket:string) => {
    console.log(idGrupo);
    console.log(idTicket);
    const quebuscas = await GrupoModel.findOne({_id:idGrupo})
    const responseItem = await GrupoModel.findOneAndUpdate(
        {_id:idGrupo},
        {$addToSet: {tickets: new Types.ObjectId(idTicket)}},
        {new: true}
    )
    console.log(quebuscas);
    console.log(responseItem);
    return responseItem;
    
}

const exitGrupo = async(UserName: string, GrupoName: string ) => {
    const responseItem = await GrupoModel.findOneAndUpdate({_id:GrupoName},
        {$pull: {users: new Types.ObjectId(UserName)}},
        {new: true}
    );
    console.log(responseItem?.users);
    return responseItem;
} 

const populateGrupo= async(id: string ) => {
    const responseItem = await GrupoModel.findOne({_id: id}).populate({path:'tickets',populate:{path:'productos',populate:{path:'asignaciones'}}}).populate('users').populate({path:'tickets',populate:{path:'completado'}});
    return responseItem;

}



    

export {insertGrupo, getGrupos, getGrupo, updateGrupo, deleteGrupo, joinGrupo, insertTicketGrupo, exitGrupo, populateGrupo, getGrupoCodigo, getAllGrupoCodigos};
