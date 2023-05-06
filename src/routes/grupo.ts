/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import {get_Grupos, get_Grupo, update_Grupo, delete_Grupo, join_Grupo, create_Grupo, insert_TicketGrupo, exit_Grupo} from "../controllers/grupo";
import { logMiddleware } from "../middleware/log";


const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.get("/all", logMiddleware, get_Grupos);
router.get("/:idGrupo", logMiddleware, get_Grupo);
router.put("/:idGrupo",update_Grupo);
router.post("/", create_Grupo);
router.delete("/:idGrupo", logMiddleware, delete_Grupo);
router.post("/join",join_Grupo);
router.post("/exit",exit_Grupo);
router.put("/",insert_TicketGrupo);



export {router};
