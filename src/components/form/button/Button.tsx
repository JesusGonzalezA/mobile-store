import React from "react"
import styles from "./button.module.css"

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
	uppercase?: boolean
	disabled?: boolean
	inverted?: boolean
	fw?: boolean
}

export const Button: React.FC<ButtonProps> = ({
	children,
	uppercase,
	disabled,
	inverted,
	fw,
	...rest
}) => {
	const restClassName = rest.className || ""
	const fwClass = fw ? styles.fw : ""
	const invertedClass = inverted ? styles.inverted : ""
	const uppercaseClass = uppercase ? styles.uppercase : ""

	return (
		<button
			{...rest}
			className={`${styles.button} ${uppercaseClass} ${invertedClass} ${fwClass} ${restClassName}`}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export const GhostButton: React.FC<ButtonProps> = ({
	children,
	uppercase,
	disabled,
	...rest
}) => {
	const restClassName = rest.className || ""
	const uppercaseClass = uppercase ? styles.uppercase : ""

	return (
		<button
			{...rest}
			className={`${styles.ghostButton} ${uppercaseClass} ${restClassName}`}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
