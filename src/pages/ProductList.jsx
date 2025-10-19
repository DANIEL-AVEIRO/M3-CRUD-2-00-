import React from 'react'

const products = [
    {
        id: 1,
        name: 'Product - 1',
        price: 200,
    },
    {
        id: 2,
        name: 'Product - 2',
        price: 200,
    },
    {
        id: 3,
        name: 'Product - 3',
        price: 200,
    },
    {
        id: 4,
        name: 'Product - 4',
        price: 200,
    },
    {
        id: 5,
        name: 'Product - 5',
        price: 200,
    },
]

const ProductList = () => {
    return (
        <div>
            <h1 className='text-4xl text-center'>Product List</h1>
            <table className='p-4 text-xl border border-solid border-black mt-5 mx-auto'>
                <thead className='p-4 border border-solid border-black'>
                    <tr className='p-4 border border-solid border-black'>
                        <th className='p-4 border border-solid border-black'>No</th>
                        <th className='p-4 border border-solid border-black'>Name</th>
                        <th className='p-4 border border-solid border-black'>Price</th>
                        <th className='p-4 border border-solid border-black'>Action</th>
                    </tr>
                </thead>
                <tbody className='p-4 border border-solid border-black'>
                    <tr className='p-4 border border-solid border-black'>
                        <td className='p-4 border border-solid border-black'>1</td>
                        <td className='p-4 border border-solid border-black'>Name is here</td>
                        <td className='p-4 border border-solid border-black'>Price is here</td>
                        <td className='p-4 border border-solid border-black'>
                            <button className='py-4 px-6 inline-block text-white cursor-pointer rounded-lg mr-4 bg-yellow-500'>Update</button>
                            <button className='py-4 px-6 inline-block text-white cursor-pointer rounded-lg bg-red-500'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductList