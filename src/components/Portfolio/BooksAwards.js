import React from "react";
import BookModal from "../Book/BookModal";

function BooksAwards({book}) {
  return (<>
      <div className="col-md-3 col-sm-6 col-6 col-lg-3">
        <button
          className="btn"
          data-bs-toggle="modal"
          data-bs-target={"#exampleModal"+book._id}
        >
          <div className="p-1 d-flex justify-content-around mb-3">
            <img
              src={"http://localhost:8080/" + book.bookCover}
              className=""
              alt=""
              height={190}
              style={{ objectFit: "cover" }}
            />
          </div>
        </button>
      </div>

    <BookModal book={book}/>
   </>
  );
}

export default BooksAwards;
