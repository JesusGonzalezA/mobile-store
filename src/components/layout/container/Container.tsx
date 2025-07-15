import React from "react"
import styles from "./container.module.css"

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
	centered?: boolean
}

export const Container: React.FC<ContainerProps> = ({
	children,
	centered,
	...rest
}) => {
	const restClassName = rest.className || ""
	const centeredClassName = centered ? styles.centered : ""

	return (
		<div
			{...rest}
			className={`${styles.container} ${centeredClassName} ${restClassName}`}
		>
			{children}
		</div>
	)
}
