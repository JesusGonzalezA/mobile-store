"use client"
import { useLocale } from "next-intl"
import { CartIconWrapper } from "@/components/organisms/navbar/cart-icon/CartIcon"
import { NavBar } from "@/components"

export const AppNavBar = ({ hasReturn }: { hasReturn: boolean }) => {
	const locale = useLocale()

	return (
		<NavBar
			baseUrl={`/${locale}`}
			items={[
				{
					href: "/cart",
					component: <CartIconWrapper />,
				},
			]}
			hasReturn={hasReturn}
		/>
	)
}
