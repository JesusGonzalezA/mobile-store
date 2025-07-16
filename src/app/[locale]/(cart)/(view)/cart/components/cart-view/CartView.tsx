import { useContext } from "react"
import { useCartTranslations } from "@app/cart/intl/useCartTranslations"
import { CartStateContext } from "@/app/(state)/cart/CartStateContext"
import { Button, Container, Heading, P } from "@/components"
import styles from "./cart-view.module.css"
import { CartProduct } from "../cart-product/CartProduct"
import Link from "next/link"
import { useLocale } from "next-intl"

export const CartView = () => {
	const t = useCartTranslations()
	const locale = useLocale()
	const { state } = useContext(CartStateContext)

	return (
		<div className={styles.cart__view__wrapper_fw}>
			<Heading as="h1" className={styles.cart__view__title}>
				{t("count", { count: state.length })}
			</Heading>

			<ul>
				{state.map((item, index) => {
					return (
						<li key={`${index}_${item.id}`}>
							<CartProduct product={item} />
						</li>
					)
				})}
			</ul>
			<Container className={styles.cart__view__cta__container}>
				<div className={styles.cart__view__cta_float}>
					<div className={styles.cart__view__continue_fw}>
						<Link
							href={`/${locale}`}
							className={styles.cart__view_continue__button}
						>
							{t("continue")}
						</Link>
					</div>

					{state.length > 0 && (
						<div className={styles.cart__view__cta_pay_horizontal}>
							<P>
								{t("total", {
									total: state
										.reduce((acc, item) => acc + item.basePrice, 0)
										.toFixed(2),
								})}
							</P>
							<Button uppercase>{t("pay")}</Button>
						</div>
					)}
				</div>
			</Container>
		</div>
	)
}
