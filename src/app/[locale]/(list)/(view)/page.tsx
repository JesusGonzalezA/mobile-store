"use client"
import { CustomErrorBoundary } from "@/components/CustomErrorBoundary"
import { useGetProducts } from "@/app/[locale]/(list)/usecases/useGetProducts"
import { useCommonTranslation } from "@/shared/intl/hooks/useCommonTranslation"

const TelephoneList = () => {
	const translations = useCommonTranslation()
	const { data, error, isLoading } = useGetProducts()
	if (isLoading) return <p>Loading</p>
	if (error) throw new Error("Loading error")

	return (
		<div>
			{translations("hello")} {JSON.stringify(data, null, 2)}
		</div>
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
