import { useContext, useEffect } from "react"
import { ReturnLinkStateContext } from "./ReturnLinkStateContext"

export const useBackLink = (visible: boolean = true) => {
	const { setHasReturn } = useContext(ReturnLinkStateContext)

	useEffect(() => {
		setHasReturn(visible)
	}, [setHasReturn, visible])
}
