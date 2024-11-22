import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Header/Header.css";


let Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light nav">
        <Link to={"/"}><a className="navbar-brand logo" href="#"><img src="./logo.jpg.jpg" /></a></Link>
        <button className="navbar-toggler btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse nav-ele" id="navbarSupportedContent">
          <ul className="navbar-nav navbar-ul">
            <li className="nav-item active item-nav">
              <NavLink to={"/"}>
                <a className="nav-link" href="#">Home</a>
              </NavLink>
            </li>
            <li className="nav-item active item-nav">
              <NavLink to={"/about"}>
                <a className="nav-link" href="#">About</a>
              </NavLink>
            </li>
            <li className="nav-item active item-nav">
              <NavLink to={"/blog"}>
                <a className="nav-link" href="#">Blog</a>
              </NavLink>
            </li>
            <li className="nav-item active item-nav">
              <NavLink to={"/contact"}>
                <a className="nav-link" href="#">Contact</a>
              </NavLink>
            </li>

          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className=" nav-inp " type="search" placeholder="Search for Products, Brands and More" aria-label="Search" />
            <button className="btn btn-outline-success  my-sm-0 inp-btn" type="submit">Search</button>
          </form>
        </div>
      </nav>

      
    </>
  )
};

export default Header;