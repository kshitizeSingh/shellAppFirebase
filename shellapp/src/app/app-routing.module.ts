import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './service/auth.guard';
import {AuthService} from './service/auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  // { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
