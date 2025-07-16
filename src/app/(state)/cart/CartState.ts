import { CartProduct } from "@app/cart/domain/CartProduct"
import { CartAction } from "./CartAction"

export type CartState = {
	state: CartProduct[]
	dispatch: React.Dispatch<{
		type: CartAction
		payload: CartProduct
	}>
}
