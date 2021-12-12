import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  //meth canactivate ne fait aucun controle car elle retourne toujours true 
  canActivate(
    //activatedRouteSnapshot:contient des informations comme les paramètres
    // envoyés pour la route demandéé
    // RouterStateSnapshot :contient des informations comme 
    //l’URL de la route demandee
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if (Boolean(localStorage.getItem('isConnected'))) {
        return true;
      }else{
     this.router.navigateByUrl('/login');
     return false;
      }

    }
    
  
  }
  

