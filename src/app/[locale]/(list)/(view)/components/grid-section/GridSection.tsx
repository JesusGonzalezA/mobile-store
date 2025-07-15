"use client"

import { useContext } from "react"
import { TelephoneListContext } from "@app/list/state/TelephoneListContext"
import { useListTranslation } from "@app/list/intl/useListTranslations"
import { ProductCard } from "@app/list/(view)/components/grid-section/product-card/ProductCard"
import styles from "./grid-section.module.css"
import { useLocale } from "use-intl"

export const GridSection = () => {
	const { data } = useContext(TelephoneListContext)
	const t = useListTranslation()
	const locale = useLocale()

	return (
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
	)
}
