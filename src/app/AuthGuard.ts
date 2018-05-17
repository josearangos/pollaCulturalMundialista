import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './servicios/login-service.service';


@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private router: Router
        , private loginService: LoginService) { }


    // Se debe consumir el servicio de estaLogeado del backend que es el que crea una cookie    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.loginService.estaLogeado()) {
            return true;
        } else {
            this.router.navigate(['Login']);
            return false;
        }
    }


}