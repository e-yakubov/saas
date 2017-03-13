import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {RestoreComponent} from "./restore/restore.component";



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    RestoreComponent
  ]
})
export class AuthModule { }
