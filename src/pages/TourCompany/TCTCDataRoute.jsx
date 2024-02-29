import React from 'react'
import TCNavbar from '../../Components/TourCompany/TCNavbar'
import TCSidebar from '../../Components/TourCompany/TCSidebar'
import TCTourCompanyData from '../../Components/TourCompany/TCTourCompanyData'
import TCProfileView from '../../Components/TourCompany/TCProfileView'

const TCTCDataRoute = () => {
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
         <TCTourCompanyData/>
         </div>
         </div>
        </div>
      

    </>
  )
}

export default TCTCDataRoute
