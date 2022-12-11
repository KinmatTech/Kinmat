import React from "react";
import {
  AiFillGithub,
  // AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

function SocialMedia() {
  return (
    <ul className="home-about-social-links">
      
      <li className="social-icons">
       <a
          href="https://wa.me/+2348060850958"
          target="_blank"
          rel="KinmatTech"
          className="icon-colour  home-social-icons"
        >
          <AiOutlineWhatsApp className="social-icon" />
        </a>
      </li>
      
      <li className="social-icons">
        <a
          href="https://github.com/KinmatTech"
          target="_blank"
          rel="KinmatTech"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/mathew-ani-52240a22a"
          target="_blank"
          rel="Kinmat"
          className="icon-colour  home-social-icons"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
      </li>
      {/* <li className="social-icons">
        <a
          href="https://www.instagram.com/mathewok20/541540 "
          target="_blank"
          rel="Kinmat"
          className="icon-colour home-social-icons"
        >
          <AiFillInstagram className="social-icon" />
        </a>
      </li> */}
      <li className="social-icons">
        <a
          href="mailto:mathewok20@gmail.com"
          target="_blank"
          rel="Kinmat"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;
