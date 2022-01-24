import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'landing', component:LandingPageComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
