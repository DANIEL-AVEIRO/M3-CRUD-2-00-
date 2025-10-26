import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const ProductUpdate = () => {
    const { id } = useParams()
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate()

    const storeData = JSON.parse(localStorage.getItem('products'))

    const oldData = storeData.find((product) => product.id == id);

    useEffect(() => {
        setName(oldData.name)
        setPrice(oldData.price)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !price) {
            toast.error("All fields are required");
        }
        const updateData = storeData.map((product) => product.id == id ? { ...product, name, price } : product)
        localStorage.setItem("products", JSON.stringify(updateData))
        toast.success("Product update successfully")
        navigate('/')
    };
    return (
        <div>
            <h1 className="text-center text-2xl mb-10">Product Update Form</h1>
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
                    Update
                </button>
            </form>
        </div>
    )
}

export default ProductUpdate