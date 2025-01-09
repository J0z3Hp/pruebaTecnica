import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";
import { Credenciales } from '../interface/credenciales';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // INYECCION DE DEPENDENCIAS
  private _httpClient = inject(HttpClient);
  private _router = inject(Router);

  // RUTA DE CONEXION CON EL BACKEND
  private URL_LOGIN = "http://localhost:9000/iniciarSesion/";

  login(credencialesLogin: Credenciales){
    return this._httpClient.post(this.URL_LOGIN, credencialesLogin);
  }

  obtenerToken(){
    return localStorage.getItem("token");
  }

   //INICIO DE SESIÓN SATISFACTORIO
  estaLogueado(){
    // Si si hay token devuleva true si no devuelva false
    return this.obtenerToken()? true : false
  }

    //CIERRE DE SESIÓN

  cierreSesion(){
    localStorage.removeItem("token");
    this._router.navigate(["/"]);
  }
}
