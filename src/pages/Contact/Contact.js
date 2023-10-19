import React from "react";
import emailjs from "@emailjs/browser";
import { Typewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bt76dyc",
        "template_5zoa24e",
        e.target,
        "sl9qWJ_VLA9KQrDMV"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email send successfully!", {
            position: toast.POSITION.TOP_CENTER,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div
      className="max-h-max bg-gradient-to-r from-[#2C2C2C] to-[#1C1C1C] lg:py-20"
      id="contact"
    >
      {/* side headings start */}

      <h1 className="text-[#E4E4E4] text-[38px] lg:text-5xl font-bold text-center pt-8 lg:pt-0 lg:pb-20">
        <span className="font-bold">
          <Typewriter
            words={["CONTACT"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={300}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </span>
      </h1>

      <div className="container mx-auto flex justify-center lg:flex-row flex-col gap-10 py-8 lg:py-0 lg:pb-0">
        <div className="text-white lg:h-[440px] mx-auto lg:mx-0 max-w-[330px] p-5 flex flex-col gap-5">
          <h1 className="text-3xl font-bold ">
            What’s your story? Get in touch
          </h1>
          <p className="text-xl">
            Always available if the right project/Job comes along, Feel free to
            contact me.
          </p>
        </div>

        {/* side headings end */}
        <div className="min-w-[55%] pb-5 mx-5 lg:mx-0 lg:pt-[25px]">
          <form onSubmit={sendEmail}>
            <div className="flex lg:flex-row flex-col gap-5 px-5 pb-5 pt-5 lg:pt-0">
              <input
                className="w-full h-[40px] p-3 focus:outline-none"
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
              <input
                className="w-full h-[40px] p-3 focus:outline-none"
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="flex flex-col gap-5 px-5">
              <input
                className="w-full h-[40px] p-3 focus:outline-none"
                type="text"
                name="user_subject"
                placeholder="Subject"
                required
              />
              <textarea
                className="w-full min-h-min p-3 focus:outline-none"
                type="text"
                name="user_message"
                placeholder="Your Message"
                rows={7}
                required
              />
              <div className="bg-[#E2A100] max-w-[135px] lg:max-w-[160px] py-1 grid place-items-center rounded">
                <button
                  className="font-semibold lg:font-bold lg:text-xl"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
