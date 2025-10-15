import "./ModalWithForm.css";
import exitIcon from "../../assets/close.svg";
function ModalWithForm({
  children,
  title,
  isOpen,
  onClose,
  onSubmit,
  activeModal,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div
        className={`modal__content ${
          activeModal === "navigationmodal" ? "modal__content_black" : ""
        }`}
      >
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className={`modal__close ${
            activeModal === "navigationmodal" ? "modal__close_nav" : ""
          }`}
        >
          <img src={exitIcon} alt="close button" />
        </button>
        {activeModal === "navigationmodal" ? (
          <div className="modal__form">{children}</div>
        ) : (
          <form onSubmit={onSubmit} className="modal__form">
            {children}
          </form>
        )}
      </div>
    </div>
  );
}
export default ModalWithForm;
