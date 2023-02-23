import React from "react";
import HCI from "../assets/hci-banner.jpg";
import PDP from "../assets/pdp-banner.jpg";
import MAD from "../assets/mobile-app-dev.jpg";
import DMT from "../assets/data-mining-banner.jpg";
import DBMS from "../assets/dbms-banner.png";
import UG from "../assets/ug-banner.jpg";
import MobileDev from "./MobileDev";
import HciProj from "./HciProj";
import PdpProj from "./PdpProj";
import DmtProj from "./DmtProj";
import Dbms from "./Dbms";
import UgProj from "./UgProj";
import { useState } from "react";

const Work = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const closeModal1 = () => setShowModal1(false);
  const closeModal2 = () => setShowModal2(false);
  const closeModal3 = () => setShowModal3(false);
  const closeModal4 = () => setShowModal4(false);
  const closeModal5 = () => setShowModal5(false);
  const closeModal6 = () => setShowModal6(false);

  return (
    <div name="work" className="bg-white text-gray-300 w-full h-auto">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col items-center">
        <div className="pb-4 mt-12 mb-2">
          <span className="text-2xl md:text-4xl font-bold text-black custom-heading-font">
            My
          </span>
          <span className="text-2xl md:text-4xl font-bold text-[#3b82f6] custom-heading-font pl-2">
            Projects
          </span>
          {/* <p className="text-4xl font-bold inline text-[#3b82f6] custom-heading-font">
            My Projects
          </p> */}
        </div>

        <div className="w-full md:grid md:grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          <div
            style={{ backgroundImage: `url(${MAD})` }}
            className="mt-5 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Mobile Application Development
              </span>
              <div className="pt-8 text-center">
                <button
                  onClick={() => setShowModal1(true)}
                  className="text-center rounded-lg px-4 py-3 m-2 font-bold text-lg bg-white text-gray-700 "
                >
                  More
                </button>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${HCI})` }}
            className="mt-5 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Human Compuer Interaction
              </span>
              <div className="pt-8 text-center">
                <button
                  onClick={() => setShowModal2(true)}
                  className="text-center rounded-lg px-4 py-3 m-2 font-bold text-lg bg-white text-gray-700 "
                >
                  More
                </button>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${PDP})` }}
            className="mt-5 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Programming Design Paradigm
              </span>
              <div className="pt-8 text-center">
                <button
                  onClick={() => setShowModal3(true)}
                  className="text-center rounded-lg px-4 py-3 m-2 font-bold text-lg bg-white text-gray-700 "
                >
                  More
                </button>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${DMT})` }}
            className="mt-5 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Data Mining Techniques
              </span>
              <div className="pt-8 text-center">
                <button
                  onClick={() => setShowModal4(true)}
                  className="text-center rounded-lg px-4 py-3 m-2 font-bold text-lg bg-white text-gray-700 "
                >
                  More
                </button>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${DBMS})` }}
            className="mt-5 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Database Management
              </span>
              <div className="pt-8 text-center">
                <button
                  onClick={() => setShowModal5(true)}
                  className="text-center rounded-lg px-4 py-3 m-2 font-bold text-lg bg-white text-gray-700 "
                >
                  More
                </button>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${UG})` }}
            className="mt-5 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Undergrad Capstone
              </span>
              <div className="pt-8 text-center">
                <button
                  onClick={() => setShowModal6(true)}
                  className="text-center rounded-lg px-4 py-3 m-2 font-bold text-lg bg-white text-gray-700 "
                >
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileDev onClose={closeModal1} visible={showModal1} />
      <HciProj onClose={closeModal2} visible={showModal2} />
      <PdpProj onClose={closeModal3} visible={showModal3} />
      <DmtProj onClose={closeModal4} visible={showModal4} />
      <Dbms onClose={closeModal5} visible={showModal5} />
      <UgProj onClose={closeModal6} visible={showModal6} />
    </div>
  );
};

export default Work;
