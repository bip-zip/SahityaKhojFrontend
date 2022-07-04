import AddAwardModal from "./AddAwardModal";
import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";


function AddAward({ awards, getInfo }) {
    const [awardname, setAwardName] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");

  console.log(awards);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  
  const addAwards = (e) => {
    e.preventDefault();
  
    const data = {
      "awardName": awardname,
      'description': desc,
      'date': date
    }

    axios.post("http://localhost:8080/api/writers/add-awards", data, config).then(result => {
      if (result.data.status) {
     
        toast.success("Award added!")
        getInfo();
        
      }
      else {
        toast.error("Something went wrong!!")
      }
    }).catch(e => {
      toast.error("Something went wrong!!")
    })

  }


  return (
    <>
      {awards.map((award, index) => (
        <div className="shadow-sm p-3 mb-3">
          <h5 className="">
            {award.awardName} {award.date}
          </h5>
          <p>{award.description}</p>
        </div>
      ))}

      <div className="d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-purple text-white btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#exampleModaladdaward"
        >
          Add award
        </button>
      </div>
      <AddAwardModal getInfo={getInfo} addAwards={addAwards} awardName={awardname} desc={desc} date={date} setAwardName={setAwardName} setDate={setDate} setDesc={setDesc} />
    </>
  );
}

export default AddAward;
