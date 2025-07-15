"use client"

import React from "react"
import { Header, Main, Footer } from "@/components"
import { AppNavBar } from "@/components/organisms/navbar/AppNavBar"
import { ProductListWrapper } from "@app/list/(view)/ProductList"

const Page = () => {
	return (
		<React.Fragment>
			<Header>
				<AppNavBar hasReturn={false} />
			</Header>
			<Main>
				<ProductListWrapper />
			</Main>
			<Footer></Footer>
		</React.Fragment>
	)
}

export default Page
