// function component in react
import React, { useState, useEffect } from "react";
import Shippingmethod from "./shippingmethod";
import classNames from "classnames";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
// import Select from "react-select";
import "./ship.css";

const Ship = function () {
  let navigate = useNavigate();
  let [icon1, seticon1] = useState({ color: "#0BB783" });
  let [icon2, seticon2] = useState({ color: "rgb(153, 153, 153)" });
  let [icon3, seticon3] = useState({ color: "rgb(153, 153, 153)" });
  let [icon4, seticon4] = useState({ color: "rgb(153, 153, 153)" });
  let [icon5, seticon5] = useState({ color: "rgb(153, 153, 153)" });
  let [data, setdata] = useState([]);
  const [resp, setresp] = useState([]);
  const [token, settoken] = useState([]);
  const [btn1, setbtn1] = useState(true);
  const [btn2, setbtn2] = useState(false);
  const [btn3, setbtn3] = useState(false);
  const [btn4, setbtn4] = useState(false);
  const [btn5, setbtn5] = useState(false);
  const [classna, setclassna] = useState(true);
  let [modalshow, setmodalshow] = useState(false);
  let [filterdata, setfilterdata] = useState([]);
  const [search, setsearch] = useState("");
  let [addressrow, setaddressrow] = useState([]);
  // States htmlFor Model 2
  let [data1, setdata1] = useState([]);
  let [modalshow1, setmodalshow1] = useState(false);
  let [filterdata1, setfilterdata1] = useState([]);
  const [search1, setsearch1] = useState("");
  let [addressrow1, setaddressrow1] = useState([]);
  let [address, setaddress] = useState();
  let [city, setcity] = useState();
  let [postalcode, setpostalcode] = useState();
  let [shipperstate, setshipperstate] = useState();
  let [shiptoaddress, setshiptoaddress] = useState();
  let [tocity, settocity] = useState();
  let [topostalcode, settopostalcode] = useState();
  let [toshipperstate, settoshipperstate] = useState();
  let [pakage, setpakage] = useState();
  let [weight, setweight] = useState();
  let [pakaheight, setpakageheight] = useState();
  let [pakalength, setpakagelength] = useState();
  let [pakawidth, setpakagewidth] = useState();
  let [declaredvalue, setdeclaredvalue] = useState();
  let [saturdaydelivery, setsaturdaydelivery] = useState(false);
  let [boxref, setboxref] = useState([]);
  let [boxheight, setboxheight] = useState();
  let [boxlength, setboxlenght] = useState();
  let [boxwidth, setboxwidth] = useState();

  useEffect(() => {
    // filter htmlFor model 1
    var result = filterdata.filter((singledata) => {
      return singledata.city.toLowerCase().match(search.toLowerCase());
    });
    console.log("hhhh", result);
    setfilterdata(result);

    if (result.length === 0 || search.length === 0) {
      setfilterdata(data);
      console.log("yyyyy");
    }
    // filter htmlFor model 2
    var result1 = filterdata1.filter((singledata) => {
      return singledata.city.toLowerCase().match(search1.toLowerCase());
    });
    console.log("hhhh", result1);
    setfilterdata1(result1);

    if (result1.length === 0 || search1.length === 0) {
      setfilterdata1(data1);
      console.log("yyyyy");
    }
    const CURRENTtoken = localStorage.getItem("token");
    settoken(CURRENTtoken);
    let config = { headers: { Authorization: ` Bearer ${CURRENTtoken}` } };
    axios
      .get("https://shipaquatic.com/api/boxpref", config)
      .then(function (response) {
        console.log(response.data, "BoxRef");
        setboxref(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [search, search1]);
  let countrylist = [
    {
      value: 1,
      label: "custom",
    },
    {
      value: 2,
      label: "text",
    },
    {
      value: 3,
      label: "aaamir",
    },
    {
      value: 4,
      label: "anum",
    },
    {
      value: 5,
      label: "rafiq",
    },
    {
      value: 6,
      label: "levis",
    },
    {
      value: 7,
      label: "qwe",
    },
    {
      value: 8,
      label: "ravi",
    },
    {
      value: 9,
      label: "rafi",
    },
    {
      value: 10,
      label: "shumail",
    },
    {
      value: 11,
      label: "anjum",
    },
    {
      value: 18,
      label: "standard Size",
    },
  ];
  const countryfun = (e) => {
    setboxreflabel(e.label);
    setboxrefid(e.value);
    console.log(boxref, "boxref country fun");
    const found = boxref.find((respo) => {
      return respo.id === e.value;
    });
    console.log(found);
    setboxheight(found.height);
    setboxwidth(found.width);
    setboxlenght(found.length);
    console.log(e.label, "label");
    console.log(e.value, "id");
  };

  console.log(countrylist, "countrylist");
  let [boxreflabel, setboxreflabel] = useState(countrylist.label);
  let [boxrefid, setboxrefid] = useState(countrylist.value);
  const coloum = [
    {
      name: "Organization",
      selector: (row) => row.organization,
      sortable: true,
      // cell:(row) =>(<button onClick={()=>alert(row.firstName)}></button>)
    },
    {
      name: "Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Build/Floor",
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zipCode,
      sortable: true,
    },
    {
      name: "Number",
      selector: (row) => row.phoneNumber,
      sortable: true,
    },
  ];
  let submit = async (e) => {
    e.preventDefault();

    let data = {
      fromAddress: e.target[0].value || addressrow.address,
      fromCountry: "US",
      shipperCity: e.target[5].value || addressrow.city,
      shipperstate: e.target[7].value || addressrow.state,
      shipperPostalCode: e.target[8].value || addressrow.zipCode,
      toaddress: e.target[12].value || addressrow1.address,
      toCountry: "Us",
      shippingToCity: e.target[13].value || addressrow1.city,
      shippingToState: e.target[19].value || addressrow1.state,
      shippingToPostalCode: e.target[15].value || addressrow1.zipCode,
      declaredValue: declaredvalue,
      packageHeight: pakaheight,
      packageLength: pakalength,
      packageWidth: pakawidth,
      weight: weight,
      packageType: pakage,
    };
    let toshipaddressvald = {
      address: e.target[0].value || addressrow.address,
      country: "US",
      city: e.target[5].value || addressrow.city,
      state: e.target[7].value || addressrow.state,
      postal: e.target[8].value || addressrow.zipCode,
    };
    console.log(toshipaddressvald, "toshipdata");
    console.log(data, "data");
    console.log("submit");
    const CURRENTtoken = localStorage.getItem("token");
    settoken(CURRENTtoken);
    let config = { headers: { Authorization: ` Bearer ${CURRENTtoken}` } };
    if (toshipaddressvald) {
      axios
        .post(
          "https://shipaquatic.com/api/ups/valaddress",
          config,
          toshipaddressvald
        )
        .then(function (response) {
          console.log(response, "toshipaddress");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    axios
      .post("https://shipaquatic.com/api/fedex/", config, data)
      .then(function (response) {
        console.log(response, "data");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  function funall() {
    const CURRENTtoken = localStorage.getItem("token");
    settoken(CURRENTtoken);
    let config = { headers: { Authorization: ` Bearer ${CURRENTtoken}` } };
    axios
      .get("https://shipaquatic.com/api/UserAddress", config)
      .then(function (response) {
        setdata(response.data);
        setfilterdata(response.data);
        setmodalshow(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function funall1() {
    const CURRENTtoken = localStorage.getItem("token");
    settoken(CURRENTtoken);
    let config = { headers: { Authorization: ` Bearer ${CURRENTtoken}` } };
    console.log("jjjjjjjjjjj");
    axios
      .get("https://shipaquatic.com/api/AddressBook", config)
      .then(function (response) {
        console.log(response, "res");
        setdata1(response.data);
        setfilterdata1(response.data);
        setmodalshow1(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const coloum1 = [
    {
      name: "Organization",
      selector: (row) => row.organization,
      sortable: true,
      // cell:(row) =>(<button onClick={()=>alert(row.firstName)}></button>)
    },
    {
      name: "Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Build/Floor",
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zipCode,
      sortable: true,
    },
    {
      name: "Number",
      selector: (row) => row.phoneNumber,
      sortable: true,
    },
  ];
  function fun1() {
    seticon1({ color: "#0BB783" });
    seticon2({ color: "#0BB783" });
    seticon3({});
    seticon4({});
    seticon5({});
    setbtn1(false);
    setbtn2(true);
    setbtn3(false);
    setbtn4(false);
    setbtn5(false);
  }
  function fun2() {
    seticon1({ color: "#0BB783" });
    seticon2({ color: "#0BB783" });
    seticon3({ color: "#0BB783" });
    seticon4({});
    seticon5({});
    setbtn1(false);
    setbtn2(false);
    setbtn3(true);
    setbtn4(false);
    setbtn5(false);
  }
  function fun3() {
    seticon1({ color: "#0BB783" });
    seticon2({ color: "#0BB783" });
    seticon3({ color: "#0BB783" });
    seticon4({ color: "#0BB783" });
    seticon5({});
    setbtn1(false);
    setbtn2(false);
    setbtn3(false);
    setbtn4(true);
    setbtn5(false);
  }
  function fun4() {
    seticon1({ color: "#0BB783" });
    seticon2({ color: "#0BB783" });
    seticon3({ color: "#0BB783" });
    seticon4({ color: "#0BB783" });
    seticon5({ color: "#0BB783" });
    setbtn1(false);
    setbtn2(false);
    setbtn3(false);
    setbtn4(false);
    setbtn5(true);
  }
  return (
    <div className="container-fluid mb-5 mt-2">
      <Modal
        size="lg"
        aria-labelledby="example-modal-sizes-title-sm"
        centered
        show={modalshow}
      >
        <Modal.Header
          closeButton
          onClick={() => {
            setmodalshow(false);
          }}
        >
          <Modal.Title id="contained-modal-title-vcenter">
            Select Existing Address
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-sm-2">
              <button
                className="shipbuttonicon mt-3 "
                onClick={() => {
                  setmodalshow(false);
                }}
              >
                Add New Address
              </button>
            </div>
            <div className="col-sm-7"></div>
            <div className=" col-sm-3 bg-primary-100 rounded ">
              <small className="text-muted">Search</small> <br />
              <input
                className="inputfield col-sm"
                size="100"
                type="search"
                placeholder="Search Here"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
            </div>
            <div className="table-responsive rounded mb-4">
              <DataTable
                className="bg-dark"
                columns={coloum}
                data={filterdata}
                pagination
                paginationDefaultPage={1}
                paginationPerPage={5}
                highlightOnHover
                onRowClicked={(row) => {
                  setaddressrow(row);
                  setmodalshow(false);
                  console.log(row);
                }}
              />
            </div>
            <div className="row ">
              <div className="col-2"></div>
              <div className="col-8"></div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <Modal
        size="lg"
        aria-labelledby="example-modal-sizes-title-sm"
        centered
        show={modalshow1}
      >
        <Modal.Header
          closeButton
          onClick={() => {
            setmodalshow1(false);
          }}
        >
          <Modal.Title id="contained-modal-title-vcenter">
            Select Existing Address
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-sm-2">
              <button
                className="shipbuttonicon mt-3 "
                onClick={() => {
                  setmodalshow1(false);
                }}
              >
                Add New Address
              </button>
            </div>
            <div className="col-sm-7"></div>
            <div className=" col-sm-3 bg-primary-100 rounded ">
              <small className="text-muted">Search</small> <br />
              <input
                className="inputfield col-sm"
                size="100"
                type="search"
                placeholder="Search Here"
                value={search1}
                onChange={(e) => setsearch1(e.target.value)}
              />
            </div>
            <div className="table-responsive rounded mb-4">
              <DataTable
                className="bg-dark"
                columns={coloum1}
                data={filterdata1}
                pagination
                paginationDefaultPage={1}
                paginationPerPage={5}
                highlightOnHover
                onRowClicked={(row) => {
                  setaddressrow1(row);
                  setmodalshow1(false);
                  console.log(row);
                }}
              />
            </div>
            <div className="row ">
              <div className="col-2"></div>
              <div className="col-8"></div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <div className="bg-white p-4 rounded mb-5">
        <div className="row m-4 p-1 text-center">
          <div className="col-sm  row" style={icon1}>
            <div className=" col-6  text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="currentColor"
                className="bi bi-card-checklist m-3 text-center"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
              </svg>
              <h6 style={{ fontSize: "1rem" }}>1. Shipping Details</h6>
            </div>
            <div className="col-6 flaot-right ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-arrow-right-short "
                style={{ position: "relative", top: "4.5rem", left: "1rem" }}
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </div>
          </div>
          <div className="col-sm display-5 row" style={icon2}>
            <div className=" col-6  text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="currentColor"
                className="bi bi-truck m-3 text-center"
                viewBox="0 0 16 16"
              >
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
              <h6 style={{ fontSize: "1rem" }}>2. Shipping Method</h6>
            </div>
            <div className="col-6 flaot-right ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-arrow-right-short "
                style={{ position: "relative", top: "4.5rem", left: "1rem" }}
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </div>
          </div>
          <div className="col-sm display-5 row" style={icon3}>
            <div className=" col-6  text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="currentColor"
                className="bi bi-journal-check m-3 text-center"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
              </svg>
              <h6 style={{ fontSize: "1rem" }}>3. Order Summery</h6>
            </div>
            <div className="col-6 flaot-right ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-arrow-right-short "
                style={{ position: "relative", top: "4.5rem", left: "1rem" }}
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </div>
          </div>
          <div className="col-sm display-5 row" style={icon4}>
            <div className=" col-6  text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="currentColor"
                className="bi bi-coin m-3 text-center"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
              <h6 style={{ fontSize: "1rem" }}>4. Payment Detail</h6>
            </div>
            <div className="col-6 flaot-right ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-arrow-right-short "
                style={{ position: "relative", top: "4.5rem", left: "1rem" }}
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </div>
          </div>
          <div className="col-sm display-5 row" style={icon5}>
            <div className=" col-8  text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="currentColor"
                className="bi bi-printer m-3 text-center"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" />
              </svg>
              <h6 className="text-justify" style={{ fontSize: "1rem" }}>
                {" "}
                5.Print Shipping Label & Receipt
              </h6>
            </div>
          </div>
        </div>
        <div className="row">
          <hr className="text-dark-50" />
          {btn1 === true ? (
            <form onSubmit={submit}>
              <div className="row ">
                <div className="col-sm-6">
                  <h6
                    className="text-center p-2 rounded"
                    style={{ backgroundColor: "#E4E6EF" }}
                  >
                    Ship From
                  </h6>
                  <button
                    className="shipbutton text-white float-right  m-2"
                    type="button"
                  >
                    <small onClick={funall}>SELECT SAVED ADDRESS</small>
                  </button>

                  {/* Ship From */}
                  <div autoComplete="o ">
                    <div className="form-group">
                      <button
                        type="reset"
                        className="shipbutton text-white float-right  m-2 "
                      >
                        <small>ADD NEW ADDRESS</small>
                      </button>
                      <div className="  float-right pt-1 pb-2 ">
                        <small forhtml="Organization" className="p-1">
                          Organization
                        </small>
                        <input
                          className="shipfrominput col-sm"
                          type="text"
                          name="organization "
                          placeholder="Organization"
                          value={addressrow.organization}
                          // onChange={(e) => { setaddressrow(e.target.value);

                          // }}
                        />
                      </div>
                      <div className=" float-right pb-1 ">
                        <small className="p-1">Name</small>
                        <input
                          className="shipfrominput  col-sm"
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          // defaultValue={addressrow.firstName}
                          value={addressrow.firstName}
                          onChange={(e) => {
                            setaddressrow(e.target.value);
                          }}
                        />
                      </div>{" "}
                      <div className=" float-right  pb-1 ">
                        <small className=" p-1">Address</small>
                        <input
                          className="shipfrominput col-sm"
                          type="text"
                          placeholder="Street address"
                          value={addressrow.address}
                          onChange={(e) => {
                            setaddress(addressrow.address);
                            setaddress(e.target.value);
                            setaddressrow(e.target.value);
                            console.log(address);
                          }}
                        />
                      </div>{" "}
                      <div className=" float-right  pb-1">
                        <small className="p-1">Apart/Building</small>
                        <input
                          className="shipfrominput col-sm"
                          type="text"
                          placeholder="Apart/Building"
                          // value={}
                          // onChange={(e) => {setaddressrow(e.target.value)}}
                        />
                      </div>
                      <div className="  float-right pt-1 pb-2 ">
                        <small className="p-1">City</small>
                        <input
                          className="shipfrominput col-sm"
                          type="text"
                          placeholder="City"
                          value={addressrow.city}
                          onChange={(e) => {
                            setcity(addressrow.city);
                            setcity(e.target.value);
                            setaddressrow(e.target.value);
                            console.log(address);
                          }}
                        />
                      </div>
                      <div className=" float-right pb-1 ">
                        <small className="p-1">State</small>
                        <input
                          className="shipfrominput col-sm"
                          type="text"
                          placeholder="State"
                          value={addressrow.state}
                          onChange={(e) => {
                            setshipperstate(addressrow.state);
                            setshipperstate(e.target.value);
                            setaddressrow(e.target.value);
                            console.log(address);
                          }}
                        />
                      </div>{" "}
                      <div className=" float-right  pb-1 ">
                        <small className=" p-1">Zip Code</small>
                        <input
                          className="shipfrominput col-sm"
                          type="text"
                          placeholder="Zip code"
                          value={addressrow.zipCode}
                          onChange={(e) => {
                            setpostalcode(addressrow.zipCode);
                            setpostalcode(e.target.value);
                            setaddressrow(e.target.value);
                            console.log(address);
                          }}
                        />
                        <br />
                        <button className="button text-white float-right  m-2">
                          <small>Get Weather</small>
                        </button>
                      </div>{" "}
                      <div className=" float-right  pb-1">
                        <small className="p-1">Phone</small>
                        <input
                          className="shipfrominput col-sm"
                          type="text"
                          placeholder="Phone"
                          value={addressrow.phoneNumber}
                          onChange={(e) => {
                            setaddressrow(e.target.value);
                          }}
                        />
                        <br />
                        Creat new Address?
                        <label
                          htmlFor="default-toggle"
                          className=" m-4 inline-flex relative items-center cursor-pointer text-center  text-white font-bold inline-block "
                          style={{ position: "relative", top: "7px" }}
                          onClick={() => {
                            setclassna(false);
                          }}
                        >
                          <input
                            type="checkbox"
                            value=""
                            id="default-toggle"
                            className=" w-6 sr-only peer p-1"
                          />
                          <div
                            className={classNames(
                              "w-12 h-7 border-[#0BB783]  border-solid border-2      bg-gray-200 border-[#0BB783]  peer-focus:ring-black-300 dark:peer-focus:ring-blue-800 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full peer peer-checked:after:border-[#0BB783]  peer-checked:after:content-['✓']   after:absolute after:top-[4px] after:left-[4px] after:bottom-[3px] after:right-[3px] after:bg-[#0BB783] p-1 after:border-[#0BB783] after:border after:rounded-full after:h-5 after:w-5  peer:chacked:after:p-1 after:transition-all dark:border-[#0BB783]  peer-checked:bg-gray-200",
                              { "border-[#0BB783]": classna }
                            )}
                          ></div>
                          <span
                            className={classNames(
                              "ml-3  text-sm font-medium text-black-100 dark:text-gray-300",
                              { "text-white-100": classna }
                            )}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Ship To */}
                <div className="col-sm-6">
                  <h6
                    className="text-center  p-2 rounded"
                    style={{ backgroundColor: "#E4E6EF" }}
                  >
                    Ship To
                  </h6>
                  <div className="">
                    <button className="shipbutton text-white float-right  m-2">
                      <small>ADD NEW ADDRESS</small>
                    </button>
                    <button
                      className="shipbutton text-white float-right  m-2"
                      type="button"
                      onClick={funall1}
                    >
                      <small>SELECT SAVED ADDRESS</small>
                    </button>
                    <div className="  float-right pt-1 pb-2 ">
                      <small forhtml="Organization" className="p-1">
                        Organization
                      </small>
                      <input
                        className="shipfrominput col-sm"
                        type="text"
                        placeholder="Organization"
                        value={addressrow1.organization}
                        onChange={(e) => {
                          setaddressrow1(e.target.value);
                        }}
                      />
                    </div>
                    <div className=" float-right pb-1 ">
                      <small className="p-1">Name</small>
                      <input
                        className="shipfrominput col-sm"
                        type="text"
                        placeholder="Name"
                        value={addressrow1.firstName}
                        onChange={(e) => {
                          setaddressrow1(e.target.value);
                        }}
                      />
                    </div>{" "}
                    <div className=" float-right  pb-1 ">
                      <small className=" p-1">Address</small>
                      <input
                        className="shipfrominput col-sm"
                        type="text"
                        placeholder="Street address"
                        value={addressrow1.address}
                        onChange={(e) => {
                          setshiptoaddress(addressrow1.address);
                          setshiptoaddress(e.target.value);
                          setaddressrow1(e.target.value);
                        }}
                      />
                    </div>{" "}
                    <div className=" float-right  pb-1">
                      <small className="p-1">Apart/Building</small>
                      <input
                        className="shipfrominput col-sm"
                        type="text"
                        placeholder="Apart/Building"
                        onChange={(e) => {
                          setaddressrow1(e.target.value);
                        }}
                      />
                    </div>
                    <div className="  float-right pt-1 pb-2 ">
                      <small className="p-1">City</small>
                      <input
                        className="shipfrominput col-sm"
                        type="text"
                        placeholder="City"
                        value={addressrow1.city}
                        onChange={(e) => {
                          settocity(addressrow1.city);
                          settocity(e.target.value);
                          setaddressrow1(e.target.value);
                        }}
                      />
                    </div>
                    <div className=" float-right pb-1 ">
                      <small className="p-1">State</small>
                      <input
                        className="shipfrominput col-sm"
                        type="text"
                        placeholder="State"
                        value={addressrow1.state}
                        onChange={(e) => {
                          settoshipperstate(addressrow1.state);
                          settoshipperstate(e.target.value);
                          setaddressrow1(e.target.value);
                        }}
                      />
                    </div>{" "}
                    <div className=" float-right  pb-1 ">
                      <small className=" p-1">Zip Code</small>
                      <input
                        className="shipfrominput col-sm"
                        type="text"
                        placeholder="Zip code"
                        value={addressrow1.zipCode}
                        onChange={(e) => {
                          settopostalcode(addressrow1.zipCode);
                          settopostalcode(e.target.value);
                          setaddressrow1(e.target.value);
                        }}
                      />
                      <br />
                      <button className="button text-white float-right  m-2">
                        <small>Get Weather</small>
                      </button>
                    </div>{" "}
                    <div className=" float-right  pb-1">
                      <small className="p-1">Phone</small>
                      <input
                        className="shipfrominput col-sm"
                        type="text"
                        placeholder="Phone"
                        value={addressrow1.phoneNumber}
                        onChange={(e) => {
                          setaddressrow1(e.target.value);
                        }}
                      />
                      <br />
                      Creat new Address?
                      <label
                        htmlFor="default-toggle1"
                        className=" m-4 inline-flex relative items-center cursor-pointer text-center  text-white font-bold inline-block "
                        style={{ position: "relative", top: "7px" }}
                        onClick={() => {
                          setclassna(false);
                        }}
                      >
                        <input
                          type="checkbox"
                          value=""
                          id="default-toggle1"
                          className=" w-6 sr-only peer p-1"
                        />
                        <div
                          className={classNames(
                            "w-12 h-7 border-[#0BB783]  border-solid border-2      bg-gray-200 border-[#0BB783]  peer-focus:ring-black-300 dark:peer-focus:ring-blue-800 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full peer peer-checked:after:border-[#0BB783]  peer-checked:after:content-['✓']   after:absolute after:top-[4px] after:left-[4px] after:bottom-[3px] after:right-[3px] after:bg-[#0BB783] p-1 after:border-[#0BB783] after:border after:rounded-full after:h-5 after:w-5  peer:chacked:after:p-1 after:transition-all dark:border-[#0BB783]  peer-checked:bg-gray-200",
                            { "border-[#0BB783]": classna }
                          )}
                        ></div>
                        <span
                          className={classNames(
                            "ml-3  text-sm font-medium text-black-100 dark:text-gray-300",
                            { "text-white-100": classna }
                          )}
                        ></span>
                      </label>
                      <br />
                      Creat new Address?
                      <label
                        htmlFor="default-toggl"
                        className=" m-4 inline-flex relative items-center cursor-pointer text-center  text-white font-bold inline-block "
                        style={{}}
                        onClick={() => {
                          setclassna(false);
                        }}
                      >
                        <input
                          type="checkbox"
                          value=""
                          id="default-toggl"
                          className=" w-6 sr-only peer p-1"
                        />
                        <div
                          className={classNames(
                            "w-12 h-7 border-[#0BB783]  border-solid border-2      bg-gray-200 border-[#0BB783]  peer-focus:ring-black-300 dark:peer-focus:ring-blue-800 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full peer peer-checked:after:border-[#0BB783]  peer-checked:after:content-['✓']   after:absolute after:top-[4px] after:left-[4px] after:bottom-[3px] after:right-[3px] after:bg-[#0BB783] p-1 after:border-[#0BB783] after:border after:rounded-full after:h-5 after:w-5  peer:chacked:after:p-1 after:transition-all dark:border-[#0BB783]  peer-checked:bg-gray-200",
                            { "border-[#0BB783]": classna }
                          )}
                        ></div>
                        <span
                          className={classNames(
                            "ml-3  text-sm font-medium text-black-100 dark:text-gray-300",
                            { "text-white-100": classna }
                          )}
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>
                {/* Pakage information  and Pakage selection*/}
                <div className="row">
                  <div className=" mb-4 rounded">
                    <h6
                      className=" p-2 rounded"
                      style={{ backgroundColor: "rgb(228, 230, 239)" }}
                    >
                      Package Information
                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <h4 className="m-3 packagedemension">
                      Package Dimensions{" "}
                      <p className="packagedemensiontext">?</p>{" "}
                    </h4>
                    <p className="pl-5 ml-5" style={{ color: "777777" }}>
                      To avoid addtional charges be sure to enter accurate
                      dimensions,weight and address.Dimensions should be rounded
                      up to the nearest inch and weight rounded to the nearest
                      pound in all cases as that is how UPS prices each
                      shipment.Failure to do so may result in additional charges
                      to your acount please see the tips at right to ensure your
                      package is accurately priced and avoid additional charges.
                    </p>
                  </div>
                  <div
                    className=" col-sm-6 p-4 "
                    style={{ color: "#BBBBBB" }}
                  ></div>
                  <div className="col-sm-6 row">
                    <div
                      className=" col-sm-6  "
                      style={{ display: "flex", whiteSpace: "nowrap" }}
                    >
                      <small className="p-1">Select Package</small>s
                      <div
                        type="text"
                        className=" mb-1 "
                        onChange={(e) => {
                          setpakage(e.target.value);
                        }}
                      >
                        {/* <Select
                          // styles={customStyles}
                          // width='30rem'
                          // height="10rem"
                          options={countrylist}
                          onChange={countryfun}
                        /> */}
                      </div>
                    </div>
                    <div
                      className=" col-sm-3 "
                      style={{ display: "flex", marginLeft: "2rem" }}
                    >
                      <input
                        className="boxpreferencinput1 col-sm"
                        type="number"
                        placeholder="10"
                        value={boxwidth}
                        onChange={(e) => {
                          setpakageheight(e.target.value);
                        }}
                      />
                      ×
                      <input
                        className="boxpreferencinput1 col-sm"
                        type="number"
                        placeholder="10"
                        value={boxheight}
                        onChange={(e) => {
                          setpakagewidth(e.target.value);
                        }}
                      />
                      ×
                      <input
                        className="boxpreferencinput1 col-sm"
                        type="number"
                        placeholder="10"
                        value={boxlength}
                        onChange={(e) => {
                          setpakagelength(e.target.value);
                        }}
                      />
                    </div>{" "}
                    <br />
                    <div
                      className="col-sm-3 mb-2"
                      style={{
                        display: "flex",
                        whiteSpace: "nowrap",
                        marginLeft: "2.5rem",
                      }}
                    >
                      <small className="p-1">Weight</small>
                      <input
                        className="boxpreferencinputweight  "
                        type="number"
                        placeholder="10"
                        onChange={(e) => {
                          setweight(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <small>Saturday Delivery On?</small>
                    <label
                      htmlFor="default-toggle2"
                      className="ml-5 mb-5 inline-flex relative items-center cursor-pointer text-center  text-white font-bold inline-block "
                      onClick={() => {
                        setclassna(false);
                      }}
                    >
                      <input
                        type="checkbox"
                        value=""
                        onClick={() => {
                          setsaturdaydelivery(true);
                        }}
                        id="default-toggle2"
                        className=" w-6 sr-only peer "
                      />
                      <div
                        className={classNames(
                          "w-12 h-7 border-[#0BB783]  border-solid border-2      bg-gray-200 border-[#0BB783]  peer-focus:ring-black-300 dark:peer-focus:ring-blue-800 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full peer peer-checked:after:border-[#0BB783]  peer-checked:after:content-['✓']   after:absolute after:top-[4px] after:left-[4px] after:bottom-[3px] after:right-[3px] after:bg-[#0BB783] p-1 after:border-[#0BB783] after:border after:rounded-full after:h-5 after:w-5  peer:chacked:after:p-1 after:transition-all dark:border-[#0BB783]  peer-checked:bg-gray-200",
                          { "border-[#0BB783]": classna }
                        )}
                      ></div>
                      <span
                        className={classNames(
                          "ml-3  text-sm font-medium text-black-100 dark:text-gray-300",
                          { "text-white-100": classna }
                        )}
                      ></span>
                    </label>
                  </div>
                  {/* <div className="col-sm-6"></div> */}
                  <div className="col-sm-6">
                    <h4 className="m-3 packagedemension">
                      Live Arrival Insurance{" "}
                      <p className="packagedemensiontext">?</p>{" "}
                    </h4>

                    <div
                      className="col-sm-3 mb-2"
                      style={{
                        display: "flex",
                        whiteSpace: "nowrap",
                        marginLeft: "2.5rem",
                      }}
                    >
                      <small className="p-1 text-bold">Declared Value</small>
                      <input
                        className="boxpreferencinputweight  "
                        type="number"
                        min={101}
                        placeholder="101"
                        onChange={(e) => {
                          setdeclaredvalue(e.target.value);
                        }}
                      />
                    </div>
                    <small
                      className="p-1"
                      style={{
                        color: "#F64E60",
                        position: "relative",
                        left: "9.5rem",
                        top: "-0.5rem",
                      }}
                    >
                      Minimum $101 Value
                    </small>
                  </div>
                </div>
                <hr className="text-muted text-bold" />
                <div className="row">
                  <div className="col-sm-10"></div>
                  <div className="col-sm-2">
                    <button type="submit" className="shipbutton mb-4">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </form>
          ) : null}

          {btn2 === true ? (
            <div className="col-sm-12">
              <Shippingmethod />
              <button className="shipbutton" onClick={fun2}>
                Next
              </button>
            </div>
          ) : null}

          {btn3 === true ? (
            <div className="col-2">
              <h3>Button</h3>
              <button className="shipbutton" onClick={fun3}>
                Click htmlFor 3
              </button>
            </div>
          ) : null}

          {btn4 === true ? (
            <div className="col-2">
              <h3>Button</h3>
              <button className="shipbutton" onClick={fun4}>
                Click htmlFor 4
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Ship;
