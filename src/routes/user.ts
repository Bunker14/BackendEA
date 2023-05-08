/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import { ticketsOfUser,gruposOfUser,deletePerson, getPerson, getPeople, postPerson, updatePerson, getPeoplePaginado, disablePerson} from "../controllers/user";
import { getUsersPaginado } from "../services/user";
import { logMiddleware, loginMiddleware } from "../middleware/log";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.get("/all", logMiddleware, getPeople);
router.get("/allPaginado/:limite1/:pagina1", getPeoplePaginado);
router.get("/:idUser", logMiddleware, getPerson);
router.post("/",postPerson);
router.put("/:idUser",updatePerson);
router.put("/disable/:idUser",disablePerson);

router.delete("/:idUser",loginMiddleware,deletePerson);
router.get("/:idUser/grupos",loginMiddleware, gruposOfUser);

router.get("/:idUser/tickets", ticketsOfUser);


export {router};
