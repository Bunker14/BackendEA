/** Esta ruta nos va a devolver un array de objetos, que va a venir de una base de datos (carpeta config)*/

import { Request, Response, Router } from "express";
import { ticketsOfUser,gruposOfUser,deletePerson, getPerson, getPeople, postPerson, updatePerson, getPeoplePaginado, disablePerson} from "../controllers/user";
import { getUsersPaginado } from "../services/user";
import { checkJwt } from "../middleware/sesion";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.get("/all", checkJwt, getPeople);
router.get("/allPaginado/:limite1/:pagina1", checkJwt, getPeoplePaginado);
router.get("/:idUser", checkJwt, getPerson);
router.post("/", checkJwt, postPerson);
router.put("/:idUser", checkJwt, updatePerson);
router.put("/disable/:idUser", checkJwt, disablePerson);

router.delete("/:idUser",checkJwt, deletePerson);
router.get("/:idUser/grupos",checkJwt, gruposOfUser);

router.get("/:idUser/tickets", checkJwt, ticketsOfUser);


export {router};
