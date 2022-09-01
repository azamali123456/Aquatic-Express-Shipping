// function component in react
import React, { useState, useEffect } from "react";
import "./home.css";
import Perinformation from "./personalinformation";
import Changepassword from "./changepassword";
import Boxpreferences from "./boxpreference";
const Creative = function () {
  let [username, setusername] = useState();
  let [personalinformation, setpersonalinformation] = useState(true);
  let [changpassword, setchangpassword] = useState(false);
  let [boxpreference, setboxpreference] = useState(false);
  let [inprocessorder, setinprocessorder] = useState(false);
  let [unpaidorder, setunpaidorder] = useState(false);
  let [serviceupcgarge, setserviceupcgarge] = useState(false);
  let [history, sethistory] = useState(false);
  useEffect(() => {
    const CURRENname = localStorage.getItem("name");
    setusername(CURRENname);
  }, [1000]);
  function Personalinformation() {
    setpersonalinformation(true);
    setchangpassword(false);
    setboxpreference(false);
    setinprocessorder(false);
    setunpaidorder(false);
    setserviceupcgarge(false);
    sethistory(false);
  }
  function Changpassword() {
    setpersonalinformation(false);
    setchangpassword(true);
    setboxpreference(false);
    setinprocessorder(false);
    setunpaidorder(false);
    setserviceupcgarge(false);
    sethistory(false);
  }
  function Boxpreference() {
    setpersonalinformation(false);
    setchangpassword(false);
    setboxpreference(true);
    setinprocessorder(false);
    setunpaidorder(false);
    setserviceupcgarge(false);
    sethistory(false);
  }
  function Inprocessorder() {
    setpersonalinformation(false);
    setchangpassword(false);
    setboxpreference(false);
    setinprocessorder(true);
    setunpaidorder(false);
    setserviceupcgarge(false);
    sethistory(false);
  }
  function Unpaidorder() {
    setpersonalinformation(false);
    setchangpassword(false);
    setboxpreference(false);
    setinprocessorder(false);
    setunpaidorder(true);
    setserviceupcgarge(false);
    sethistory(false);
  }
  function Serviceupcgarge() {
    setpersonalinformation(false);
    setchangpassword(false);
    setboxpreference(false);
    setinprocessorder(false);
    setunpaidorder(false);
    setserviceupcgarge(true);
    sethistory(false);
  }
  function History() {
    setpersonalinformation(false);
    setchangpassword(false);
    setboxpreference(false);
    setinprocessorder(false);
    setunpaidorder(false);
    setserviceupcgarge(false);
    sethistory(true);
  }

  return (
    <div className="container-fluid mt-1 ">
      <div className="mb-2  m-1  rounded">
        <div className="row ">
          <div
            className="sidebardiv col-sm-3 m-1 p-0 row rounded  "
            style={{ backgroundColor: "white", height: "27em" }}
          >
            <div className=" mb-1">
              <h6 className="m-1" style={{ display: "flex" }}>
                Welcome! &nbsp; <h5>{username}</h5>{" "}
              </h6>

              <h6 className="m-" style={{ display: "flex" }}>
                fYour Balance : &nbsp;{" "}
                <h6 className="bg-light p-1 rounded">0$</h6>
              </h6>
            </div>
            <div
              className="mb-0 mt-0"
              style={{ position: "relative", top: "-1.5rem" }}
            >
              <div
                className="rounded sidebar p-1"
                onClick={Personalinformation}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person m-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
                <h6 className=" p-1 ">Personal information</h6>
              </div>
              <div className="rounded sidebar p-1 m-1" onClick={Changpassword}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="m-1 bi bi-shield-shaded"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 14.933a.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067v13.866zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"
                  />
                </svg>
                <h6 className=" p-1 ">Change Password</h6>
              </div>
              <div className="rounded sidebar p-1 m-1" onClick={Boxpreference}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="m-1 bi bi-dropbox"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.01 4.555 4.005 7.11 8.01 9.665 4.005 12.22 0 9.651l4.005-2.555L0 4.555 4.005 2 8.01 4.555Zm-4.026 8.487 4.006-2.555 4.005 2.555-4.005 2.555-4.006-2.555Zm4.026-3.39 4.005-2.556L8.01 4.555 11.995 2 16 4.555 11.995 7.11 16 9.665l-4.005 2.555L8.01 9.651Z" />
                </svg>
                <h6 className=" p-1 ">Box Preference</h6>
              </div>
              <div className="rounded sidebar p-1 m-1" onClick={Inprocessorder}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="m-1 bi bi-dropbox"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.01 4.555 4.005 7.11 8.01 9.665 4.005 12.22 0 9.651l4.005-2.555L0 4.555 4.005 2 8.01 4.555Zm-4.026 8.487 4.006-2.555 4.005 2.555-4.005 2.555-4.006-2.555Zm4.026-3.39 4.005-2.556L8.01 4.555 11.995 2 16 4.555 11.995 7.11 16 9.665l-4.005 2.555L8.01 9.651Z" />
                </svg>
                <h6 className=" p-1 ">InProcess Order</h6>
              </div>
              <div className="rounded sidebar p-1 m-1" onClick={Unpaidorder}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="m-1 bi bi-dropbox"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.01 4.555 4.005 7.11 8.01 9.665 4.005 12.22 0 9.651l4.005-2.555L0 4.555 4.005 2 8.01 4.555Zm-4.026 8.487 4.006-2.555 4.005 2.555-4.005 2.555-4.006-2.555Zm4.026-3.39 4.005-2.556L8.01 4.555 11.995 2 16 4.555 11.995 7.11 16 9.665l-4.005 2.555L8.01 9.651Z" />
                </svg>
                <h6 className=" p-1 ">Unpaid Order</h6>
              </div>
              <div
                className="rounded sidebar p-1 m-1"
                onClick={Serviceupcgarge}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="m-1 bi bi-coin"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
                <h6 className=" p-1 ">Service Upcharge</h6>
              </div>
              <div className="rounded sidebar p-1 m-1" onClick={History}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="m-1 bi bi-clock-history"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                </svg>
                <h6 className=" p-1 ">History </h6>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="m-1 bi bi-clock-history float-right"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                </svg> */}
              </div>
            </div>
          </div>
          <div className="col-sm-8 m-1 p-1 row rounded ">
            {personalinformation === true ? <Perinformation /> : null}
            {changpassword === true ? <Changepassword /> : null}
            {boxpreference === true ? <Boxpreferences/> : null}
            {inprocessorder === true ? (
              <>
                <h5>In process Order</h5>
              </>
            ) : null}
            {unpaidorder === true ? (
              <>
                <h5> Unpaid order</h5>
              </>
            ) : null}
            {serviceupcgarge === true ? (
              <>
                <h5> Service UP charge</h5>
              </>
            ) : null}
            {history === true ? (
              <>
                <h5> History</h5>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creative;
