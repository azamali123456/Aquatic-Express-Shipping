import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import "./home.css";
function Boxpreferences() {
  let navigate = useNavigate();
  let [responce, setResponce] = useState([]);
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
  const coloum = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Length",
      selector: (row) => row.length,
      sortable: true,
    },
    {
      name: "Width",
      selector: (row) => row.width,
      sortable: true,
    },
    {
      name: "Height",
      selector: (row) => row.height,
      sortable: true,
    },

    {
      name: "Action",
      sortable: true,
      cell: (row) => <button onClick={() => alert(row.firstName)}></button>,
    },
  ];

  useEffect(() => {
    const CURRENTtoken = localStorage.getItem("token");

    let config = { headers: { Authorization: ` Bearer ${CURRENTtoken}` } };
    axios
      .get("https://shipaquatic.com/api/boxpref", config)
      .then(function (response) {
        console.log(response.data, "BoxRef");
        setResponce(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [1000]);
  return (
    <div style={{ backgroundColor: "white", height: "100%" }}>
      <div className="row ">
        <div className="col-sm-12   ">
          <h6 className="p-1">
            {" "}
            <strong>Personal information</strong>
          </h6>
        </div>
        <hr className="text-muted text-bold" />
        <div className=" mb-0 ">
          {/* Personal information form */}
          <form className=" form-group  " onSubmit={fun}>
            {/* Customer information */}
            <div className=" row p-0"></div>
            <div className="row form-group m-0">
              <div className="col-sm-12 row">
                <div className="col-sm-1"></div>
                <div className="col-sm-5 p-1">
                  <div>
                    <small
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      BoxName{" "}
                      <input
                        type="text"
                        className="boxpreferenceinput ml-2  text-primary  "
                        name="firstname"
                        aria-describedby="emailHelp"
                        placeholder="BoxName"
                      />{" "}
                    </small>
                  </div>

                  <h6
                    style={{ fontWeight: "10", fontsize: "50px", color: "red" }}
                  >
                    <small>
                      ideal Box Name Should be like 'Box Name(L*W*H)'
                    </small>
                  </h6>
                </div>

                <div className="col-sm-1"></div>
                <div className="col-sm-5 p-1" style={{ display: "flex" }}>
                  <div>
                    <small
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      Lenght{" "}
                      <input
                        type="text"
                        className="boxpreferenceinput ml-2  text-primary col-sm-12 "
                        name="firstname"
                        aria-describedby="emailHelp"
                        placeholder="Lenght"
                      />{" "}
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 row">
                <div className="col-sm-1"></div>
                <div className="col-sm-5 p-1" style={{ display: "flex" }}>
                  <div>
                    <small
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      Width{" "}
                      <input
                        type="text"
                        className="boxpreferenceinput ml-2  text-primary col-sm-12 "
                        name="firstname"
                        aria-describedby="emailHelp"
                        placeholder="Width"
                      />{" "}
                    </small>
                  </div>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-5 " style={{ display: "flex" }}>
                  <div>
                    <small
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      Height{" "}
                      <input
                        type="text"
                        className="boxpreferenceinput ml-2  text-primary col-sm-12 "
                        name="firstname"
                        aria-describedby="emailHelp"
                        placeholder="Height"
                      />{" "}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-9"></div>
              <div className="col-sm-1">
                <button
                  className="boxpreferencebutton mt-1  justify-center float-right "
                  onClick={() => {}}
                >
                  Save
                </button>
              </div>
              <div className="col-sm-1">
                <button
                  className="boxpreferencebutton mt-1  justify-center float-right "
                  onClick={() => {}}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
        <hr />
        <div className="col-sm  ">
          <div className="table-responsive rounded mb-4">
            <DataTable
              columns={coloum}
              data={responce}
              pagination
              paginationDefaultPage={1}
              paginationPerPage={5}
              highlightOnHover
              onRowClicked={(row) => {
                console.log(row);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boxpreferences;
