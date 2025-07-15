import React, { useId } from "react"
import styles from "./storage-radio-button.module.css"

interface StorageRadioButtonProps {
	name: string
	label: string
	value: string
	checked: boolean
	onChange: (value: string) => void
}

export const StorageRadioButton: React.FC<StorageRadioButtonProps> = ({
	name,
	label,
	value,
	checked,
	onChange,
}) => {
	const id = useId()

	return (
		<div className={styles.wrapper}>
			<input
				type="radio"
				id={id}
				name={name}
				value={value}
				checked={checked}
				onChange={() => onChange(value)}
				className={styles.input}
			/>
			<label
				htmlFor={id}
				className={`${styles.label} ${checked ? styles.selected : ""}`}
			>
				{label}
			</label>
		</div>
	)
}
