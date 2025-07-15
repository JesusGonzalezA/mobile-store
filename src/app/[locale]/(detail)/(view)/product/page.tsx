"use client"

import React from "react"
import dynamic from "next/dynamic"
import { useLocale } from "next-intl"
import { Header, NavBar, Main, Container } from "@/components"
import { CartIconWrapper } from "@app/cart/(view)/components/CartIcon"

const ProductDetailPageNoSSR = dynamic(() => import("./ProductDetail"), {
	ssr: false,
})

export default function Page() {
	const locale = useLocale()

	return (
		<React.Fragment>
			<Header>
				<NavBar
					baseUrl={`/${locale}`}
					items={[
						{
							href: "/cart",
							component: <CartIconWrapper />,
						},
					]}
					hasReturn={true}
				/>
			</Header>
			<Container centered={true}>
				<Main>
					<ProductDetailPageNoSSR />
				</Main>
			</Container>
		</React.Fragment>
	)
}
