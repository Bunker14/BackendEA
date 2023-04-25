import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try{
    const header = req.headers;
    const userAgent = header["user-agent"];
    const jwt = require('jsonwebtoken');
    const decode = jwt.decode(header.authorization?.split(" ")[1]);
    if (decode == "Admin"){
      next();
    } else {
        res.status(400);
        res.send("PERMISOS NO VALIDOS");
    }
    }catch(e){
        res.status(400);
        res.send("SESSION_NO_VALIDA");
    }
};

export { logMiddleware };