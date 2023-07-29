import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [alert, setAlert] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const changeUsername = (e) => {
    const value = e.target.value;
    setUserName(value);
    setError("");
  };

  const changeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError("");
  };

  const changePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError("");
  };

  const klikDaftar = () => {
    const data = {
      username: username,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:3001/daftar", data)
      .then((result) => {
        if (result) {
          if (result.data) {
            setUserName("");
            setEmail("");
            setPassword("");
            setAlert(result.data.message);
            setTimeout(() => {
              setAlert("");
            }, 2000);
          }
        }
      })
      .catch((e) => {
        setError(e.response.data.message);
      });
  };

  return (
    <div className="auth-form-container">
      <h2>Registrasi Account</h2>
      <Form className="register-form" onSubmit={handleSubmit}>
        {error && (
          <div className="alert alert-danger">
            <p>{error}</p>
          </div>
        )}
        {alert && (
          <div className="alert alert-primary">
            <p>{alert}</p>
          </div>
        )}
        <label htmlFor="name">Username</label>
        <input
          value={username}
          onChange={changeUsername}
          type="text"
          placeholder="Input Your Name"
          id="name"
          name="name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={changeEmail}
          type="text"
          placeholder="Input Your Email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={changePassword}
          type="password"
          placeholder="Input Your Password"
          id="password"
          name="password"
          required
          minLength="6"
          maxLength="20"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z
            ]).{6,20}"
          title="Password must contain at least one number, one uppercase and one lowercase letter"
        />
        <button onClick={klikDaftar} type="submit">
          Register
        </button>
      </Form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Have account? Login here.
      </button>
    </div>
  );
};
