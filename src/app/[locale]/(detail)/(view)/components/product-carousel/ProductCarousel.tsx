import React, { useRef } from "react"
import { useDetailTranslations } from "@app/detail/intl/useDetailTranslations"
import { ProductCard } from "@/components/organisms/product-card/ProductCard"
import { SimilarProduct } from "@app/detail/domain/SimilarProduct"
import { Button, Heading } from "@/components"
import styles from "./product-carousel.module.css"
import { useCarousel } from "./useCarousel"

type ProductCarouselProps = {
	products: SimilarProduct[]
}

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
	const t = useDetailTranslations()
	const carouselRef = useRef<HTMLDivElement>(null)
	const {
		canScrollLeft,
		canScrollRight,
		scrollLeft,
		scrollRight,
		checkScrollability,
	} = useCarousel(carouselRef)

	if (products.length === 0) {
		return null
	}

	return (
		<React.Fragment>
			<Heading as="h2" className={styles.title}>
				{t("similarProducts")}
			</Heading>

			<div className={styles.carousel__wrapper}>
				<div className={styles.carousel__buttons}>
					<Button
						className={`${styles.carousel__button} ${styles.carousel__button_left}`}
						onClick={scrollLeft}
						disabled={!canScrollLeft}
						aria-label={t("carousel.previous")}
					>
						<span aria-hidden="true">{"<"}</span>
					</Button>

					<Button
						className={`${styles.carousel__button} ${styles.carousel__button_right}`}
						onClick={scrollRight}
						disabled={!canScrollRight}
						aria-label={t("carousel.next")}
					>
						<span aria-hidden="true">{">"}</span>
					</Button>
				</div>
				<div
					ref={carouselRef}
					className={styles.carousel__container}
					onScroll={checkScrollability}
				>
					<ul className={styles.carousel__list}>
						{products.map((product) => (
							<li key={product.id} className={styles.carousel__item}>
								<ProductCard
									description={product.brand}
									title={product.name}
									price={product.basePrice}
									imgUrl={product.imageUrl}
									url={`/product?id=${product.id}`}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</React.Fragment>
	)
}
