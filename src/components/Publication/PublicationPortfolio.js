import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdComponent from "../Ads/AdComponent";
import BooksAwards from "../Portfolio/BooksAwards";
import SingleRelease from "../Releasing/SingleRelease";
import PublicationAwards from "./PublicationAwards";
import PublicationInfo from "./PublicationInfo";

function PublicationPortfolio() {
  const [books, setBooks] = useState([]);
  const [releases, setRelease] = useState([]);
  const pubId = localStorage.getItem("_id");

  const getRelease = async () => {
    const releaseFromServer = await fetchRelease();
    setRelease(releaseFromServer.data);
  };
  const getBooks = async () => {
    const booksFromServer = await fetchBooks();
    setBooks(booksFromServer.data);
  };

  useEffect(() => {
    getBooks();
    getRelease();
  }, []);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  // Fetch Books
  const fetchBooks = async () => {
    const res = await axios.get(
      "http://localhost:8080/api/books/added-books/" +
        localStorage.getItem("_id"),
      config
    );
    return res.data;
  };
  // Fetch Release
  const fetchRelease = async () => {
    const res = await axios.get(
      "http://localhost:8080/api/books/ind-release/" +
        localStorage.getItem("_id"),
      config
    );
    return res.data;
  };

  const [awardDiv, setAwardDiv] = useState(true);
  const [adsDiv, SetAdsDiv] = useState(false);
  return (
    <>
      <div className="container-fluid">
        <div className="container col-md-12">
          <div className="row">
            <div className="col-md-8 px-0">
              <div className="py-1 my-2 px-0 ms-0 me-1 ">
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
                    <div className=" p-3  ">
                      {releases.length>0?<>{releases.map((release, index) => (
                        <SingleRelease
                          key={index}
                          release={release}
                          getRelease={getRelease}
                        />
                      ))}</>:<div className='bg-white p-3 text-center'>
                      <img className='mt-3 text-center '  alt="image" src="https://i.pinimg.com/originals/f3/be/1b/f3be1b55efcf32cca0476638e6e6bcdb.gif" height={250} />
                    <h5 className='text-center  p-1 '>No releases.
                    <p className='text-center mt-3'> 
                    <Link className="btn btn-danger btn-sm" to="/add-releasing">Add releasing post</Link>
  
                    </p>
                    </h5>
                      </div>}
                    </div>
                  </div>
                ) : null}
                {awardDiv ? (
                  <>
                    {books.length>0?<div className="row p-1 mx-2">
                      {books.map((book, index) => (
                        <BooksAwards key={index} book={book} />
                      ))}
                    </div>:<div className='bg-white p-3 text-center'>
                    <img className='mt-3 text-center '  alt="image" src="https://i.pinimg.com/originals/f3/be/1b/f3be1b55efcf32cca0476638e6e6bcdb.gif" height={250} />
                  <h5 className='text-center  p-1 '>No added books.
                  <p className='text-center mt-3'> 
                  <Link className="btn btn-danger btn-sm" to="/add-books">Request book</Link>

                  </p>
                  </h5>
                    </div>}
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

                      <PublicationAwards pubId={pubId} />
                    </div>
                  </>
                ) : null}
              </div>
            </div>
            <div className="col px-0">
              <PublicationInfo pubId={pubId} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PublicationPortfolio;
