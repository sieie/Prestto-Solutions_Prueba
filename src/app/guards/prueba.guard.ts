import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginComponent: LoginComponent) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Si el usuario está logueado, permitir el acceso
    if (localStorage.getItem('currentUser')) {
      return true;
    }else {
    // Si el usuario no está logueado, redirigir a la página de login y muestra un alert
    this.router.navigate(['/login']);
    alert('La ruta de inicio está protegida con un guard')
    return false;
    }
  }
}

