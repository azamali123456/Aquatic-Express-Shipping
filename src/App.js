import "./App.css";
import { useState, useEffect } from "react";
import Signup from "./components/unprotected.routes/pages/Signup/signup";
import Homepage from "./components/unprotected.routes/pages/Homepage/homepage";
import Contactus from "./components/unprotected.routes/pages/Contactus/contactus";
import Clearcache from "./components/unprotected.routes/pages/Clearcache/clearcache";
import Aboutus from "./components/unprotected.routes/pages/Aboutus/aboutus";
import Faq from "./components/unprotected.routes/pages/Faq/faq";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/unprotected.routes/pages/Login/login";
import Dashbord from "./components/protected.routes/dashbord/dashbord";
import Creative from "./components/protected.routes/home/home";
import Ship from "./components/protected.routes/ship/ship";
import Addressbook from "./components/protected.routes/addressbook/addressbook";
import Shop from "./components/protected.routes/shop/shop";
import Perinformation from "./components/protected.routes/home/personalinformation";
import Changepassword from "./components/protected.routes/home/changepassword";
import Layout from "./components/layout";
function App() {
  return (
    <div className=" App">
      <div className="container-fliud">
        <Router>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/aboutus" element={<Aboutus />} />
              <Route exact path="/contactus" element={<Contactus />} />
              <Route exact path="/faq" element={<Faq />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/clearcache" element={<Clearcache />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/creative" element={<Creative />} />
              <Route exact path="/dashbord" element={<Dashbord />} />
              <Route exact path="/ship" element={<Ship />} />
              <Route exact path="/addressbook" element={<Addressbook />} />
              <Route exact path="/shop" element={<Shop />} />
              <Route
                exact
                path="/personalinformation"
                element={<Perinformation />}
              />
              <Route
                exact
                path="/changepassword"
                element={<Changepassword />}
              />
            </Routes>
          </Layout>
        </Router>
      </div>
   
    </div>
  );
}

export default App;
