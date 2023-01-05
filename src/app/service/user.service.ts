import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseInterface} from "../interfaces/Response.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly  apiUrl:string = 'https://randomuser.me/api';

  constructor(private http:HttpClient) { }

  // fETCH USERS
  getUsers(size : number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/?results=${size}`);
  }
  // FETCH USER BY UUID
  getUser(uuid : number = 1):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/?uuid=${uuid}`);
  }

  // process response in a structured way
  private processResponse(response:ResponseInterface):ResponseInterface{
    return {
      info:{...response.info},
      results : response.results.map((users:any)=>{})
    };
  }
}
