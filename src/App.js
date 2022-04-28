import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import OrderList from "./components/OrderList/OrderList";
import Products from "./components/Products/Products";
import UploadProduct from "./components/UploadProduct/UploadProduct";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="products" element={<Products></Products>}></Route>
                <Route
                    path="uploadProduct"
                    element={
                        <PrivateRoute>
                            <UploadProduct></UploadProduct>
                        </PrivateRoute>
                    }
                ></Route>
                <Route
                    path="orders"
                    element={
                        <PrivateRoute>
                            <OrderList></OrderList>
                        </PrivateRoute>
                    }
                ></Route>
                <Route path="login" element={<Login></Login>}></Route>
            </Routes>
        </div>
    );
}

export default App;
