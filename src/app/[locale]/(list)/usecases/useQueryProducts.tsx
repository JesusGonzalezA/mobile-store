import { useContext } from "react"
import { TelephoneListContext } from "@app/list/state/TelephoneListContext"
import { useBaseFetchProducts } from "@app/list/usecases/useBaseFetchProducts"

export const useQueryProducts = () => {
	const { setData } = useContext(TelephoneListContext)

	return useBaseFetchProducts({
		options: { auto: false },
		params: { limit: Number(process.env.NEXT_PUBLIC_SEARCH_LIMIT || 20) },
		onFetch: (data) => setData(data),
	})
}
