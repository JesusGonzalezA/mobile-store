import { useState } from "react"
import { ColorOption } from "@app/detail/domain/ColorOption"
import { StorageOption } from "@app/detail/domain/StorageOption"
import { useDetailTranslations } from "@app/detail/intl/useDetailTranslations"
import { ColorRadioButton } from "./color-radio-button/ColorRadioButton"
import { StorageRadioButton } from "./storage-radio-button/StorageRadioButton"
import { Heading, P } from "@/components"
import Image from "next/image"

type ProductInfoProps = {
    title: string
    basePrice: number
    storageOptions: StorageOption[]
    colorOptions: ColorOption[]
}

export const ProductInfo = ({ title, basePrice, storageOptions, colorOptions }: ProductInfoProps) => {
    const [price, setPrice] = useState<number>(basePrice)
    const [storage, setStorage] = useState<StorageOption>();
    const [color, setColor] = useState<ColorOption>(colorOptions[0]);
    const t = useDetailTranslations()

    return (
        <section>
            <Image
                alt=""
                src={color.imageUrl}
                width={19.5 * 16}
                height={16 * 16}
            />

            <div>
                <Heading as="h2">{title}</Heading>
                <P>{t('price', { price })}</P>

                <form>
                    <label>
                        {t('color')}

                        {colorOptions.map((option) => (
                            <ColorRadioButton
                                key={option.name}
                                checked={option === color}
                                name={option.name}
                                label={option.name}
                                value={option.hexCode}
                                onChange={() => setColor(option)}
                            />
                        ))}
                    </label>

                    <label>
                        {t('storage')}

                        {storageOptions.map((option) => (
                            <StorageRadioButton
                                key={option.capacity}
                                checked={option === storage}
                                onChange={() => setStorage(option)}
                                label={option.capacity}
                                name={option.capacity}
                                value={option.capacity}
                            />
                        ))}
                    </label>

                    <button>{t('add')}</button>
                </form>
            </div>
        </section >
    )
}