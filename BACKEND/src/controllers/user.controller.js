import { userModel } from "../models/user.model.js";
import bcrypt from "bcryptjs" 

export const createUser = async(req, res) => {
    // Manejo de errores 
    try {
        const {fullName, email, password} = req.body;

        // Encriptar la contraseña
        const codedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            fullName,
            email,
            password: codedPassword
        });

        // Mensaje de 201 al crear usuario
        return res.status(201).json({
            "mensaje": "Usuario creado satisfactoriamente",
            "datos": newUser
        });

    } catch (error) {
        // Mensaje de 400 cuando haya un error al crearse ususario
        return res.status(400).json({
            "mensaje": "Ocurrio un error al crear un usuario",
            "problema": error || error.message
        });
    }
};
