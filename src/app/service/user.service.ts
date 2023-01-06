import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ResponseInterface} from "../interfaces/Response.interface";
import {UserInterface} from "../interfaces/user.interface";
import {CoordinateInterface} from "../interfaces/Coordinate.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly  apiUrl:string = 'https://randomuser.me/api';

  constructor(private http:HttpClient) { }

  // fETCH USERS
  getUsers(size : number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/?results=${size}`).pipe(
      map(res=>this.processResponse(res))
    );
  }
  // FETCH USER BY UUID
  getUser(uuid : string):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/?uuid=${uuid}`).pipe(
      map(res=>this.processResponse(res))
    );
  }

  // process response in a structured way
  private processResponse(response:ResponseInterface):ResponseInterface{
    return {
      info:{...response.info},
      results : response.results.map((user:any)=>(<UserInterface>{
        uuid:user.login.uuid,
        firstName:user.name.first,
        lastName:user.name.last,
        email:user.email,
        userName:user.login.userName,
        gender:user.gender,
        address:`${user.location.street.number}  ${user.location.street.name} ${user.location.city}, ${user.location.country}`,
        dateOfBirth:user.dob.date,
        phone:user.phone,
        imageUrl:user.picture.medium,
        coordinate: {
          latitude : +user.location.coordinates.latitude,
          longitude : +user.location.coordinates.longitude
        }
      }))
    };
  }
}
