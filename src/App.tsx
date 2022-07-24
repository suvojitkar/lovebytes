import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LbNav } from "Components";
import { Home } from "Pages/Home/Home";
import { CartProvider } from "Providers/CartProvider";
import { Cart } from "Pages/Cart/Cart";
import { Order } from "Pages/Order/Order";

const App = () => {

  return (
    <BrowserRouter>
      <CartProvider>
        <LbNav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/order" element={<Order/>}></Route>
          </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;
