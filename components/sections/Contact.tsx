"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MailPlus, PhoneIcon } from "lucide-react";
import star from "@/assets/skills/star-outline.svg";
import FormInput from "../common/FormInput";
import asthetic from "@/assets/contact/Aesthetic.png";
import cloud from "@/assets/contact/Cloud.png";
import { motion } from "framer-motion";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    // امسح الخطأ بمجرد ما يغيّر في الحقل
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (values: FormState): FormErrors => {
    const newErrors: FormErrors = {};

    if (!values.firstName.trim()) newErrors.firstName = "First Name required";
    if (!values.lastName.trim()) newErrors.lastName = "Last Name required";
    if (!values.email.trim()) newErrors.email = "Email required";
    if (!values.message.trim()) newErrors.message = "Message required";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    try {
      const payload = {
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        message: form.message,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="bg-primaryBlue flex text-white" id="contact">
      <motion.section
        id="contact-inner"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center mt-32 gap-8 mb-20">
          <Image src="/lineBreak.svg" alt="LineBreak" width={250} height={3} />

          <div className="flex flex-col items-center gap-5 lg:gap-8 justify-center text-center relative mx-6 xl:mx-52">
            <h3 className="mt-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold inline-block w-auto mb-0 md:mb-2 relative">
              Get in Touch - Connect with Me
              <div className="block w-10 h-10 xl:w-16 xl:h-16 absolute -top-8 -left-7 md:-top-7 md:-left-10 xl:-top-12 xl:-left-11 transform transition-all -rotate-12 ">
                <Image src={star} alt="Star Image" fill />
              </div>
            </h3>

            <h4 className="text-[#7b89a8] text-base md:text-xl lg:text-2xl font-bold">
              Let&apos;s collaborate! Reach out to discuss projects,
              opportunities, or just to say hello. I&apos;m excited to connect
              and explore potential collaborations in the world of web
              development and beyond.
            </h4>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col mt-10 md:mt-28 mb-5 md:mb-10 mx-6 md:mx-12 ">
            <p className="text-4xl md:text-6xl font-bold mb-10 md:mb-20 font-oswald text-white text-center">
              Contact Information
            </p>

            {/* Contact Info + FORM */}
            <div className="flex flex-col md:flex-row gap-16  xl:gap-28 w-full relative">
              {/* Email + Number */}
              <div className="flex flex-col gap-4 md:gap-8 font-semibold text-lg lg:text-2xl font-oswald mt-0 md:mt-6">
                <a
                  href="mailto:haneentech01@gmail.com"
                  className="flex items-center gap-2 hover:text-darkGray"
                >
                  <MailPlus size={30} /> haneentech01@gmail.com
                </a>
                <a
                  href="tel:+970569359991"
                  className="flex items-center gap-2 hover:text-darkGray"
                >
                  <PhoneIcon size={30} /> +970569359991
                </a>
              </div>

              {/* Form */}
              <div className="flex flex-col md:gap-10">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-2 lg:gap-6 relative"
                >
                  {/* First + Last Name */}
                  <div className="flex flex-col md:flex-row w-full gap-2 md:gap-6">
                    {/* First Name */}
                    <FormInput
                      label="First Name"
                      name="firstName"
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={handleChange}
                      error={errors.firstName}
                    />

                    {/* Last Name */}
                    <FormInput
                      label="Last Name"
                      name="lastName"
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={handleChange}
                      error={errors.lastName}
                    />
                  </div>

                  {/* Asthetic */}
                  <div className="w-28 h-28 md:w-44 md:h-44 lg:w-44 lg:h-44 xl:w-52 xl:h-52 absolute -top-20 -right-5 md:-top-[17rem] lg:-top- lg:right-0 xl:-top-56 xl:-right-40">
                    <Image src={asthetic} alt="Asthetic Image" />
                  </div>

                  {/* Email */}
                  <FormInput
                    label="Email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                  />

                  {/* Text Area */}
                  <FormInput
                    label="Message"
                    name="message"
                    placeholder="Enter Your Message"
                    isTextArea={true}
                    value={form.message}
                    onChange={handleChange}
                    error={errors.message}
                  />

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="border-2 border-blueLight text-white py-2 rounded-md hover:border-[#154082] hover:bg-[#154082] w-full z-10 disabled:opacity-60"
                  >
                    {status === "loading" ? "Sending..." : "Send"}
                  </button>
                </form>

                {status === "success" && (
                  <p className="text-green-600 mt-4">
                    Your message has been sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 mt-4">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>

              <div className="hidden md:block w-52 h-52 lg:w-60 lg:h-60 absolute md:-left-3 md:bottom-10 lg:bottom-12 xl:bottom-10 xl:-left-32">
                <Image src={cloud} alt="" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Contact;