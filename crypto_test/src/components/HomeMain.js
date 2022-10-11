import React from "react";
import "./HomeMain.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import directions from "../assets/home_left.svg";
function HomeMain() {
  return (
    <div className="HomeMain">
      <div className="this_wrapper">
        <div className="containerdev">
          <div className="content_wrapper">
            <div className="left_box">
              <div className="top_intrance">
                <p>crypto trading</p>
              </div>
              <div className="heading">
                <h1>
                  Engineers Meet <br />
                  <span>Traders _</span>
                </h1>
                <p>
                  Advanced crypto algorithmic trading and efficient cross-chain
                  execution, at scale.
                </p>
              </div>
            </div>
            <div className="right_box">
              <div className="wrapper">
                <img src={directions} alt="Directions" />
              </div>
            </div>
          </div>
          <div className="learn_more">
            <a href="anylink">
              <p>
                <span>Learn More</span>{" "}
                <span>
                  <ExpandMoreIcon />
                </span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
