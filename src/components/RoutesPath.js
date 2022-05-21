import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './authentication/Login'
import Register from './authentication/Register'
import FrontPage from './frontpage/FrontPage'
import AddBook from './publication/AddBook'



function RoutesPath() {
  return (
    <div>
        <Routes>

            <Route path="/" element={<FrontPage/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/register" element={<Register/>} ></Route>
            <Route path="/add-books" element={<AddBook/>} ></Route>
           
        </Routes>



    </div>
  )
}

export default RoutesPath