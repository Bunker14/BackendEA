/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import { create_Producto, delete_Producto, get_Producto, get_Productos, update_Prodcuto,putAsignacionToProducto_Producto } from "../controllers/producto";
import {checkJwt} from "../middleware/sesion";


const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.get("/all", get_Productos);
router.get("/:idProducto", get_Producto);
router.put("/:idProducto", update_Prodcuto);
router.post("/", create_Producto);
router.delete("/:idProducto", delete_Producto);
router.put("/p/asignaciones", putAsignacionToProducto_Producto);


export {router};
