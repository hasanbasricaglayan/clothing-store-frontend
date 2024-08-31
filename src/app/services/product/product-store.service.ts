import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from './product.service';

@Injectable({
	providedIn: 'root'
})
export class ProductStoreService {
	private products$$ = new BehaviorSubject<IProduct[]>([])
	readonly products$ = this.products$$.asObservable()
	private products: IProduct[] = []

	constructor(private productService: ProductService) { }

	getProducts(): Observable<IProduct[]> {
		return this.productService.getAll().pipe(
			tap((products) => {
				this.products = products
				this.products$$.next([...this.products])
			})
		)
	}

	addProduct(product: IProduct): Observable<IProduct> {
		return this.productService.add(product).pipe(
			tap((product) => {
				this.products = [...this.products, product]
				this.products$$.next([...this.products])
			})
		)
	}

	editProduct(productId: number, product: IProduct): Observable<IProduct> {
		return this.productService.edit(productId, product).pipe(
			tap((product) => {
				this.products = this.products.map(p => p.productId === product.productId ? product : p)
				this.products$$.next([...this.products])
			})
		)
	}

	deleteProduct(productId: number): Observable<Object> {
		return this.productService.delete(productId).pipe(
			tap(() => {
				this.products = this.products.filter(product => product.productId !== productId)
				this.products$$.next([...this.products])
			})
		)
	}
}
