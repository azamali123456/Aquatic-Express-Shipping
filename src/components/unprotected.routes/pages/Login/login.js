import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
function Login() {
  let navigate = useNavigate();
  
  
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     navigate("/homepage");
  //   }
  // });
  let fun = async (e) => {
    e.preventDefault();
    
    let data = {
      userName: e.target[0].value,
      password: e.target[1].value,
    };
    console.log(data);
    axios
      .post("https://shipaquatic.com/api/Auth/login", data)
      .then(function (response) {
        console.log(response);
          localStorage.setItem("token", response.data.enToken);
          // localStorage.setItem("name", response.data.name);
          // setTimeout(() => {
          //   navigate("/")
          // }, 1000);
          
          navigate("/creative")
          
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className=" div1">
      <div className="row ">
        <div className="col-sm  "></div>

        <div
          className="col-sm mt-5 mb-5 "
          style={{ backgroundColor: "#0BB783", borderRadius: "20px" }}
        >
          <h6 className="text-center text-white fs-4 mt-3 ">Sign up</h6>
          <small>
            {" "}
            <p className="text-center text-light">
              Enter your details to create your account
            </p>
          </small>
          <form className="p-0 form-group " onSubmit={fun}>
            <div className=" form-group">
              <br />
              <input
                type="text"
                className="form-control rounded-pill text-primary "
                name="firstname"
                aria-describedby="emailHelp"
                placeholder="Username"
              />
              <br />
              <input
                type="text"
                name="userName"
                className="form-control rounded-pill mb-2"
                id="exampleInputPassword1"
                placeholder="Password"
              />

              <div className="form-check ml-4">
                <input
                  className="form-check-input"
                  name="password"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label text-light "
                  htmlFor="flexCheckDefault"
                >
                  Remember me
                </label>
              </div>
            </div>
            <h2 className="text-center  ">
              <button type="submit" className=" buttonsignup">
                Sign In
              </button>
            </h2>
            <small>
              {" "}
              <p className="text-center text-light text-bold mb-5">
                Don't have an account yet? &nbsp;
                <button
                  className="text-bold "
                  onClick={() => {
                    navigate("/Signup");
                  }}
                >
                  Signup
                </button>
              </p>
            </small>
          </form>
        </div>
        <div className="col-sm  "></div>
      </div>
    </div>
  );
}

export default Login;
