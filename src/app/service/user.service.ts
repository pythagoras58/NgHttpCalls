import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly  apiUrl:string = 'https://randomuser.me/api';

  constructor(private http:HttpClient, private userService:UserService) { }

  // fETCH USERS

  // FETCH USER BY UUID
}
