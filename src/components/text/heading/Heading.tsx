import React from "react"
import styles from "./heading.module.css"

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	uppercase?: boolean
}
export const Heading: React.FC<HeadingProps> = ({
	children,
	as,
	uppercase,
	...rest
}) => {
	const Tag = as || "h1"
	const uppercaseClass = uppercase ? styles.uppercase : ""
	const restClassName = rest.className || ""
	return (
		<Tag
			{...rest}
			className={`${styles.heading} ${uppercaseClass} ${restClassName}`}
		>
			{children}
		</Tag>
	)
}
