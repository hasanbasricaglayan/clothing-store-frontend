import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private baseURL: string = "https://localhost:7138/api/Products"

	constructor(private http: HttpClient) { }

	getAll(): Observable<IProduct[]> {
		const URL = `${this.baseURL}`

		return this.http.get<IProduct[]>(URL)
	}

	getAllByCategory(categoryId: number): Observable<IProduct[]> {
		const URL = `${this.baseURL}/category=${categoryId}`

		return this.http.get<IProduct[]>(URL)
	}

	getById(productId: number): Observable<IProduct> {
		const URL = `${this.baseURL}/${productId}`

		return this.http.get<IProduct>(URL)
	}

	add(product: IProduct): Observable<IProduct> {
		const URL = `${this.baseURL}`

		const options = {
			headers: new HttpHeaders({
				'content-type': 'application/json'
			})
		}

		return this.http.post<IProduct>(
			URL,
			JSON.stringify({
				CategoryId: product.categoryId,
				Brand: product.brand,
				Name: product.name,
				Color: product.color,
				Size: product.size,
				Price: product.price,
				Description: product.description,
				QuantityInStock: product.quantityInStock,
				ImageURL: product.imageURL
			}),
			options)
	}

	edit(productId: number, product: IProduct): Observable<IProduct> {
		const URL = `${this.baseURL}/${productId}`

		const options = {
			headers: new HttpHeaders({
				'content-type': 'application/json'
			})
		}

		return this.http.put<IProduct>(
			URL,
			JSON.stringify({
				CategoryId: product.categoryId,
				Brand: product.brand,
				Name: product.name,
				Color: product.color,
				Size: product.size,
				Price: product.price,
				Description: product.description,
				QuantityInStock: product.quantityInStock,
				ImageURL: product.imageURL
			}),
			options)
	}

	delete(productId: number): Observable<Object> {
		const URL = `${this.baseURL}/${productId}`

		const options = {
			headers: new HttpHeaders({
				'content-type': 'application/json'
			})
		}

		return this.http.delete(URL, options)
	}
}
