import React from 'react'


function ChooseCategory({changeCategory, category}) {
    const categories= [
        "Jigyasha",
        "Kabita",
        "Muktak",
        "Story",
        "HasyaByanga",
        "Geet",
        "Gajal"
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

export default ChooseCategory