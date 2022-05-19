import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./router/PrivateRoute";
import MainPage from "./containers/MainPage/MainPage";
import Account from "./containers/Account/Account";
import AddToCart from "./containers/AddToCart/AddToCart";
import Edit from "./containers/Edit/Edit";
import Catalog from "./containers/Catalog/Catalog";
import Favourites from "./containers/Favourites/Favourites";
import Order from "./containers/Order/Order";
import OrderMaking from "./containers/OrderMaking/OrderMaking";
import Product from "./containers/Product/Product";
import Admin from "./containers/Admin/Admin";
import AuthRouter from "./router/AuthRouter";
import ModalCustom from "./components/Modal/Modal";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route
            path="/"
            element={
              <AuthRouter 
              // еба ть пиздэц
                component={<ModalCustom type="auth" visible="visible" />}
              />
            }
          /> */}

          <Route path="/pharmadon" element={<MainPage />} />
          <Route
            path="/account"
            element={<PrivateRoute component={<Account />} />}
          />
          <Route
            path="/cart"
            element={<PrivateRoute component={<AddToCart />} />}
          />
          <Route
            path="/catalog"
            element={<PrivateRoute component={<Catalog />} />}
          />
          <Route path="/edit" element={<PrivateRoute component={<Edit />} />} />
          <Route
            path="/favourites"
            element={<PrivateRoute component={<Favourites />} />}
          />
          <Route
            path="/order"
            element={<PrivateRoute component={<Order />} />}
          />
          <Route
            path="/ordermaking"
            element={<PrivateRoute component={<OrderMaking />} />}
          />
          <Route
            path="/product"
            element={<PrivateRoute component={<Product />} />}
          />
          <Route
            path="/admin"
            element={<PrivateRoute component={<Admin />} />}
          />
          <Route path="*" element={""} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
