import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersViewComponent } from './orders-view.component';

describe('OrdersViewComponent', () => {
	let component: OrdersViewComponent;
	let fixture: ComponentFixture<OrdersViewComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [OrdersViewComponent]
		});
		fixture = TestBed.createComponent(OrdersViewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
