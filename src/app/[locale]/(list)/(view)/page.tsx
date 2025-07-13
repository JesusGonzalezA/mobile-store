"use client"
import React from "react"
import { useGetProducts } from "@app/list/usecases/useGetProducts"
import { FilterSection } from "@app/list/components/filter-section/FilterSection"
import { CustomErrorBoundary } from "@/components/utils/CustomErrorBoundary"

const TelephoneList = () => {
	const { error, isLoading } = useGetProducts()
	if (isLoading) return <p>Loading</p>
	if (error) throw new Error("Loading error")

	return (
		<React.Fragment>
			<FilterSection />
			<div>grid</div>
		</React.Fragment>
	)
}

const TelephoneListWrapper = () => {
	return (
		<CustomErrorBoundary fallback={<p>No products found</p>}>
			<TelephoneList />
		</CustomErrorBoundary>
	)
}

export default TelephoneListWrapper
