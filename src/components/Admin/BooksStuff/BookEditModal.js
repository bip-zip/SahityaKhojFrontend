import React, { useState } from 'react'
import dateFormat from 'dateformat';
import axios from 'axios';
import toast from 'react-hot-toast';



function BookEditModal({ book, getBooks }) {
  const [approved, setApproved] = useState(book.approved)

  const bookVerification = (e) => {
    e.preventDefault();
    const config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
    }
    const data={
      "bookid":book._id,
      'approved':approved
    }


    axios.put("http://localhost:8080/api/books/verify", data, config).then(result => {
        console.log(result)
        if (result.data.status) {
            toast.success("Book successfully updated.")
            getBooks();

            
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
      <div className="modal fade" id={"exampleModal" + book._id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"><strong>{book.bookName}</strong> <span className='fw-light'>by</span> {book.bookWriter}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='d-flex justify-content-center'>

                <img className='' alt="book cover" src={"http://localhost:8080/" + book.bookCover} height={300} />
              </div>
              <hr />
              
              <p className='h6'>Publication: {book.publication}</p>
              <p className='h6'>Category: {book.category}</p>
              <p className='h6'>ISBN: {book.isbn}</p>

              <p className='h6'>Price: {book.price}</p>
              <p className='h6'>Published Date: {dateFormat(book.publishedDate, "dS mmmm , yyyy")}</p>
              <hr />
              <p className='h6'>Abstract: </p>

              <p className='fw-light'>
                {book.abstract}
              </p>
        
              <hr/>

              <div class="form-check">
  <input class="form-check-input" type="checkbox"  id="flexCheckDefault"  checked={approved}
   onChange={() => {
      setApproved(!approved)
   }} />
  <label class="form-check-label" for="flexCheckDefault">
    Verification
  </label>
</div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Discard</button>
              <button type="button" class="btn btn-purple text-white btn-sm" onClick={bookVerification}>Save changes</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default BookEditModal