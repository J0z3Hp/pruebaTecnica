import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../interface/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

      private _httpClient = inject(HttpClient);

      // RUTA DE CONEXION CON EL BACKEND 
      private URL_USUARIOS = "http://localhost:9000/usuarios";
  
      // Peticion POST
      postUsuarios(user: Usuarios){

        return this._httpClient.post(this.URL_USUARIOS + "/crear", user);
      } 
    
}
