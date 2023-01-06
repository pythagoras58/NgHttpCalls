import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {UserService} from "../../service/user.service";
import {Subscription} from "rxjs";
import {ResponseInterface} from "../../interfaces/Response.interface";

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit, OnDestroy {

  subscribedUserDetail : Subscription;

  response : ResponseInterface;
  mode : 'edit' | 'locked' = 'locked';

  buttonText : 'Save Changes' | 'Edit' = 'Edit';

  constructor(private activateRoute: ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    this.subscribedUserDetail = this.activateRoute.paramMap.subscribe((params : ParamMap)=>{
      this.userService.getUser(params.get('uuid')!).subscribe(
        (res : any)=>{
          this.response = res;
        }
      )
    })
  }

  ngOnDestroy(): void {
    this.subscribedUserDetail.unsubscribe();
  }

  changeMode(mode?: 'edit' | 'locked'):void{
    this.mode = this.mode === 'locked' ? 'edit' : 'locked';
    this.buttonText = this.buttonText === 'Edit' ? 'Save Changes' : 'Edit';

    if(mode === 'edit'){
      console.log('Updating user');
    }
  }

}
