import React from "react"

export const P: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
	children,
	...rest
}) => {
	return <p {...rest}>{children}</p>
}
