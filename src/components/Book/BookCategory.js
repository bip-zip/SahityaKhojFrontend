import React from 'react'

function BookCategory({changeCategory, category}) {
    const categories= [
        "Novel",
        "History",
        "Muktak",
        "Story",
        "Dictionary",
        "Encyclopedia",
        "Regilious",
        "Research",
        "Culture",
        "Self-Help",
        "Poem"
    ]
  return (
    <div className="form-floating mb-3">
    <select
      className="form-select"
      id="category"
      aria-label="Floating label select example"
      value={category} 
      onChange={(event) => changeCategory(event.target.value)}
    >
      <option selected>Choose category</option>
      {categories.map((cat, index) => (
                <option value={cat} key={index} >{cat}</option>
              ))}  
    </select>
    <label for="category">Category</label>
  </div>
  )
}

export default BookCategory