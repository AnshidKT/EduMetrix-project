import React from "react";
import "../src/Section8.css";
import "../src/Section8Responsive.css";
import writeimg from "./section8-imgs/section-8-write-img.webp";
import giftimg from "./section8-imgs/gift-img.png";

const Section8 = () => {
  return (
    <div>
      <div className="section8-container">
        <div className="section8-sub1-cntr">
          <div className="services-main-div">
            <h1 className="services-h1">Our Services</h1>
            <p className="fastest-p">
              Fastest results assured with our efficient team and streamlined
              processes.
            </p>
          </div>

          <div className="prjects-main-div">
            <div className="website-box">
              <h1 className="website-p">Website</h1>
            </div>
            <div className="mobile-box">
              <h1 className="website-p">Mobile App</h1>
            </div>
          </div>

          <div className="prjects2-main-div">
            <div className="mobile-box">
              <h1 className="website-p">CRM Software</h1>
            </div>
            <div className="website-box">
              <h1 className="website-p">Idea to Product</h1>
            </div>
          </div>
          <div className="gift-main-div">
            <div className="gift-box-div">
              <img src={giftimg} className="gift-img" alt="" />
            </div>
            <div className="Partnership-container">
              <div className="Partnership-box">
                <h1 className="website-p">Project Incubation Partnership</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="section8-sub2-cntr">
          <img src={writeimg} alt="" className="write-img" />
        </div>
      </div>
    </div>
  );
};

export default Section8;
