import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from 'src/app/models/iorder';

@Injectable({
	providedIn: 'root'
})
export class OrderService {
	private baseURL: string = "https://localhost:7138/api/Orders"

	constructor(private http: HttpClient) { }

	getAll(): Observable<IOrder[]> {
		const URL = `${this.baseURL}`

		return this.http.get<IOrder[]>(URL)
	}

	getById(orderId: number): Observable<IOrder> {
		const URL = `${this.baseURL}/${orderId}`

		return this.http.get<IOrder>(URL)
	}

	add(order: IOrder): Observable<IOrder> {
		const URL = `${this.baseURL}`

		const options = {
			headers: new HttpHeaders({
				'content-type': 'application/json'
			})
		}

		return this.http.post<IOrder>(
			URL,
			JSON.stringify({
				UserId: order.userId,
				OrderDate: new Date().toISOString().split('T')[0],
				Status: order.status,
				Products: order.products
			}),
			options)
	}

	edit(orderId: number, order: IOrder): Observable<IOrder> {
		const URL = `${this.baseURL}/${orderId}`

		const options = {
			headers: new HttpHeaders({
				'content-type': 'application/json'
			})
		}

		return this.http.put<IOrder>(
			URL,
			JSON.stringify({
				UserId: order.userId,
				OrderDate: order.orderDate,
				Status: order.status
			}),
			options)
	}

	delete(orderId: number): Observable<Object> {
		const URL = `${this.baseURL}/${orderId}`

		const options = {
			headers: new HttpHeaders({
				'content-type': 'application/json'
			})
		}

		return this.http.delete(URL, options)
	}
}
