import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import Navigation from "../navigation/navigation";
import AppRoutes from "../../routes/Approutes";
import { getNews, filterArticles } from "../../utils/newsapi";

function App() {
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [savedArticles, setSavedArticles] = useState([]);
  const [articles, setArticles] = useState([]);

  const closeActiveModal = () => setActiveModal("");
  const handleLogin = () => {
    setIsLoggedIn(true);
    closeActiveModal();
    setUserName("Jane");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    navigate("/");
  };
  const handleResearch = (query) => {
    setLoading(true);
    getNews()
      .then((data) => {
        const filtered = filterArticles(data.articles, query);
        setNews(filtered);
        setVisibleCount(3);
        setHasSearched(true);
        setArticles(data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const addKeywordsToArticles = (articles) => {
    return articles.map((article) => {
      const combinedText = `${article.title} ${article.description || ""}`;
      const keywords = extractKeywords(combinedText);
      return { ...article, keywords };
    });
  };
  const handleShowMore = () => setVisibleCount((prev) => prev + 3);
  const handleAddClickLogIn = () => {
    setActiveModal("modallogin");
    console.log(isLoggedIn);
  };
  const handlenavigationmodal = () => {
    setActiveModal("navigationmodal");
  };
  const handleAddClickSignin = () => setActiveModal("modalregister");
  const handleSaveArticle = (article) => {
    setSavedArticles((prev) =>
      prev.some((a) => a.url === article.url) ? prev : [...prev, article]
    );
  };

  const handleUnsaveArticle = (url) => {
    setSavedArticles((prev) => prev.filter((a) => a.url !== url));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeActiveModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  useEffect(() => {
    console.log("🔖 Saved Articles:", savedArticles);
  }, [savedArticles]);
  return (
    <div className="page">
      <div className="page__content">
        <AppRoutes
          onSearch={handleResearch}
          articles={news}
          visibleCount={visibleCount}
          showMore={handleShowMore}
          isLoading={loading}
          isLoggedIn={isLoggedIn}
          onSignin={handleAddClickLogIn}
          hasSearched={hasSearched}
          savedArticles={savedArticles}
          handleSaveArticle={handleSaveArticle}
          handleUnsaveArticle={handleUnsaveArticle}
          userName={userName}
          handleAddClickLogIn={handleAddClickLogIn}
          handleLogout={handleLogout}
          handlenavigationmodal={handlenavigationmodal}
        />

        <LoginModal
          activeModal={activeModal}
          close={closeActiveModal}
          onOpenSignupModal={handleAddClickSignin}
          handleLogin={handleLogin}
        />

        <RegisterModal
          close={closeActiveModal}
          activeModal={activeModal}
          handleAddClickLogIn={handleAddClickLogIn}
        />
        <Navigation
          close={closeActiveModal}
          activeModal={activeModal}
          handleAddClickLogIn={handleAddClickLogIn}
        />
      </div>
    </div>
  );
}

export default App;
