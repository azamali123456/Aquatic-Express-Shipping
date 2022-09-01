import React, { useState, useEffect } from "react";
import "./homepage.css";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap"
import {  useNavigate } from "react-router-dom";
import image1 from "../../../../carousel/image1/01.jpg";
import image2 from "../../../../carousel/image2/02.jpg";
import image3 from "../../../../carousel/image3/03.jpg";
function Homepage() {
  let navigate = useNavigate();
  const [res, setres] = useState([]);
  const [value, setvalue] = useState(false);
  const [loading,setloading]= useState(false);
  
  let fun = async (e) => {
    e.preventDefault();
setloading(true)
    //  localStorage.removeItem("token")
    //  localStorage.removeItem("user")
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
        console.log(response.data);
        setres(response.data);
        console.log(res)
        setvalue(true);
        setloading(false)

        // localStorage.setItem("token", response.data.token)
        // localStorage.setItem('user', response.data.user.name)
        // navigate("/homepage")
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className=" container-fluid mt-1"></div>

      <div className="container-fluid">
        <div
          id="carouselExampleControls"
          class="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner relative w-full overflow-hidden">
            <div class="carousel-item active relative float-left w-full">
              <img src={image1} class="block w-full" alt="Wild Landscape" />
            </div>
            <div class="carousel-item relative float-left w-full">
              <img src={image2} class="block w-full" alt="Camera" />
            </div>
            <div class="carousel-item relative float-left w-full">
              <img src={image3} class="block w-full" alt="Exotic Fruits" />
            </div>
          </div>
          <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="mt-4">
          {/* Homepage inputs fields */}
          <div className="bg-white rounded mb-5">
            <h5 className="pt-2 pl-5">Quick Quote</h5>
            <form onSubmit={fun}>
              <div className=" row">
                <div className="col-4 m-3">
                  <small className="text-muted">From</small>{" "}
                  <input
                    className="inputfields"
                    type="text"
                    name="shipperPostalcode"
                    placeholder="Zip"
                    required
                  />
                  <small className="text-muted">To</small>{" "}
                  <input
                    className="inputfields"
                    type="text"
                    name="shippingToPostalcode"
                    placeholder="Zip"
                    required
                  />
                  <small className="text-muted">Weight</small>{" "}
                  <input
                    className="inputfields"
                    type="number"
                    name="weight"
                    placeholder="LBS"
                    required
                    size="13px"
                    min="0"
                  />
                </div>
                <div className="col-3 m-3">
                  <small className="text-muted">L</small>{" "}
                  <input
                    className="inputfields"
                    type="number"
                    name="packageLength"
                    placeholder="In"
                    required
                    min="0"
                  />
                  <small className="text-muted">W</small>{" "}
                  <input
                    className="inputfields"
                    type="number"
                    name="packageWidth"
                    placeholder="In"
                    required
                    min="0"
                  />
                  <small className="text-muted">H</small>{" "}
                  <input
                    className="inputfields"
                    type="number"
                    name="PackageHeight"
                    placeholder="In"
                    required
                    min="0"
                  />
                </div>
                <div className="col-4 m-3">
                  <button className="button" type="submit">
                    <small>Quick Quote</small>{" "}
                  </button>
                </div>
              </div>
            </form>

            {/* UPS Table */}
            <div className="bg-light m-4 rounded mb-2">
              <p className="pt-3 pl-3 " style={{ color: "#0BB783" }}>
                UPS
              </p>
              <hr />
{loading==true ?(
<h3 className="text-center"> <ReactBootStrap.Spinner animation="border"  variant="success" /></h3>
) : null}


              {value == true ? (
                <div>
                <div class="table-responsive rounded mb-4">
                  <table class="table mb-4 ">
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
                      {res.map((item) => (
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
                      onClick={() => { navigate("/Signup") }}
                    >
                      <small>Signup Now</small>{" "}
                    </button>
                  </div>
                </div>
              </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
