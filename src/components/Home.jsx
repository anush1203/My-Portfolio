import React from "react";

import resume from "../documents/Anush Resume 2023.pdf";

import StarParticles from "./StarParticles";

const Home = () => {
  return (
    <div name="Home" className="md:pb-24 bg-[#181a1b]">
      {/*container*/}
      <div
        className="max-w-[800px] mx-auto px-8 flex flex-col justify-center h-full"
        id="home"
      >
        <div className="m-10 text-center">
          <p className="text-[#dcdcdc] text-2xl">Hi, my name is</p>

          <h1 className="text-4xl sm:text-7xl font-bold text-[#3b82f6]">
            Anush Nagesh
          </h1>

          <h2 className="text-md md:text-2xl font-bold text-[#dcdcdc] py-4">
            I am a Graduate Computer Science Student at Northeastern University.
            I spend my day-to-day Leetcoding or developing projects with React
            and Node.
          </h2>

          <div className="mt-8">
            <a
              className="px-6 py-3  no-underline bg-[#E7E7F0] rounded hover:bg-[#3b82f6] hover:text-white text-[#181a1b] font-bold"
              href={resume}
              target={"_blank"}
              rel={"noreferrer"}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <StarParticles></StarParticles>
    </div>
  );
};

export default Home;
