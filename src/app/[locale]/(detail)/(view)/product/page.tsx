"use client"

import React from "react"
import dynamic from "next/dynamic"
import { Header, Main, Container } from "@/components"
import { AppNavBar } from "@/shared/navbar/AppNavBar"

export const ProductDetailPageNoSSR = dynamic(() => import("./ProductDetail"), {
	ssr: false,
})

export default function Page() {
	return (
		<React.Fragment>
			<Header>
				<AppNavBar hasReturn={true} />
			</Header>
			<Container centered={true}>
				<Main>
					<ProductDetailPageNoSSR />
				</Main>
			</Container>
		</React.Fragment>
	)
}
