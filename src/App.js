import './App.css';




import Main from './Components/Admin/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/admin/Dashboard';
import UserDataRoute from './pages/admin/UserDataRoute';
import TCDataRoute from './pages/admin/TCDataRoute';
import TourDataRoute from './pages/admin/TourDataRouter';
import { UserProvider } from '../src/Components/User/UserContext';

import SignUp from './pages/SignUpLogIn/SignUp';
import UHome from './pages/User/UHome';
import UAbout from './pages/User/UAbout';
import TBooking from './pages/Tourist/TBooking';
import UContact from './pages/User/UContact';


import Navbar from './Components/Admin/Navbar';
import UTourDetails from './pages/User/UTourDetails';
import TBookingPdf from './pages/Tourist/TBookingPdf';
import TFav from './pages/Tourist/TFav';



function App() {

  
 

    return (
      <div className="App">
        <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/user" element={<UserDataRoute />} />
            <Route path="/tour-company" element={<TCDataRoute />} />
            <Route path="/tours" element={<TourDataRoute />} />
            <Route path="/" element={<UHome />} />
            <Route path="/about" element={<UAbout />} />
            <Route path="/contact" element={<UContact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/tourdet" element={<UTourDetails />} />
            <Route path="/tbooking" element={<TBooking/>} />
            <Route path="/tbookprint" element={<TBookingPdf/>} />
            
            <Route path="/favorites" element={<TFav/>} />
          </Routes>
          </UserProvider>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;