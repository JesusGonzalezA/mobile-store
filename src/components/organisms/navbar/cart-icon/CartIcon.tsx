import { useComponentTranslations } from "@/components/utils/intl/useComponentTranslations"
import styles from "./cart-icon.module.css"

export const CartIconWrapper = ({ cartLength }: { cartLength: number }) => {
	const t = useComponentTranslations()

	return (
		<div className={styles["cart-icon-wrapper"]}>
			{cartLength > 0 ? (
				<div>
					<CartIcon name={t("cart.items", { items: cartLength })} />
					{cartLength}
				</div>
			) : (
				<div>
					<CartIcon name={t("cart.empty", { count: 0 })} />
					{0}
				</div>
			)}
		</div>
	)
}

const CartIcon = ({ name }: { name: string }) => {
	return (
		<svg
			role="img"
			aria-label={name}
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.4706 1.32031H6.76471V5.08502H3V17.3203H15.2353V5.08502H11.4706V1.32031ZM10.5294 6.0262V8.37914H11.4706V6.0262H14.2941V16.3791H3.94118V6.0262H6.76471V8.37914H7.70588V6.0262H10.5294ZM10.5294 5.08502V2.26149H7.70588V5.08502H10.5294Z"
				fill="black"
			/>
		</svg>
	)
}
