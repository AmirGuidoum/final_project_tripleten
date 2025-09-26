import "./navigation.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import newsexplorer from "../../assets/newsexplorer.svg";
import { useNavigate } from "react-router-dom";

function Navigation({ close, activeModal, handleAddClickLogIn }) {
  const navigate = useNavigate();

  return (
    <ModalWithForm
      isOpen={activeModal === "navigationmodal"}
      onClose={close}
      buttonText="Log In"
      activeModal={activeModal}
    >
      <img className="navigation__logo" src={newsexplorer} alt="Logo" />

      <button className="modal__home" onClick={() => navigate("/")}>
        Home
      </button>
      <button
        type="button"
        onClick={handleAddClickLogIn}
        className="modal__submit_nav"
      >
        Sign in
      </button>
    </ModalWithForm>
  );
}
export default Navigation;
