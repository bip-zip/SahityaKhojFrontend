import React, { useEffect, useState } from 'react'
import SingleResult from './SingleResult'
import { useParams } from 'react-router-dom';
import axios from 'axios';


function Results() {
   // getting value from params
   const {query}=useParams();
   const [books, setBooks] = useState([])

   // getting data from the server
   const getBooks = async () => {
    const booksFromServer = await fetchBooks()
       setBooks(booksFromServer.data)
   }

   // useEffect hook
   useEffect(() => {
    getBooks()
   }, [])

   // Fetch destinations
   const fetchBooks = async () => {
    const res = await axios.get('http://localhost:8080/api/books/search/'+query)
    return res.data
  }

    return (
        <>
            <div className='container mt-2 mx-auto '>
                <h3 className='text-center'>Results for "<span className='text-danger'>{query}</span>" </h3>
                <p className=' text-right'>{books.length} results found</p>
                <hr/>

                <div className="card py-2 px-2 border-white">
          <table className="table-striped">
            <thead
              className="border-danger rounded text-center "
              style={{ borderBottom: "1px solid" }}
            >
              <tr className='my-2'>
              <th scope="col">Book Cover</th>
              <th scope="col">Book Name</th>
              <th scope="col">Book Writer</th>
              <th scope="col">Book Publication</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              </tr>
            </thead>
            {/* first items */}
            {books.map((book, index) => (
                <SingleResult key={index} book={book} />

              ))}

            
           
          </table>
        </div>


                <div >
               

                   


                </div>



            </div>



        </>
    )
}

export default Results