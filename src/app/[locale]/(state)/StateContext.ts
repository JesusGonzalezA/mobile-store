import { createContext } from "react";
import { State } from "./state";

export const StateContext = createContext<State>({
    setHasReturn: () => {},
    hasReturn: false
})

StateContext.displayName = "StateContext"