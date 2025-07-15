import { useContext, useRef } from "react"
import { useDebouncedCallback } from "use-debounce"
import { useListTranslation } from "@app/list/intl/useListTranslations"
import { useQueryProducts } from "@app/list/usecases/useQueryProducts"
import { TelephoneListContext } from "@app/list/state/TelephoneListContext"
import { SearchInput, P, Container } from "@/components"
import styles from "./filter-section.module.css"

export const FilterSection = () => {
	const t = useListTranslation()
	const abortController = useRef<AbortController>(null)
	const { query } = useQueryProducts()
	const { data } = useContext(TelephoneListContext)

	const handleChange = useDebouncedCallback((value: string) => {
		if (abortController.current) {
			abortController.current.abort()
		}
		abortController.current = new AbortController()
		query({ search: value }, abortController.current?.signal)
	}, 300)

	return (
		<Container>
			<div className={styles.search}>
				<SearchInput
					name="search"
					label={t("search.placeholder")}
					clearLabel={t("search.clear")}
					onChange={handleChange}
				/>
				<P style={{ textTransform: "uppercase" }}>
					{t("search.results", { count: data.length })}
				</P>
			</div>
		</Container>
	)
}
