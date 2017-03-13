import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";


const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'eager',
    //     pathMatch: 'full'
    // },

    {
        path: '',
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

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);