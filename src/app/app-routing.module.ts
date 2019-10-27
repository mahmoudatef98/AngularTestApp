import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './components/product/product.component';
import {MyOrdersComponent} from './components/my-orders/my-orders.component';
import {AdminProductsComponent} from './components/admin/admin-products/admin-products.component';
import {AdminOrderComponent} from './components/admin/admin-order/admin-order.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'products' , component: ProductComponent } ,
  { path: 'orders' , component: MyOrdersComponent } ,
  { path: 'admin/products' , component: AdminProductsComponent } ,
  { path: 'admin/orders' , component: AdminOrderComponent } ,
  { path: 'shopping-cart' , component: ShoppingCartComponent } ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
