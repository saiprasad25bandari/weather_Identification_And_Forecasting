

import { NavLink } from 'react-router-dom';
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <h4>
        <img src="https://img.icons8.com/?size=1x&id=85POYJRwNG7b&format=png"/><b> SkyView</b>
        </h4>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="nav-link" to="/">
              <i className="fa-solid fa-house" /> <k>Home</k>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/Contact">
              <i className="fa-sharp fa-solid fa-phone" /> <k>Contact us</k>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/About">
              <i className="fa-solid fa-address-card" /> <k>About us</k>
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/WeatherForecast">
              <i className="fa-solid fa-address-card" /> <k>WeatherForecast</k>
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
    </nav>
    );
};







