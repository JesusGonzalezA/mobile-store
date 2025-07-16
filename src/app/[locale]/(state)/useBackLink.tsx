import { useContext, useEffect } from "react"
import { StateContext } from "./StateContext"

export const useBackLink = (visible: boolean = true) => {
    const { setHasReturn } = useContext(StateContext)
    
    useEffect(() => {
        setHasReturn(visible)
    }, [setHasReturn, visible])
}