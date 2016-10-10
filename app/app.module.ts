import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRouting} from './app.routing';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';




@NgModule({
  imports: [ BrowserModule, appRouting, Ng2BootstrapModule ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  providers: [  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
