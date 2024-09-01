import { IOrderProduct } from "./iorder-product"

export interface IOrder {
	orderId?: number
	userId?: number
	orderDate?: Date
	status?: string
	products?: IOrderProduct[]
}
