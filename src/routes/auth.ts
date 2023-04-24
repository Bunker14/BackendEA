import{Request,Response,Router}from "express";
import { registerCtrl,loginCtrl } from "../controllers/user";

const router=Router();
/** http://localhost:3002/auth/register */
router.post("/register",registerCtrl);
router.post("/login",loginCtrl);

export{router};