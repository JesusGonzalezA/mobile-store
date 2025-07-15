import { useEffect } from "react"
import { useInjection } from "@/shared/di/hooks/useInjection"
import { DI_SYMBOLS } from "@app/list/di/types"
import { FetchOptions, useFetch } from "@/shared/product-service/hooks/useFetch"
import { IProductListService } from "@app/list/services/ProductListService"
import { ProductListEntity } from "@app/list/domain/ProductListEntity"
import { QueryProductsParams } from "@app/list/domain/QueryProductsParams"

export const useBaseFetchProducts = (props?: {
	options?: FetchOptions
	params?: QueryProductsParams
	onFetch?: (data: ProductListEntity[]) => void
}) => {
	const { options, params = {}, onFetch } = props || {}
	const service = useInjection<IProductListService>(
		DI_SYMBOLS.ProductListService,
	)

	const fetchResult = useFetch<ProductListEntity[], QueryProductsParams>(
		(otherParams?: QueryProductsParams, signal?: AbortSignal) =>
			service.query({ params: { ...params, ...otherParams }, signal }),
		{ options },
	)

	useEffect(() => {
		if (fetchResult.isLoading) return

		if (fetchResult.data && onFetch) {
			onFetch(fetchResult.data)
		}
	}, [fetchResult.data?.length, fetchResult.isLoading])

	if (fetchResult.error) throw new Error(fetchResult.error.message)

	return fetchResult
}
