import{Router}from "express";
import {loginMiddleware, logMiddleware} from "../middleware/log";
import { registerCtrl,loginCtrl, registerCtrlGoogle} from "../controllers/user";

const router=Router();
/** http://localhost:3002/auth/register */
router.post("/register",loginMiddleware,registerCtrl);
router.post("/registerGoogle",loginMiddleware,registerCtrlGoogle);
router.post("/login",loginMiddleware,loginCtrl);

export{router};