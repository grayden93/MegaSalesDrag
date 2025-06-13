import { Routes } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';
import { Cart } from './pages/cart/cart';
import { Checkout } from './pages/checkout/checkout';
import { Pro } from './pages/pro/pro';
export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'cart', component: Cart },
  { path: 'checkout', component: Checkout },
  { path: 'pro', component: Pro }
];
