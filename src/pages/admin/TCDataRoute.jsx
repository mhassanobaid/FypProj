import React from 'react'
import UserData from '../../Components/Admin/UserData'
import Navbar from '../../Components/Admin/Navbar'
import Sidebar from '../../Components/Admin/Sidebar'
import TourCompanyData from '../../Components/Admin/TourCompanyData'

const TCDataRoute = () => {
  return (
    <>
    <div>
      <Navbar />
      </div>
      <div className="row-container">
          <Sidebar />
         <TourCompanyData/>
        </div>
      

    </>
  )
}

export default TCDataRoute
