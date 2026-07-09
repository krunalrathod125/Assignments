import { useState } from "react";

function Rating() {
  const [rating, setRating] = useState(0);

  return (
    <div>
        <h1 className="text-3xl mt-5">4. Zomato Rating Selector</h1>
      <h2 className="text-2xl mt-2">Rate Us</h2>

      <span onClick={() => setRating(1)} className="text-2xl">
        {rating >= 1 ? "⭐" : "☆"}
      </span>

      <span onClick={() => setRating(2)} className="text-2xl">
        {rating >= 2 ? "⭐" : "☆"}
      </span>

      <span onClick={() => setRating(3)} className="text-2xl">
        {rating >= 3 ? "⭐" : "☆"}
      </span>

      <span onClick={() => setRating(4)} className="text-2xl">
        {rating >= 4 ? "⭐" : "☆"}
      </span>

      <span onClick={() => setRating(5)} className="text-2xl">
        {rating >= 5 ? "⭐" : "☆"}
      </span>

      <h3 className="text-2xl">Your Rating: {rating}</h3>
    </div>
  );
}

export default Rating;