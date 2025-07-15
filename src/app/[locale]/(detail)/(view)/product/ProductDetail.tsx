"use client"

import { notFound, useSearchParams } from "next/navigation"
import { useGetProduct } from "@app/detail/usecases/useGetProduct"
import { ProductInfo } from "@app/detail/(view)/components/ProductInfo"
import styles from "./product-detail.module.css"

const ProductDetail = () => {
	const searchParams = useSearchParams()
	const productId = searchParams.get("id")

	if (!productId) {
		notFound()
	}

	const { data, isLoading } = useGetProduct({ id: productId })

	if (isLoading || !data) {
		return <div>Loading...</div>
	}

	return (
		<div className={styles.container}>
			<ProductInfo
				basePrice={data.basePrice}
				colorOptions={data.colorOptions}
				storageOptions={data.storageOptions}
				title={data.name}
			/>
		</div>
	)
}

export default ProductDetail
