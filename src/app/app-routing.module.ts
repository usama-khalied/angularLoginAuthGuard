import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StaticsComponent } from './statics/statics.component';

const routes: Routes = [

{ path: '' , component : LoginComponent  },
{path : 'home' , component : HomeComponent , canActivate : [AuthGuard]},
{path : 'statics' , component : StaticsComponent , canActivate : [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
