import { Heading, P } from "@/components/text"
import styles from './product-card.module.css'
import Link from "next/link"
import { useListTranslation } from "@app/list/intl/useListTranslations"

type CardProps = {
    title: string
    description: string
    imgUrl: string
    price: number
    id: string
}

export const ProductCard = ({ title, description, imgUrl, price, id }: CardProps) => {
    const t = useListTranslation()

    return <Link className={styles.card} href={`/product/${id}`}>
        <div className={styles['card-footer']}>
            <div className={styles['card-information']}>
                <div className={styles.around}>
                    <Heading as="h2" className={styles.title}>{title}</Heading>
                    <P className={styles.price} aria-hidden="true">
                        {price}
                    </P>
                    <P className={styles["visually-hidden"]}>
                        {t("grid.price", { price })}
                    </P>
                </div>
                <P className={styles.description}>{description}</P>
            </div>
        </div>
        <div className={styles['img-wrapper']}>
            <img alt="" src={imgUrl} loading="lazy" />
        </div>
    </Link >
}