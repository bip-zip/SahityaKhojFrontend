import React, { useState } from 'react'
import AdminNavbar from '../AdminNavbar'
import NavbarAdmin from '../NavbarAdmin'
import UserTable from './UserTable'


function UsersList() {
const [totaluser, setTotalUser] = useState(0);
  return (
    <>

<div className="container-fluid p-0 m-0">
                <div className="row">
                    <div className="col-2 shadow-sm p-0 m-0">
                        <AdminNavbar />
                    </div>
                    <div className="col p-0 m-0">
                        <NavbarAdmin NavName={"Users "+ ": " + totaluser} />
                        {/* Content */}
                        <div className="p-3 mt-3 shadow bg-white rounded">
                            <UserTable setTotalUser = {setTotalUser} />

                            </div>



</div>
</div>
</div>
    
    
    
    
    
    
    </>
  )
}

export default UsersList