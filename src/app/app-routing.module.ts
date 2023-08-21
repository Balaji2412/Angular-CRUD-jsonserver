import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './completed/completed.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"completed",component:CompletedComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
