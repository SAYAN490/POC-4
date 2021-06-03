import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { OrderComponent } from './components/order/order.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes= [
    {path: '', component: HomepageComponent},
    {path: 'order', component: OrderSuccessComponent},
    {path: 'login', component: LoginComponent},
    {path: '404', component: PageNotFoundComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'myorder', component:OrderComponent},
    { path: 'profile', component:ProfileComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }