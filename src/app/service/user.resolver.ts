import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ResponseInterface} from "../interfaces/Response.interface";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<ResponseInterface> {

  constructor(private userService:UserService) {
  }
  resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<ResponseInterface> {
    return this.userService.getUser(route.paramMap.get('uuid')!);
  }
}
