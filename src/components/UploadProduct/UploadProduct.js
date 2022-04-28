import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../Firebase/firebase.init";

const UploadProduct = () => {
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data,e) => {
        console.log(data)
        fetch("http://localhost:5000/uploadProduct", {
            method: "POST",
            headers: {
                'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            e.target.reset();
        })
    };
    return (
        <div className="container my-4">
            <h2 className="text-center text-secondary">Upload Product</h2>
            <form className="w-50 mx-auto text-center" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control mb-2" placeholder="Product Name" {...register("name")} required/>
                <input className="form-control mb-2" placeholder="Price" type="number" {...register("price")} required/>
                <input className="w-50 text-center btn btn-primary" type="submit" value="Upload" />
            </form>
        </div>
    );
};

export default UploadProduct;
