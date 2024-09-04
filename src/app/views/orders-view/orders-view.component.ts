import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from 'src/app/models/iorder';
import { OrderStoreService } from 'src/app/services/order/order-store.service';

@Component({
	selector: 'app-orders-view',
	templateUrl: './orders-view.component.html',
	styleUrls: ['./orders-view.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersViewComponent implements OnInit {
	orders$: Observable<IOrder[]> | undefined;

	constructor(private orderStoreService: OrderStoreService) { }

	deleteOrder(orderId: number) {
		if (confirm("Etes-vous sûr de vouloir supprimer la commande ?"))
			this.orderStoreService.deleteOrder(orderId).subscribe()
	}

	ngOnInit(): void {
		this.orders$ = this.orderStoreService.orders$
		this.orderStoreService.getOrders().subscribe()
	}
}
