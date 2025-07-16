"use client"

import { notFound, useSearchParams } from "next/navigation"
import { useGetProduct } from "@app/detail/usecases/useGetProduct"
import { ProductInfo } from "@app/detail/(view)/components/product-info/ProductInfo"
import { SpecificationsTable } from "@app/detail/(view)/components/specifications-table/SpecificationsTable"
import { ProductCarousel } from "@app/detail/(view)/components/product-carousel/ProductCarousel"
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

			<div>
				<SpecificationsTable
					specification={{
						...data.specs,
						brand: data.brand,
						name: data.name,
					}}
				/>
			</div>

			<div>
				<ProductCarousel products={data.similarProducts} />
			</div>
		</div>
	)
}

export default ProductDetail
