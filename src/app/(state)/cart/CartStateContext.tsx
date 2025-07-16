import { createContext } from "react"
import { CartState } from "./CartState"

export const CartStateContext = createContext<CartState>({
	state: [],
	dispatch: () => [],
})
