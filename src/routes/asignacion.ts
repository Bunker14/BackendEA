/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import {get_Grupos, get_Grupo, update_Grupo, delete_Grupo, join_Grupo, create_Grupo} from "../controllers/grupo";
import { create_Asignacion, delete_Asignacion } from "../controllers/asignacion";
// import { updateAsignacion } from "../services/asignacion";
import {checkJwt} from "../middleware/sesion";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.post("/", checkJwt, create_Asignacion);
// router.put("/:idAsignacion", checkJwt, update_Asignacion);
router.delete("/:idAsignacion", checkJwt, delete_Asignacion);

export {router};
