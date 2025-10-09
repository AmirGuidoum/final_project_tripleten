import React from "react";
import NewsCards from "../components/NewsCards/NewsCards";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { extractKeywords, formatKeywords } from "../utils/keywords";
import "./SavedNews.css";

function SavedNews({
  savedArticles,
  handleUnsaveArticle,
  isLoggedIn,
  onSignin,
  userName,
  handleAddClickLogIn,
  handleLogout,
  handlenavigationmodal,
}) {
  console.log("Name prop:", isLoggedIn);
  const combinedText = savedArticles
    .map(
      (savedArticles) =>
        `${savedArticles.title} ${savedArticles.description || ""}`
    )
    .join(" ");

  const keywords = extractKeywords(combinedText);

  const keywordDisplay = formatKeywords(keywords, 3);
  return (
    <div className="savednews">
      <Header
        isLoggedIn={isLoggedIn}
        userName={userName}
        handleAddClickLogIn={handleAddClickLogIn}
        handleLogout={handleLogout}
        handlenavigationmodal={handlenavigationmodal}
      />
      <div className="savednews__user-info">
        <p className="savednews__saved-articles">Saved articles</p>
        <h1 className="savednews__title">
          {userName}, you have {savedArticles.length} saved <br />
          articles
          {savedArticles.length !== 1 ? "s" : ""}
        </h1>

        <p className="savednews__keywords">
          By keywords:
          <span className="savednews__spans">&nbsp;{keywordDisplay}</span>
        </p>
      </div>
      <NewsCards
        articles={savedArticles}
        showMore={false}
        onShowMore={() => {}}
        onSignin={onSignin}
        isLoading={false}
        isLoggedin={isLoggedIn}
        savedArticles={savedArticles}
        handleSaveArticle={() => {}}
        handleUnsaveArticle={handleUnsaveArticle}
      />

      <Footer />
    </div>
  );
}

export default SavedNews;
