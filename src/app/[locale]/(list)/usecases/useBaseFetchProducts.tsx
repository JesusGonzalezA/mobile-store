import { useEffect } from "react"
import { useInjection } from "@/shared/di/hooks/useInjection"
import { DI_SYMBOLS } from "@app/list/di/types"
import { FetchOptions, useFetch } from "@/shared/mobile-service/hooks/useFetch"
import { ProductListService } from "@app/list/services/ProductListService"
import { ProductListEntity } from "@app/list/domain/ProductListEntity"
import { ProductListParams } from "@app/list/domain/ProductListParams"

export const useBaseFetchProducts = (props?: {
	options?: FetchOptions
	params?: ProductListParams
	onFetch?: (data: ProductListEntity[]) => void
}) => {
	const { options, params = {}, onFetch } = props || {}
	const service = useInjection<ProductListService>(
		DI_SYMBOLS.ProductListService,
	)

	const fetchResult = useFetch<ProductListEntity[], ProductListParams>(
		(otherParams?: ProductListParams, signal?: AbortSignal) =>
			service.query({ params: { ...params, ...otherParams }, signal }),
		{ options },
	)

	useEffect(() => {
		if (fetchResult.isLoading) return

		if (fetchResult.data && onFetch) {
			onFetch(fetchResult.data)
		}
	}, [fetchResult.data, onFetch, fetchResult.isLoading])

	if (fetchResult.error) throw new Error(fetchResult.error.message)

	return fetchResult
}
