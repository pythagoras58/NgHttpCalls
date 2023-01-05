import {CoordinateInterface} from "./Coordinate.interface";

export interface UserInterface {
    uuid:string;
    firstName:string;
    lastName:string;
    email:string;
    userName:string;
    gender:string;
    address:string;
    dateOfBirth:string;
    phone:string;
    imageUrl:string;
    coordinate: CoordinateInterface;
}


