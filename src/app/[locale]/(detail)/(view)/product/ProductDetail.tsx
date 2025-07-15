"use client"

import { notFound, useSearchParams } from "next/navigation"
import { useGetProduct } from "@app/detail/usecases/useGetProduct"

const ProductDetail = () => {
	const searchParams = useSearchParams()
	const productId = searchParams.get("id")

	if (!productId) {
		notFound()
	}

	const { data, isLoading } = useGetProduct({ id: productId })

	if (isLoading) {
		return <div>Loading...</div>
	}

	return <div>{JSON.stringify(data, null, 2)}</div>
}

export default ProductDetail
