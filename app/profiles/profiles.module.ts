import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ContactComponent } from './contact/contact.component';
import { ContactSectionComponent } from './contact/contactSection.component';

import { AboutUserComponent } from './about.user/about.user.component';
import { profilesRouting } from './profiles.routing';
import { UserService } from './services/userService.service';


@NgModule({
  imports: [
    profilesRouting,
    CommonModule,
  ],
  declarations: [
    ContactSectionComponent,
    ContactComponent,
    AboutUserComponent,
  ],
  providers: [
    UserService,
  ]
})
export class ProfilesModule{}
