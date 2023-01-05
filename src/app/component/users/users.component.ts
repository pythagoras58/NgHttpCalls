import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  usersSubscription : Subscription | undefined;
  userSubscription : Subscription | undefined;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.usersSubscription =  this.userService.getUsers(15).subscribe(
      (res : any)=>{
        console.log(res)
      }
    );
  }

  ngOnDestroy(): void {
    this.usersSubscription?.unsubscribe();
  }

}
