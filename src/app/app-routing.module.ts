import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./component/users/users.component";
import {UserdetailsComponent} from "./component/userdetails/userdetails.component";

const routes: Routes = [
  {path: 'users', component:UsersComponent},
  {path: 'user/:uuid', component:UserdetailsComponent},
  {path: '**', redirectTo: 'users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
