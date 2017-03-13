import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [

    {
        path: '',
        loadChildren: './worker/worker.module#WorkerModule'
    },


    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });