import React from "react";
import PWD from "../assets/pwd-logo.png";
import UALR from "../assets/ualr-logo.png";

const Experience = () => {
  return (
    <div name="Experience" className=" bg-white">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-auto">
        {/*Pacific Web Developers*/}
        <div className="md:grid md:grid-cols-4 gap-5 mt-5">
          <div className="">
            <img
              className="hidden md:block rounded-full h-48 w-48"
              src={PWD}
              alt="Pacific Web Developers"
            />
          </div>
          <div className="md:col-span-3 text-black pl-10 custom-text-font">
            <p className="font-bold text-lg md:text-xl">
              Pacific Web Developers
            </p>
            <p className="font-bold text-md md:text-lg text-[#8892b0]">
              Co-Founder, Web Developer
            </p>
            <p className="text-sm align-middle">
              Built 4 static websites using HMTL, CSS and JavaScript for
              different clients based on requirements. Managed a team of 3 and
              worked together on front-end and back-end issues along with
              performing quality assurance ensuring best service
            </p>
          </div>
        </div>
        <br />
        <hr />
        {/*UALR*/}
        <div className="md:grid md:grid-cols-4 gap-5 mt-5">
          <div className="">
            <img
              className="hidden md:block rounded-full h-48 w-48"
              src={UALR}
              alt="University of Arkansas, Little Rock"
            />
          </div>
          <div className="md:col-span-3 text-black pl-10 custom-text-font">
            <p className="text-lg md:text-xl font-bold">
              University of Arkansas, Little Rock
            </p>
            <p className="text-md md:text-lg font-bold text-[#8892b0]">
              Research Fellowship
            </p>
            <p className="text-sm">
              Developed a system that uses face recognition in conjunction with
              an accelerometer to determine if driver is sleepy. <br />
              Built face recognition software using CNN and HOG to collect
              facial co-ordinates and using the Euclidian distance to calculate
              eye dimensions to compare with predefined threshold value. <br />
              The accelerometer was attached to a car to collect normal movement
              readings. <br />
              An unusual indication of values in both systems meant the driver
              is drowsy and an alarm is set off as a warning
            </p>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Experience;
