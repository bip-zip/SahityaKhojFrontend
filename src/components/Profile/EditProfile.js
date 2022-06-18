import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';


function EditProfile() {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState('First name');
    const [lastname, setLastname] = useState('Last name');
    const [contact, setContact] = useState('+977 ');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('Tell people about yourself..');
    const [penname, setPenname] = useState(localStorage.getItem('penname'));
    const [pp, setPP] = useState('');


    const [dpp, setDPP] = useState('');

     // change profilepic change event
 const onProfilePicChange = (event) => {
    if (event.target.files && event.target.files[0]) {
     setDPP(URL.createObjectURL(event.target.files[0]));
     setPP(event.target.files[0]);
    }
  };

  const config = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
    }
}

  const submitForm = (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append('firstname', firstname);
    data.append('lastname', lastname);
    data.append('contact', contact);
    data.append('bio', bio);
    data.append('profilePic', pp);

    axios.put("http://localhost:8080/api/users/editprofile", data, config).then(result => {
        console.log(result)
        if (result.data.status) {
            toast.success("Profile Updated")
            navigate("/profile")
        }
        else {
            toast.error(result.data.message)
        }
    }).catch(e => {
        toast.error("Something went wrong!!")
    })

}

// getting previous info
const fetchInfo = async () => {
    const res = await axios.get(
      "http://localhost:8080/api/users/user-info",
      config
    );
    return res.data;
  };

  const getInfo = async () => {
    const infoFromServer = await fetchInfo();
    // setPenname(infoFromServer.data.setPenname);
    setDPP("http://localhost:8080/" + infoFromServer.data.profilePic);

    setContact(infoFromServer.data.contact);
    setFirstname(infoFromServer.data.firstname);
    setLastname(infoFromServer.data.lastname);
    setBio(infoFromServer.data.bio);
    setEmail(infoFromServer.data.email);

  };

  // useeffect call
  useEffect(() => {
    getInfo();
  }, []);



  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 ">
        <div className="p-1  ">
              <div className="d-flex align-items-center mb-2 mt-3">
                <p
                  className="bg-secondary h5"
                  style={{ width: "100%", height: "1px" }}
                >
                </p>
                
                <p className="text ms-2 me-1 h4 flex-row"> Edit </p>
                <p className="text h4 me-2">Profile</p>
                <p
                  className="bg-secondary h5"
                  style={{ width: "100%", height: "1px" }}
                ></p>
              </div>
              </div>

          <div className="container bg-white shadow-sm rounded my-1 p-5">
            <form>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="First Name"
                  value={firstname}
                   onChange={(e) => setFirstname(e.target.value)}
                />
                <label for="floatingInput">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Last Name"
                  value={lastname} onChange={(e) => setLastname(e.target.value)}
                />
                <label for="floatingInput">Last Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Contact"
                  value={contact} onChange={(e) => setContact(e.target.value)}
                />
                <label for="floatingInput">Contact</label>
              </div>
              
           
              
              <div className=" mb-3">
              <label for="floatingInput">Profile Picture</label>
                <input
                  type="file"
                  className="form-control"
                  id=""
                  placeholder="Profile Picture"
                onChange={onProfilePicChange}
                  
                />
               
              </div>

              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Bio"
                  id="floatingTextarea2"
                  style={{height:100}}
                  value={bio} 
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <label for="floatingTextarea2">Bio</label>
              </div>

              <div className="my-3 d-flex justify-content-between">
                <div className="">
                  <button className="btn btn-outline-danger " onClick={()=>{navigate('/profile')}} >Discard</button>
                </div>
                <div className=" btn-group">
                  <button className="btn btn-purple text-white" onClick={submitForm}>Save</button>
                </div>
              </div>
            </form>
          </div>




        </div>
        <div className="col-md-4 mb-4 mt-3">
            <div className="p-1 bg-white  py-3" style={{position:'sticky', top:'6em'}}>
              <p className="h5 text text-secondary text-center mb-0">
                Profile Preview
              </p>
              <hr className="container col-md-8 mt-0" />
              <div className="book-details-section mx-3 rounded py-3 text-center">
                <img src={dpp} alt='pp' className='text-center rounded-circle mb-3' height={200} />
                <p className="h6 text-secondary text-center text-danger fs-5">
                  {penname}
                </p>
               <div className='text-center'>
                 <h6 className='text-center'>{firstname} {lastname}</h6>
                 <p className='text-center fw-light mb-0'>Contact: {contact} </p>
                 <p className='text-center fw-light'>Email: {email} </p>
                
                 <p className='text-center fw-light p-2 border rounded-3'>{bio} </p>

               </div>
              </div>

              
             
             
            </div>
            </div>
      </div>
    </div>
  </>
  )
}

export default EditProfile