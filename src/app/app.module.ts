import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesViewComponent } from './views/categories-view/categories-view.component';
import { OrdersViewComponent } from './views/orders-view/orders-view.component';
import { ProductsViewComponent } from './views/products-view/products-view.component';

@NgModule({
	declarations: [
		AppComponent,
		CategoriesViewComponent,
		ProductsViewComponent,
		OrdersViewComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
