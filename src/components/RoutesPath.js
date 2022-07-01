import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AdminDashboard from './Admin/AdminDashboard'
import AdminPublication from './Admin/PublicationStuff/AdminPublication'
import AdminWriter from './Admin/WriterStuff/AdminWriter'
import RequestAd from './Ads/RequestAd'
import Login from './Authentication/Login'
import PublicationRequest from './Authentication/PublicationRequest'
import Register from './Authentication/Register'
import WriterRequest from './Authentication/WriterRequest'
import SingleBookPage from './Book/SingleBookPage'
import AddFeed from './Feeds/AddFeed'
import EditFeed from './Feeds/EditFeed'
import FeedHome from './Feeds/FeedHome'
import FrontPage from './Frontpage/FrontPage'
import Results from './Frontpage/Results'
import HelpPage from './HelpPage'
import Portfolio from './Portfolio/Portfolio'
import UpdatePortfolio from './Portfolio/UpdatePortfolio'
import Profile from './Profile/Profile'
import AddBook from './Publication/AddBook'
import AddedBooks from './Publication/AddedBooks'
import AllBooks from './Publication/AllBooks'
import PublicationPortfolio from './Publication/PublicationPortfolio'
import UpdateBook from './Publication/UpdateBook'
import AddReleasing from './Releasing/AddReleasing'
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
            <Route path="/edit-feed/:feedId" element={<EditFeed/>} ></Route>
            <Route path="/profile" element={<Profile/>} ></Route>
            <Route path="/writer-request" element={<WriterRequest/>} ></Route>
            <Route path="/update-portfolio" element={<UpdatePortfolio/>} ></Route>
            <Route path="/add-releasing" element={<AddReleasing/>} ></Route>
            <Route path="/request-ads" element={<RequestAd/>} ></Route>
            
            <Route path="/edit-book/:bookId" element={<UpdateBook/>} ></Route>
            <Route path="/help" element={<HelpPage />} ></Route>
            <Route path="/book/:bookId" element={<SingleBookPage />} ></Route>
            
            
            
           {localStorage.getItem('isAdmin')? 
  
           <Route path="/admin" element={<AdminDashboard/>} ></Route>:
           <Route path="/" element={<FrontPage/>} ></Route>


           
           }

           {localStorage.getItem('isPublisher')? 
  
           <Route path="/publication" element={<PublicationPortfolio/>} ></Route>:
           <Route path="/" element={<FrontPage/>} ></Route>


           
           }
            <Route path="/admin/publications" element={<AdminPublication/>} ></Route>
            <Route path="/admin/writers" element={<AdminWriter/>} ></Route>
        </Routes>



    </div>
  )
}

export default RoutesPath