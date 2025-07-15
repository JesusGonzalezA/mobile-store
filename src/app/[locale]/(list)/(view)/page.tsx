"use client"
import React, { useState } from "react"
import { useLocale } from "next-intl"
import { useGetProducts } from "@app/list/usecases/useGetProducts"
import { TelephoneListContext } from "@app/list/state/TelephoneListContext"
import { ProductListEntity } from "@app/list/domain/ProductListEntity"
import { useListTranslation } from "@app/list/intl/useListTranslations"
import { CustomErrorBoundary } from "@/components/utils/CustomErrorBoundary"
import { FilterSection } from "@/app/[locale]/(list)/(view)/components/filter-section/FilterSection"
import { GridSection } from "@/app/[locale]/(list)/(view)/components/grid-section/GridSection"
import { Header, Main, NavBar } from "@/components"
import { CartIconWrapper } from "../../(cart)/(view)/components/CartIcon"

const TelephoneList = () => {
	const locale = useLocale()
	useGetProducts()

	return (
		<React.Fragment>
			<Header>
				<NavBar
					baseUrl={`/${locale}`}
					items={[
						{
							href: "/cart",
							component: <CartIconWrapper />,
						},
					]}
				/>
			</Header>
			<Main>
				<FilterSection />
				<GridSection />
			</Main>
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
