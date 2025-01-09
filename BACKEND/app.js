// IMPORTAMOS TODAS LAS DEPENDENCIAS QUE VAMOS A UTILIZAR

import express from "express"; 
import dotenv from "dotenv";
import { connectionDb } from "./src/config/dataBase.js";
import { usersRouter } from "./src/routes/users.routes.js";
import { loginRouter } from "./src/routes/login.routes.js";
import cors from "cors";

// Configuracion del server
const app = express();
dotenv.config();
connectionDb();
const port = process.env.PORT 
app.use(cors()); // Permisos de los navegadores para poder usar las peticiones HTTPS

// Rutas
app.use(express.json()); // Para poder usar el formato json
app.use("/usuarios", usersRouter);
app.use("/iniciarSesion", loginRouter); 


// Ejecuci{on del servidor local
app.listen(port, () => { 
    console.log("El servidor se esta ejecutando, en el puerto:", port);
}); 