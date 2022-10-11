import React from "react";
import "./About.scss";
import chart from "../assets/Chart.png";
import vectors from "../assets/vectors.svg";
function About() {
  return (
    <div className="About">
      <div className="about_wrapper">
        <div className="scroll_down">
          <p>
            <span></span>
          </p>
        </div>
        <div className="section_heading">
          <p>about us</p>
          <h2>Global technologies</h2>
        </div>
        <div className="containerdev">
          <div className="chart_wrapper">
            <div className="left_box">
              <img src={chart} alt="Chart" />
            </div>
            <div className="right_box">
              <h4>Level 1</h4>
              <div className="step1">
                <div className="ugolok"></div>
                <div className="content">
                  <p>
                    Deploy a multi-legged futures strategy by simultaneously
                    placing orders to buy and sell from the same order ticket.
                  </p>
                </div>
              </div>
              <div className="step1">
                <div className="ugolok"></div>
                <div className="content">
                  <p>
                    Deploy a multi-legged futures strategy by simultaneously
                    placing orders to buy and sell from the same order ticket.
                  </p>
                </div>
              </div>
              <div className="beginning">
                <a href="anylink">Start Now</a>
              </div>
            </div>
          </div>
          <div className="vectors_section">
            <div className="this_wrapper">
              <div className="left_box">
                <img src={vectors} alt="Vectors" />
              </div>
              <div className="right_box">
                <h1>
                  The future Cryptocurrency trading <span>platform</span>
                </h1>
                <p>
                  Take advantage of time and sales, futures spread orders and
                  depth trader — plus, trade directly from charts.
                </p>
                <a href="anylink">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
