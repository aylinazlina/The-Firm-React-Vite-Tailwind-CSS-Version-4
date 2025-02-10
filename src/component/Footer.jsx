import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
const footerItem = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Solutions",
  },
  {
    id: 3,
    name: "Cases",
  },
  {
    id: 4,
    name: "About Us",
  },
  {
    id: 5,
    name: "Contact Us",
  },
];

const socialIcons = [
  {
    id: 1,
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    icon: <FaTwitter />,
  },
  {
    id: 3,
    icon: <FaYoutube />,
  },

  {
    id: 4,
    icon: <FaLinkedinIn />,
  },
  {
    id: 5,
    icon: <FaPinterestP />,
  },
];

const Footer = () => {
  return (
    <div className="bg-white py-25">
      <div className="container">
        <picture>
          <img src={logo} alt={logo} className="px-105 py-25" />
        </picture>

        <ul className="flex items-center gap-x-[50px] px-60">
          {footerItem.map((data) => (
            <li key={data.id}>
              <a
                href="#"
                className="menu font-nunito font-extrabold text-[#A5A5A5] text-[20px]"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex gap-x-[46px] px-100 py-22">
          {socialIcons.map((data) => (
            <li key={data.id}>
              <a href="#" className="text-[25px] text-[#A5A5A5] hover:text-yellow">
                {data.icon}
              </a>
            </li>
          ))}
        </ul>

        <p className="px-82 text-[18px] font-nunito font-normal leading-[134%] text-[#A5A5A5] ">Copyrights ©2020 Thefirm. All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
