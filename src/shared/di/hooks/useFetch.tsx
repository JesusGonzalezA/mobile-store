import { useEffect, useState } from "react"
import { ApiResponse } from "@/shared/MobileService/domain/ApiResponse"
import { ErrorEntity } from "@/shared/MobileService/domain/Error"

export const useFetch = <T,>(serviceQuery: () => ApiResponse<T>) => {
	const [data, setData] = useState<T>()
	const [error, setError] = useState<ErrorEntity>()
	const [isLoading, setIsloading] = useState<boolean>(true)

	useEffect(() => {
		const query = async () => {
			serviceQuery().then((response) => {
				if (response.ok) {
					response.value!.then((value) => setData(value))
				} else setError(response.error)
			})
			setIsloading(false)
		}

		query()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return { data, error, isLoading }
}
