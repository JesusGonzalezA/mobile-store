import { createContext } from "react";
import { CartState } from "./state";

export const CartStateContext = createContext<CartState>([])