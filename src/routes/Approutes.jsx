import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SavedNews from "../pages/SavedNews";

function AppRoutes({
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
  onSearch,
  handleAddClickLogIn,
  userName,
  handleLogout,
  handlenavigationmodal,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            onSearch={onSearch}
            articles={articles}
            visibleCount={visibleCount}
            showMore={showMore}
            isLoading={isLoading}
            isLoggedIn={isLoggedIn}
            onSignin={onSignin}
            hasSearched={hasSearched}
            savedArticles={savedArticles}
            handleSaveArticle={handleSaveArticle}
            handleUnsaveArticle={handleUnsaveArticle}
            handleAddClickLogIn={handleAddClickLogIn}
            userName={userName}
            handleLogout={handleLogout}
            handlenavigationmodal={handlenavigationmodal}
          />
        }
      />
      <Route
        path="/saved-news"
        element={
          <SavedNews
            savedArticles={savedArticles}
            handleUnsaveArticle={handleUnsaveArticle}
            isLoggedIn={isLoggedIn}
            userName={userName}
            handleAddClickLogIn={handleAddClickLogIn}
            handleLogout={handleLogout}
            handlenavigationmodal={handlenavigationmodal}
          />
        }
      />
    </Routes>
  );
}

export default AppRoutes;
