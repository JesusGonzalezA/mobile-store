import Link from "next/link"
import Image from "next/image"
import { Heading, P } from "@/components/text"
import visuallyHiddenStyles from "@/components/styles/visually-hidden.module.css"
import { useComponentTranslations } from "@/components/utils/intl/useComponentTranslations"
import styles from "./product-card.module.css"

type CardProps = {
	title: string
	description: string
	imgUrl: string
	price: number
	url: string
}

export const ProductCard = ({
	title,
	description,
	imgUrl,
	price,
	url,
}: CardProps) => {
	const t = useComponentTranslations()

	return (
		<Link className={styles.card} href={url}>
			<div className={styles["card-footer"]}>
				<div className={styles["card-information"]}>
					<div className={styles.around}>
						<Heading as="h2" className={styles.title}>
							{title}
						</Heading>
						<P className={styles.price} aria-hidden="true">
							{price}
						</P>
						<P className={visuallyHiddenStyles["visually-hidden"]}>
							{t("productCard.price", { price })}
						</P>
					</div>
					<P className={styles.description}>{description}</P>
				</div>
			</div>
			<div className={styles["img-wrapper"]}>
				<Image
					alt=""
					src={imgUrl}
					loading="lazy"
					width={19.5 * 16}
					height={16 * 16}
				/>
			</div>
		</Link>
	)
}
