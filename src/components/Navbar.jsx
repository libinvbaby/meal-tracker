import React from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import GroceryProduct from './GroceryProduct'
import MealsPlan from './MealPlan'

function Navbar() {
  return (
    <BrowserRouter>
  <div className="container">

  <Link className="navbar-link"  Exact from="/"   to="/"> <img className="logo" width="100" src={require('../images/calorie-finder.png')} alt="" /></Link>

  <Link className="navbar-link text-white p-2" to='/'>Home</Link>
  <Link className="navbar-link text-white p-2" to='/product'>Product</Link>

    <Routes>
      <Route exact path="/" element={<MealsPlan/>} />
      <Route path='/product' element={<GroceryProduct/>} />
    </Routes>

  </div>
</BrowserRouter>

  )
}

export default Navbar