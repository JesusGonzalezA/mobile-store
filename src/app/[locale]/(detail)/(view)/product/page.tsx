"use client"

import React from "react"
import dynamic from "next/dynamic"
import { useBackLink } from "@/app/[locale]/(state)/useBackLink"

const ProductDetailPageNoSSR = dynamic(() => import("./ProductDetail"), {
	ssr: false,
})

export default function Page() {
	useBackLink(true)
	
	return <ProductDetailPageNoSSR />
}
