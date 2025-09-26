import "./Main.css";
import SearchForm from "../SearchForm/SearchFrom";

function Main({ onSearch }) {
  return (
    <div className="main-center">
      <h2 className="main__title">
        What's going on <br />
        in the world?
      </h2>
      <p className="main__text">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchForm onSearch={onSearch} />
    </div>
  );
}
export default Main;
