"use client";
import "../../app/styles/contactForm.css";
import "../../app/styles/gradientBorder.css";
import { z } from "zod";
import React, { useContext, useState } from "react";
import { FormField } from "@/components/molecules";
import { Button, FormSubmissionSpinner, Message } from "@/components/atoms";
import { fetchData } from "@/utils/fetchData";
import { CommonContext } from "@/contexts";

const emailFormatSchema = z
  .string()
  .email("Invalid email address")
  .refine(
    (email) => {
      const domainPart = email.split("@")[1];
      return domainPart && domainPart.split(".").length <= 2;
    },
    { message: "Invalid email address" }
  );

const contactSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().min(1, "Email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const initialFormState: ContactFormData = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const { isLoading, setIsLoading } = useContext(CommonContext)!;
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error">(
    "success"
  );

  const validateEmail = (email: string): string | undefined => {
    if (!email) {
      return "Email is required";
    }

    const formatResult = emailFormatSchema.safeParse(email);
    if (!formatResult.success) {
      return formatResult.error.issues[0].message;
    }

    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      const emailError = validateEmail(value);
      setErrors((prev) => ({ ...prev, email: emailError }));
    } else {
      const fieldSchema = contactSchema.shape[name as keyof ContactFormData];
      const validationResult = fieldSchema.safeParse(value);

      if (!validationResult.success) {
        setErrors((prev) => ({
          ...prev,
          [name]: validationResult.error.issues[0].message,
        }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }

    setFormMessage(null);
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setErrors({});
    setFormMessage(null);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredValidation = contactSchema.safeParse(formData);
    if (!requiredValidation.success) {
      const newErrors: FormErrors = {};
      requiredValidation.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof ContactFormData;
        newErrors[path] = issue.message;
      });
      setErrors(newErrors);
      setFormMessage("Please correct the errors in the form.");
      setMessageType("error");
      return;
    }

    if (formData.email) {
      const emailFormatResult = emailFormatSchema.safeParse(formData.email);
      if (!emailFormatResult.success) {
        setErrors((prev) => ({
          ...prev,
          email: "Invalid email address",
        }));
        setFormMessage("Please correct the errors in the form.");
        setMessageType("error");
        return;
      }
    }

    setIsLoading(true);

    try {
      const url = "https://zayedfahim.vercel.app/api/v2/email/send";
      const response = await fetchData(url, "post", {
        data: formData,
      });
      if (response.success) {
        resetForm();
        setFormMessage("Form submitted successfully!");
        setMessageType("success");
      }
    } catch (error: unknown) {
      console.error("Error occurred during form submission:", error);
      setFormMessage("Failed to submit the form. Please try again.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }

    setTimeout(() => {
      setFormMessage(null);
    }, 5000);
  };

  return (
    <div className="form-container glow-border p-5">
      <form
        className="form bg-[#F8F8F8] dark:bg-primary-bg"
        onSubmit={handleFormSubmit}
      >
        {isLoading ? (
          <FormSubmissionSpinner title="Form Submitting" />
        ) : (
          formMessage && (
            <Message
              type={messageType}
              message={formMessage}
              className="pb-1"
            />
          )
        )}
        <div className="form-group-row">
          <div className="form-group">
            <FormField
              as="input"
              htmlFor="fullName"
              label={
                <span>
                  Full Name<span className="text-red-600">*</span>
                </span>
              }
              name="fullName"
              id="fullName"
              type="text"
              className="font-incognito text-[14px]"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <Message type="error" message={errors.fullName} />
            )}
          </div>

          <div className="form-group">
            <FormField
              as="input"
              htmlFor="email"
              label={
                <span>
                  Email<span className="text-red-600">*</span>
                </span>
              }
              name="email"
              id="email"
              type="email"
              className="font-incognito text-[14px]"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <Message type="error" message={errors.email} />}
          </div>
        </div>

        <div className="form-group">
          <FormField
            as="input"
            htmlFor="subject"
            label={
              <span>
                Subject<span className="text-red-600">*</span>
              </span>
            }
            name="subject"
            id="subject"
            type="text"
            className="font-incognito text-[14px]"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <Message type="error" message={errors.subject} />}
        </div>

        <div className="form-group">
          <FormField
            as="textarea"
            htmlFor="message"
            label={
              <span>
                Message<span className="text-red-600">*</span>
              </span>
            }
            name="message"
            id="message"
            className="font-incognito text-[14px]"
            rows={10}
            cols={50}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <Message type="error" message={errors.message} />}
        </div>

        <div className="flex justify-end items-end">
          <Button
            type="submit"
            className="form-submit-btn dark:bg-[#16a34a] dark:hover:bg-[#0CCE6B] bg-[#0CCE6B] hover:bg-[#16a34a]"
            title="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
