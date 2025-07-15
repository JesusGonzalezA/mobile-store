import React from "react"
import styles from "./container.module.css"

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>

export const Container: React.FC<ContainerProps> = ({ children, ...rest }) => {
    const restClassName = rest.className || ""
    return (
        <div {...rest} className={`${styles.container} ${restClassName}`}>
            {children}
        </div>
    )
}
