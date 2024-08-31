import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct';
import { ProductStoreService } from 'src/app/services/product/product-store.service';

@Component({
	selector: 'app-products-view',
	templateUrl: './products-view.component.html',
	styleUrls: ['./products-view.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsViewComponent implements OnInit {
	products$: Observable<IProduct[]> | undefined;

	constructor(private productStoreService: ProductStoreService) { }

	deleteProduct(productId: number) {
		if (confirm("Etes-vous sûr de vouloir supprimer le produit ?"))
			this.productStoreService.deleteProduct(productId).subscribe()
	}

	ngOnInit(): void {
		this.products$ = this.productStoreService.products$
		this.productStoreService.getProducts().subscribe()
	}
}
