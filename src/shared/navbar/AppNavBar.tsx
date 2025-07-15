import { useLocale } from "next-intl"
import { CartIconWrapper } from "@app/cart/(view)/components/CartIcon"
import { NavBar } from "@/components"

export const AppNavBar = ({ hasReturn }: { hasReturn: boolean }) => {
	const locale = useLocale

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
