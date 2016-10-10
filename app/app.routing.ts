import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', loadChildren: 'app/profiles/profiles.module#ProfilesModule'},
  { path: 'about', component: AboutComponent },
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
