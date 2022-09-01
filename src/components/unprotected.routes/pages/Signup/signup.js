import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [age, setage] = useState("");
  let fun = async (e) => {
    e.preventDefault();
    let data = {
      firstName:name,
      lastName: e.target[1].value,
      userName: e.target[2].value,
      email: e.target[3].value,
      password: e.target[4].value,
    };
    console.log(data);
    axios
      .post(
        "https://api/Auth/register ",
        data
      )
      .then(function (response) {
        console.log(response);
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
    <div className="containersign  mb-5 ">
      <div className="row ">
        <div className="col-sm  "></div>
        <div
          className="col-sm  mt-5 mb-5 "
          style={{ backgroundColor: "#0BB783", borderRadius: "20px" }}
        >
          <h6 className="text-center text-white fs-4 mt-3 ">Sign up</h6>
          <small>
            {" "}
            <p className="text-center text-light">
              Enter your details to create your account
            </p>
          </small>
          <form  onSubmit={fun}>
            <div className=" form-group">
              <br/>
              <input
                type="text"
                className="form-control rounded-pill text-primary "
               
                value="firstname"
                aria-describedby="emailHelp"
                placeholder="First Name"
                onChange={(e)=>{setname(e.target.value)}}
              />
             <br/>
              <input
                type="text"
                name="lastname"
                class="form-control rounded-pill"
                id="exampleInputPassword1"
                placeholder="Last Name"
              />
            <br/>
              <input
                type="text"
                className="form-control rounded-pill"
                name="username"
                placeholder="Username"
              />
             <br/>
              <input
                type="text"
                className="form-control rounded-pill"
                name="email"
                placeholder=" Email"
              />
              <br />
             
              <input
                type="text"
                className="form-control rounded-pill"
                name="password"
                placeholder=" Password"
              />
              <br />
            
              <input
                type="text"
                className="form-control rounded-pill"
                name="confirmpassword"
                placeholder=" Confirm Password"
              />
              <br />
              <div class="form-check ml-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label text-light"
                  for="flexCheckDefault"
                >
                  I Agree the terms and condition
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-sm"></div>
              <div className="col-sm">
                <h2 className="text-center  ">
                  <button type="submit" className=" buttonsignup">
                    Sign Up
                  </button>
                </h2>
              </div>
              <div className="col-sm">
                <h2 className="text-center  ">
                  <button
                    type="submit"
                    className=" buttonsignup"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Cancel
                  </button>
                </h2>
              </div>
              <div className="col-sm"></div>
            </div>
            <small>
            {" "}
            <p className="text-center text-light text-bold mb-5">
            Already Have an Account? &nbsp;<button
                    type="submit"
                  className="text-bold"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    login
                  </button>
            </p>
          </small>
          </form>
        </div>
        <div className="col-sm"></div>
        
      </div>
     
    </div>
   
    </>
  );
}

export default Signup;
