import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { routing } from "@/shared/intl/routing"
import { CartIconWrapper } from "@app/cart/components/CartIcon"
import { Header, NavBar, Main } from "@/components"
import "@/app/globals.css"

export const metadata: Metadata = {
	title: "Mobile Store",
	description: "Mobile store application. Browse and buy mobile devices.",
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: string }>
}>) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}
	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider locale={locale}>
					<Header>
						<NavBar
							items={[
								{
									href: "/cart",
									component: <CartIconWrapper />,
								},
							]}
						/>
					</Header>
					<Main>{children}</Main>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
