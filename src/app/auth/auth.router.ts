import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthComponent} from "./auth.component";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {RestoreComponent} from "./restore/restore.component";

const routes: Routes = [

    {
        path: '',
        component: AuthComponent
    },
    {
        path: 'signin',
        component: SigninComponent
    },

    {
        path: 'signup',
        component: SignupComponent
    },

    {
        path: 'restore',
        component: RestoreComponent
    },




];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);