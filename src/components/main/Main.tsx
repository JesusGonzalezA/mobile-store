import styles from './main.module.css'

export const Main = ({ children }: React.PropsWithChildren) => {
	return <main className={styles.main}>{children}</main>
}
