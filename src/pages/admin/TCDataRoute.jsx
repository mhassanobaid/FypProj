import React from 'react'
import Navbar from '../../Components/Admin/Navbar'
import Sidebar from '../../Components/Admin/Sidebar'
import TourCompanyData from '../../Components/Admin/TourCompanyData'
import ProfileView from '../../Components/Admin/ProfileView'

const TCDataRoute = () => {
  return (
    <>
    <div>
      <Navbar />
      </div>
      <div className="row-container">
          <Sidebar />
          <div>
          <ProfileView/>
         
          <div>
         <TourCompanyData/>
         </div>
         </div>
        </div>
      

    </>
  )
}

export default TCDataRoute
