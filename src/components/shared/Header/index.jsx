import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../../../App.css";
import image from "../../../carousel/logoimage/Aquatic.png";

const Header = () => {
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  return (
    <nav className="  navbar navbar-expand-lg  navbar1">
      <div className="col-1 ">
        <img
          src={image}
          width={100}
          height="auto"
          className="img-fluid m-2"
          alt="Responsive image"
        ></img>
      </div>

      <div className="col-5"></div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar2"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-menu-down"
          viewBox="0 0 16 16"
        >
          <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793L7.646.146zM1 7v3h14V7H1zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2h14zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse col-6  text-center"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav   offset-1  ">
          <li className="nav-item  ">
            <div className="">
              <Link
                className="nav-link text-white w-100 h-100  font-semibold  "
                to="/aboutus"
              >
                About Us
              </Link>
            </div>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white w-100 h-100 " to="/contactus">
              Contact Us
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link text-white  " to="/faq">
              FAQ
            </Link>
          </li>
          {token ? (
            <>
              <li className="nav-item   ">
                <div
                  className="text-white"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>

                  <Link className="nav-link text-white  " to="/creative">
                    {name}
                  </Link>
                </div>
              </li>
              <li>
                <Link className="nav-link text-white " to="/clearcashe">
                  Alart
                </Link>
              </li>
              <li className="nav-item   ">
                <div
                  className="text-white"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-box-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                    />
                  </svg>
                  <Link className="nav-link text-white " to="/login">
                    <button
                      onClick={() => {
                        localStorage.removeItem("token");
                      }}
                    >
                      Logout
                    </button>
                  </Link>
                </div>
              </li>
            </>
          ) : (
            <li className="nav-item ">
              <Link className="nav-link text-white " to="/login">
                Login/Signup
              </Link>
            </li>
          )}

          <li className="nav-item ">
            <Link className="nav-link text-white" to="/clearcache">
              Clear cache
            </Link>
          </li>
          {/* {(token=="") ? (
                  <>
                   <Link className="nav-link text-white" to="/clearcashe">
                   Crative
                 </Link>
                 <Link className="nav-link text-white" to="/clearcashe">
                 Alart
               </Link>
               </>
                
                ): null} */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
