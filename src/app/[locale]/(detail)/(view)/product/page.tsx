"use client"

import dynamic from "next/dynamic"
const ProductDetailPageNoSSR = dynamic(() => import("./ProductDetail"), {
	ssr: false,
})

export default function Page() {
	return (
		<>
			<ProductDetailPageNoSSR />
		</>
	)
}
