import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const key = process.env.SECRET_KEY;

export function generateToken(payload){
    return new Promise((resolve, reject) => {
        jwt.sign(payload, key, {expiresIn: "1h"}, (error, token) => {
            if(error){
                reject(new Error("Error al generar el JWT " + error.message)); // Si hay un error que melo diga
            }else{
                resolve(token); // Si no hay error que me de el token 
            }
        });
    });
}

export const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, key, (error, decoded) =>{
            if(error){
                reject(new Error("Error al verificar JWT " + error.message));
            }else{
                resolve(decoded);
            }
        });
    });
}