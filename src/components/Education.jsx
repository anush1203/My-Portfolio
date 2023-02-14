import React from "react";
import ADI from "../assets/adi-logo.jpg";
import NEU from "../assets/neu-logo.jpg";

const Education = () => {
  return (
    <div name="Education" className="w-full h-screen bg-white">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <div className="text-black pb-4 mt-12 mb-6">
          <p className="text-4xl font-bold text-[#3b82f6] custom-heading-font">
            Experience
          </p>
        </div>
        {/*ASICS Digital*/}
        <div className="grid grid-cols-4 gap-5">
          <div>
            <img
              className="rounded-full h-48 w-48"
              src={ADI}
              alt="ASICS Digital"
            />
          </div>
          <div className="col-span-3 text-black pl-10 custom-text-font">
            <p className="text-xl font-bold">ASICS Digital</p>
            <p className="text-lg text-[#8892b0] font-bold">
              Software Engineer Co-Op
            </p>
            <ul className="list-disc list-inside text-sm">
              <li>
                Implemented a new checkout page on Salesforce Commerce Cloud on
                a global scale.
              </li>
              <li>
                Using Node, Express, jQuery, HTML and SASS, developed within an
                MVC architecture to reduce the API calls
              </li>
              <li>
                Automated Vertex - cloud based tax and address validation
                solution during downtime by implementing Scripted API on New
                Relic -cloud based performance tracker
              </li>
              <li>
                Carried out regression testing for code changes every week.
                Followed AGILE methodologies for smooth progress
              </li>
            </ul>
          </div>
        </div>
        <br />
        <hr />
        {/*Northeastern University*/}
        <div className="grid grid-cols-4 gap-5 mt-5">
          <div>
            <img
              className="rounded-full h-48 w-48"
              src={NEU}
              alt="ASICS Digital"
            />
          </div>
          <div className="col-span-3 pl-10 custom-text-font">
            <div className="text-black">
              <p className="text-xl font-bold">
                Khoury College - Teaching Assistant
              </p>
              <p className="text-lg text-[#8892b0] font-bold">
                CS5340 - Human Computer Interaction
              </p>
              <p className="text-lg text-[#8892b0] font-bold">
                CS1100 - Computer Science and Its Applications
              </p>
              <p className="text-sm">
                Assisted professor by grading assignments, exams and projects,
                and tending to students doubts both on Piazza-online dicussion
                platform and one-on-one via zoom call.
              </p>
            </div>
            <br />
            <div className="text-black">
              <p className="text-xl font-bold">Northeastern University</p>
              <p className="text-lg font-bold text-[#8892b0]">
                Residential Security Officer
              </p>
              <p className="text-sm">
                Worked closely with NUPD and Northeastern University to maintain
                student safety by assisting residents and parents, maintaining a
                special access list, paging residence life staff, notifying
                public safety of any security breaches or emergency issues, and
                monitoring of all proctor stations.
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Education;
