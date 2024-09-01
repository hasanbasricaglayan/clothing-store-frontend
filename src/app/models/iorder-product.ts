import { IProduct } from "./iproduct"

export interface IOrderProduct {
	orderId?: number
	productId?: number
	product?: IProduct
	quantity?: number
	price?: number
}
