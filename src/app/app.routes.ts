import { Routes } from '@angular/router';
import { Item } from './pages/item/item';
import { Home } from './pages/home/home';


export const routes: Routes = [
  { 
    path: '', 
    component: Home
  }, 
  {
    path: 'products',
    component: Item
  },
];