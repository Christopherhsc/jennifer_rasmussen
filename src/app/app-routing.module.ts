// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { HomeComponent } from './landing-page/components/home/home.component';
import { ProfileComponent } from './consumers/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        outlet: 'modal', // This needs to match the outlet name used in your routerLink
      },
      {
        path: 'profile',
        component: ProfileComponent,
        outlet: 'modal', // Ensure this matches the outlet name used
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
