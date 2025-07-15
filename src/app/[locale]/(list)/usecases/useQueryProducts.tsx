import { useContext } from "react"
import { ProductListContext } from "@app/list/state/ProductListContext"
import { useBaseFetchProducts } from "@app/list/usecases/useBaseFetchProducts"

export const useQueryProducts = () => {
	const { setData } = useContext(ProductListContext)

	return useBaseFetchProducts({
		options: { auto: false },
		params: { limit: Number(process.env.NEXT_PUBLIC_SEARCH_LIMIT || 20) },
		onFetch: (data) => setData(data),
	})
}
