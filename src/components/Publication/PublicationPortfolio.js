import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BooksAwards from '../Portfolio/BooksAwards'
import PublicationInfo from './PublicationInfo'


function PublicationPortfolio() {

    const [books, setBooks] = useState([])

    useEffect(() => {
      const getBooks = async () => {
        const booksFromServer = await fetchBooks()
        setBooks(booksFromServer.data)
      }
      getBooks()
    }, [])
  
    const config = {
      headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
      }
  }
  
    // Fetch Books
    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:8080/api/books/added-books/'+ localStorage.getItem("_id"),config)
      return res.data
    }
  


    const [awardDiv, setAwardDiv] = useState(true);
    const [adsDiv, SetAdsDiv] = useState(false);
    return (
      <>
        <div className="container-fluid">
          <div className="container col-md-12">
            <div className="row">
              <div className="col-md-8 px-0">
                <div className="py-1 my-2 px-0 ms-0 me-1 bg-white">
                  <div className="d-flex justify-content-between align-items-center">
                    {awardDiv ? (
                      <div className="p-2">
                        <h4>Books & awards</h4>
                        <hr />
                        
                        

                      </div>

                    ) : null}
                    {adsDiv ? (
                      <div className="p-2">
                        <h4>Advertisements</h4>
                        <hr />
                    
                      </div>
                    ) : null}
                    <div className="btn-group p-2" role="group">
                      <button
                        type="button"
                        onClick={() => {
                          setAwardDiv(true);
                          SetAdsDiv(false);
                        }}
                        className={
                          awardDiv
                            ? "btn btn-danger btn-sm"
                            : "btn btn-outline-danger btn-sm"
                        }
                      >
                        Books
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          SetAdsDiv(true);
                          setAwardDiv(false);
                        }}
                        className={
                          adsDiv
                            ? "btn btn-danger btn-sm"
                            : "btn btn-outline-danger btn-sm"
                        }
                      >
                        Ads
                      </button>
                    </div>
                  </div>
                  {adsDiv ? (
                    <div className="p-2">
                       <p>Ads here</p>
                     
                    </div>
                  ) : null}
                  {awardDiv ? (
                    <>
                    <div className="row p-1">
                    {books.map((book, index) => (
                <BooksAwards key={index} book={book} />

              ))}
                      
                      
                   
  
               
                      
                  
                    </div>
                    <div className="p-3">
                    <div className="d-flex align-items-center  mb-3">
                    <p
                      className="bg-secondary h5"
                      style={{ width: "100%", height: "1px" }}
                    ></p>
                    <p className="text mx-2 h5">Awards</p>
                    
                    <p
                      className="bg-secondary h5"
                      style={{ width: "100%", height: "1px" }}
                    ></p>
                    
                  </div>
                  <h5 className='text-center'>No awards till now.</h5>

                     
               
                    </div>
                    </>
                  ) : null}
                </div>
              </div>
              <div className="col px-0"  >
               <PublicationInfo/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  


export default PublicationPortfolio