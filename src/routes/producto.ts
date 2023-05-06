/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import {get_Grupos, get_Grupo, update_Grupo, delete_Grupo, join_Grupo, create_Grupo} from "../controllers/grupo";
import { create_Producto, delete_Producto, get_Producto, get_Productos, update_Prodcuto } from "../controllers/producto";
import { logMiddleware } from "../middleware/log";


const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.get("/all", logMiddleware, get_Productos);
router.get("/:idProducto", logMiddleware, get_Producto);
router.put("/:idProducto",update_Prodcuto);
router.post("/", create_Producto);
router.delete("/:idProducto", logMiddleware, delete_Producto);


export {router};
