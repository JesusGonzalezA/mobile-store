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

	return (
		<div
			className={styles.wrapper}
			style={{
				background: color,
				outlineOffset: "2px",
				outline: checked ? "solid 2px blue" : "transparent",
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
