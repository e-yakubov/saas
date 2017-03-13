import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ActivatedRoute} from '@angular/router';

import {AuthComponent} from "./auth.component";

import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {RestoreComponent} from "./restore/restore.component";
import {routing} from "./auth.router";

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        AuthComponent,
        SigninComponent,
        SignupComponent,
        RestoreComponent,
    ],
    bootstrap: [AuthComponent]

})
export class AuthModule {

}
