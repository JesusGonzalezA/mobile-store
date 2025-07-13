import { SearchInput } from "@/components"
import { useListTranslation } from "@app/list/intl/useListTranslations"
import styles from './filter-section.module.css'

export const FilterSection = () => {
    const t = useListTranslation()

    return <div className={styles.search}>
        <SearchInput name={t("search")} />
    </div>
}