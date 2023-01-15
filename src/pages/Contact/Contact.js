import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { Typewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const form = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const sendEmail = () => {
    form.current.reset();
    emailjs
      .sendForm(
        "service_bt76dyc",
        "template_5zoa24e",
        form.current,
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
  };
  return (
    <div className="h-[700px] bg-gradient-to-r from-[#2C2C2C] to-[#1C1C1C]" id="contact">
      <h1 className="text-[#E4E4E4] text-5xl font-bold text-center p-16">
        <span className="text-[#00C4F0] font-bold">
          <Typewriter
            words={["CONTACT ME"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <div className=" flex items-center justify-evenly">
        <div className="text-white">
          <h1 className="text-4xl">Ask me</h1>
          <br />
          <p className="text-[18px]">
            Ask me if you have any queries. You will be <br /> answered via
            email.
          </p>
        </div>
        <div>
          <form
            className="flex flex-col container mx-auto"
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
          >
            <input
              className="h-[50px] w-[450px] rounded-lg pl-5"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === "required" && (
              <p className="text-[#E2A100]" role="alert">
                Name is required
              </p>
            )}
            <input
              className="h-[50px] w-[450px] mt-3 rounded-lg pl-5"
              placeholder="Your Email"
              {...register("mail", { required: "Email is required" })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && (
              <p className="text-[#E2A100]" role="alert">
                {errors.mail?.message}
              </p>
            )}
            <textarea
              rows={7}
              className="w-[450px] mt-3 rounded-lg pl-5 pt-3"
              placeholder="Your Message"
              {...register("message", { required: "Message is required" })}
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message && (
              <p className="text-[#E2A100]" role="alert">
                {errors.message?.message}
              </p>
            )}
            <input
              className="h-[50px] w-[450px] bg-white text-[#E2A100] mt-5 rounded-lg uppercase text-xl font-bold"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
