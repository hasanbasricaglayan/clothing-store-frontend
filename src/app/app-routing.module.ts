import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesViewComponent } from './views/categories-view/categories-view.component';
import { ProductsViewComponent } from './views/products-view/products-view.component';

const routes: Routes = [
	{ path: "categories", component: CategoriesViewComponent },
	{ path: "products", component: ProductsViewComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
