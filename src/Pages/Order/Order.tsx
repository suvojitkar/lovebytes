import { Container } from "@mui/material";
import { CartContext } from "Providers/CartProvider";
import { useContext, useEffect } from "react";
import { OrderHistoryService } from "Services/OrderHistory.service";

const Order = () => {
    const { clearCart } = useContext(CartContext);

    const fetchOrderHistory = async () => {
        const resp = await OrderHistoryService();
        console.log("resp", resp);
    };
    
    useEffect(() => {
        clearCart();
        fetchOrderHistory();
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