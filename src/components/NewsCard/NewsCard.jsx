import React from "react";
import { useLocation } from "react-router-dom";
import { extractKeywords } from "../../utils/keywords";
import "./NewsCard.css";

function NewsCard({
  image,
  date,
  title,
  description,
  source,
  url,
  onSignin,
  isLoggedin,
  isSaved,
  onSave,
  onUnsave,
}) {
  const location = useLocation();
  const isSavedPage = location.pathname === "/saved-news";
  const combinedText = `${title} ${description || ""}`;
  const keywords = extractKeywords(combinedText);
  const firstKeyword = keywords.length > 0 ? keywords[0] : null;

  const handleClick = () => {
    isSaved ? onUnsave() : onSave();
  };

  return (
    <div className="newscard">
      {isLoggedin ? (
        isSavedPage ? (
          <>
            <button onClick={onUnsave} className="newscard__delete-button" />
            <div className="newscard__tooltip">Remove from saved</div>
            <div className="newscard__keywords">
              {" "}
              {firstKeyword || "No keyword"}
            </div>
          </>
        ) : (
          <button
            onClick={handleClick}
            className={
              isSaved ? "newscard__log-save-button" : "newscard__save-button"
            }
            title={isSaved ? "Remove from saved" : "Save article"}
          />
        )
      ) : (
        <>
          <button onClick={onSignin} className="newscard__save-button" />
          <div className="newscard__tooltip">Sign in to save articles</div>
        </>
      )}

      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} className="newscard__image" alt={title} />
      </a>

      <p className="newscard__date-time">{date}</p>
      <h2 className="newscard__title">{title}</h2>
      <p className="newscard__text">{description}</p>
      <p className="newscard__source">{source || "Unknown Source"}</p>
    </div>
  );
}

export default NewsCard;
