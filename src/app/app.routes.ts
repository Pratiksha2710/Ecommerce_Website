import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    {'path': 'home', 'title':'Home', component:HomeComponent}, 
    {'path': 'about', 'title':'About', component:AboutComponent}, 
    {'path': 'contact', 'title':'Contact', component:ContactComponent},
    {'path': 'products', 'title':'Products', component:ProductsComponent},
    {'path': 'service', 'title':'Services', component: ServicesComponent},
    {'path': 'login', 'title':'Login', component: LoginComponent},
    {'path': 'register', 'title':'Register', component: RegisterComponent},
    {'path': '**', component:PageNotFoundComponent}, 
    

     
];
