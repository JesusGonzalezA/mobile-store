import React from "react"
import styles from "./p.module.css"

export const P: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
	children,
	...rest
}) => {
	const restClassName = rest.className || "";
	return <p {...rest} className={`${styles.p} ${restClassName}`}>{children}</p>
}
