import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import RoutesPath from './components/RoutesPath';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import AdminNavbar from './components/Admin/AdminNavbar';
import { useEffect } from 'react';


function App() {

  
 
  return (
    <>
    <div >
    <Toaster   position="bottom-right" />
    <BrowserRouter>

        { localStorage.getItem('isAdmin') ? <></>:
         <Navbar/>}


        <RoutesPath/>

        { localStorage.getItem('isAdmin') ? <></>:
         <Footer/>}
       
    

     
 

  


      </BrowserRouter>
      


    </div>
    </>
  );
}

export default App;
