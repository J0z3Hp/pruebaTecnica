import { createUser} from "../controllers/user.controller.js";
import express from "express";

export const usersRouter = express.Router();

// Nos creamos la ruta para cada petición

// Ruta para crear un usuario
usersRouter.post("/crear", createUser);
