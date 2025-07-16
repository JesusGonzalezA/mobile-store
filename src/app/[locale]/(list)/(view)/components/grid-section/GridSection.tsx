"use client"

import { useContext } from "react"
import { useLocale } from "use-intl"
import { ProductListContext } from "@app/list/state/ProductListContext"
import { useListTranslation } from "@app/list/intl/useListTranslations"
import { ProductCard } from "@/components/organisms/product-card/ProductCard"
import styles from "./grid-section.module.css"

export const GridSection = () => {
	const { data } = useContext(ProductListContext)
	const t = useListTranslation()
	const locale = useLocale()

	return (
		<section className={styles["grid-section"]} aria-label={t("grid.label")}>
			<ul className={styles.grid}>
				{data?.map((product, index) => (
					<li key={`${index}_${product.id}`}>
						<ProductCard
							description={product.brand}
							imgUrl={product.imageUrl}
							title={product.name}
							price={product.basePrice}
							url={`/${locale}/product?id=${product.id}`}
						/>
					</li>
				))}
			</ul>
		</section>
	)
}
