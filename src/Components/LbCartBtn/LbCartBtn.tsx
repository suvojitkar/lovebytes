import { Button } from "@mui/material"
import { useContext, useState } from "react";
import { CartContext } from "../../Contexts/App.context";
import { CartBtn } from "../LbUtil/LbUtil.style";

const LbCartBtn = ({ id, name, description, image }: any) => {
    const { addItemToCart, removeItemFromCart } = useContext(CartContext);
    const [qty, setQty] = useState<any>(0);

    const addItem = () => {
        setQty(qty + 1)
        addItemToCart({ id, name, description, image })
    }

    const remItem = () => {
        setQty(qty - 1)
        removeItemFromCart({ id, name, description, image })
    }

    return <>{
        qty === 0 ?
            <Button variant="contained" onClick={addItem} style={{width: "100%"}}> ADD TO CART </Button> :
            <CartBtn>
                <div>
                    <Button variant="contained" onClick={remItem}>-</Button>
                    <span> {qty} </span>
                    <Button variant="contained" onClick={addItem}>+</Button>
                </div>
                <Button variant="contained" style={{backgroundColor: "red"}} onClick={(e) => setQty(0)}>Remove</Button>
            </CartBtn>
    }</>
}

export { LbCartBtn };