import { ProductCard } from "./product-card/ProductCard"
import styles from "./grid-section.module.css"
import { useContext } from "react"
import { TelephoneListContext } from "@app/list/state/TelephoneListContext"
import { useListTranslation } from "@app/list/intl/useListTranslations"

export const GridSection = () => {
	const { data } = useContext(TelephoneListContext)
	const t = useListTranslation()

	return (
		<section className={styles["grid-section"]} aria-label={t("grid.label")}>
			{data?.map((product, index) => (
				<ProductCard
					key={`${index}_${product.id}`}
					description={product.brand}
					imgUrl={product.imageUrl}
					title={product.name}
					price={product.basePrice}
					id={product.id}
				/>
			))}
		</section>
	)
}
