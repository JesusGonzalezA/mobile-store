import { useEffect } from "react"
import { CartProduct } from "@app/cart/domain/CartProduct"
import { useStorage } from "@/shared/services/storage/hooks/useStorage"

export const useSaveCartInStorage = (state: CartProduct[]) => {
	const storage = useStorage<CartProduct[]>()

	useEffect(() => {
		const saveCart = async () => {
			await storage?.set("cart", state)
		}

		saveCart()
	}, [state])
}
