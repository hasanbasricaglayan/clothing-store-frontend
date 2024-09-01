import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IOrder } from 'src/app/models/iorder';
import { OrderService } from './order.service';

@Injectable({
	providedIn: 'root'
})
export class OrderStoreService {
	private orders$$ = new BehaviorSubject<IOrder[]>([])
	readonly orders$ = this.orders$$.asObservable()
	private orders: IOrder[] = []

	constructor(private orderService: OrderService) { }

	getOrders(): Observable<IOrder[]> {
		return this.orderService.getAll().pipe(
			tap((orders) => {
				this.orders = orders
				this.orders$$.next([...this.orders])
			})
		)
	}

	addOrder(order: IOrder): Observable<IOrder> {
		return this.orderService.add(order).pipe(
			tap((order) => {
				this.orders = [...this.orders, order]
				this.orders$$.next([...this.orders])
			})
		)
	}

	editOrder(orderId: number, order: IOrder): Observable<IOrder> {
		return this.orderService.edit(orderId, order).pipe(
			tap((order) => {
				this.orders = this.orders.map(o => o.orderId === order.orderId ? order : o)
				this.orders$$.next([...this.orders])
			})
		)
	}

	deleteOrder(orderId: number): Observable<Object> {
		return this.orderService.delete(orderId).pipe(
			tap(() => {
				this.orders = this.orders.filter(order => order.orderId !== orderId)
				this.orders$$.next([...this.orders])
			})
		)
	}
}
