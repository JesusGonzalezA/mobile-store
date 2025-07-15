import React from "react"
import { useDetailTranslations } from "@app/detail/intl/useDetailTranslations"
import { ProductCard } from "@/components/organisms/product-card/ProductCard"
import { SimilarProduct } from "@app/detail/domain/SimilarProduct"
import { Heading } from "@/components"
import styles from "./product-carousel.module.css"

type ProductCarouselProps = {
    products: SimilarProduct[]
}

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
    const t = useDetailTranslations()

    return <React.Fragment>
        <Heading as="h2" className={styles.title}>
				{t("similarProducts")}
			</Heading>
            
        <div className={styles.carousel__container}>
        <ul className={styles.carousel__list}>
            {products.map((product) => 
            <li key={product.id} className={styles.carousel__item}>
            <ProductCard 
                
                description={product.brand}
                title={product.name}
                price={product.basePrice} 
                imgUrl={product.imageUrl} 
                url={`/product?id=${product.id}`}            
            />
            </li>
        )}
        </ul>
        </div>
        
    </React.Fragment>
}