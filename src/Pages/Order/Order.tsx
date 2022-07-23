import { Container } from "@mui/material";
import { CartContext } from "Providers/CartProvider";
import { useContext, useEffect } from "react";

const Order = () => {
    const { clearCart } = useContext(CartContext);

    useEffect(() => {
        clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return  <>
                <br/><br/><br/><br/><br/><br/>
                <Container>
                    <h1> ORDER SUCCESS </h1>
                </Container>
            </>
}

export { Order };