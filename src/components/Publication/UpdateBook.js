import React from 'react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom'
function UpdateBook() {
   
        const { feedId } = useParams();
        const navigate = useNavigate();
        const [title, setTitle] = useState('Title');
        const [category, setCategory] = useState('category');
        const [content, setContent] = useState('Content...');
      
        const changeCategory = (cat) => {
          setCategory(cat)
      }
    
      useEffect(()=>{
          getPosts()
      },[])
    //   get post
const getPosts=()=>{
    axios.get("http://localhost:8080/api/update-book" + feedId).then(result => {
        if (result.data.status) {
            setTitle(result.data.data.title)
            setCategory(result.data.data.category)
            setContent(result.data.data.content)
        }
        else {
            toast.error("Something went wrong!!")
        }
    }).catch(e => {
        toast.error("Something went wrong!!")
    })
}
  
  console.log(localStorage.getItem('token'))
  return (
    <div>UpdateBook</div>
  )
}

export default UpdateBook