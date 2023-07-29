import axios from "axios";
import React, { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirec, setRedirect] = useState(false);
  const history = useNavigate();

  const onChangeUserName = (e) => {
    const value = e.target.value;
    setUserName(value);
    setError("");
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError("");
  };

  const onChangeSubmit = () => {
    const data = {
      username: username,
      password: password,
    };
    console.log(data);
    axios
      .post("http://localhost:3001/login", data)
      .then((result) => {
        if (result) {
          localStorage.setItem("token", result.data.token);
          setRedirect(true);
        }
      })
      .catch((e) => {
        setError(e.response.data.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <div className="auth-form-container" onSubmit={handleSubmit}>
        {error && (
          <div className="alert alert-danger">
            <p>{error}</p>
          </div>
        )}
        {redirec && history(`/dashboard/${username}`)}
        <h2>Login</h2>
        <Form className="login-form">
          <label htmlFor="email">Username</label>
          <input
            value={username}
            onChange={onChangeUserName}
            type="text"
            placeholder="Input Your Email"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={onChangePassword}
            type="password"
            placeholder="Input Your Password"
            id="password"
            name="password"
          />
          <button onClick={onChangeSubmit}>Login</button>
        </Form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
    </Fragment>
  );
};
