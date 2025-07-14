import Link from "next/link"
import { Heading, P } from "@/components/text"
import { useListTranslation } from "@app/list/intl/useListTranslations"
import styles from './product-card.module.css'
import visuallyHiddenStyles from '@/components/styles/visually-hidden.module.css'

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
                    <P className={visuallyHiddenStyles["visually-hidden"]}>
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