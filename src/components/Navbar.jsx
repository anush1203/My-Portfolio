import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";

import { Link } from "react-scroll";
import resume from "../documents/Anush Resume 2023.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className="fixed w-full h-[50px] flex items-center px-4 bg-[#181a1b] text-[#dcdcdc] justify-center font-bold"
      id="navbar"
    >
      <ul className="hidden md:flex ">
        <li>
          <Link to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        {/* <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li> */}
        <li>
          <Link to="Education" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="Skill" smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li>
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*mobile Hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*mobile menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute left-0 top-0 w-full h-screen flex flex-col justify-center items-center bg-[#181a1b] text-[#cdcdcd]"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        {/* <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li> */}
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="Skill" smooth={true} duration={500}>
            Skills
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="flex items-center justify-between w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900">
            <a
              className="flex justify-between item-center w-full text-gray-300"
              href="https://www.linkedin.com/in/anush-mandya-nagesh-a45340140/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          <li className="flex items-center justify-between w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
            <a
              className="flex justify-between item-center w-full text-gray-300"
              href="https://github.com/"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>

          <li className="flex items-center justify-between w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between item-center w-full text-gray-300"
              href="mailto:anushnagesh23@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="flex items-center justify-between w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between item-center w-full text-gray-300"
              href={resume}
              target={"_blank"}
            >
              Resume <BsPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
