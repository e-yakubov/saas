import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 import { WorkerComponent } from './worker.component';

const routes: Routes = [
    { path: '', component: WorkerComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);