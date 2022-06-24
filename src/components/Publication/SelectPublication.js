import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';
function SelectPublication({spublication, changePublication}) {

const [publication, setPublication]=useState([])
  const getPublication = async () => {
    const reqsFromServer = await fetchPublication()
    setPublication(reqsFromServer.data)
  }

  useEffect(() => {
    
    getPublication()
  }, [])

  // Fetch Books
  const fetchPublication = async () => {
    const res = await axios.get('http://localhost:8080/api/publications/verified')
    return res.data
  }

  return (
    <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    value={spublication} 
                    onChange={(event) => changePublication(event.target.value, event.target.options[event.target.selectedIndex].text)}>

                    <option selected>Choose publication</option>

                    {publication.map((pub, index) => (
                      <>
                <option key={index} value={pub._id}>{pub.name}, {pub.address}</option>
                
                </>
              ))}


                    
                   
                  </select>
                  <label for="floatingSelect">Publication</label>
                </div>
  )
}

export default SelectPublication