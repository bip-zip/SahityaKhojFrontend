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

    return (
        <div className="star-rating text-center">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (

                    <button
                        title={index + " star"}
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        //   onClick={() => setRating(index)}
                        onClick={() => { saveRating(index) }}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                        style={{
                            "backgroundColor": "transparent",
                            "border": "none",
                            "outline": "none",
                            "cursor": "pointer"
                        }}
                    >
                        {/* <span className="star">&#9733;</span> */}
                        <span class="fa fa-star  fs-5"></span>
                    </button>

                );
            })}
            <p className=' h6 text-secondary'>Rate this book</p>

        </div>
    );








}

export default StarRating