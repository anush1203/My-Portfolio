import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongo.png";
import react from "../assets/react.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import php from "../assets/php-logo.png";
import git from "../assets/git-logo.png";
import bootstrap from "../assets/Bootstrap-logo.png";
import axure from "../assets/axure-rp-logo.png";
import StarParticles from "./StarParticles";

const Skill = () => {
  return (
    <div name="Skill" className="bg-[#181a1b] text-black w-full h-screen">
      <div
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full"
        id="skill"
      >
        <div className="text-black">
          <span className="text-4xl font-bold text-white custom-heading-font">
            Technical
          </span>
          <span className="text-4xl font-bold text-[#3b82f6] custom-heading-font pl-3">
            Skills
          </span>
          {/* <p className="text-4xl font-bold inline text-[#3b82f6] custom-heading-font">
            Technical Skills
          </p> */}
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8 ">
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mt-5 mx-auto " src={html} alt="html icon" />
            <p className="my-4 text-white font-bold">HTML</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mt-5 mx-auto" src={css} alt="html icon" />
            <p className="my-4 text-white font-bold">CSS</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mt-5 mx-auto" src={js} alt="html icon" />
            <p className="my-4 text-white font-bold">JAVASCRIPT</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mt-5 mx-auto" src={react} alt="html icon" />
            <p className="my-4 text-white font-bold">REACT</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mt-5 mx-auto" src={mongodb} alt="html icon" />
            <p className="my-4 text-white font-bold">MONGO DB</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img className="w-20 mt-5 mx-auto" src={node} alt="html icon" />
            <p className="my-4 text-white font-bold">NODE</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mt-5 mx-auto" src={php} alt="html icon" />
            <p className="my-4 text-white font-bold">PHP</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <img
              className="w-20 mt-5 mx-auto h-20"
              src={java}
              alt="html icon"
            />
            <p className="my-4 text-white font-bold">JAVA</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mt-5 mx-auto" src={python} alt="html icon" />
            <p className="my-4 text-white font-bold">PYTHON</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mt-5 mx-auto" src={git} alt="html icon" />
            <p className="my-4 text-white font-bold">GIT</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              className="w-20 mt-8 mx-auto"
              src={bootstrap}
              alt="html icon"
            />
            <p className="my-4 text-white font-bold">BOOTSTRAP</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mt-5 mx-auto" src={axure} alt="html icon" />
            <p className="my-4 text-white font-bold">AXURE RP</p>
          </div>
        </div>
      </div>
      <StarParticles></StarParticles>
    </div>
  );
};

export default Skill;
