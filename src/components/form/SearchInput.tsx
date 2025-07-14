"use client"

import { useState } from "react"
import styles from "./search-input.module.css"

type SearchInputProps = {
	name: string
	label: string
	clearLabel: string
	onChange?: (value: string) => void
}

export const SearchInput = ({
	name,
	label,
	clearLabel,
	onChange,
}: SearchInputProps) => {
	const [value, setValue] = useState<string>("")

	const handleClear = () => {
		setValue("")
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
		onChange?.(event.target.value)
	}

	return (
		<search className={styles.search}>
			<input
				type="text"
				aria-label={label}
				placeholder={label}
				name={name}
				value={value}
				onChange={handleChange}
			/>
			<button
				className={styles.clear}
				aria-label={clearLabel}
				onClick={handleClear}
			>
				<ClearIcon />
			</button>
		</search>
	)
}

const ClearIcon = () => {
	return (
		<svg
			aria-hidden="true"
			width="20"
			height="19"
			viewBox="0 0 20 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_33901_1023)">
				<path
					d="M9.22887 9.36147L6 12.4289L6.62613 13.0237L9.855 9.95629L13.0839 13.0237L13.71 12.4289L10.4811 9.36147L13.71 6.29404L13.0839 5.69922L9.855 8.76664L6.62613 5.69922L6 6.29404L9.22887 9.36147Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_33901_1023">
					<rect width="20" height="19" fill="white" />
				</clipPath>
			</defs>
		</svg>
	)
}
