
import React from 'react'
import Navbar from '../../Components/Admin/Navbar'
import Sidebar from '../../Components/Admin/Sidebar'
import TourData from '../../Components/Admin/ToursData'
import ProfileView from '../../Components/Admin/ProfileView'

const TourDataRouter = () => {
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
         <TourData/>
         </div>
         </div>
        </div>
      

    </>
  )
}

export default TourDataRouter
