
import React from 'react'
import TCNavbar from '../../Components/TourCompany/TCNavbar'
import TCSidebar from '../../Components/TourCompany/TCSidebar'
import TCTourData from '../../Components/TourCompany/TCToursData'
import TCProfileView from '../../Components/TourCompany/TCProfileView'

const TCTourDataRouter = () => {
  return (
    <>
    <div>
      <TCNavbar />
      </div>
      <div className="row-container">
          <TCSidebar />
          <div>
          <TCProfileView/>
         
          <div>
         <TCTourData/>
         </div>
         </div>
        </div>
      

    </>
  )
}

export default TCTourDataRouter
