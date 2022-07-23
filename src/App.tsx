import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LbNav } from "Components";
import { Home } from "Pages/Home/Home";
import { CartProvider } from "Providers/CartProvider";
import { Cart } from "Pages/Cart/Cart";
import { Order } from "Pages/Order/Order";
import { useSearch } from "Hooks/useSearch";
import { createContext } from "react";
import { useToggleState } from "Hooks/useToggleState";

export const searchContext = createContext<any>("");
export const toggleContext = createContext<any>("");

const App = () => {
  const { searchText, setSearchText } = useSearch();
  const {checked, setChecked} = useToggleState();

  return (
    <BrowserRouter>
      <CartProvider>
        <LbNav />
        <searchContext.Provider value={{ searchText, setSearchText }}>
          <toggleContext.Provider value={{ checked,  setChecked}}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/order" element={<Order/>}></Route>
            </Routes>
          </toggleContext.Provider>
        </searchContext.Provider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;
