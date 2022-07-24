import { Button } from "@mui/material"
import { memo, useContext, useReducer } from "react";
import { LbCardProp } from "Components/LbCard/LbCard.interface";
import { FullBox } from "Components/LbUtil/LbUtil.style";
import { CartContext } from "Providers/CartProvider";
import { LbCartBtnReducer } from "./LbCartBtn.reducer";
import { CartActions } from "Interfaces/CartAction.interface";

const LbCartBtn = memo(({ id, name, description, image, price }: LbCardProp) => {
    const { addItemToCart, removeItemFromCart } = useContext(CartContext);

    const { cartItem } = useContext(CartContext);
    const isItemInCart: any = cartItem.find((cartMenu: any) => cartMenu.id === id);

    const initialState = { qty: isItemInCart ? isItemInCart.qty : 0 };
    const [state, dispatch] = useReducer(LbCartBtnReducer, initialState);

    const addItem = () => {
        dispatch({ type: CartActions.add });
        addItemToCart({ id, name, description, image, price })
    }

    const remItem = () => {
        dispatch({ type: CartActions.delete });
        removeItemFromCart({ id, name, description, image, price })
    }

    const remAllItem = () => {
        dispatch({ type: CartActions.remove });
        removeItemFromCart({ id, name, description, image, price }, true)
    }

    return <>{
        state.qty === 0 ?
            <Button variant="contained" onClick={addItem} style={{ width: "100%" }}> ADD TO CART </Button> :
            <FullBox>
                <div>
                    <Button variant="contained" onClick={remItem}>-</Button>
                    <span> {state.qty} </span>
                    <Button variant="contained" onClick={addItem}>+</Button>
                </div>
                <Button variant="contained" style={{ backgroundColor: "red" }} onClick={remAllItem}>Remove</Button>
            </FullBox>
    }
    </>
});

export { LbCartBtn };