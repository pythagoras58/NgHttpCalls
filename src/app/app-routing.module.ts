import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./component/users/users.component";
import {UserdetailsComponent} from "./component/userdetails/userdetails.component";
import {UserResolver} from "./service/user.resolver";

const routes: Routes = [
  {path: 'users', component:UsersComponent},
  {path: 'user/:uuid', component:UserdetailsComponent, resolve: {resolvedResponse : UserResolver}},
  {path: '**', redirectTo: 'users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
