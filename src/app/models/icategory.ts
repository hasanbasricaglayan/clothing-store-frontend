import { IProduct } from "./iproduct"

export interface ICategory {
	categoryId?: number
	name?: string
	products?: IProduct[]
}
