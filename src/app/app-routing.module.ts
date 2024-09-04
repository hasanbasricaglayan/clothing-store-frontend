import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesViewComponent } from './views/categories-view/categories-view.component';
import { OrdersViewComponent } from './views/orders-view/orders-view.component';
import { ProductsViewComponent } from './views/products-view/products-view.component';

const routes: Routes = [
	{ path: "categories", component: CategoriesViewComponent },
	{ path: "products", component: ProductsViewComponent },
	{ path: "orders", component: OrdersViewComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
