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
	const service = useInjection<ProductListService>(
		DI_SYMBOLS.ProductListService,
	)

	const fetchResult = useFetch<ProductListEntity[], ProductListParams>(
		(params?: ProductListParams, signal?: AbortSignal) =>
			service.query({ params: { ...props?.params, ...params }, signal }),
		{ options: props?.options },
	)

	useEffect(() => {
		if (fetchResult.isLoading) return

		if (fetchResult.data && props?.onFetch) {
			props.onFetch(fetchResult.data)
		}
	}, [fetchResult.data])

	if (fetchResult.error) throw new Error(fetchResult.error.message)

	return fetchResult
}
