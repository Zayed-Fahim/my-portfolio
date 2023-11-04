import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Typewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SendButton from "../Components/SendButton";

export const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    user_message: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the form data with the new input value
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Check if all required fields are filled to enable the "Send" button
  useEffect(() => {
    const { user_name, user_email, user_subject, user_message } = formData;
    const isValid =
      user_name !== "" &&
      user_email !== "" &&
      user_subject !== "" &&
      user_message !== "";
    setIsFormValid(isValid);
  }, [formData]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9rw0jve",
        "template_w8b378e",
        e.target,
        "sl9qWJ_VLA9KQrDMV"
      )
      .then(
        (result) => {
          // console.log(result.text);
          toast.success("Email send successfully! I will Contact you soon.", {
            position: toast.POSITION.TOP_CENTER,
          });
        },
        (error) => {
          toast.success("Ops! Something went wrong! Please try again later.", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      );
    // Reset the form and the isFormValid state
    setFormData({
      user_name: "",
      user_email: "",
      user_subject: "",
      user_message: "",
    });
    setIsFormValid(false);
    e.target.reset();
  };
  return (
    <div className="max-h-max bg-gradient-to-r from-[#2C2C2C] to-[#1C1C1C] lg:py-14">
      {/* side headings start */}

      <h1 className="text-[#E4E4E4] text-[38px] lg:text-5xl font-bold text-center pt-8 lg:pt-0 lg:pb-10">
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

      <div className="container mx-auto flex justify-center lg:flex-row flex-col gap-10 lg:gap-20 py-8 lg:py-0">
        <div className="bg-[#242526] text-[#E4E4E4] max-w-screen-xl mx-5 lg:mx-auto md:mx-auto xl:mx-auto px-5 py-16 md:grid md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 xl:pt-16 xl:pb-10 rounded-lg gap-8">
          <div className="flex flex-col justify-between space-y-8">
            <h2 className="text-4xl font-bold lg:text-5xl">Let's talk!</h2>
            <p className="text-[#E4E4E4]">
              Always available if the right project/Job comes along, Feel free
              to contact me.
            </p>
            <img
              src="https://i.ibb.co/qjJ41T4/let-s-talk.gif"
              alt="Let's Talk"
              className="p-6"
            />
          </div>
          <form className="space-y-6" onSubmit={sendEmail}>
            <div>
              <label htmlFor="name" className="text-sm">
                Full name
              </label>
              <input
                id="name"
                type="text"
                name="user_name"
                placeholder=""
                className="w-full p-3 rounded bg-gray-800 focus:outline-none"
                required
                value={formData.user_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="user_email"
                className="w-full p-3 rounded bg-gray-800 focus:outline-none"
                required
                value={formData.user_email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-sm">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="user_subject"
                className="w-full p-3 rounded bg-gray-800 focus:outline-none"
                required
                value={formData.user_subject}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                name="user_message"
                className="w-full p-3 rounded bg-gray-800 focus:outline-none"
                required
                value={formData.user_message}
                onChange={handleChange}
              ></textarea>
            </div>
            <SendButton name={"SEND MESSAGE"} isFormValid={isFormValid} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
