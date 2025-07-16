import { createContext } from "react"
import { ReturnLinkState } from "./ReturnLinkState"

export const ReturnLinkStateContext = createContext<ReturnLinkState>({
	hasReturn: false,
	setHasReturn: () => {},
})

ReturnLinkStateContext.displayName = "ReturnLinkState"
