import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('AuthGuard: canActivate');

    let permiso = true; //TODO crear servicio para login
    if ( !permiso ){
      //enviar a LoginComponent
      alert('sin permisos');
    }  
    return permiso;
  }

}
