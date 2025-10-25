import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCreate = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !price) {
            toast.error("All fields are required");
        }

        const storeData = JSON.parse(localStorage.getItem("products")) || []
        const newProduct = {
            id: Date.now(),
            name,
            price,
        }
        storeData.push(newProduct)
        localStorage.setItem("products", JSON.stringify(storeData))
        toast.success("Product create successfully")
        navigate('/')
    };
    return (
        <div>
            <h1 className="text-center text-2xl mb-10">Product Create Form</h1>
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-4 max-w-xl mx-auto"
            >
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter product name"
                    className="border border-solid border-black px-6 py-4 rounded-md text-base"
                    type="text"
                />
                <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter product price"
                    className="border border-solid border-black px-6 py-4 rounded-md text-base"
                    type="number"
                />
                <button
                    className="bg-red-600 px-6 py-4 rounded-md text-white hover:bg-red-700 cursor-pointer text-lg"
                    type="submit"
                >
                    Create
                </button>
            </form>
        </div>
    );
};

export default ProductCreate;
