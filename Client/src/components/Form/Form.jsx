import React, { useState } from "react";
import { validation } from "./validation";
import "./Form.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const errors = validation(userData);

    if (Object.keys(errors).length === 0) {
      login(userData);
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="form backgroundForm">
      <form className="loginform" onSubmit={handleSubmit}>
        <div className="img" />
        <div className="title">
          Welcome,
          <span> sign up to continue</span>
        </div>
        <div className="container-inputs">
          <div>
            <label htmlFor="email" className="span"></label>
            <input
              type="email"
              className="inputLogin"
              onChange={handleChange}
              value={userData.email}
              placeholder="Email"
              name="email"
            />
            {errors.email && <div className="login-error">{errors.email}</div>}
            {errors.emailValido && (
              <div className="login-error">{errors.emailValido}</div>
            )}
            {errors.emailCaracteres && (
              <div className="login-error">{errors.emailCaracteres}</div>
            )}
          </div>
          <div>
            <label htmlFor="password" className="placeholderInput"></label>
            <input
              type="password"
              className="inputLogin"
              onChange={handleChange}
              value={userData.password}
              placeholder="Password"
              name="password"
            />
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
            {errors.passwordLong && (
              <div className="error-message">{errors.passwordLong}</div>
            )}
          </div>
        </div>

        <button className="button-confirm" type="submit">
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
};

export default Form;
