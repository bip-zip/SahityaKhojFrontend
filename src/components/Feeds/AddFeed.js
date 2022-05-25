import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

function AddFeed() {
    const navigate = useNavigate();
  const [title, setTitle] = useState('Title');
  const [category, setCategory] = useState('category');
  const [content, setContent] = useState('Content...');

  const changeCategory = (cat) => {
    setCategory(cat)
}

console.log(localStorage.getItem('token'))


const submitForm = (e) => {
    e.preventDefault();
    const config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
    }
    // const data = new FormData();
    // data.append('title', title);
    // data.append('content', content);
    // data.append('category', category);

    const data = {
        "title":title,
        "content":content,
        "category":category
    }
   


    axios.post("http://localhost:8080/api/feeds/add", data, config).then(result => {
        console.log(result)
        if (result.data.status) {
            toast.success("Post added")
            navigate("/feeds")
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
                  <p className="text h4 me-2">Post</p>
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
                    placeholder="Title"
                    value={title}
                     onChange={(e) => setTitle(e.target.value)}
                  />
                  <label for="floatingInput">Title</label>
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
                
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Content"
                    id="floatingTextarea2"
                    style={{height:150}}
                    value={content} 
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                  <label for="floatingTextarea2">Content</label>
                </div>

                <div className="my-3 d-flex justify-content-between">
                  <div className="">
                    <button className="btn btn-outline-danger " onClick={()=>{navigate('/')}} >Discard</button>
                  </div>
                  <div className=" btn-group">
                    <button className="btn btn-purple text-white" onClick={submitForm}>Add</button>
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
              
                  <p className="h5 text-secondary text-center">
                    {title} - {category} <hr/>
                    
                    <span className='h6 p-2'>{content}</span>
                  </p>
                  
                 
                </div>
                <hr />
                
               
               
              </div>
              </div>
        </div>
      </div>
    </>
  )
}

export default AddFeed