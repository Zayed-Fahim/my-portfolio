import React from "react";
import { Animation } from "@/components/molecules";
import { ContactForm } from "@/components/organisms";

const Contact = () => {
  return (
    <div className="flex flex-col max-w-7xl gap-5 mt-16">
      <div className="flex flex-col justify-center items-center">
        <Animation delay={0.16}>
          <>
            <h1 className="max-w-[85vw] lg:max-w-[45vw] text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-center">
              Ready to take <span className="text-secondary-color">your</span>{" "}
              digital presence to the next level?
            </h1>
            <p className="md:mt-10 my-5 text-center">
              Reach out to me today and let&apos;s discuss how I can help you
              achieve your goals.
            </p>
          </>
        </Animation>
      </div>

      <Animation delay={0.18}>
        <ContactForm />
      </Animation>
    </div>
  );
};

export default Contact;
