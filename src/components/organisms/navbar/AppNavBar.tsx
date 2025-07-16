"use client"
import { useContext } from "react"
import { useLocale } from "next-intl"
import { CartIconWrapper } from "@/components/organisms/navbar/cart-icon/CartIcon"
import { ReturnLinkStateContext } from "@/app/(state)/return-link/ReturnLinkStateContext"
import { CartStateContext } from "@/app/(state)/cart/CartStateContext"
import { NavBar } from "@/components"

export const AppNavBar = () => {
	const locale = useLocale()
	const { hasReturn } = useContext(ReturnLinkStateContext)
	const { state: cartState } = useContext(CartStateContext)

	return (
		<NavBar
			baseUrl={`/${locale}`}
			items={[
				{
					href: `/${locale}/cart`,
					component: <CartIconWrapper cartLength={cartState.length} />,
				},
			]}
			hasReturn={hasReturn}
		/>
	)
}
