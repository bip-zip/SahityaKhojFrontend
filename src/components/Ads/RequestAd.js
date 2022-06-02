import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

function RequestAd() {

    const navigate = useNavigate();
    const [title, setTitle] = useState('Ads title');
    const [content, setContent] = useState('Ads content');
    const [link, setLink] = useState('');


    const [picture, setPicture] = useState('')

 

    // to show choosen and existing pic
    const [dpicture, setDpicture] = useState("");

    // change picture event
    const onBookCoverChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setDpicture(URL.createObjectURL(event.target.files[0]));
            setPicture(event.target.files[0]);
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
        data.append('title', title);
        data.append('content', content);
        data.append('link', link);
        data.append('picture', picture);


        axios.post("http://localhost:8080/api/ads/add", data, config).then(result => {
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

                                <p className="text ms-2 me-1 h4 flex-row"> Request </p>
                                <p className="text h4 me-2"> Ads </p>
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
                                        placeholder="Ads Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                    <label for="floatingInput">Ads Title</label>
                                </div>
                                
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="Ads Content"
                                        value={content} onChange={(e) => setContent(e.target.value)}
                                    />
                                    <label for="floatingInput">Ads Content</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="Link"
                                        value={link} onChange={(e) => setLink(e.target.value)}
                                    />
                                    <label for="floatingInput">Link</label>
                                </div>

                               

                                <div className=" mb-3">
                                    <label for="floatingInput">Picture</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id=""
                                        placeholder="Picture"
                                        onChange={onBookCoverChange}
                                    />

                                </div>
                               
                                


                                <div className="my-3 d-flex justify-content-between">
                                    <div className="">
                                        <button className="btn btn-outline-danger " onClick={() => { navigate('/releasing') }} >Discard</button>
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
                                    <img src={dpicture} alt='picture' className='text-center' height={200} />

                                </div>
                                <p className="h5 mt-1 text-secondary text-center">
                                    {title}
                                </p>
                                <p className="h6 text-secondary text-center">
                                    {content}
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

export default RequestAd