"use client"

import { Suspense } from "react"
import { notFound, useSearchParams } from "next/navigation"

const ProductDetailContent = () => {
	const searchParams = useSearchParams()
	const id = searchParams.get("id") || ""

	if (!id) {
		notFound()
	}

	return (
		<div>
			<h1>Product Detail</h1>
			<p>Product ID: {id}</p>
			{/* Your product detail component here */}
		</div>
	)
}

const ProductDetail = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ProductDetailContent />
		</Suspense>
	)
}

export default ProductDetail
