import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AdminDashboard from './Admin/AdminDashboard'
import AdminPublication from './Admin/PublicationStuff/AdminPublication'
import Login from './Authentication/Login'
import PublicationRequest from './Authentication/PublicationRequest'
import Register from './Authentication/Register'
import AddFeed from './Feeds/AddFeed'
import FeedHome from './Feeds/FeedHome'
import FrontPage from './Frontpage/FrontPage'
import Results from './Frontpage/Results'
import Portfolio from './Portfolio/Portfolio'
import AddBook from './Publication/AddBook'
import AddedBooks from './Publication/AddedBooks'
import AllBooks from './Publication/AllBooks'
import PublicationPortfolio from './Publication/PublicationPortfolio'
import ReleaseHome from './Releasing/ReleaseHome'


function RoutesPath() {
  return (
    <div>
        <Routes>

            <Route path="/" element={<FrontPage/>} ></Route>
            <Route path="/feeds" element={<FeedHome/>} ></Route>
            <Route path="/release" element={<ReleaseHome/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/register" element={<Register/>} ></Route>
            <Route path="/results/:query" element={<Results/>} ></Route>
            <Route path="/portfolio" element={<Portfolio/>} ></Route>
            <Route path="/add-books" element={<AddBook/>} ></Route>
            <Route path="/all-books" element={<AllBooks/>} ></Route>
            <Route path="/added-books" element={<AddedBooks/>} ></Route>
            <Route path="/publication-request" element={<PublicationRequest/>} ></Route>
            <Route path="/add-feed" element={<AddFeed/>} ></Route>






           {localStorage.getItem('isAdmin')? 
  
           <Route path="/admin" element={<AdminDashboard/>} ></Route>:
           <Route path="/" element={<FrontPage/>} ></Route>


           
           }

           {localStorage.getItem('isPublisher')? 
  
           <Route path="/publication" element={<PublicationPortfolio/>} ></Route>:
           <Route path="/" element={<FrontPage/>} ></Route>


           
           }
            <Route path="/admin/publications" element={<AdminPublication/>} ></Route>
        </Routes>



    </div>
  )
}

export default RoutesPath