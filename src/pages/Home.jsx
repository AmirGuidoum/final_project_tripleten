import React from "react";
import Main from "../components/Main/Main";
import NewsCards from "../components/NewsCards/NewsCards";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../pages/Home.css";

function Home({
  onSearch,
  articles,
  visibleCount,
  showMore,
  isLoading,
  isLoggedIn,
  onSignin,
  hasSearched,
  savedArticles,
  handleSaveArticle,
  handleUnsaveArticle,
  userName,
  handleAddClickLogIn,
  handleLogout,
  handlenavigationmodal,
}) {
  return (
    <div className="home">
      <div className="home__background">
        <Header
          userName={userName}
          handleAddClickLogIn={handleAddClickLogIn}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          handlenavigationmodal={handlenavigationmodal}
        />
        <Main onSearch={onSearch} />
      </div>

      {hasSearched && (
        <NewsCards
          articles={articles.slice(0, visibleCount)}
          showMore={visibleCount < articles.length}
          onShowMore={showMore}
          onSignin={onSignin}
          isLoading={isLoading}
          isLoggedin={isLoggedIn}
          savedArticles={savedArticles}
          handleSaveArticle={handleSaveArticle}
          handleUnsaveArticle={handleUnsaveArticle}
          userName={userName}
        />
      )}
      <About />
      <Footer />
    </div>
  );
}

export default Home;
