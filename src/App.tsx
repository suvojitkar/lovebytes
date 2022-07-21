import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrimarySearchAppBar from "./Components/LbNav/LbNav";
import { Home } from "./Pages/Home";
import { useCart } from "./Providers/useCart";
import { CartContext } from "./Contexts/App.context";

const App = () => {

  const { cartItem, addItemToCart, removeItemFromCart, cartCount } = useCart();

  return <>
    <BrowserRouter>
      <CartContext.Provider value = {{cartItem, addItemToCart, removeItemFromCart, cartCount}}>
        <PrimarySearchAppBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  </>
}

export default App;
