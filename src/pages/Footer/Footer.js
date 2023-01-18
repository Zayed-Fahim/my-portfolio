import React from "react";
import { Link } from "react-router-dom";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import logo from "../../assets/icon/Logo.png";
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const mailtoHref = "mailto:zayedfahim33.cse@gmail.com?subject=SendMail&body=";
  return (
    <div className="h-auto bg-gradient-to-r from-[#414141] to-[#2D2D2D]">
      <footer className="flex flex-wrap lg:flex-nowrap lg:justify-evenly lg:items-center container lg:mx-auto gap-2 p-5 lg:p-10 text-white">
        <div className="flex lg:flex-col gap-3">
          <Link className="link link-hover">Home</Link>
          <Link className="link link-hover">About</Link>
          <Link className="link link-hover">Experience</Link>
          <Link className="link link-hover">Projects</Link>
          <Link className="link link-hover">Contact</Link>
        </div>
        <div className="flex flex-col gap-3">
          <Link className="link link-hover">Contact:</Link>
          <a href={mailtoHref}>
            Gmail: <span className="underline">zayedfahim33.cse@gmail.com</span>
          </a>
          <Link>Location: Hazaribagh,Dhaka-1209</Link>
          <Link>Phone: +880 1891 988693, +880 1881 437702</Link>
        </div>
        <div className="flex flex-col gap-10">
          <img className="w-32" src={logo} alt="" />
          <div className="flex justify-around">
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
        <div className="invisible lg:visible">
          <ScrollUpButton
            style={{ width: 60, height: 60, padding: 5 }}
            ToggledStyle={{
              position: "relative",
              left: 0,
              top:40,
              background: "#E2A300",
              border: "none",
              fill: "white",
            }}
            EasingType="easeOutCubic"
            AnimationDuration={2500}
            ShowAtPosition={4050}
          />
        </div>
      </footer>
      <div className="text-white text-center p-5 lg:p-auto ">
        Copyright All Right Reserved © 2023, Zayed Fahim
      </div>
      <div className="visible lg:invisible">
        <ScrollUpButton
          style={{ width: 50, height: 50, padding: 5 }}
          ToggledStyle={{
            position: "relative",
            left: 250,
            top: -200,
            background: "#E2A300",
            border: "none",
            fill: "white",
          }}
          EasingType="easeOutCubic"
          AnimationDuration={2500}
        />
      </div>
    </div>
  );
};

export default Footer;
