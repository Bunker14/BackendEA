/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import {get_Grupos, get_Grupo, update_Grupo, delete_Grupo, join_Grupo, create_Grupo, insert_TicketGrupo, exit_Grupo, get_GrupoCode} from "../controllers/grupo";
import {checkJwt} from "../middleware/sesion";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.get("/all", checkJwt, get_Grupos);
router.get("/:idGrupo", checkJwt, get_Grupo);
router.get("/:idGrupo/code",checkJwt, get_GrupoCode);
router.put("/:idGrupo", checkJwt, update_Grupo);
router.post("/", checkJwt, create_Grupo);
router.delete("/:idGrupo", checkJwt, delete_Grupo);
router.post("/join", checkJwt, join_Grupo);
router.post("/exit", checkJwt, exit_Grupo);
router.put("/", checkJwt, insert_TicketGrupo);



export {router};
