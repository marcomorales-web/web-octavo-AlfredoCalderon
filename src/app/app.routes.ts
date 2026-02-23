import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component'; 
import { RegisterComponent } from './pages/auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LeyendasComponent } from './pages/leyendas/leyendas.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'leyendas', component: LeyendasComponent}
  
];