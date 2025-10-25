import React from 'react'

const ProductCreate = () => {
    return (
        <div>
            <h1 className='text-center text-2xl mb-10'>Product Create Form</h1>
            <form className='grid grid-cols-1 gap-4 max-w-xl mx-auto'>
                <input placeholder='Enter product name' className='border border-solid border-black px-6 py-4 rounded-md text-base' type="text" />
                <input placeholder='Enter product price' className='border border-solid border-black px-6 py-4 rounded-md text-base' type='number' />
                <button className='bg-red-600 px-6 py-4 rounded-md text-white hover:bg-red-700 cursor-pointer text-lg' type='submit'>Create</button>
            </form>
        </div>
    )
}

export default ProductCreate