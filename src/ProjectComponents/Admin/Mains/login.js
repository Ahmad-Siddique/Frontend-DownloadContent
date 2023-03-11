import React, { useEffect, useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppSettings } from "../../../config/app-settings";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

function PagesLogin() {
  const context = useContext(AppSettings);
  const [redirect, setRedirect] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errormessage, setErrormessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    context.setAppHeaderNone(true);
    context.setAppSidebarNone(true);
    context.setAppContentClass("p-0");

    return function cleanUp() {
      context.setAppHeaderNone(false);
      context.setAppSidebarNone(false);
      context.setAppContentClass("");
    };

    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email == "" || password == "") {
      setError(true);
      setErrormessage("Please Enter the Credentials");
      return;
    }
    try {
      setLoading(true);
      setError(false);
      const config = {
        "Content-type": "application/json",
      };

      const { data } = await axios
        .post(
          "https://coming-to-me-from-backend.onrender.com/api/adminlogin",
          {
            email,
            password,
          },
          config
        )
        .then((data) => {
          console.log(data.data);
          localStorage.setItem("adminInfo", JSON.stringify(data.data));
          setRedirect(true);
          navigate("/alltasks");
        })
        .catch((err) => {
          // setError("Invalid Email or Password");
          setLoading(false);
          setError(true);
          setErrormessage("Invalid Email or Password");
          console.log("Noob");
        });
    } catch (error) {}
  };
  return (
    <div className="login">
      <div className="login-content">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center">Sign In</h1>
          <div className="text-white text-opacity-50 text-center mb-4">
            For your protection, please verify your identity.
          </div>

          {/* Error Display */}
          {error && (
            <div
              style={{ color: "red", borderRadius: 10 }}
              className="text-opacity-50 text-center mb-4"
            >
              {errormessage}
            </div>
          )}

          {/* Spin Loader */}
          {loading && (
            <div
              style={{
                
                justifyContent: "center",
                alignItems: "center",
              }}
              className="text-white text-opacity-50 text-center mb-4"
            >
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control form-control-lg bg-white bg-opacity-5"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <div className="d-flex">
              <label className="form-label">
                Password <span className="text-danger">*</span>
              </label>
            </div>
            <input
              type="password"
              className="form-control form-control-lg bg-white bg-opacity-5"
              placeholder="Enter Password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3 mt-3"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default PagesLogin;
