
import React from 'react'
import UserData from '../../Components/Admin/UserData'
import Navbar from '../../Components/Admin/Navbar'
import Sidebar from '../../Components/Admin/Sidebar'
import ProfileView from '../../Components/Admin/ProfileView'

const UserDataRoute = () => {
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
         <UserData/>
         </div>
         </div>
        </div>
      

    </>
  )
}

export default UserDataRoute
