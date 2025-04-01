import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'posters',
    pathMatch: 'full'
  },
  {
    path: 'posters',
    loadComponent: () =>
      import('./posters/posters.component').then((m) => m.PostersComponent),
    title: 'Posters - The Poster Shop'
  },
  {
    path: 'posters/:id',
    loadComponent: () =>
      import('./poster-details/poster-details.component').then(
        (m) => m.PosterDetailsComponent
      )
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contacts - The Poster Shop'
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart.component').then((m) => m.CartComponent),
    title: 'Shopping Cart - The Poster Shop'
  }
];
