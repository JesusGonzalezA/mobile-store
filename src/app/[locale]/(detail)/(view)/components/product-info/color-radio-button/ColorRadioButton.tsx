import React, { useId } from "react"
import styles from "./color-radio-button.module.css"
import visuallyHiddenStyles from "@/components/styles/visually-hidden.module.css"

interface ColorRadioButtonProps {
	name: string
	label: string
	color: string
	value: string
	checked: boolean
	onChange: (value: string) => void
}

export const ColorRadioButton: React.FC<ColorRadioButtonProps> = ({
	name,
	label,
	color,
	value,
	checked,
	onChange,
}) => {
	const id = useId()
	const checkedStyle = checked ? styles.checked : ""

	return (
		<div
			className={`${styles.wrapper} ${checkedStyle}`}
			style={{
				background: color,
			}}
		>
			<label htmlFor={id} className={visuallyHiddenStyles["visually-hidden"]}>
				{label}
			</label>

			<input
				type="radio"
				id={id}
				name={name}
				value={value}
				checked={checked}
				onChange={() => {
					onChange(value)
				}}
				className={styles.input}
			/>
		</div>
	)
}
