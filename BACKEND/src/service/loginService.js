import { userModel } from "../models/user.model.js";
import { generateToken } from "../lib/jwt.js";
import bcrypt from "bcryptjs";

const login = async(req, res) => {
    // Manejo de errores

    try {
        const {emailLogin, passwordLogin} = req.body;

        const userFound =await userModel.findOne({
            email: emailLogin
        });

        if(!userFound){
            return res.status(404).json({
                "mensaje": "No tienes una cuenta porfavor registrate"
            });
        }

        const isValidePassword = await bcrypt.compare(passwordLogin, userFound.password);
        
        if(!isValidePassword){
            return res.status(401).json({
                "mensaje": "Contraseña incorrecta intentalo de nuevo"
            });
        }

        const payload = {
            id: userFound._id,
            name: userFound.fullName
        }

        // Generar el token 
        const token = await generateToken(payload);

        return res.status(200).json({ // Cuando todo salio bien generar la respuesta
            "mensaje": "Inicio de sesion exitoso",
        });
        
    } catch (error) {
        return res.status(400).json({ // Cuando algo salio mal generar esa respuesta
            "mensaje": "Hubo un error insesperado al iniciar sesion",
            "error": error.message || error
        });
    }
}

export default login;