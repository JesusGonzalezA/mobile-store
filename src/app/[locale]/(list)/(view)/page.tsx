"use client"
import React from "react"
import { CustomErrorBoundary } from "@/components/CustomErrorBoundary"
import { useGetProducts } from "@app/list/usecases/useGetProducts"
import { useCommonTranslation } from "@/shared/intl/hooks/useCommonTranslation"

const TelephoneList = () => {
	const translations = useCommonTranslation()
	const { data, error, isLoading } = useGetProducts()
	if (isLoading) return <p>Loading</p>
	if (error) throw new Error("Loading error")

	return (
		<React.Fragment>
			<div>
				filter
			</div>
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
