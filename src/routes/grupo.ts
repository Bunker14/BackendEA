/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import {Router } from "express";
import {loginMiddleware, logMiddleware} from "../middleware/log";
import {get_Grupos, get_Grupo, update_Grupo, delete_Grupo, join_Grupo, create_Grupo, insert_TicketGrupo, exit_Grupo, get_GrupoCode, get_populateGrupo as get_GrupoPopulate, get_AllGrupoCodigos} from "../controllers/grupo";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.get("/all", loginMiddleware, get_Grupos);             
router.get("/get/:idGrupo",loginMiddleware, get_Grupo);
router.get("/code/find/:idGrupo",loginMiddleware, get_GrupoCode);
router.get("/code/all",loginMiddleware, get_AllGrupoCodigos);
router.get("/populate/:idGrupo",loginMiddleware, get_GrupoPopulate);
router.put("/put/:idGrupo",loginMiddleware, update_Grupo);
router.post("/post",loginMiddleware, create_Grupo);
router.delete("/delete/:idGrupo",logMiddleware, delete_Grupo);
router.post("/join",loginMiddleware, join_Grupo);
router.post("/exit",loginMiddleware, exit_Grupo);
router.put("/",loginMiddleware, insert_TicketGrupo);



export {router};
