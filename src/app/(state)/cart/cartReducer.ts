import { CartProduct } from "@app/cart/domain/CartProduct"
import { v4 as uuidv4 } from "uuid"
import { CartAction } from "./CartAction"

export type CartReducer = (
	state: CartProduct[],
	action: {
		type: CartAction
		payload: unknown
	},
) => CartProduct[]

export const cartReducer: CartReducer = (state, action) => {
	switch (action.type) {
		case CartAction.ADD:
			return [
				...state,
				{ ...(action.payload as CartProduct), cartId: uuidv4() },
			]
		case CartAction.REMOVE:
			return state.filter(
				(product) => product.cartId !== (action.payload as CartProduct).cartId,
			)
		case CartAction.SET:
			return action.payload as CartProduct[]
	}
}
