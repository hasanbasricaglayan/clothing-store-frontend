import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesViewComponent } from './views/categories-view/categories-view.component';
import { ProductsViewComponent } from './views/products-view/products-view.component';

@NgModule({
	declarations: [
		AppComponent,
		CategoriesViewComponent,
		ProductsViewComponent
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
