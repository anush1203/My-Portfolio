import React from "react";
import dbms_report from "../documents/Practicum2Su21AishaAnush.pdf";

const Dbms = ({ onClose, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="bg-[#0A1B32] w-full h-screen fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      name="Dbms"
    >
      <div className="bg-white max-w-[800px] mx-auto rounded-3xl text-black">
        <div className="m-5 custom-text-font">
          <h1 className="items-center justify-center flex text-xl font-bold text-[#3b82f6]">
            Database Management System
          </h1>

          <p className=" text-center text-lg font-bold text-[#8892b0]">
            Bird Strikes on Aircrafts
          </p>

          <p className="list-disc list-inside m-5 text-center">
            Built logical data model, realized relational schema in MySQL,
            loaded bird strike on aircrafts dataset, executed SQL queries and
            performed simple analysis of data.
          </p>

          <div className="text-center mt-8">
            <a
              className="px-6 py-3 border border-black no-underline bg-[#e3e5de] rounded hover:border-[#3b82f6] hover:bg-[#3b82f6] hover:text-white text-black font-bold"
              href={dbms_report}
              target={"_blank"}
            >
              See Report
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dbms;
