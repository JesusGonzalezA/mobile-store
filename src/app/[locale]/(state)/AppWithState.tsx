"use client";

import { PropsWithChildren, useState } from "react"
import { StateContext } from "./StateContext";

export const AppWithState = ({ children }: PropsWithChildren) => {
    const [hasReturn, setHasReturn] = useState<boolean>(false)
    
    return (
        <StateContext.Provider value={{
            hasReturn,
            setHasReturn
        }}>
            {children}
        </StateContext.Provider>
    );
}