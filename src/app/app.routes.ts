import { Routes } from '@angular/router';

import { HomeComponent } from './home/home';

import { ProductsComponent } from './products/products';

import { ContactComponent } from './contact/contact';

import { ProductDetailsComponent } from './product-details/product-details';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'products',
    component: ProductsComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'product/:id',
    component: ProductDetailsComponent
  }

];