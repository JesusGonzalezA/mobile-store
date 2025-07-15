import { PropsWithChildren } from "react"
import styles from "./footer.module.css"

export const Footer = ({ children }: PropsWithChildren) => {
	return <footer className={styles.footer}>{children}</footer>
}
