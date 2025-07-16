import { useContext, useState } from "react"
import Image from "next/image"
import { CartStateContext } from "@/app/(state)/cart/CartStateContext"
import { CartAction } from "@/app/(state)/cart/CartAction"
import { ColorOption } from "@app/detail/domain/ColorOption"
import { StorageOption } from "@app/detail/domain/StorageOption"
import { useDetailTranslations } from "@app/detail/intl/useDetailTranslations"
import { StorageRadioButton } from "./storage-radio-button/StorageRadioButton"
import { ColorRadioButton } from "./color-radio-button/ColorRadioButton"
import { Heading, P, Button } from "@/components"
import styles from "./product-info.module.css"

type ProductInfoProps = {
	title: string
	basePrice: number
	brand: string
	storageOptions: StorageOption[]
	colorOptions: ColorOption[]
	id: string
	name: string
}

export const ProductInfo = ({
	title,
	basePrice,
	storageOptions,
	colorOptions,
	brand,
	name,
	id,
}: ProductInfoProps) => {
	const t = useDetailTranslations()
	const { dispatch } = useContext(CartStateContext)
	const [price, setPrice] = useState<number>(basePrice)
	const [imageUrl, setImageUrl] = useState<string>(colorOptions[0].imageUrl)
	const [storage, setStorage] = useState<StorageOption>()
	const [color, setColor] = useState<ColorOption>()
	const isDisabled = !storage || !color

	const handleAdd = () => {
		dispatch({
			type: CartAction.ADD,
			payload: {
				id,
				imageUrl,
				name,
				brand,
				basePrice: price,
				capacity: storage ? storage.capacity : "",
				color: color ? color.name : "",
			},
		})
	}

	const handleColorChange = (value: string) => {
		const selectedColor = colorOptions.find((option) => option.name === value)

		if (!selectedColor) return

		setColor(selectedColor)
		setImageUrl(selectedColor.imageUrl)
	}

	const handleStorageChange = (option: string) => {
		const selectedOption = storageOptions.find((opt) => opt.capacity === option)

		if (!selectedOption) return

		setStorage(selectedOption)
		setPrice(selectedOption.price)
	}

	return (
		<section className={styles["section__flex_space-between"]}>
			<div className={styles["image-container"]}>
				<Image alt="" src={imageUrl} width={19.5 * 16} height={16 * 16} />
			</div>

			<div className={styles.form}>
				<div className={styles["title-wrapper"]}>
					<Heading as="h2" className={styles.title}>
						{title}
					</Heading>
					<P className={styles.price}>{t("price", { price })}</P>
				</div>

				<div className={styles["selectors-wrapper"]}>
					<div className={styles.selectors}>
						<label>
							{t("storage")}

							<div className={styles.options}>
								{storageOptions.map((option) => (
									<StorageRadioButton
										key={option.capacity}
										checked={option === storage}
										onChange={handleStorageChange}
										label={option.capacity}
										name={"capacity"}
										value={option.capacity}
									/>
								))}
							</div>
						</label>

						<label>
							{t("color")}

							<div className={styles.options} style={{ gap: "1rem" }}>
								{colorOptions.map((option) => (
									<ColorRadioButton
										key={option.hexCode}
										checked={option === color}
										name={"color"}
										label={option.name}
										color={option.hexCode}
										value={option.name}
										onChange={handleColorChange}
									/>
								))}
							</div>
						</label>
					</div>

					<Button uppercase fw disabled={isDisabled} onClick={handleAdd}>
						{t("add")}
					</Button>
				</div>
			</div>
		</section>
	)
}
