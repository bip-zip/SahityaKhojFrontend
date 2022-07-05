
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';
import SelectPublication from './SelectPublication';
import BookCategory from '../Book/BookCategory';

function UpdateBook() {
    const {bookId} = useParams();
    const navigate = useNavigate();
    const [bookName, setBookName] = useState('Book Title');
    const [bookWriter, setBookWriter] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [isbn, setIsbn] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [abstract, setAbstract] = useState('Abstract here...');

    const [bookCover, setBookCover] = useState('')
    const [publication, setPublication] = useState('')
    const [dpublication, setDPublication] = useState('')

    // to show choosen and existing pic
    const [dbookCover, setDbookCover] = useState("");

    // change bookcover event
    const onBookCoverChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setDbookCover(URL.createObjectURL(event.target.files[0]));
            setBookCover(event.target.files[0]);
        }
    };

    const changeCategory = (cat) => {
        setCategory(cat)
    }
    const changePublication = (pub, dpub) => {
        setPublication(pub)
        setDPublication(dpub)
    }

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
        data.append('price', price);
        data.append('category', category);
        data.append('isbn', isbn);
        data.append('abstract', abstract);
        data.append('publishedDate', publishedDate);
        data.append('bookCover', bookCover);
        data.append('publication', publication);


        axios.put("http://localhost:8080/api/books/update/"+bookId, data, config).then(result => {
            console.log(result)
            if (result.data.status) {
                toast.success("Book update successful.")
                navigate("/all-books")
            }
            else {
                toast.error("Something went wrong!!")
            }
        }).catch(e => {
            toast.error("Something went wrong!!")
        })

    }

    useEffect(() => {
        const getBooks = async () => {
          const booksFromServer = await fetchBooks()
          setBookName(booksFromServer.data.bookName)
          setBookWriter(booksFromServer.data.bookWriter)
          setPrice(booksFromServer.data.price)
          setPublishedDate(booksFromServer.data.publishedDate)
          setCategory(booksFromServer.data.category)
          setIsbn(booksFromServer.data.isbn)
          setPublication(booksFromServer.data.publication)
          setDPublication(booksFromServer.data.publication)
          setBookCover(booksFromServer.data.bookCover);
          setDbookCover("http://localhost:8080/"+booksFromServer.data.bookCover);
          setAbstract(booksFromServer.data.abstract);
        }
        getBooks()
      }, [])
    
      // Fetch Books
      const fetchBooks = async () => {
        const res = await axios.get('http://localhost:8080/api/books/book/'+bookId)
        console.log(res.data)
        return res.data
      }

      const onSetDate = (event) => {
        setPublishedDate(event.target.value)
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

                                <p className="text ms-2 me-1 h4 flex-row"> Update </p>
                                <p className="text h4 me-2">Books</p>
                                <p
                                    className="bg-secondary h5"
                                    style={{ width: "100%", height: "1px" }}
                                ></p>
                            </div>
                        </div>

                        <div className="container bg-white shadow-sm rounded my-1 p-5">
                            <form id="uBookForm">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="bookname"
                                        placeholder="Book Name"
                                        value={bookName}
                                        onChange={(e) => setBookName(e.target.value)}
                                    />
                                    <label for="bookname">Book Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="isbn"
                                        placeholder="ISBN"
                                        value={isbn} onChange={(e) => setIsbn(e.target.value)}
                                    />
                                    <label for="isbn">ISBN</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="writer"
                                        placeholder="Book Writer"
                                        value={bookWriter} onChange={(e) => setBookWriter(e.target.value)}
                                    />
                                    <label for="writer">Book Writer</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="price"
                                        placeholder="Book Price"
                                        value={price} onChange={(e) => setPrice(e.target.value)}
                                    />
                                    <label for="price">Book Price</label>
                                </div>
                                {/* <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Publication"
                />
                <label for="floatingInput">Publication</label>
              </div> */}
                                <div className=" mb-3">
                                    <label for="pdate">Book Cover</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="files"
                                        placeholder="Book Cover"
                                        onChange={onBookCoverChange}

                                    />

                                </div>
                                <div className=" mb-3">
                                    <label for="pdate">Published Date</label>
                                    <input
                                        type="Date"
                                        className="form-control"
                                        id=""
                                        value={publishedDate}
                                        onChange={onSetDate}
                                    />

                                </div>
                <BookCategory category={category} changeCategory={changeCategory} />
                               
                                <SelectPublication spublication={publication} dpublication={dpublication} changePublication={changePublication} />


                                <div className="form-floating">
                                    <textarea
                                        className="form-control"
                                        placeholder="Abstract"
                                        id="abstract"
                                        style={{ height: 100 }}
                                        value={abstract}
                                        onChange={(e) => setAbstract(e.target.value)}
                                    ></textarea>
                                    <label for="abstract">Abstract</label>
                                </div>

                                <div className="my-3 d-flex justify-content-between">
                                    <div className="">
                                        <button className="btn btn-outline-danger"  onClick={() => { navigate('/all-books') }} >Discard</button>
                                    </div>
                                    <div className=" btn-group">
                                        <button className="btn btn-purple text-white" id="submitBtn" onClick={submitForm}>Update</button>
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
                            <div className="book-details-section mx-3 bg-light rounded py-3 text-center">
                                <img src={dbookCover} alt='image' className='text-center' height={200} />
                                <p className="h6 text-secondary text-center">

                                </p>
                                <div className='text-center'>
                                    <h6 className='text-center'>{bookName}</h6>
                                    <p className='text-center fw-light'>Book Writer: {bookWriter} </p>
                                    <p className='text-center fw-light'>Category: {category} </p>
                                    <p className='text-center fw-light'>ISBN: {isbn} </p>
                                    <p className='text-center fw-light'>Price: Rs. {price} </p>
                                    <p className='text-center fw-light'>Publication: {dpublication} </p>
                                    <p className='text-center fw-light'>Release Date: {publishedDate} </p><hr />
                                    <p className='text-center fw-light p-2'>{abstract} </p>

                                </div>
                            </div>
                            <hr />



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateBook