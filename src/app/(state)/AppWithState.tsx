"use client"

import { PropsWithChildren, useReducer, useState } from "react"
import { ReturnLinkStateContext } from "./return-link/ReturnLinkStateContext"
import { CartStateContext } from "./cart/CartStateContext"

import { useInitCartFromStorage } from "./cart/usecases/useInitCartFromStorage"
import { useSaveCartInStorage } from "./cart/usecases/useSaveCartInStorage"
import { cartReducer } from "./cart/cartReducer"

export const AppWithState = ({ children }: PropsWithChildren) => {
	const [hasReturn, setHasReturn] = useState<boolean>(false)
	const [state, dispatch] = useReducer(cartReducer, [])

	useInitCartFromStorage(dispatch)
	useSaveCartInStorage(state)

	return (
		<ReturnLinkStateContext
			value={{
				hasReturn,
				setHasReturn,
			}}
		>
			<CartStateContext
				value={{
					state,
					dispatch,
				}}
			>
				{children}
			</CartStateContext>
		</ReturnLinkStateContext>
	)
}
