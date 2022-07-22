import { CartContext } from "Providers/CartProvider";
import { useContext } from "react";

const LbTable = (props: any) => {
    const { cartItem } = useContext(CartContext);
    return <table>
                <tr>
                    <td><b>Item</b></td>
                    <td><b>Qty</b></td>
                    <td><b>Price</b></td>
                </tr>
                {props.children}
                <tr>
                    <td><b>TOTAL</b></td>
                    <td></td>
                    <td>
                        <b>
                            &#8377;{cartItem.reduce((acc:any, curr:any) => {
                                return acc + curr.price * curr.qty
                            }, 0)}
                        </b>
                    </td>
                </tr>
        </table>
};

const LbCartSummary = () => {
    const { cartItem } = useContext(CartContext);
    const data = cartItem.map((elem: any) => <tr key={elem.id}>
         <td>{elem.name}</td>
         <td>{elem.qty}</td>
         <td>&#8377;{elem.price * elem.qty}</td>
    </tr>)

    return <LbTable>{data}</LbTable>
}

export { LbCartSummary };