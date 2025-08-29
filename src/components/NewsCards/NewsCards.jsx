import "./NewsCards.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import React from "react";

function NewsCards({ articles, showMore, onShowMore, onSignin, isLoading }) {
  return (
    <div className="newscards">
      <h2 className="newscards__title">Search Results</h2>

      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <ul className="newscards__list">
            {articles.map((article, index) => (
              <NewsCard
                key={index}
                image={article.urlToImage}
                date={new Date(article.publishedAt).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
                title={article.title}
                description={article.description}
                url={article.url}
                onSignin={onSignin}
              />
            ))}
          </ul>
          {showMore && (
            <button onClick={onShowMore} className="newscards__show-more">
              Show more
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default NewsCards;
