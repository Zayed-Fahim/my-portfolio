import React from "react";
import "@/app/styles/formSubmissionSpinner.css";

const FormSubmissionSpinner = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-start items-center gap-5 max-w-fit">
      <p className="text-white font-incognito">{title}</p>
      <div className="spinner"></div>
    </div>
  );
};

export default FormSubmissionSpinner;
