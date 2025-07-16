import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { routing } from "@/shared/services/intl/routing"
import { AppNavBar } from "@/components/organisms/navbar/AppNavBar"
import { Container, Footer, Header, Main } from "@/components"
import "@/app/globals.css"
import { AppWithState } from "../(state)/AppWithState"

export const metadata: Metadata = {
	title: "Mobile Store",
	description: "Mobile store application. Browse and buy mobile devices.",
}

export function generateStaticParams() {
	return routing.locales.map((locale: string) => ({ locale }))
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

	setRequestLocale(locale)

	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider locale={locale}>
					<AppWithState>
						<Container>
							<Header>
								<AppNavBar />
							</Header>
							<Main>{children}</Main>
							<Footer></Footer>
						</Container>
					</AppWithState>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
