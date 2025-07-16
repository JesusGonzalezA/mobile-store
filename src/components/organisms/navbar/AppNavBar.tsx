"use client"
import { useContext } from "react"
import { useLocale } from "next-intl"
import { CartIconWrapper } from "@/components/organisms/navbar/cart-icon/CartIcon"
import { StateContext } from "@/app/[locale]/(state)/StateContext"
import { NavBar } from "@/components"

export const AppNavBar = () => {
	const locale = useLocale()
	const context = useContext(StateContext)

	return (
		<NavBar
			baseUrl={`/${locale}`}
			items={[
				{
					href: "/cart",
					component: <CartIconWrapper />,
				},
			]}
			hasReturn={context.hasReturn}
		/>
	)
}
