import { useState } from "react";

const useCart = () => {
    const [cartItem, setCartItem] = useState<any>([]);
    const [cartCount, setCartCount] = useState<any>(0);


    const addItemToCart = (menuProp: any) => {
        if (!cartItem.find((cartMenu: any) => cartMenu.id === menuProp.id)) { // new item to add in cart
            setCartItem([...cartItem, { ...menuProp, qty: 1 }]);
        } else {
            setCartItem(cartItem.map((cartMenu: any) => { // item already exists in cart
                if (cartMenu.id === menuProp.id) {
                    return { ...cartMenu, qty: cartMenu.qty + 1 }
                } else {
                    return { ...cartMenu }
                }
            }));
        }
        setCartCount(cartCount + 1);
    }

    const removeItemFromCart = (menuProp: any) => {
        if (cartItem.find((cartMenu: any) => cartMenu.id === menuProp.id) && cartItem.find((cartMenu: any) => cartMenu.qty === 1)) {
            setCartItem(cartItem.filter((cartMenu: any) => cartMenu.id !== menuProp.id ));
        } else {
            setCartItem(cartItem.map((cartMenu: any) => {
                if (cartMenu.id === menuProp.id) {
                    return { ...cartMenu, qty: cartMenu.qty - 1 }
                } else {
                    return { ...cartMenu }
                }
            }));
        }
        setCartCount(cartCount - 1);
    }

    return { cartItem, addItemToCart, removeItemFromCart, cartCount }

}

export { useCart };