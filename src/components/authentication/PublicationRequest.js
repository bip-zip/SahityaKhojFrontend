import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
// import prequest from '../../statics/prequest.png'


function PublicationRequest() {
  const navigate= useNavigate();
  const [publicationName, setPublicationName] = useState('');
  const [email, setEmail] = useState('');
  const [companyReg, setCompanyReg] = useState('');
  const [pan, setPan] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [successmsg, setSuccess]=useState('Fill up the form carefully.');

  const submitForm = (e) => {
    e.preventDefault();
    // const config = {
    //     headers: {
    //         Authorization: "Bearer " + localStorage.getItem('token')
    //     }
    // }
    const data = new FormData();
    data.append('name', publicationName);
    data.append('email', email);
    data.append('pan', pan);
    data.append('address', address);
    data.append('contact', contact);
    data.append('companyReg', companyReg);


    axios.post("http://localhost:8080/api/publications/publication-request", data).then(result => {
        console.log(result)
        if (result.data.status) {
            toast.success("Book request successful.")
            // navigate("/all-books")
            setSuccess("Request successful. You'll get an email after verification.")
        }
        else {
            toast.error(result.data.message)
        }
    }).catch(e => {
        toast.error("Something went wrong!!")
    })

}


  return (
   <>
    <div className='container '>
            <div className='row'>
                <div className='col my-4'>
                <h3 className='p-4 fw-lighter text-center '>Publication Request | <span className="fs-4 fw-light " >Sahitya <span className='text-danger'>Khoj</span> <i className="fas fa-feather-alt"></i></span></h3>

                  <img className='img-fluid' alt='image' src='/images/prequest.png' />
            
                </div>
                <div className='col  rounded my-5 '>
                    <h3 className='p-2 fw-lighter text-center '>{successmsg}</h3>
                   
                   <form className='p-4'>
                   <div className="form-floating mb-3">
                        <input type="email"  value={publicationName} onChange={(e)=>setPublicationName(e.target.value)} className="form-control" id="floatingInput" placeholder="Your unique id" />
                        <label for="floatingInput">Publication Name*</label>
                    </div>
                   <div className="form-floating mb-3">
                        <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="floatingeInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address*</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text"  value={contact} onChange={(e)=>setContact(e.target.value)} className="form-control" id="floatingPassword" placeholder="Contact" />
                        <label for="floatingPassword">Contact*</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text"  value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" id="floatingcPassword" placeholder="Address" />
                        <label for="floatingPassword">Address*</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text"  value={pan} onChange={(e)=>setPan(e.target.value)} className="form-control" id="floatingcPassword" placeholder="PAN/VAT No." />
                        <label for="floatingPassword">PAN/VAT No.*</label>
                    </div>
                    <div className=" mb-3">
                <label for="floatingInput">Company Registered Document</label>
                  <input
                    type="file"
                    className="form-control"
                    id=""
                    placeholder="Company Registered Document"
                    onChange={e => { setCompanyReg(e.target.files[0]) }}
                  />
                  <small className='text-secondary text-left'>Note: File size should be below 500kb.</small>
                 
                </div>

                    <div className='mb-2 mt-4 d-flex justify-content-center'>
                        <button className='btn btn-danger col-lg-4'
                        onClick={submitForm}>
                            Request
                        </button>
                    </div>
                   </form>
                   <div className='mt-2 mb-2 text-center '>
                       <span>Already requested? <Link className='text-decoration-none' to='/register'>Login here.</Link></span><br/>
                       <Link className='text-decoration-none' to='/register' >Need help?</Link>
                   </div>

                </div>
               

            </div>

        </div>
   </>
  )


}


export default PublicationRequest