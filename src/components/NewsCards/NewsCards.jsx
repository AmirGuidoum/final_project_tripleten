import "./NewsCards.css";

import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import { useLocation } from "react-router-dom";
import React from "react";

function NewsCards({
  articles,
  showMore,
  onShowMore,
  onSignin,
  isLoading,
  isLoggedin,
  savedArticles,
  handleSaveArticle,
  handleUnsaveArticle,
  userName,
}) {
  const location = useLocation();
  const isSavedPage = location.pathname === "/saved-news";

  return (
    <div className="newscards">
      {!isSavedPage && <h2 className="newscards__title">Search Results</h2>}

      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <ul className="newscards__list">
            {articles.map((article, index) => {
              const isSaved = savedArticles.some((a) => a.url === article.url);

              return (
                <NewsCard
                  articles={articles}
                  key={index}
                  image={article.urlToImage}
                  date={new Date(article.publishedAt).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                  userName={userName}
                  title={article.title}
                  description={article.description}
                  source={article.source?.name}
                  url={article.url}
                  onSignin={onSignin}
                  isLoggedin={isLoggedin}
                  isSaved={isSaved}
                  onSave={() =>
                    handleSaveArticle({
                      title: article.title,
                      description: article.description,
                      url: article.url,
                      source: article.source?.name,
                      urlToImage: article.urlToImage,
                      publishedAt: article.publishedAt,
                    })
                  }
                  onUnsave={() => handleUnsaveArticle(article.url)}
                />
              );
            })}
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
