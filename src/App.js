import './App.css';




import Main from './Components/Admin/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/admin/Dashboard';
import UserDataRoute from './pages/admin/UserDataRoute';
import TCDataRoute from './pages/admin/TCDataRoute';
import TourDataRoute from './pages/admin/TourDataRouter';

import SignUp from './pages/SignUpLogIn/SignUp';
import UHome from './pages/User/UHome';
import UAbout from './pages/User/UAbout';
import UContact from './pages/User/UContact';


import Navbar from './Components/Admin/Navbar';




//TourCompany ROuters
import TCDashboardp from './pages/TourCompany/TCDashboardp'
import TCUserDataRoute from './pages/TourCompany/TCUserDataRoute';
import  TCTCDataRoute from './pages/TourCompany/TCTCDataRoute'
import TCTourDataRoute from './pages/TourCompany/TCTourDataRouter';

function App() {

  
    const tours = [
      {
        id: 1,
        naam: 'NathiaGali Expendition',
        image: '/images/murree.jpg',
        location: 'NathiaGali',
        price: 99,
        tourists: 20,
      },
      {
        id: 2,
        naam: 'Murree Journey',
        image: '/images/kalarkahaar.jpg',
        location: 'Murree Expedition',
        price: 149,
        tourists: 15,
      },
      {
        id: 3,
        naam: 'KalarKahaar Journey',
        image: '/images/nathiagali.jpg',
        location: 'KalrKahar Expedition',
        price: 149,
        tourists: 15,
      },
      {
        id: 4,
        naam: 'KalarKahaar Journey',
        image: '/images/neelumValley.jpg',
        location: 'KalrKahar Expedition',
        price: 149,
        tourists: 15,
      },{
        id: 5,
        naam: 'KalarKahaar Journey',
        image: '/images/swatValley.jpg',
        location: 'KalrKahar Expedition',
        price: 149,
        tourists: 15,
      },{
        id: 6,
        naam: 'KalarKahaar Journey',
        image: '/images/nelumValley.jpg',
        location: 'KalrKahar Expedition',
        price: 149,
        tourists: 15,
      }



      // Add more tours as needed
    ];
   

    return (
      <div className="App">
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user" element={<UserDataRoute />} />
            <Route path="/tour-company" element={<TCDataRoute />} />
            <Route path="/tours" element={<TourDataRoute />} />
            
          </Routes>
        </BrowserRouter> */}

<BrowserRouter>
          <Routes>
            <Route path="/" element={<TCDashboardp />} />
            <Route path="/user" element={<TCUserDataRoute />} />
            <Route path="/add-tours" element={<TCTCDataRoute />} />
            <Route path="/tours" element={<TCTourDataRoute />} />
            
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;