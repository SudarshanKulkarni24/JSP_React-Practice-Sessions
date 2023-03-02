import React, { Component } from "react";
import "../styles.css";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="navlist">
          <img
            className="image"
            src="https://icon2.cleanpng.com/20180629/gi/kisspng-react-angularjs-javascript-library-front-and-back-atom-5b35ea5bda9a42.9151947115302600598954.jpg"
            alt="React app"
            width="50px"
            height="36"
          />
          <li className="nav-items">
            <a href="#">Home</a>
          </li>
          <li className="nav-items">
            <a href="#">About</a>
          </li>
          <li className="nav-items">
            <a href="#">Testimonials</a>
          </li>
          <li className="nav-items">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
