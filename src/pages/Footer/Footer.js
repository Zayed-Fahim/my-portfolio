import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icon/Logo.png";
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  const mailtoHref = "mailto:sayedasifzayed@gmail.com?subject=SendMail&body=";
  const phoneNumber = "+880 1891 988693";
  const address = "33/B, Hazaribagh, Dhaka-1209, Bangladesh"; // Replace with the address you want to display on the map
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <div className="h-auto bg-[#242526] shadow-2xl">
      <footer className="flex flex-wrap lg:flex-nowrap lg:justify-evenly lg:items-center container lg:mx-auto gap-4 lg:gap-2 p-5 lg:p-10 text-white">
        <div className="flex lg:flex-col gap-3">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="link link-hover"
          >
            Home
          </Link>
          <Link
            to="/?about-me"
            onClick={() => {
              window.scrollTo({ top: 1886, behavior: "smooth" });
            }}
            className="link link-hover"
          >
            About me
          </Link>
          <Link
            to="/?experience"
            onClick={() => {
              window.scrollTo({ top: 940, behavior: "smooth" });
            }}
            className="link link-hover"
          >
            Experience
          </Link>
          <Link
            to="/?projects"
            onClick={() => {
              window.scrollTo({ top: 2895, behavior: "smooth" });
            }}
            className="link link-hover"
          >
            Projects
          </Link>
          <Link
            to="/?contact-me"
            onClick={() => {
              window.scrollTo({ top: 3835, behavior: "smooth" });
            }}
            className="link link-hover"
          >
            Contact me
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <a href={mailtoHref}>
            Gmail: <span className="underline">sayedasifzayed@gmail.com</span>
          </a>
          <span>
            Address:
            <span>
              <a href={mapLink} target="_blank" rel="noopener noreferrer">
                {" "}
                33/B, Hazaribagh, Dhaka-1209, Bangladesh
              </a>
            </span>
          </span>
          <span>
            Phone:<a href={`tel:${phoneNumber}`}> +880 1891 988693</a>
          </span>
        </div>
        <div className="flex flex-col gap-10">
          <img className="w-32" src={logo} alt="" />
          <div className="grid grid-cols-3 gap-5 place-items-center">
            <a href="https://www.facebook.com/Zayed.Fahim33">
              <FaFacebookSquare className="h-8 w-8"></FaFacebookSquare>
            </a>
            <a href="https://github.com/Zayed-Fahim">
              <FaGithubSquare className="h-8 w-8"></FaGithubSquare>
            </a>
            <a href="https://www.linkedin.com/in/zayed-fahim">
              <BsLinkedin className="h-7 w-7 "></BsLinkedin>
            </a>
          </div>
        </div>
      </footer>
      <div className="text-white text-center p-5 lg:p-auto ">
        Copyright All Right Reserved © 2023, Zayed Fahim
      </div>
    </div>
  );
};

export default Footer;
