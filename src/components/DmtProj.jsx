import React from "react";
import dmt from "../assets/dmt-proj.jpg";
import dmt_report from "../documents/DMT FINAL Report.pdf";

const DmtProj = ({ onClose, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="bg-[#0A1B32] w-full h-screen fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      name="DmtProj"
    >
      <div className="bg-white max-w-[800px] mx-auto rounded-3xl">
        <div className="grid grid-cols-4 custom-text-font">
          <div className="col-span-2">
            <img className="w-120 h-96 m-5" src={dmt} alt="" />
            <p className="text-black mt-2 mb-2 ml-5 text-center font-bold">
              Music recommendation for user based on popularity
            </p>
          </div>

          <div className="col-span-2 m-5 text-black">
            <h1 className="items-center justify-center flex text-xl font-bold text-[#3b82f6]">
              Data Mining Techniques
            </h1>

            <p className="text-lg font-bold text-[#8892b0] text-center">
              Music Recommendation System
            </p>

            <p className="m-5 pt-2">
              Developed a recommendation system that suggests songs based on
              popularity, user preferences and items similar to input song using
              Million Songs dataset. Represented the results on a bar graph
              using matplotlib and seaborn libraries
            </p>

            <div className="text-center mt-16 ">
              <a
                className="px-6 py-3 border border-black no-underline bg-[#e3e5de] rounded hover:border-[#3b82f6] hover:bg-[#3b82f6] hover:text-white text-black font-bold"
                href={dmt_report}
                target={"_blank"}
                rel={"noreferrer"}
              >
                See Report
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DmtProj;
