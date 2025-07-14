import React from "react"
import styles from './heading.module.css'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}
export const Heading: React.FC<HeadingProps> = ({
    children,
    as,
    ...rest
}) => {
    const Tag = as || "h1"
    const restClassName = rest.className || "";
    return <Tag {...rest} className={`${styles.heading} ${restClassName}`}>{children}</Tag>
}
