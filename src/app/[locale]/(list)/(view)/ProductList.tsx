import React, { useState } from "react"
import { useGetProducts } from "@app/list/usecases/useGetProducts"
import { ProductListEntity } from "@app/list/domain/ProductListEntity"
import { useListTranslation } from "@app/list/intl/useListTranslations"
import { FilterSection } from "@app/list/(view)/components/filter-section/FilterSection"
import { GridSection } from "@app/list/(view)/components/grid-section/GridSection"
import { ProductListContext } from "@app/list/state/ProductListContext"
import { CustomErrorBoundary } from "@/components/utils/CustomErrorBoundary"

const ProductList = () => {
	useGetProducts()

	return (
		<React.Fragment>
			<FilterSection />
			<GridSection />
		</React.Fragment>
	)
}

export const ProductListWrapper = () => {
	const [data, setData] = useState<ProductListEntity[]>([])
	const t = useListTranslation()

	return (
		<CustomErrorBoundary fallback={<p>{t("search.error")}</p>}>
			<ProductListContext value={{ data, setData: (data) => setData(data) }}>
				<ProductList />
			</ProductListContext>
		</CustomErrorBoundary>
	)
}
