import { COUNT_CART_ITEMS_IN_LOCAL_STORAGE } from "Global/Global.const";
import { useLocalStorage } from "Hooks/useLocalStorage";
import { CartActions } from "Interfaces/CartAction.interface";

const CartProviderReducer = (state: any, action: any) => {
    const { setDataInLocalStore} = useLocalStorage();
    switch (action.type) {
        case CartActions.add:
            setDataInLocalStore(COUNT_CART_ITEMS_IN_LOCAL_STORAGE, state + 1)
            return state + 1;
        case CartActions.delete:
            setDataInLocalStore(COUNT_CART_ITEMS_IN_LOCAL_STORAGE, state -1 )
            return state - 1;
        case CartActions.remove:
            setDataInLocalStore(COUNT_CART_ITEMS_IN_LOCAL_STORAGE, state - action.removeQty)
            return state - action.removeQty
        case CartActions.clear:
            setDataInLocalStore(COUNT_CART_ITEMS_IN_LOCAL_STORAGE, 0)
            return 0;
    }
}

export { CartProviderReducer };