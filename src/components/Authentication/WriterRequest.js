
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

function WriterRequest() {
    const navigate= useNavigate();
    const [name, setName] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [bookName, setBookName] = useState('');
    const [bookPublisher, setBookPublisher] = useState('');
    
    const [successmsg, setSuccess]=useState("You are requesting for writer's portfolio.");
  
    const submitForm = (e) => {
      e.preventDefault();
      const config = {
          headers: {
              Authorization: "Bearer " + localStorage.getItem('token')
          }
      }
      const data = new FormData();
      data.append('name', name);
      data.append('citizenship', citizenship);
      data.append('bookName', bookName);
      data.append('bookPublisher', bookPublisher);

  
      axios.post("http://localhost:8080/api/writers/writer-request", data, config).then(result => {
          console.log(result)
          if (result.data.status) {
              toast.success("Writer request successful.")
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
                  <h3 className='p-4 fw-lighter text-center '>Writer Request | <span className="fs-4 fw-light " >Sahitya <span className='text-danger'>Khoj</span> <i className="fas fa-feather-alt"></i></span></h3>
  
                    <img className='img-fluid' alt='image' src='/images/writerreq.png' />
              
                  </div>
                  <div className='col  rounded my-5 '>
                      <h3 className='p-2 fw-lighter text-center '>{successmsg}</h3>
                     
                     <form className='p-4'>
                     <div className="form-floating mb-3">
                          <input type="email"  value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="floatingInput" placeholder="Actual Name" />
                          <label for="floatingInput">Full Name*</label>
                      </div>
                      <div className=" mb-3">
                  <label for="floatingInput">Citizenship photo</label>
                    <input
                      type="file"
                      className="form-control"
                      id=""
                      placeholder="Citizenship photo"
                      onChange={e => {setCitizenship(e.target.files[0]) }}
                    />
                    <small className='text-secondary text-left'>Note: Both sides must be included in one picture.</small>
                   
                  </div>
                  <hr/>
                  <p className='h5 mb-4 text-center'> Your published book details.</p>
                     <div className="form-floating mb-3">
                          <input type="email"  value={bookName} onChange={(e)=>setBookName(e.target.value)} className="form-control" id="floatingeInput" placeholder="name@example.com" />
                          <label for="floatingInput">Book Name*</label>
                      </div>
                      <div className="form-floating mb-3">
                          <input type="text"  value={bookPublisher} onChange={(e)=>setBookPublisher(e.target.value)} className="form-control" id="floatingPassword" placeholder="Contact" />
                          <label for="floatingPassword">Book Publisher*</label>
                      </div>
                     
                     
                     
  
                      <div className='mb-2 mt-4 d-flex justify-content-center'>
                          <button className='btn btn-danger col-lg-4'
                          onClick={submitForm}>
                              Request
                          </button>
                      </div>
                     </form>
                     <div className='mt-2 mb-2 text-center '>
                         {/* <span>Already requested? <Link className='text-decoration-none' to='/register'>Login here.</Link></span><br/> */}
                         <Link className='text-decoration-none' to='/register' >Need help?</Link>
                     </div>
  
                  </div>
                 
  
              </div>
  
          </div>
     </>

)}

export default WriterRequest