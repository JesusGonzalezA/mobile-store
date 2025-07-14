"use client"
import React, { useState } from "react"
import { useGetProducts } from "@app/list/usecases/useGetProducts"
import { TelephoneListContext } from "@app/list/state/TelephoneListContext"
import { ProductListEntity } from "@app/list/domain/ProductListEntity"
import { FilterSection } from "@app/list/components/filter-section/FilterSection"
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
	return (
		<CustomErrorBoundary fallback={<p>No products found</p>}>
			<TelephoneListContext value={{ data, setData: (data) => setData(data) }}>
				<TelephoneList />
			</TelephoneListContext>
		</CustomErrorBoundary>
	)
}

export default TelephoneListWrapper
