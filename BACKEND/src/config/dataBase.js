// Configuramos nuesta base de datos
import mongoose from "mongoose";

export async function connectionDb() {
    // manejo de errores y ponemos un log y un error para saber el estado de la conección
    try {
        await mongoose.connect(process.env.DB_URL,{dbName: "Cluster0"})
        console.log("Exito en la conexion con la base de datos");

    } catch (error) {
        console.error("Hubo un error de conexion: " + error);
        
    }
}