import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./home.css";
function Changepassword() {
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
    <div className="m-0 " style={{ backgroundColor: "white", height: "20em" }}>
      <div className="row  ">
        <div className="col-sm-12  ">
          <h6>Personal information</h6>
        </div>
        <hr className="text-muted text-bold" />
        <div className=" mb-5 ">
          {/* Personal information form */}
          <form className="p-0 form-group  " onSubmit={fun}>
            {/* Customer information */}

            <div className="row mt-2 form-group ">
              <div className="col-sm-4">
                {" "}
                <small>Current Password</small>
              </div>
              <div className="col-sm-8 p-1">
                <input
                  type="text"
                  className="changepasswordinput   col-sm-8 "
                  name="firstname"
                  aria-describedby="emailHelp"
                  placeholder="Current Password"
                />
              </div>

              <div className="col-sm-4 "></div>
              <div className="col-sm-4 p-1 ">
                <button>
                  <h6>
                    <small style={{ color: "#0BB783" }}>Forgot Password?</small>
                  </h6>
                </button>
              </div>
              <div className="col-sm-4 "></div>
              <div className="col-sm-4 ">
                {" "}
                <small>New Password</small>
              </div>
              <div className="col-sm-8 p-1">
                <input
                  type="text"
                  className="changepasswordinput  text-primary col-sm-8 "
                  name="firstname"
                  aria-describedby="emailHelp"
                  placeholder="New Password"
                />
              </div>

              <div className="col-sm-4 ">
                {" "}
                <small>Verfy Password</small>
              </div>
              <div className="col-sm-8 p-1">
                <input
                  type="text"
                  className="changepasswordinput  text-primary col-sm-8 "
                  name="firstname"
                  aria-describedby="emailHelp"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-9"></div>
              <div className="col-sm-3">
                <button
                  type="submit"
                  className="btn  text-white text-justfy "
                  style={{ backgroundColor: "#1BC5BD" }}
                >
                  <small>Save Changes</small>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Changepassword;
