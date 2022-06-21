import React from 'react'

function UpdateBook() {
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