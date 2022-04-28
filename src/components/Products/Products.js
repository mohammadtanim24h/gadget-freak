import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";

const Products = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleOrder = (product) => {
        console.log(product);
        fetch("http://localhost:5000/addOrder", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({name: product.name, price: product.price, email: user.email})
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className="container">
            <h2 className="my-4 text-center">Products {products.length}</h2>
            <div className="row mt-3">
                {products.map((product) => (
                    <div key={product._id} className="col-md-4 col-lg-3 p-3 m-3 rounded shadow" style={{width: '18rem'}}>
                        <h4>{product.name}</h4>
                        <p>${product.price}</p>
                        <button onClick={() => handleOrder(product)} className="btn btn-outline-dark">Order Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
