import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUserComponent } from './about.user/about.user.component';
import { ContactComponent } from './contact/contact.component';
import { ContactSectionComponent } from './contact/contactSection.component';

const profilesRoutes: Routes = [
  {
    path: '',
    component: ContactSectionComponent,
    children:[
      {
        path: '',
        component: ContactComponent,
      },
      {
        path: ':username',
        component: AboutUserComponent,
      }
    ]
  }
];

export const profilesRouting: ModuleWithProviders = RouterModule.forChild(profilesRoutes);
