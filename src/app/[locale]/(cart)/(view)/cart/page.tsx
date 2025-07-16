"use client"

import React from "react"
import { useBackLink } from "@/app/(state)/return-link/useBackLink"
import { CartView } from "./components/cart-view/CartView"

const Page = () => {
	useBackLink(false)

	return <CartView />
}

export default Page
