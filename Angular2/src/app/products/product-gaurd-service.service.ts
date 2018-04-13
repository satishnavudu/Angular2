import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
@Injectable()
export class ProductGaurdServiceService implements CanActivate  {

  constructor(private _route:Router) { }
  canActivate(route:ActivatedRouteSnapshot): boolean { 
    let id=+route.url[1].path;
    if(id<1){
      alert('Invalid ID');
      this._route.navigate(['pagenotfound'])
      return false;
    }
    return true;
  }

}
