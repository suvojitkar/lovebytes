import { Button, Container } from "@mui/material";
import { LbOrder } from "Components";
import { CartContext } from "Providers/CartProvider";
import { useContext, useEffect, useState } from "react";
import { OrderHistoryService } from "Services/OrderHistory.service";

const Order = () => {
    const { clearCart } = useContext(CartContext);
    const [orderHistory, setOrderHistory] = useState<any>(null);

    const fetchOrderHistory = async () => {
        const orderResp = await OrderHistoryService();
        setOrderHistory(orderResp);
    };

    const loadmoreOrder = async () => {
        const orderResp = await OrderHistoryService();
        setOrderHistory([...orderHistory, ...orderResp]);
    }
    
    useEffect(() => {
        clearCart();
        fetchOrderHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return  <>
                <br/><br/><br/><br/><br/><br/>
                <Container>
                <h1> Order History </h1>
                {
                    orderHistory?.map((elem: any) => <><LbOrder key={elem.id} {...elem} /><br/></>)
                }
                <Button variant="outlined" onClick={loadmoreOrder}> Load More </Button>
                </Container>
            </>
}

export { Order };