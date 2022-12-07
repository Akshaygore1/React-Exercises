import React from "react";
import "./card.css";

function CardComp() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <img
            src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
            alt="rover"
          />
        </div>
        <div className="card-body">
          <span className="tag tag-teal">Price</span>
          <h4>Title</h4>
          <p>Discription</p>
        </div>
      </div>
    </div>
  );
}

export default CardComp;
