// function component in react
import React, { useState, useEffect } from "react";
import "./dashbord.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
const Dashbord = function () {
  let navigate = useNavigate();
  const [search, setsearch] = useState("");
  const [filterdata, setfilterdata] = useState("");
  const [token, settoken] = useState([]);
  const [res, setres] = useState([]);
  const [btn1, setbtn1] = useState(true);
  const [btn2, setbtn2] = useState(false);
  const [btn3, setbtn3] = useState(false);
  let [data, setdata] = useState([]);
  const [resp, setresp] = useState([]);
  const [pagesize, setpagesize] = useState("5");
  const [pagesize1, setpagesize1] = useState("5");
  let [modalshow, setmodalshow] = useState(false);
  let dataall = [
    { id: 1, name: "Item 1", price: 100 },
    { id: 2, name: "Item 2", price: 102 },
    { id: 3, name: "Item 3", price: 100 },
    { id: 4, name: "Item 4", price: 102 },
    { id: 5, name: "Item 2", price: 100 },
    { id: 6, name: "Item 5", price: 102 },
    { id: 7, name: "Item 5", price: 100 },
    { id: 8, name: "Item 2", price: 102 },
    { id: 9, name: "Item 7", price: 102 },
    { id: 10, name: "Item 7", price: 100 },
    { id: 11, name: "Item 8", price: 102 },
    { id: 12, name: "Item 6", price: 100 },
    { id: 13, name: "Item 2", price: 102 },
  ];
  useEffect(() => {
    const CURRENTtoken = localStorage.getItem("token");
    settoken(CURRENTtoken);
    let config = { headers: { Authorization: ` Bearer ${CURRENTtoken}` } };

    axios
      .get("https://shipaquatic.com/api/ShipmentOrder/totalavgcost", config)
      .then(function (response) {
        console.log(response, "res");

        setdata([...data, response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [1000]);

  useEffect(() => {
    var result = dataall.filter((singledata) => {
      return singledata.name.toLowerCase().match(search.toLowerCase());
    });

    setfilterdata(result);
    setpagesize1(pagesize);

    console.log(pagesize, "pagesize ", pagesize1, "pagesize1");
  }, [search, pagesize]);

  const customStyles = {
    rows: {
      style: {
        minHeight: "35px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "4px",
        fontSize: "15px",
        fontWeight: "500",
        textTransform: "uppercase",
        paddingLeft: " 12px",
      },
    },
    table: {
      style: {
        fontSize: "17px",
        paddingLeft: "0 8px",
        backgroundColor: "red",
      },
    },
  };

  let fun = async (e) => {
    e.preventDefault();
    let data = {
      fromCountry: "Us",
      shipperPostalcode: e.target[0].value,
      shippingToPostalcode: e.target[1].value,
      weight: e.target[2].value,
      packageLength: e.target[3].value,
      packageWidth: e.target[4].value,
      PackageHeight: e.target[5].value,
      toCountry: "Us",
    };
    console.log(data);
    axios
      .post("https://shipaquatic.com/api/ups/quickquote ", data)
      .then(function (response) {
        localStorage.setItem("local", response);
        console.log(response.data);
        setresp(response.data);

        setmodalshow(true);

        // setvalue(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function fun1() {
    setbtn1(true);
    setbtn2(false);
    setbtn3(false);
  }
  function fun2() {
    setbtn1(false);
    setbtn2(true);
    setbtn3(false);
  }
  function fun3() {
    setbtn1(false);
    setbtn2(false);
    setbtn3(true);
  }

  const coloum = [
    {
      name: "id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
  ];

  return (
    <div className="container-fluid ">
      <div className="mt-3">
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
              Quick Quote
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div>
              <div className="table-responsive rounded mb-4">
                <table className="table mb-4 ">
                  <thead>
                    <tr>
                      <th scope="col">Sipping Method</th>
                      <th scope="col">Transit Time</th>
                      <th scope="col">UPS Retail Price</th>
                      <th scope="col">Your Save</th>
                      <th scope="col">Your Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resp.map((item) => (
                      <tr>
                        <td>{item.shippingMethod}</td>
                        <td>{item.transitTime}</td>
                        <td>{item.retailPrice}</td>
                        <td>{item.youSave}</td>
                        <td>{item.yourCost}</td>
                      </tr>
                    ))}
                  </tbody>
                  {/* Login Button */}
                </table>
              </div>
              <div className="row ">
                <div className="col-2"></div>
                <div className="col-8"></div>
                <div className="col-2">
                  <button
                    className="button float-left mt-3 mb-3 "
                    type="submit"
                    onClick={() => {
                      navigate("/Signup");
                    }}
                  >
                    <small>Signup Now</small>{" "}
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                setmodalshow(false);
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="row  m-1">
          <div className="col-sm-4 rounded ">
            <div className="mb-4 bg-white rounded">
              <button className=" button text-white m-2" onClick={fun1}>
                Spending
              </button>
              <button className="button text-white m-2" onClick={fun2}>
                Shipment
              </button>
              <button className="button text-white  m-2" onClick={fun3}>
                Avg.cost
              </button>
              {/* {data} */}
              {/* { data.map((item) => (
                          <tr>
                            <td>{item.todaySum}</td>
                           
                          </tr>
                        ))} */}

              {data.map((item) => (
                <div key={item} className="bg-white-100 rounded   shadow-lg ">
                  {btn1 === true ? (
                    <div className="">
                      <div className="row p-2  ">
                        <div className="col-6 ">
                          <h5>Today</h5>
                          <strong>${item.todaySum}</strong>
                        </div>
                        <div
                          className="col-6"
                          style={{
                            border: "1px solid black",
                            borderTop: "none",
                            borderBottom: "none",
                            borderRight: "none",
                          }}
                        >
                          <h5>Weekly</h5>
                          <strong>${item.weekSum}</strong>
                        </div>
                      </div>
                      <div className="row p-2">
                        <div className="col-6 mb-1">
                          <h5>Monthly</h5>
                          <strong>${item.monthSum}</strong>
                        </div>
                        <div
                          className="col-6"
                          style={{
                            border: "1px solid black",
                            borderTop: "none",
                            borderBottom: "none",
                            borderRight: "none",
                          }}
                        >
                          <h5>Yearly</h5>
                          <strong>${item.yearSum.toFixed(2)}</strong>
                        </div>
                      </div>
                    </div>
                  ) : // // ))}
                  // // )},
                  // </div>
                  null}
                  {btn2 === true ? (
                    <>
                      <div className="row p-2">
                        <div className="col-6 ">
                          <h5>Today</h5>
                          <strong>${item.todayCount}</strong>
                        </div>
                        <div
                          className="col-6"
                          style={{
                            border: "1px solid black",
                            borderTop: "none",
                            borderBottom: "none",
                            borderRight: "none",
                          }}
                        >
                          <h5>Weekly</h5>
                          <strong>${item.weekCount}</strong>
                        </div>
                      </div>
                      <div className="row p-2 ">
                        <div className="col-6">
                          <h5>Monthly</h5>
                          <strong>${item.monthCount}</strong>
                        </div>
                        <div
                          className="col-6"
                          style={{
                            border: "1px solid black",
                            borderTop: "none",
                            borderBottom: "none",
                            borderRight: "none",
                          }}
                        >
                          <h5>Yearly</h5>
                          <strong>${item.yearCount}</strong>
                        </div>
                      </div>
                    </>
                  ) : null}
                  {btn3 === true ? (
                    <>
                      <div className="row p-2">
                        <div className="col-6 ">
                          <h5>Today</h5>
                          <strong>${item.todayAverage}</strong>
                        </div>
                        <div
                          className="col-6 verticalline"
                          style={{
                            border: "1px solid black",
                            borderTop: "none",
                            borderBottom: "none",
                            borderRight: "none",
                          }}
                        >
                          <h5>Weekly</h5>
                          <strong>${item.weekAverage}</strong>
                        </div>
                      </div>
                      <div className="row p-2 ">
                        <div className="col-6 verticalline">
                          <h5>Monthly</h5>
                          <strong>${item.monthAverage}</strong>
                        </div>
                        <div
                          className="col-6"
                          style={{
                            border: "1px solid black",
                            borderTop: "none",
                            borderBottom: "none",
                            borderRight: "none",
                          }}
                        >
                          <h5>Yearly</h5>
                          <strong>${item.yearAverage}</strong>
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
              ))}
            </div>

            {/* bottom og page */}
            <div className=" bg-white  rounded">
              <div className="bg-white rounded mb-5">
                <h5 className="pt-2 pl-5">Quick Quote</h5>
                <form className="shadow-lg" onSubmit={fun}>
                  <div className=" row  bg-white-100 rounded p-2">
                    <div className="col-sm-4 m-1 row ">
                      <small className="text-muted">From</small>{" "}
                      <input
                        className="dashinput "
                        type="text"
                        name="shipperPostalcode"
                        placeholder="Zip"
                        required
                      />
                      <small className="text-muted">To</small>{" "}
                      <input
                        className="inputfields col-sm"
                        type="text"
                        name="shippingToPostalcode"
                        placeholder="Zip"
                        required
                        min="0"
                      />
                      <small className="text-muted">Weight</small>{" "}
                      <input
                        className="inputfields col-sm"
                        type="number"
                        name="weight"
                        placeholder="LBS"
                        required
                        size="13px"
                        min="0"
                      />
                    </div>
                    <div className="col-sm-4 m-1 row">
                      <small className="text-muted">L</small>{" "}
                      <input
                        className="inputfields col-sm"
                        type="number"
                        name="packageLength"
                        placeholder="In"
                        required
                        min="0"
                      />
                      <small className="text-muted">W</small>{" "}
                      <input
                        className="inputfields col-sm"
                        type="number"
                        name="packageWidth"
                        placeholder="In"
                        required
                        min="0"
                      />
                      <small className="text-muted">H</small>{" "}
                      <input
                        className="inputfields col-sm"
                        type="number"
                        name="PackageHeight"
                        placeholder="In"
                        required
                        min="0"
                      />
                    </div>
                    <div className="col-sm-4 text-center">
                      <button className="button" type="submit">
                        <small>Quick Quote</small>{" "}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-sm-8  bg-white  rounded">
            <div className="bg-white rounded ">
              <h5 className=" " style={{ position: "relative", top: "0.5rem" }}>
                <small className="mt-5 ">UPS Active Shipments</small>
              </h5>
              <hr style={{ color: "#E2E2E2" }} />
              <form className=" row  ">
                <div className="col-4">
                  <small className="text-muted">Show</small>{" "}
                  <div className=" mb-3 showinput">
                    <select
                      value={pagesize}
                      onChange={(e) => setpagesize(e.target.value)}
                    >
                      <option defaultValue>5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                    </select>
                    <small className="mt-5">entries</small>
                  </div>
                </div>
                <div className=" col-sm-5 bg-primary-100 rounded"></div>
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
              </form>

              <DataTable
                className="bg-dark"
                columns={coloum}
                data={filterdata}
                pagination
                paginationDefaultPage={1}
                customStyles={customStyles}
                // sortIcon={<h5>jjj</h5>}
                paginationPerPage={pagesize}

                // paginationRowsPerPageOptions={[10, 25, 50, 100]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
