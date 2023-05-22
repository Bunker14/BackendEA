import { Request, Response } from "express";
import { insertUser, getUsers, getUser, updateUser, deleteUser } from "../services/user";
import { handleHttp } from "../utils/error.handle";
import { insertProducto, getProdcutos, getProducto, updateProducto, deleteProducto, putAsignacionToProducto, getProductobyParametros } from "../services/producto";
import { Asignacion } from "../interfaces/asignacion.interface";
import AsignacionModel from "../models/asignacion";

const get_Producto = async ({ params }: Request, res: Response) => {
    try {
        const { idProducto } = params;
        const response = await getProducto(idProducto);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    } catch (e) {
        handleHttp(res, "ERROR_GET_PRODUDCTO");
    }
};

const get_Productos = async (req: Request, res: Response) => {
    try {
        const response = await getProdcutos();
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_GET_PRODUCTOS");
    }
};

const update_Prodcuto = async ({ params, body }: Request, res: Response) => {
    try {
        const { idProducto } = params;
        const response = await updateProducto(idProducto, body);
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_UPDATE_PRODUCTO");
    }
};

const create_Producto = async ({ body }: Request, res: Response) => {
    try {
        const responseProducto = await insertProducto(body);
        res.send(responseProducto);
    } catch (e) {
        handleHttp(res, "ERROR_CREATE_PRODUCTO");
    }
};


const delete_Producto = async ({ params }: Request, res: Response) => {
    try {
        const { idProducto } = params;
        const response = await deleteProducto(idProducto);
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_DELETE_PRODUCTO");
    }
};

const putAsignacionToProducto_Producto = async (body: Request, res: Response) => {
    try {
        var idUsuario = body.body.idUsuario;
        var response;
        for (var i = 0; i < body.body.productos.length; i++) {
            var asignacion = {
                "usuario": idUsuario,
                "cantidad": body.body.productos[i].cantidad
            };
             response = await putAsignacionToProducto(body.body.productos[i].idProducto, asignacion);
            
        }
        const data = response ? response : "NOT_FOUND";
            res.send(data);
    } catch (e) {
        handleHttp(res, "ERROR_ASIGNACION_PRODUDCTO");
    }
};


const getProductoby_Parametros = async ({ body }: Request, res: Response) => {
    console.log(body);
    try {
        const { name, quantity, totalprice } = body;
        const response = await getProductobyParametros(name, quantity, totalprice);
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_GET_PRODUCTO");
    }
};



export { get_Producto, get_Productos, create_Producto, delete_Producto, update_Prodcuto, putAsignacionToProducto_Producto , getProductoby_Parametros};