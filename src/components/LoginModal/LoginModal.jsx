import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function LoginModal({
  close,
  activeModal,
  onLogin,
  onOpenSignupModal,
  loginError,
}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Please enter a valid email";

    if (!password) newErrors.password = "Password is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    onLogin({ email, password })
      .then(() => {
        setEmail("");
        setPassword("");
        setErrors({});
        setSubmitted(false);
        navigate("/profile");
      })
      .catch(() => {});
  };

  return (
    <ModalWithForm
      isOpen={activeModal === "modallogin"}
      onClose={close}
      onSubmit={handleSubmit}
      title="Sign in"
      buttonText="Log In"
    >
      {(errors.api || loginError) && (
        <span className="modal__error">{errors.api || loginError}</span>
      )}

      <label htmlFor="loginemail" className="modal__label">
        Email
        <input
          type="email"
          id="loginemail"
          className="modal__input"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {errors.email && submitted && (
          <span className="modal__error">{errors.email}</span>
        )}
      </label>

      <label
        htmlFor="loginpassword"
        className="modal__label"
        id="loginpasswordinput"
      >
        Password
        <input
          type="password"
          id="loginpassword"
          className="modal__input"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {errors.password && submitted && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>

      <div className="modal__button-container">
        <button type="submit" className="modal__submit">
          Sign in
        </button>
        <div>
          or &nbsp;
          <button
            type="button"
            className="modal__signup"
            onClick={onOpenSignupModal}
          >
            Sign Up
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
}
