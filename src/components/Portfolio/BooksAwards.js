import React from "react";
import BookModal from "../Book/BookModal";

function BooksAwards({ book }) {
  return (<>

    
        <div className="col-md-3 mb-5" data-bs-toggle="modal"
      data-bs-target={"#exampleModal" + book._id}>
          <div
            className="shadow-sm bg-white"
            style={{
              borderRadius: "10px",
            }}
          >
            <img
              src={"http://localhost:8080/" + book.bookCover}
              className=""
              alt=""
              style={{
                width: "100%",
                height: "auto",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
              }}
            />
            <div className="text-section mx-2 pt-2 pb-1">
              <p className="text text-secondary fw-bold mb-0" style={{fontSize:"0.8em"}} >
                {book.bookName}
              </p>
              <small className="text text-info d-block mt-0" style={{fontSize:"0.8em"}}>{book.bookWriter}</small>
            </div>
          </div>
        </div>
     

    <BookModal book={book} />
  </>
  );
}

export default BooksAwards;
