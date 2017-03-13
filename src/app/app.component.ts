import {Component} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    domain = document.location.hostname;

    title = 'app works!';
}
