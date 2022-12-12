import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const Routes: Routes = [
  {path:'login',component: LoginComponent},
  {path: 'register/:name', component: RegisterComponent}
];

@NgModule({
  imports:[RouterModule.forChild(Routes),FormsModule],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
})
export class CustomerModule { }
