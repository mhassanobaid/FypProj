import React from 'react'
import TCNavbar from '../../Components/TourCompany/TCNavbar'
import TCSidebar from '../../Components/TourCompany/TCSidebar'
import TCTourCompanyData from '../../Components/TourCompany/TCTourCompanyData'
import TCProfileView from '../../Components/TourCompany/TCProfileView'
import TCAddTour from '../../Components/TourCompany/TCAddTour'
const TCTCDataRoute = () => {
  return (
    <>
    <div>
      <TCNavbar />
      </div>
      <div className="row-container">
          <TCSidebar />
          <div>
          <TCAddTour/>
         
          <div>
         <TCTourCompanyData/>
         </div>
         </div>
        </div>
      

    </>
  )
}

export default TCTCDataRoute
