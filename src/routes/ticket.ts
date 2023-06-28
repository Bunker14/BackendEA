/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import {Router } from "express";
import {loginMiddleware, logMiddleware} from "../middleware/log";
import { putCompletadoTo_Ticket,get_productos_ticket,get_Ticket,create_Ticket, delete_Ticket, get_Tickets, get_TicketsPaginado, insert_ProductoToTicket, update_Ticket } from "../controllers/ticket";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.get("/all",loginMiddleware, get_Tickets);
router.get("/allPaginado/:pagina1",loginMiddleware, get_TicketsPaginado);
router.get("/get/:idTicket",loginMiddleware, get_Ticket);
router.post("/post",loginMiddleware, create_Ticket);
router.delete("/delete/:idTicket",logMiddleware, delete_Ticket);
router.put("/put/:idTicket",loginMiddleware, update_Ticket);
router.post("/insert",loginMiddleware, insert_ProductoToTicket)
router.get("/:idTicket/productos",loginMiddleware, get_productos_ticket)
router.put("/t/completado",loginMiddleware, putCompletadoTo_Ticket);



export {router};
