import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import dateFormat from 'dateformat';


function RecommendCard() {
    const [writers, setWriters] = useState()

    const getWriters = async () => {
        const writersFromServer = await fetchWriters()
        setWriters(writersFromServer.data)

    }

    const fetchWriters = async () => {
        const res = await axios.get('http://localhost:8080/api/writers/trending')
        console.log(res.data)
        return res.data
    }

    useEffect(() => {
        console.log(writers)
        getWriters()
    }, [])

    return (
        <>
            {writers?<>
            {writers.map((writer, index) => (
                <div className='col-lg-3 col-3 col-md-3 mx-1 shadow-sm p-2 me-2  rounded-3 text-center bg-white'>
                    <img src={"http://localhost:8080/" + writer.profilePic} alt="pic" className='rounded-circle shadow-sm' height={60} />
                    <p className='mt-2'>{writer.name}</p>
                    <Link to={"/writer/" + writer.requestedBy} className='btn btn-purple text-white btn-sm'><i className='fa fa-eye'></i> {writer.profileVisit} visits</Link>
                </div>

            ))}</>:<p>Fetching data</p>
            }
        </>

    )
}

export default RecommendCard