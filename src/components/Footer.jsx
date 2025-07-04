import React from "react";
import { FaHackerrank, FaGithub, FaLinkedin, FaCode } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      {/* <a
        href="https://www.instagram.com/huzaifahmedz/"
        target="_blank"
        rel="noopener noreferrer"
      > 
        <FaHackerrank size={24} />
      </a> */}
      <a href="https://github.com/22rahulrai" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/rairahul22/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://leetcode.com/u/Rahul_Rai22/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaCode size={24} />
      </a>

    </footer>
  );
};

export default Footer;