import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="circle-preloader"></div>
      <p className="preloader__text">searching for news ...</p>
    </div>
  );
}

export default Preloader;
