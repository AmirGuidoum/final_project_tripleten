import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import NewsCards from "../NewsCards/NewsCards";
import About from "../About/About";

import { getNews, filterArticles } from "../../utils/newsapi";
function App() {
  const [news, setNews] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleResearch = (query) => {
    setLoading(true);
    getNews()
      .then((data) => {
        const filtered = filterArticles(data.articles, query);
        setNews(filtered);
        setVisibleCount(3);
        setHasSearched(true);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };
  const [activeModal, setActiveModal] = useState("");
  const handleAddClickLogIn = () => {
    setActiveModal("modallogin");
  };
  const handleAddClickSignin = () => {
    setActiveModal("modalregister");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="page">
      <div className="page__content">
        <div className="app__background">
          <Header handleAddClickLogIn={handleAddClickLogIn} />
          <Main onSearch={handleResearch} />
          <LoginModal
            activeModal={activeModal}
            close={closeActiveModal}
            onOpenSignupModal={handleAddClickSignin}
          />
        </div>
        {hasSearched && (
          <NewsCards
            isLoading={loading}
            articles={news.slice(0, visibleCount)}
            showMore={visibleCount < news.length}
            onShowMore={handleShowMore}
            onSignin={handleAddClickLogIn}
          />
        )}
        <RegisterModal
          close={closeActiveModal}
          activeModal={activeModal}
          handleAddClickLogIn={handleAddClickLogIn}
        />
        <About />
        <Footer />
      </div>
    </div>
  );
}
export default App;
