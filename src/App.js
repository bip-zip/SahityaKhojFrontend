import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import RoutesPath from './components/RoutesPath';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
    <div >
    <Toaster   position="bottom-right" />
      <BrowserRouter>
        <Navbar/>
        <RoutesPath/>
        <Footer/>

      </BrowserRouter>
      


    </div>
    </>
  );
}

export default App;
