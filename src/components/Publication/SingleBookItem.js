import React from 'react'
import dateFormat from 'dateformat';
import BookModal from '../Book/BookModal';

function SingleBookItem({book}) {
  return (
    <>
     <tr className='text-center'>
                  
                      <td> <img  data-bs-toggle="modal" data-bs-target={"#exampleModal"+book._id}  className='img' alt="book cover" src={"http://localhost:8080/" + book.bookCover} height={100} /></td>
                      <td>{book.bookName}</td>
                      <td>{dateFormat(book.createdDate,"dS mmmm , yyyy")}</td>
                      <td>{(book.approved)?<i className='fa fa-circle-check text-success'></i>:<i className='fa fa-circle-xmark text-danger'></i>}
                        
                      </td>
                      
                      <td>
                      <button className="btn btn-danger btn-sm my-2">Delete</button>
                      &nbsp; &nbsp;
                        <button className="btn btn-purple text-white btn-sm my-2">Edit</button>
                        
                        
                      </td>
                    </tr>
                    <BookModal book={book} />
    </>
  )
}

export default SingleBookItem