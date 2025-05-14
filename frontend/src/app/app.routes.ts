import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) 
  },
  {
    path: 'blog',
    loadComponent: () => import('./blog/blog.component').then(m => m.BlogComponent)
  },
  {
    path: 'blog/:id',
    loadComponent: () => import('./blog-detail/blog-detail.component').then(m => m.BlogDetailComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];