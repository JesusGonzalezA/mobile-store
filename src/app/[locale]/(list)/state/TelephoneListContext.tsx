import { createContext } from "react"
import { ProductListEntity } from "@app/list/domain/ProductListEntity"

export const TelephoneListContext = createContext<{
	data: ProductListEntity[]
	setData: (newData: ProductListEntity[]) => void
}>({
	data: [],
	setData: () => {},
})
