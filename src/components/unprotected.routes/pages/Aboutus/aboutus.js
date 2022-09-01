import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import "./aboutus.css";
function Aboutus() {
  return (
    // Aboutus page
    <div className=" aboutcontainer ">
      <div className="mb-5">
        <div className=" bg-white rounded p-3 ">
          <h3 className="font-bold m-3 ">About Us</h3>
          <div className="p-2">
            <h5>Aquatic Xpress Shipping</h5>
            <p>
              {" "}
              <small>
                How did we get started? Aquatic Xpress Shipping was established
                because of the high need of aquatic professionals and hobbyists
                that ship aquatic related live animals such as fish, corals,
                plecos, as well as aquatic supplies. We understand that, with
                live animals, the speed of delivery is essential so that the
                customer will have a satisfied experience. A fish that is
                shipped cannot live for a long period of time especially when
                they have minimum air in their bags. We understand that the best
                way to ship any live aquatic animal would be to ship them
                overnight which could be costly. This site was created to help
                aquatic professionals, hobbyists, small businesses, etc. ship
                their live animals as fast as possible at an affordable price.
              </small>
            </p>
          </div>

          <div className="p-2">
            <h5>Owner</h5>
            <p>
              {" "}
              <small>
                Fred Aspengren is an experienced hobbyist with more than 7 years
                of experience with African cichlids. It started with just one
                tank in his home as a decoration. Soon the fish multiplied, and
                the tanks multiplied and within one year, he had a whole room
                with more than 20 tanks. Within 3 years, he built 200 square
                feet shed in his back yard with more than 50 tanks. He currently
                now has an 800 square feet fish room with over 100 fish tanks.
                With so many fish, he has shipped his fish all over the United
                States.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
