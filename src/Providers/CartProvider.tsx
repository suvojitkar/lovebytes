import { useState, createContext, ReactNode, useReducer, useEffect} from "react";
import { CartProviderReducer } from "./CartProvider.reducer";
import { CartActions } from "Interfaces/CartAction.interface";
import { useLocalStorage } from "Hooks/useLocalStorage";
import { CART_ITEMS_IN_LOCAL_STORAGE, COUNT_CART_ITEMS_IN_LOCAL_STORAGE } from "Global/Global.const";

export const CartContext = createContext<any>([]);

const CartProvider = (props: { children: ReactNode }) => {
    
    const { setDataInLocalStore, getDataFromLocalStore } = useLocalStorage();

    const cartCountInitialState = getDataFromLocalStore(COUNT_CART_ITEMS_IN_LOCAL_STORAGE, 0);
    const cartItemInitialState: any = getDataFromLocalStore(CART_ITEMS_IN_LOCAL_STORAGE, []);

    const [cartItem, setCartItem] = useState<any>(cartItemInitialState);
    const [cartCount, dispatchCount] = useReducer(CartProviderReducer, cartCountInitialState);

    useEffect(() => {
        setDataInLocalStore(CART_ITEMS_IN_LOCAL_STORAGE, cartItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartItem])

    const itemExistsInCart = (item: any) => {
        return cartItem.find((cartMenu: any) => cartMenu.id === item.id);
    }
    
    const modifyCartQty = (menuProp: any, actions: any) => {
        return cartItem.map((cartMenu: any) => {
            if (cartMenu.id === menuProp.id)
                return { ...cartMenu, qty: actions === CartActions.add ? cartMenu.qty + 1 : cartMenu.qty - 1 };
            else
                return { ...cartMenu };
        })
    }

    const addItemToCart = (menuProp: any) => {
        if (!itemExistsInCart(menuProp)) {
            setCartItem([...cartItem, { ...menuProp, qty: 1 }]);
        } else {
            setCartItem(modifyCartQty(menuProp, CartActions.add));
        }
        dispatchCount({ type: CartActions.add });
    }

    const removeItemFromCart = (menuProp: any, removeAll = false) => {
        if (removeAll) {
            const removeQty = cartItem.find((cartMenu: any) => cartMenu.id === menuProp.id).qty;
            dispatchCount({type: CartActions.remove, removeQty})
            setCartItem(cartItem.filter((cartMenu: any) => cartMenu.id !== menuProp.id));
            return;
        }
        
        if (itemExistsInCart(menuProp) && itemExistsInCart(menuProp).qty === 1) {
            setCartItem(cartItem.filter((cartMenu: any) => cartMenu.id !== menuProp.id));
        } else {
            setCartItem(modifyCartQty(menuProp, CartActions.delete));
        }
        dispatchCount({ type: CartActions.delete });
    }

    const clearCart = () => {
        setCartItem([]);
        dispatchCount({ type: CartActions.clear });
    }

    return <CartContext.Provider value={{ cartItem, cartCount, addItemToCart, removeItemFromCart, clearCart }}>{props.children}</CartContext.Provider>

}

export { CartProvider };