import { Container } from "@mui/material";
import { LbCard, LbGridMenu } from "Components";
import { LbCartSummary } from "Components/LbCartSummary/LbCartSummary";
import { CartContext } from "Providers/CartProvider";
import { useContext } from "react";

const Cart = () => {
    const { cartItem } = useContext(CartContext);
    return (
    <>
        <br/><br/><br/><br/>
        <Container>
            <h1> CART SUMMARY</h1>
            <br/>
            <div style={{border: "solid 1px #dddddd", padding: "10px 10px 10px 10px"}}>
                {cartItem.length ?
                <LbGridMenu> {cartItem?.map((item: any) => <LbCard key={item.id} {...item} />)} </LbGridMenu> : 
                <span> No Item in Cart!</span>
            }
            </div>
            <br/><br/>
            <LbCartSummary/>
        </Container>
    </>)
}

export { Cart };