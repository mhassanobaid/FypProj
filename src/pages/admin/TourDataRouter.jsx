import React from 'react'
import Navbar from '../../Components/Admin/Navbar'
import Sidebar from '../../Components/Admin/Sidebar'
import TourData from '../../Components/Admin/ToursData'

const TourDataRoute = () => {
  return (
    <>
    <div>
      <Navbar />
      </div>
      <div className="row-container">
          <Sidebar />
         <TourData/>
        </div>
      

    </>
  )
}

export default TourDataRoute
