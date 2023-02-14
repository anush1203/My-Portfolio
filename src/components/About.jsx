import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-white text-black">
      <div className="flex flex-col mt-10 items-center justify-center w-full h-full">
        <p className="text-4xl font-bold inline text-[#3b82f6]">About</p>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4"></div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl font-bold">
            <p>
              Hi. I am Anush Mandya Nagesh.Lorem ipsum dolor sit amet. Please
              take a look around
            </p>
          </div>
          <div className="sm:text-left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor
              nec feugiat nisl pretium fusce id velit ut tortor. Neque gravida
              in fermentum et sollicitudin ac orci
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
