import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./home.css";
function Perinformation() {
  let navigate = useNavigate();

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
        navigate("/creative");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div style={{ backgroundColor: "white", height: "91%" }}>
      <div className="row ">
        <div className="col-sm-12   ">
          <h6 className="p-1">
            {" "}
            <strong>Personal information</strong>
          </h6>
        </div>
        <hr className="text-muted text-bold" />
        <div className=" mb-5 ">
          {/* Personal information form */}
          <form className=" form-group  " onSubmit={fun}>
            {/* Customer information */}
            <div className=" row p-0">
              <div>
                {" "}
                <h6 className="text-center">Customer Info</h6>
              </div>
            </div>
            <div className="row form-group m-0">
              <div className="col-sm-4">
                {" "}
                <small>Organization</small>
              </div>
              <div className="col-sm-6 p-1">
                <input
                  type="text"
                  className="personalinput   col-sm-8 "
                  name="firstname"
                  aria-describedby="emailHelp"
                  placeholder=" Organization"
                />
              </div>
              <div className="col-sm-2"></div>

              <div className="col-sm-4 ">
                {" "}
                <small>FirstName</small>
              </div>
              <div className="col-sm-6 p-1">
                <input
                  type="text"
                  className="personalinput   text-primary col-sm-8 "
                  name="firstname"
                  aria-describedby="emailHelp"
                  placeholder="FirstName"
                />
              </div>
              <div className="col-sm-2"></div>

              <div className="col-sm-4 ">
                {" "}
                <small>LastName</small>
              </div>
              <div className="col-sm-6 p-1">
                <input
                  type="text"
                  className="personalinput  text-primary col-sm-8 "
                  name="firstname"
                  aria-describedby="emailHelp"
                  placeholder="LastName"
                />
              </div>
              <div className="col-sm-2"></div>
            </div>
            {/* Contact information */}
            <div className=" row p-0">
              <div>
                {" "}
                <h6 className="text-center">Customer Info</h6>
              </div>
            </div>
            <div className="row form-group m-0">
              <div className="col-sm-4">
                {" "}
                <small>Contact Phone</small>
              </div>
              <div className="col-sm-6 p-0">
                <input
                  type="text"
                  className="personalinput   col-sm-8 "
                  name="firstname"
                  aria-describedby="emailHelp"
                  placeholder="Phone"
                />
              </div>
              <div className="col-sm-2"></div>

              <div className="col-sm-4 ">
                {" "}
                <small>Email Address</small>
              </div>
              <div className="col-sm-6 p-0">
                <input
                  type="text"
                  className="personalinput   text-primary col-sm-8 "
                  name="firstname"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  value={"mobeenikhtiar123@gmail.com"}
                  onChange={() => {}}
                  style={{ Color: "red" }}
                />
              </div>
              <div className="col-sm-2"></div>

              <div className="col-sm-4 ">
                {" "}
                <small>Address</small>
              </div>
              <div className="col-sm-6 p-0">
                <input
                  type="text"
                  className="personalinput  text-primary col-sm-8 "
                  name="firstname"
                  aria-describedby="emailHelp"
                  placeholder="Address"
                />
              </div>
              <div className="col-sm-4 ">
                {" "}
                <small>City</small>
              </div>
              <div className="col-sm-6 p-0 ">
                <input
                  type="text"
                  className="personalinput   text-primary col-sm-8 "
                  name="firstname"
                  aria-describedby="emailHelp"
                  placeholder="City"
                />
              </div>
              <div className="col-sm-2 "></div>

              <div className="col-sm-4 ">
                {" "}
                <small>State</small>
              </div>
              <div className="col-sm-6 p-0">
                <input
                  type="text"
                  className="personalinput   text-primary col-sm-8 "
                  name="firstname"
                  aria-describedby="emailHelp"
                  placeholder="State"
                />
              </div>
              <div className="col-sm-2"></div>
              <div className="col-sm-4 ">Zip Code</div>
              <div className="col-sm-6 p-0 ">
                <input
                  type="text"
                  className="personalinput   text-primary col-sm-8 "
                  name="firstname"
                  aria-describedby="emailHelp"
                  placeholder="Username"
                />
              </div>
              <div className="col-sm-4 "></div>
              <div className="row">
                <div className="col-sm-9"></div>
                <div className="col-sm-3">
                  <button
                    type="submit"
                    className="btn  text-white text-justfy mt-2 mb-1 "
                    style={{ backgroundColor: "#1BC5BD" }}
                  >
                    <small>Save Changes</small>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-sm  "></div>
      </div>
    </div>
  );
}

export default Perinformation;
