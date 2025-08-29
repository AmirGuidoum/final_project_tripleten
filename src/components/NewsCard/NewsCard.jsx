import "./NewsCard.css";
import React from "react";

function NewsCard({ image, date, title, description, source, url, onSignin }) {
  console.log("Image source:", image);
  return (
    <div className="newscard">
      <button onClick={onSignin} className="newscard__save-button" />
      <button className="newscard__tooltip">Sign in to save articles</button>

      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} className="newscard__image" alt={title} />
      </a>

      <p className="newscard__date-time">{date}</p>
      <h2 className="newscard__title">{title}</h2>
      <p className="newscard__text">{description}</p>
      <p className="newscard__source">{source}</p>
    </div>
  );
}

export default NewsCard;
