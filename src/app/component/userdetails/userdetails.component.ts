import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UserService} from "../../service/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit, OnDestroy {

  subscribedUserDetail : Subscription;

  constructor(private activateRoute: ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    this.subscribedUserDetail = this.activateRoute.paramMap.subscribe((params : ParamMap)=>{
      this.userService.getUser(+params.get('uuid')!).subscribe(
        (response : any)=>{
          console.log(response);
        }
      )
    })
  }

  ngOnDestroy(): void {
  }

}
