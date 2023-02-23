import React from "react";
import pdp from "../assets/pdp-proj.jpg";

const PdpProj = ({ onClose, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="bg-[#0A1B32] w-full h-auto fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      name="PdpProj"
    >
      <div className="bg-white max-w-[800px] mx-auto rounded-3xl">
        <div className="md:grid md:grid-cols-3">
          <div>
            <img
              className="hidden md:block w-72 h-96 m-5 mt-8"
              src={pdp}
              alt=""
            />
          </div>

          <div className="md:col-span-2 m-5 text-black custom-text-font ">
            <h1 className="items-center justify-center flex text-xl font-bold text-[#3b82f6]">
              Programming Design Paradigms
            </h1>

            <p className="text-lg font-bold text-[#8892b0] text-center">
              Dungeons and Dragons
            </p>

            <ul className="list-disc list-inside m-10">
              <li className="pt-2">
                Developed a GUI game using Java, Java Swing. Adhered to SOLID
                principles and Model-View-Controlle architecture.
              </li>
              <li>
                Created an initial UML diagram and expanded the game using it as
                a blueprint. Performed changes as requirements evolved.
              </li>
              <li>
                Performed testing by writing Junit-4 test cases ensuring a code
                coverage higher than 93%.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdpProj;
