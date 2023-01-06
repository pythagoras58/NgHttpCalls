import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Subscription} from "rxjs";
import {ResponseInterface} from "../../interfaces/Response.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  usersSubscription : Subscription;

   response: ResponseInterface;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.usersSubscription =  this.userService.getUsers(15).subscribe(
      (res : any)=>{
        console.log(res)
        this.response = res;
      }
    );
  }

  ngOnDestroy(): void {
    this.usersSubscription?.unsubscribe();
  }

}
