import React from 'react'
import UserData from '../../Components/Admin/UserData'
import Navbar from '../../Components/Admin/Navbar'
import Sidebar from '../../Components/Admin/Sidebar'

const UserDataRoute = () => {
  return (
    <>
    <div>
      <Navbar />
      </div>
      <div className="row-container">
          <Sidebar />
          <UserData />
        </div>
      

    </>
  )
}

export default UserDataRoute
