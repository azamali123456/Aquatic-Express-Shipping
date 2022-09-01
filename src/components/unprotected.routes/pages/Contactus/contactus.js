import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import "./Contactus.css";
function Contactus() {
  return (
    <div className=" aboutcontainer ">
      <div className="mb-5">
        <div className=" bg-white rounded p-3 row mb-5">
          <h5>Contact Us</h5>
          <hr />
          <div className="col-3"></div>
          <div className="col-9">
           
          <form>
  <div className="">
  Name <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <label htmlFor="exampleInputEmail1">Email address</label>
   Email <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group  ">
    Subject <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Your subject"/>
  </div>
  <div className="form-group">
  Message <textarea className="form-control" id="exampleFormControlTextarea3" placeholder="Enter your massage" rows="2"/>
  <small id="emailHelp" className="form-text text-muted">Please enter a menu within text length range 10 and 1000.</small>
  </div>
  <button type="submit" className="button">Send</button>
  </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
