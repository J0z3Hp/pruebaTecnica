import { HttpInterceptorFn } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  // Inyectar el servicio de login
  const _loginService = inject(LoginService);

  // Obtener token
  const token = _loginService.obtenerToken();

  // Enviar el token
  const tokenReq = token ?
    req.clone({ setHeaders: { Authorization: "Bearer " + token } }) // Si hay token mandelo en la petición
    : req;

  return next(tokenReq);
};
