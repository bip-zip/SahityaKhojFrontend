import dateFormat from 'dateformat';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserTable({setTotalUser}) {

    const [users, setUsers] = useState([])
    // Fetch users
    const fetchUsers = async () => {
        const res = await axios.get('http://localhost:8080/api/users/')
        console.log(res.data.data)
        return res.data
    }
    const getUsers = async () => {
        const usersFromServer = await fetchUsers()
        setUsers(usersFromServer.data)
        setTotalUser(users.length)
    }

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <>
            <table className="table">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">Penname</th>
                        <th scope="col">Name</th>
                        <th scope="col">Registered Date</th>
                        <th scope="col">Email</th>
                        <th scope="col">Email Verified</th>
                    </tr>
                </thead>
                <tbody className='text-center'>

                    {users.map((user, index) => (
                        <tr>

                            <td>{user.penname}</td>
                            <td>{user.firstname} {user.lastname}</td>
                            <td>{dateFormat(user.joined, "dS mmmm , yyyy")}</td>
                            <td>{user.email}</td>
                            {user.email_verified?<td><i>Verified</i></td>:<td><i>Not Verified</i></td>}



                        </tr>


                    ))}


                </tbody>
            </table>




        </>

    )
}

export default UserTable