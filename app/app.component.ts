import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@Component({
    selector: 'my-app',
    templateUrl: '../../app/app.component.html',
    styles: [`
        .active {
            color: red;
        }`]
})
export class AppComponent { }
