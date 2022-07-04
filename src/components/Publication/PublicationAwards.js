
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

function PublicationAwards({pubId}) {

    const [awards, setAwards]=useState([])

    //  config
 const config = {
   headers: {
     Authorization: "Bearer " + localStorage.getItem("token"),
   },
 };

 // Fetch info
 const fetchInfo = async () => {
   const res = await axios.get(
     "http://localhost:8080/api/publications/information/"+pubId
   );
   console.log(res.data)
   return res.data;
 };

 const getInfo = async () => {
   const infoFromServer = await fetchInfo();
   setAwards(infoFromServer.data.awards);
 };

 // useeffect call
 useEffect(() => {
   getInfo();
 }, []);

  return (
    <>
    {awards.map((award, index) => (
        
        <div class="accordion mb-3" id={"accordionExample" + award._id}>
            <div class="accordion-item">
                <h2 class="accordion-header" id={"headingOne"+index}>
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOne"+index} aria-expanded="true" aria-controls="collapseOne">
                    <i className="fa-solid fa-award fs-4 text-warning"></i> &nbsp; {award.awardName} {award.date}
                    </button>
                </h2>
                <div id={"collapseOne"+index} class="accordion-collapse collapse show" aria-labelledby={"headingOne"+index} data-bs-parent={"#accordionExample" + award._id}>
                    <div class="accordion-body fw-light">
                        {award.description}
                    </div>
                </div>
            </div>
            
        </div>

      ))}
       </>
  )
}

export default PublicationAwards