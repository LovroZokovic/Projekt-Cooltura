import React, {useState} from "react";
import { FaStar} from "react-icons/fa";

const RatingStars = () => {
    const[rating, setRating] = useState(null);
    const[hover, setHover] = useState(null);

    return(
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input
                            style={{display: "none"}}
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                            className="star"
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            size={50}
                        />
                    </label>
                );
            })}
        </div>
    );
}

export default RatingStars