import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {routing} from './worker.router';

import {WorkerComponent} from "./worker.component";

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        WorkerComponent
    ],

    bootstrap: [WorkerComponent]

})
export class WorkerModule {

}

