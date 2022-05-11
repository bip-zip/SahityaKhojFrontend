import React from 'react'
import {Routes, Route} from 'react-router-dom'
import FrontPage from './frontpage/FrontPage'



function RoutesPath() {
  return (
    <div>
        <Routes>

            <Route path="/" element={<FrontPage/>} ></Route>
            
        </Routes>



    </div>
  )
}

export default RoutesPath