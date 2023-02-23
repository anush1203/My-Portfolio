import React from "react";
import hci from "../assets/hci-1.jpg";

const HciProj = ({ onClose, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="bg-[#0A1B32] w-full h-auto fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      name="HciProj"
    >
      <div className="bg-[#f2f4f2] max-w-[800px] mx-auto rounded-3xl text-black">
        <div className="md:grid md:grid-cols-3">
          <div>
            <img className="hidden md:block w-48 h-96 m-5" src={hci} alt="" />
          </div>

          <div className="md:col-span-2 m-5 custom-text-font">
            <h1 className="items-center justify-center flex text-xl font-bold text-[#3b82f6]">
              Human Computer Interaction
            </h1>
            <p className=" text-center text-lg font-bold text-[#8892b0]">
              NUDining App
            </p>

            <ul className="list-disc list-inside m-5">
              <li className="pt-2">
                Designed an interactive UI for Northeastern University dining
                app where users can search items, track nutrition info among
                other things.
              </li>
              <li className="pt-2">
                Followed and re-iterated over analysis, design, prototype, and
                evaluation of HCI lifecycle. Conducted live interviews, designed
                various levels of prototypes based on user feedback, and
                performed usability testing.
              </li>
              <li className="pt-2">
                Received a score of 72% on system usability scale.
              </li>
            </ul>

            <div className="text-center mt-8 ">
              <a
                className="px-6 py-3 border border-black no-underline bg-[#e3e5de] rounded hover:border-[#3b82f6] hover:bg-[#3b82f6] hover:text-white text-black font-bold"
                href="https://9uoqb5.axshare.com"
                target={"_blank"}
                rel={"noreferrer"}
              >
                See Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HciProj;
