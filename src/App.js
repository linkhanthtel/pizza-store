import React from "react";
import { Navbar } from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer";
import { Home } from "./pages/home";
import { Menu } from "./pages/menu";
import { Order } from "./pages/order";
import { OrderContextProvider } from "./context/orderContext";

function App() {
  return (
    <OrderContextProvider>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/pizzaparadise" element={<Home />} />
          <Route path="/"  element={<Home />} />
          <Route path="/menu"  element={<Menu />}/>
          <Route path="/myorder"  element={<Order />}/>
        </Routes>
      <Footer />
    </BrowserRouter>
    </OrderContextProvider>
  );
}

export default App;
