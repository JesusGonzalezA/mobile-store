import { ActionDispatch, useEffect } from "react"
import { useStorage } from "@/shared/services/storage/hooks/useStorage"
import { CartProduct } from "@/app/[locale]/(cart)/domain/CartProduct"
import { CartAction } from "../CartAction"

export const useInitCartFromStorage = (
	dispatch: ActionDispatch<
		[
			action: {
				type: CartAction
				payload: unknown
			},
		]
	>,
) => {
	const storage = useStorage<CartProduct[]>()

	useEffect(() => {
		const initCart = async () => {
			const savedCart = await storage?.get("cart")

			if (savedCart) {
				dispatch({ type: CartAction.SET, payload: savedCart })
			}
		}

		initCart()
	}, [storage])
}
