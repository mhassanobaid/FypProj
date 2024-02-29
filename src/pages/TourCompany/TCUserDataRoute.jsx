
import React from 'react'
import TCUserData from '../../Components/TourCompany/TCUserData'

import TCNavbar from '../../Components/TourCompany/TCNavbar'
import TCSidebar from '../../Components/TourCompany/TCSidebar'
import TCProfileView from '../../Components/TourCompany/TCProfileView'

const TCUserDataRoute = () => {
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
         <TCUserData/>
         </div>
         </div>
        </div>
      

    </>
  )
}

export default TCUserDataRoute
