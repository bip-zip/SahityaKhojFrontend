import React from 'react'
import dateFormat from 'dateformat';
import BookModal from '../Book/BookModal';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';


import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


function SingleBookItem({book, getBooks}) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem('token')
    }
  }
  // delete post
  const deleteBook = () => {
    axios.delete('http://localhost:8080/api/books/delete/' + book._id, config).then(result => {
      if (result.data.success) {
        toast.success("Book deleted")

        getBooks();

      } else {
        toast.error("Something went wrong")

      }
    })

  }
  
  // delete post
  const deleteBookConfirm = () => {
    return (
      confirmAlert({
        title: 'Confirm',
        message: 'Are you sure to delete?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => deleteBook(book._id)
          },
          {
            label: 'No',
            onClick: () => {}
          }
        ]
      })
  )


  }
  return (
    <>
     <tr className='text-center'>
                  
                      <td> <img  data-bs-toggle="modal" data-bs-target={"#exampleModal"+book._id}  className='img' alt="book cover" src={"http://localhost:8080/" + book.bookCover} height={100} /></td>
                      <td>{book.bookName}</td>
                      <td>{dateFormat(book.createdDate,"dS mmmm , yyyy")}</td>
                      <td>{(book.approved)?<i className='fa fa-circle-check text-success'></i>:<i className='fa fa-circle-xmark text-danger'></i>}
                        
                      </td>
                      
                      <td>
                      <button className="btn btn-danger btn-sm my-2" onClick={deleteBookConfirm}>Delete</button>
                      &nbsp; &nbsp;
                        <Link className="btn btn-purple text-white btn-sm my-2" to={"/edit-book/"+book._id}>Edit</Link>
                        
                        
                      </td>
                    </tr>
                    <BookModal book={book} />
    </>
  )
}

export default SingleBookItem