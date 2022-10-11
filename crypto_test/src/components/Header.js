import React from "react";
import logo from "../assets/logo.svg";
import CallMadeIcon from "@mui/icons-material/CallMade";
import "./Header.scss";
function Header() {
  return (
    <div className="Header">
      <div className="header_wrapper containerdev">
        <div className="logo">
          <img src={logo} alt="There is a logo" />
        </div>
        <div className="section_heads">
          <ul>
            <li>
              <a href="#1">Activities</a>
            </li>
            <li>
              <a href="#2">Technology</a>
            </li>
            <li>
              <a href="#2">R&D</a>
            </li>
            <li>
              <a href="#2">Community</a>
            </li>
            <li className="visit">
              <a href="link">
                <span>Career</span>
                <span>
                  {/* <img src={shape} alt="Visit's img" /> */}
                  <CallMadeIcon />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
