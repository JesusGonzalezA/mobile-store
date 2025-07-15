"use client"
import React, { useState } from "react"
import { useGetProducts } from "@app/list/usecases/useGetProducts"
import { TelephoneListContext } from "@app/list/state/TelephoneListContext"
import { ProductListEntity } from "@app/list/domain/ProductListEntity"
import { useListTranslation } from "@app/list/intl/useListTranslations"
import { CustomErrorBoundary } from "@/components/utils/CustomErrorBoundary"
import { FilterSection } from "@/app/[locale]/(list)/(view)/components/filter-section/FilterSection"
import { GridSection } from "@/app/[locale]/(list)/(view)/components/grid-section/GridSection"
import { Header, Main } from "@/components"
import { AppNavBar } from "@/shared/navbar/AppNavBar"

const TelephoneList = () => {
	useGetProducts()

	return (
		<React.Fragment>
			<FilterSection />
			<GridSection />
		</React.Fragment>
	)
}

export const TelephoneListWrapper = () => {
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

const Page = () => {
	return (
		<React.Fragment>
			<Header>
				<AppNavBar hasReturn={false} />
			</Header>
			<Main>
				<TelephoneListWrapper />
			</Main>
		</React.Fragment>
	)
}

export default Page
