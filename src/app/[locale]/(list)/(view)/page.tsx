"use client"
import React from "react"
import { Header, Main } from "@/components"
import { AppNavBar } from "@/shared/navbar/AppNavBar"
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
		</React.Fragment>
	)
}

export default Page
