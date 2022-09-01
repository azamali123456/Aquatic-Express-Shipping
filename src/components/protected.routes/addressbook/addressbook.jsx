import React, { useEffect, useState } from "react";
import "./addressbook.css";
import DataTable from "react-data-table-component";
import classNames from "classnames";
import axios from "axios";
const Addressbook = function () {
  let [addressbook, setaddressbook] = useState([]);
  let [filterdata, setfilterdata] = useState([]);
  const [search, setsearch] = useState("");
  useEffect(() => {
    const CURRENTtoken = localStorage.getItem("token");
    let config = { headers: { Authorization: ` Bearer ${CURRENTtoken}` } };

    axios
      .get("https://shipaquatic.com/api/addressbook/", config)
      .then(function (response) {
        console.log(response);
        setaddressbook(response.data);
        setfilterdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [1000]);
  useEffect(() => {
    // filter htmlFor model 1
    var result = filterdata.filter((singledata) => {
      return singledata.city.toLowerCase().match(search.toLowerCase());
    });
    console.log("hhhh", result);
    setfilterdata(result);

    if (result.length === 0 || search.length === 0) {
      setfilterdata(addressbook);
      console.log("yyyyy");
    }
    const CURRENTtoken = localStorage.getItem("token");

    let config = { headers: { Authorization: ` Bearer ${CURRENTtoken}` } };
    axios
      .get("https://shipaquatic.com/api/addressbook/", config)
      .then(function (response) {
        console.log(response.data, "Address book");
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [search]);
  const coloum = [
    {
      name: "Name",
      selector: (row) => row.lastName,
      sortable: true,
      // cell:(row) =>(<button onClick={()=>alert(row.firstName)}></button>)
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Apart/Building",
      selector: (row) => row.null,
      sortable: true,
    },
    {
      name: "CITY",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "STATE",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "ZIP CODE",
      selector: (row) => row.zipCode,
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "ORGANIZATION",
      selector: (row) => row.organization,
      sortable: true,
    },
    {
      name: "PHONE NUMBER",
      selector: (row) => row.phoneNumber,
      sortable: true,
    },
    {
      name: "RESIDENTIAL",
      selector: (row) => <h5>{row.isItResidential}✓</h5>,
      sortable: true,
    },
  ];
  let fun = async (e) => {
    e.preventDefault();

    let data = {
      organization: e.target[0].value,
      email: e.target[8].value,
      firstName: e.target[1].value,
      lastName: "Ali",
      address: e.target[2].value,
      place: "Us",
      id: "uid_6142ea8108_mta6mzc6mji",
      city: e.target[5].value,
      state: e.target[6].value,
      zipCode: e.target[7].value,
      phoneNumber: e.target[9].value,
      isItResidential: true,
      visible: true,
      isAcive: true,
      userId: "32e2fa6f-7e51-4d8d-b547-07c19ddfafb8",
      user: null,
    };
    const CURRENTtoken = localStorage.getItem("token");
    let config = { headers: { Authorization: ` Bearer ${CURRENTtoken}` } };
    console.log(data);
    axios
      .post("https://shipaquatic.com/api/AddressBook", config, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container-fluid   ">
      <div className="mb-2 mt-2 rounded" style={{ backgroundColor: "white" }}>
        <div className="mt-1 p-1 row ">
          <div className="col-sm-12 row">
            <div className="col-2 ">
              <h4 className="addressbook m-1">
                {" "}
                <small>Address Book</small>
              </h4>
            </div>
            <div className="col-5"></div>
            <div className="col-5 ">
              <button
                className="addressbuttonicon mt-1  justify-center float-right "
                onClick={() => {}}
              >
                My Address
              </button>
            </div>
            <hr
              className="m-2 text-[rgba(0, 0, 0, 0.1)]"
              style={{ color: "rgba(0, 0, 0, 0.1)" }}
            />
          </div>
        </div>

        <div className="col-sm-12  ">
          <h6 className=" m-2 p-3 bg-[#D7F9EF] text-muted rounded">
            <small> Ship To</small>
          </h6>
        </div>
        <form className=" form-group " onSubmit={fun}>
          <div className="col-sm-12 row" style={{ overflow: "hidden" }}>
            <div className="col-sm-6 row  ">
              <div className="col-sm-3"></div>
              <div className="col-sm-9  ">
                <div
                  className="   float-right  pt-1 pb-2 "
                  style={{ display: "flex" }}
                >
                  <small forhtml="Organization" className="p-1">
                    Organization
                  </small>
                  <input
                    className=" addressfrominput col-sm"
                    type="text"
                    name="organization "
                    placeholder="Organization"
                  />
                </div>
                <div className=" float-right pb-1 " style={{ display: "flex" }}>
                  <small className="p-1">Name</small>
                  <input
                    className="addressfrominput  col-sm"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    // defaultValue={addressrow.firstName}

                    onChange={(e) => {}}
                  />
                </div>{" "}
                <div
                  className=" float-right  pb-1 "
                  style={{ display: "flex" }}
                >
                  <small className=" p-1">Address</small>
                  <input
                    className="addressfrominput col-sm"
                    type="text"
                    placeholder="Street address"
                    onChange={(e) => {}}
                  />
                </div>{" "}
                <div className=" float-right  pb-1" style={{ display: "flex" }}>
                  <small className="p-1">Apart/Building</small>
                  <input
                    className="addressfrominput col-sm"
                    type="text"
                    placeholder="Apart/Building"
                    // value={}
                    // onChange={(e) => {setaddressrow(e.target.value)}}
                  />
                </div>
                <div className=" float-right ">
                  <small style={{ position: "relative", bottom: "7px" }}>
                    Is this residentianl?
                  </small>
                  <label
                    htmlFor="default-toggle"
                    className=" m-3 inline-flex relative items-center cursor-pointer text-center  text-white font-bold inline-block "
                    style={{ position: "relative" }}
                    onClick={() => {}}
                  >
                    <input
                      type="checkbox"
                      value=""
                      id="default-toggle"
                      className=" w-6 sr-only peer p-1"
                    />
                    <div
                      className={classNames(
                        "w-12 h-7 border-[#0BB783]  border-solid border-2      bg-gray-200 border-[#0BB783]  peer-focus:ring-black-300 dark:peer-focus:ring-blue-800 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full peer peer-checked:after:border-[#0BB783]  peer-checked:after:content-['✓']   after:absolute after:top-[4px] after:left-[4px] after:bottom-[3px] after:right-[3px] after:bg-[#0BB783] p-1 after:border-[#0BB783] after:border after:rounded-full after:h-5 after:w-5  peer:chacked:after:p-1 after:transition-all dark:border-[#0BB783]  peer-checked:bg-gray-200"
                      )}
                    ></div>
                    <span
                      className={classNames(
                        "ml-3  text-sm font-medium text-black-100 dark:text-gray-300"
                      )}
                    ></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-sm-6 row">
              <div className="col-sm-4"></div>
              <div className="col-sm-8">
                <div
                  className=" float-right pt-1 pb-2 "
                  style={{ display: "flex" }}
                >
                  <small className="p-1">City</small>
                  <input
                    className="addressfrominput col-sm"
                    type="text"
                    placeholder="City"
                    onChange={(e) => {}}
                  />
                </div>
                <div className=" pb-1 float-right " style={{ display: "flex" }}>
                  <small className="p-1">State</small>
                  <input
                    className="addressfrominput col-sm"
                    type="text"
                    placeholder="State"
                    onChange={(e) => {}}
                  />
                </div>{" "}
                <div
                  className=" float-right  pb-1 "
                  style={{ display: "flex" }}
                >
                  <small className=" p-1">Zip Code</small>
                  <input
                    className="addressfrominput col-sm"
                    type="text"
                    placeholder="Zip code"
                    onChange={(e) => {}}
                  />
                </div>{" "}
                <div
                  className=" float-right   pb-1"
                  style={{ display: "flex" }}
                >
                  <small className="p-1">Email</small>
                  <input
                    className="addressfrominput col-sm"
                    type="text"
                    placeholder="Phone"
                    onChange={(e) => {}}
                  />
                </div>
                <div
                  className=" float-right   pb-1"
                  style={{ display: "flex" }}
                >
                  <small className="p-1">Phone</small>
                  <input
                    className="addressfrominput col-sm"
                    type="text"
                    placeholder="Phone"
                    onChange={(e) => {}}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <button
                className="addressbuttonicon mt-1  justify-center float-right"
                type="submit"
              >
                Create Address
              </button>
              <button
                className="addressbuttonicon mt-1  justify-center float-right m-2"
                type="reset"
              >
                Cancel
              </button>
            </div>

            <hr
              className="ml-5 col-sm-12 text-[rgba(0, 0, 0, 0.1)]"
              style={{ color: "rgba(0, 0, 0, 0.1)" }}
            />
          </div>
        </form>
        <div className=" m-2 ">
          <div className="row">
            <div className="col-sm-2">
              <button className="shipbuttonicon mt-3 " onClick={() => {}}>
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
                columns={coloum}
                data={filterdata}
                pagination
                paginationDefaultPage={1}
                paginationPerPage={5}
                highlightOnHover
                onRowClicked={(row) => {
                  // setaddressrow1(row);
                  // setmodalshow1(false);
                  console.log(row);
                }}
              />
            </div>
            <div className="row ">
              <div className="col-2"></div>
              <div className="col-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addressbook;
