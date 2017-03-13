import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'eager',
    //     pathMatch: 'full'
    // },

    {
        path: '/',
        loadChildren: 'worker/worker.module#WorkerModule'
    },

    {
        path: 'auth/',
        loadChildren: 'worker/auth.module#AuthModule'
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);