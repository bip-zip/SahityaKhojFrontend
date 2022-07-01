import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function StarRating({bookId}) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

            //  config
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

    const saveRating = (ratingValue) => {
        setRating(ratingValue)
        const data={
            "bookId":bookId,
            "star":ratingValue
        }



        axios
            .post("http://localhost:8080/api/ratings/rate", data, config)
            .then((result) => {
                console.log(result);
                if (result.data.success) {
                    toast.success(result.data.message);
            
                } else {
                    toast.error("Something went wrong");
                }
            })
            .catch((e) => {
                toast.error("Something went wrong!!");
            });

    }

  








}

export default StarRating