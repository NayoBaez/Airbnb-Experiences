import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      {props.card.openSpots === 0 && (
        <div className="card--badge">SOLD OUT</div>
      )}
      <img
        src={`../images/${props.card.coverImg}`}
        alt="experience-img"
        className="card--image"
      />
      <div className="card--stats">
        <span>
          {" "}
          <img src="../images/star.png" className="card--star" alt="star" />
        </span>
        <span className="card--rating">{props.card.stats.rating}</span>
        <span className="card--reviewcount">
          ({props.card.stats.reviewCount}) •{" "}
        </span>
        <span className="card--location">{props.card.location}</span>
      </div>
      <p className="card--title">{props.card.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.card.price}</span> / person
      </p>
    </div>
  );
}
