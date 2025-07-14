"use client"
import React, { useState } from "react"
import { useGetProducts } from "@app/list/usecases/useGetProducts"
import { TelephoneListContext } from "@app/list/state/TelephoneListContext"
import { ProductListEntity } from "@app/list/domain/ProductListEntity"
import { FilterSection } from "@app/list/components/filter-section/FilterSection"
import { useListTranslation } from "@app/list/intl/useListTranslations"
import { CustomErrorBoundary } from "@/components/utils/CustomErrorBoundary"

const TelephoneList = () => {
	useGetProducts()

	return (
		<React.Fragment>
			<FilterSection />
		</React.Fragment>
	)
}

const TelephoneListWrapper = () => {
	const [data, setData] = useState<ProductListEntity[]>([])
	const t = useListTranslation()

	return (
		<CustomErrorBoundary fallback={<p>{t("search.error")}</p>}>
			<TelephoneListContext value={{ data, setData: (data) => setData(data) }}>
				<TelephoneList />
			</TelephoneListContext>
		</CustomErrorBoundary>
	)
}

export default TelephoneListWrapper
