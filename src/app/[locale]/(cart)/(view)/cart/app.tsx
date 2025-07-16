import React from "react";
import { CartStateContext } from "@app/cart/state/CartStateContext";
import { useBackLink } from "@/app/[locale]/(state)/useBackLink";

const CartView = () => {
    useBackLink(true)
    
return (
            <CartStateContext value={[]}>
                
            </CartStateContext>
    )
}

export default CartView;