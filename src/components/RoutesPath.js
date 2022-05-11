import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './authentication/Login'
import FrontPage from './frontpage/FrontPage'



function RoutesPath() {
  return (
    <div>
        <Routes>

            <Route path="/" element={<FrontPage/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            
        </Routes>



    </div>
  )
}

export default RoutesPath