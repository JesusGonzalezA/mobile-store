import { useContext } from "react"
import Image from "next/image"
import { CartStateContext } from "@/app/(state)/cart/CartStateContext"
import { CartProduct as Product } from "@/app/[locale]/(cart)/domain/CartProduct"
import { GhostButton, Heading, P } from "@/components"
import { useCartTranslations } from "@/app/[locale]/(cart)/intl/useCartTranslations"
import visuallyHiddenStyles from "@/components/styles/visually-hidden.module.css"
import { CartAction } from "@/app/(state)/cart/CartAction"
import styles from "./cart-product.module.css"

export const CartProduct = ({ product }: { product: Product }) => {
	const t = useCartTranslations()
	const { dispatch } = useContext(CartStateContext)

	const handleRemove = () => {
		dispatch({
			type: CartAction.REMOVE,
			payload: product,
		})
	}

	return (
		<div className={styles.cart__product}>
			<Image
				src={product.imageUrl}
				alt={product.name}
				width={262}
				height={324}
			/>

			<div className={styles.cart__product__info}>
				<div>
					<Heading as="h2" uppercase>
						{product.name}
					</Heading>

					<div className={styles.cart__product__info__specs}>
						<P className={styles.light}>
							<span className={visuallyHiddenStyles["visually-hidden"]}>
								{t("capacity", { capacity: product.capacity })}
							</span>
							<span aria-hidden="true">{product.capacity}</span>
						</P>

						<hr></hr>

						<P className={styles.light}>
							<span className={visuallyHiddenStyles["visually-hidden"]}>
								{t("color", { color: product.color })}
							</span>
							<span aria-hidden="true">{product.color}</span>
						</P>
					</div>

					<P className={styles.cart__product__info__price}>
						<span className={visuallyHiddenStyles["visually-hidden"]}>
							{t("priceLabel", { price: product.basePrice })}
						</span>
						<span aria-hidden="true">
							{t("price", { price: product.basePrice })}
						</span>
					</P>
				</div>

				<GhostButton
					onClick={handleRemove}
					style={{
						color: "red",
						marginTop: "auto",
						textAlign: "left",
						paddingLeft: 0,
					}}
				>
					{t("remove")}
				</GhostButton>
			</div>
		</div>
	)
}
