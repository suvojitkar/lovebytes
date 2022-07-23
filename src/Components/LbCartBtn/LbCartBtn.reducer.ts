import { CartActions } from "Interfaces/CartAction.interface"

const LbCartBtnReducer = (state: any, action: any) => {
    switch (action.type) {
        case CartActions.add:
            return { qty: state.qty + 1 }
        case CartActions.delete:
            return { qty: state.qty - 1 }
        case CartActions.remove:
            return { qty: 0 }
        case CartActions.clear:
            return { qty: 0 }
        default:
            throw new Error();
    }
}

export { LbCartBtnReducer };