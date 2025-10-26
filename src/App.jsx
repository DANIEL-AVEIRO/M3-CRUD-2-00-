import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import ProductCreate from './pages/ProductCreate'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header'
import ProductUpdate from './pages/ProductUpdate'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='max-w-4xl mx-auto my-5'>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/product/create/' element={<ProductCreate />} />
          <Route path='/product/update/:id' element={<ProductUpdate />} />
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App