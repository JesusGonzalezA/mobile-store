import { CartProduct } from "../domain/CartProduct"
import { CartState } from "./state"

enum Action {
    'ADD',
    'REMOVE'
}

export const cartReducer = (state: CartState = [], action: { type: Action, payload: CartProduct }) : CartState =>  {
    switch (action.type) {
        case Action.ADD:
            return [...state, action.payload]
        case Action.REMOVE:
            return state.filter(product => product !== action.payload)
    }
}