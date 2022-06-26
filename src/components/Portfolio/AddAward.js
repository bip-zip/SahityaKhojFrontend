import React from 'react'
import AddAwardModal from './AddAwardModal'

function AddAward({awards, getInfo}) {
    console.log(awards)



  return (
  <>
 
  
  {awards.map((award, index) => (
       <div className='shadow-sm p-3 mb-3'>
       <h5 className=''>
          {award.awardName} {award.date}
 
       </h5>
       <p>
           {award.description}
       </p>
 
   </div>
                

              ))}




  <div className='d-flex justify-content-center'>
  <button type="button" class="btn btn-purple text-white btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModaladdaward">
                Add award
            </button> 
  </div>
            <AddAwardModal getInfo={getInfo}/>
  </>
  )
}

export default AddAward