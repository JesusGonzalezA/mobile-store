import { useEffect, useState } from "react"
import { ApiResponse } from "@/shared/services/product-api-adapter/domain/ApiResponse"
import { ErrorEntity } from "@/shared/services/product-api-adapter/domain/Error"

export type FetchOptions = {
	auto: boolean
}
export const useFetch = <DataType, QueryParamsType>(
	serviceQuery: (
		params?: QueryParamsType,
		signal?: AbortSignal,
	) => ApiResponse<DataType>,
	hookParams: { params?: QueryParamsType; options?: FetchOptions } = {},
) => {
	const { params, options } = hookParams
	const [data, setData] = useState<DataType>()
	const [error, setError] = useState<ErrorEntity>()
	const [isLoading, setIsloading] = useState<boolean>(true)
	const query = async (params?: QueryParamsType, signal?: AbortSignal) => {
		serviceQuery(params, signal)
			.then((response) => {
				if (response.ok && response.value instanceof Promise) {
					response.value.then((value) => setData(value))
				} else if (!response.ok) {
					setError(response.error)
				}
			})
			.finally(() => {
				setIsloading(false)
			})
	}

	useEffect(() => {
		if (options?.auto) query(params)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return { data, error, isLoading, query }
}
