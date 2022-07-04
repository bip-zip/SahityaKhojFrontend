import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AddAwardModal({addAwards, awardname, desc, date, setAwardName, setDate, setDesc}) {

    const navigate = useNavigate();



    return (
        <>



            <div class="modal fade" id="exampleModaladdaward" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Award</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Award Name</label>
                                    <input type="text" class="form-control" value={awardname} onChange={e=>{setAwardName(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Awarded Date</label>
                                    <input type="number" max='3000' value={date} onChange={e=>{setDate(e.target.value)}}  maxLength='4' class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Award Description</label>
                                    <textarea class="form-control" value={desc} onChange={e=>{setDesc(e.target.value)}}  id="exampleInputPassword1" />
                                    <div id="emailHelp" class="form-text">Description of the award.</div>

                                </div>


                            </form>



                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-purple text-white btn-sm" onClick={addAwards}  >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddAwardModal