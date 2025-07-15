"use client"

import { useContext } from "react"
import { useLocale } from "use-intl"
import { ProductListContext } from "@app/list/state/ProductListContext"
import { useListTranslation } from "@app/list/intl/useListTranslations"
import { ProductCard } from "@app/list/(view)/components/grid-section/product-card/ProductCard"
import { Container } from "@/components"
import styles from "./grid-section.module.css"

export const GridSection = () => {
	const { data } = useContext(ProductListContext)
	const t = useListTranslation()
	const locale = useLocale()

	return (
		<Container>
			<section className={styles["grid-section"]} aria-label={t("grid.label")}>
				{data?.map((product, index) => (
					<ProductCard
						key={`${index}_${product.id}`}
						description={product.brand}
						imgUrl={product.imageUrl}
						title={product.name}
						price={product.basePrice}
						url={`/${locale}/product?id=${product.id}`}
					/>
				))}
			</section>
		</Container>
	)
}
