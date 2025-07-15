"use client"

import { useSearchParams } from "next/navigation"

const ProductDetail = () => {
	const searchParams = useSearchParams()
	const productId = searchParams.get("id")

	return (
		<div>
			<h1>Product Detail</h1>
			<p>Product ID: {productId}</p>
		</div>
	)
}

export default ProductDetail
