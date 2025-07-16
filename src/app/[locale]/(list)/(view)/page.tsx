"use client"

import React from "react"
import { ProductListWrapper } from "@app/list/(view)/ProductList"
import { useBackLink } from "../../(state)/useBackLink"

const Page = () => {
	useBackLink(false)

	return <ProductListWrapper />
}

export default Page
