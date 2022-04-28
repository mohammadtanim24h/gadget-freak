import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`http://localhost:5000/orderList?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user.email]);
    return (
        <div className="container">
            <h2>Order List here</h2>
            <div className="row">
                {orders.map((order) => (
                    <div
                        key={order._id}
                        className="col-md-4 col-lg-3 p-3 m-3 rounded shadow"
                        style={{ width: "18rem" }}
                    >
                        <h4>{order.name}</h4>
                        <p>${order.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderList;
