import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

function AddReleasing() {

  
  const navigate = useNavigate();
  const [bookName, setBookName] = useState('Book name');
  const [bookWriter, setBookWriter] = useState('Book Writer');
  const [category, setCategory] = useState('Category');

  const [releasingDate, setReleasingDate] = useState('2022-01-02');

  const [bookCover, setBookCover] = useState('')

  const changeCategory = (cat) => {
    setCategory(cat)
}

 // to show choosen and existing pic
 const [dbookCover, setDbookCover] = useState("");

 // change bookcover event
 const onBookCoverChange = (event) => {
   if (event.target.files && event.target.files[0]) {
    setDbookCover(URL.createObjectURL(event.target.files[0]));
    setBookCover(event.target.files[0]);
   }
 };


console.log(localStorage.getItem('token'))


const submitForm = (e) => {
    e.preventDefault();
    const config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
    }
    const data = new FormData();
    data.append('bookName', bookName);
    data.append('bookWriter', bookWriter);
    data.append('category', category);
    data.append('releasingDate', releasingDate);
    data.append('bookCover', bookCover);


    axios.post("http://localhost:8080/api/books/add-releasing", data, config).then(result => {
        console.log(result)
        if (result.data.status) {
            toast.success("Request successful.")
            navigate("/releasing")
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
                
                <p className="text ms-2 me-1 h4 flex-row"> Add </p>
                <p className="text h4 me-2"> Releasing </p>
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
                  placeholder="Book Name"
                  value={bookName}
                   onChange={(e) => setBookName(e.target.value)}
                />
                <label for="floatingInput">Book Name</label>
              </div>
              {/* <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="ISBN"
                  value={isbn} onChange={(e) => setIsbn(e.target.value)}
                />
                <label for="floatingInput">ISBN</label>
              </div> */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Book Writer"
                  value={bookWriter} onChange={(e) => setBookWriter(e.target.value)}
                />
                <label for="floatingInput">Book Writer</label>
              </div>
              
              {/* <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Book Price"
                  value={price} onChange={(e) => setPrice(e.target.value)}
                />
                <label for="floatingInput">Book Price</label>
              </div> */}
             
              <div className=" mb-3">
              <label for="floatingInput">Book Cover</label>
                <input
                  type="file"
                  className="form-control"
                  id=""
                  placeholder="Book Cover"
                  onChange={onBookCoverChange}
                />
               
              </div>
              <div className=" mb-3">
              <label for="floatingInput">Releasing Date</label>
                <input
                  type="Date"
                  className="form-control"
                  id=""
                  value={releasingDate} 
                  onChange={(e) => setReleasingDate(e.target.value)}
                />
               
              </div>
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  value={category} 
                  onChange={(event) => changeCategory(event.target.value)}
                >
                  <option selected>Choose category</option>
                  <option value="Story">Story</option>
                  <option value="Novel">Novel</option>
                  <option value="Muktak">Muktak</option>
                </select>
                <label for="floatingSelect">Category</label>
              </div>
              

              <div className="my-3 d-flex justify-content-between">
                <div className="">
                  <button className="btn btn-outline-danger " onClick={()=>{navigate('/releasing')}} >Discard</button>
                </div>
                <div className=" btn-group">
                  <button className="btn btn-purple text-white" onClick={submitForm}>Save</button>
                </div>
              </div>
            </form>
          </div>




        </div>
        <div className="col-md-4 mb-4 mt-3">
            <div className="p-1 bg-white  py-3">
              <p className="h5 text text-secondary text-center mb-0">
                Sample Preview
              </p>
              <hr className="container col-md-8 mt-0" />
              <div className="book-details-section mx-3 bg-light rounded py-3">
                <div className="d-flex justify-content-center">
                <img  src={dbookCover} alt='bookCover' className='text-center' height={200}/>
               
                </div>
                <p className="h5 mt-1 text-secondary text-center">
                  {bookName} ({category})
                </p>
                <p className="h6 text-secondary text-center">
                  {bookWriter} 
                </p>
                <p className='text-white bg-purple p-2 text-center'> Releasing on: {releasingDate}</p>
              </div>
              <hr />
            </div>
            </div>
      </div>
    </div>
  </>
  )
}

export default AddReleasing