"use client";

import Image from "next/image";
import React, { useState } from "react";
import lineBreak from "../public/lineBreak.svg";
import { MailPlus, MessageSquareIcon, PhoneIcon } from "lucide-react";
import star from "../public/skills/star-outline.svg";
import { useFormik } from "formik";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstName) errors.firstName = "First Name required";
      if (!values.lastName) errors.lastName = "Last Name required";
      if (!values.email) errors.email = "Email required";
      if (!values.message) errors.message = "Message required";
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setSuccess(true);
        resetForm();
      }
    },
  });

  return (
    <section className="bg-primaryBlue flex text-white mb-6" id="contact">
      <div className="flex flex-col items-center mt-32 gap-8">
        <Image src={lineBreak} alt="LineBreak" width={250} height={3} />

        <div className="flex flex-col items-center gap-5 lg:gap-8 justify-center text-center relative mx-6 xl:mx-52">
          <h3 className="mt-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold inline-block w-auto mb-0 md:mb-2 relative">
            Get in Touch - Connect with Me
            <Image
              src={star}
              alt="Star Image"
              width={60}
              height={60}
              className="absolute -top-10 -left-9 md:-top-10 md:-left-14 transform transition-all -rotate-12"
            />
          </h3>

          <h4 className="text-[#7b89a8] text-base md:text-xl lg:text-2xl font-bold">
            Let&apos;s collaborate! Reach out to discuss projects,
            opportunities, or just to say hello. I&apos;m excited to connect and
            explore potential collaborations in the world of web development and
            beyond.
          </h4>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-between items-center mt-6 w-full">
          <p className="text-3xl font-bold mb-10">Contact Information</p>

          <div className="flex gap-40">
            {/* Email + Number */}
            <div className="flex flex-col gap-8 justify-start items-start flex-1">
              <a
                href="mailto:haneentech01@gmail.com"
                className="flex items-center gap-2 font-light transition-colors duration-300 text-2xl"
              >
                <MailPlus size={30} /> haneentech01@gmail.com
              </a>
              <a
                href="tel:+970 569359991"
                className="flex items-center gap-2 font-light transition-colors duration-300 text-2xl"
              >
                <PhoneIcon size={30} /> +970 569359991
              </a>
            </div>

            {/* Form */}
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-4 text-black font-semibold font-oswald"
            >
              <div className="flex gap-5">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  className="border p-2"
                />
                {formik.errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.firstName}
                  </p>
                )}

                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  className="border p-2 border-none outline-none focus:outline-none w-full"
                />
                <br />
                {formik.errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.lastName}
                  </p>
                )}
              </div>

              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="border p-2"
              />
              {formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}

              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                onChange={formik.handleChange}
                value={formik.values.message}
                className="border p-2"
              />

              {formik.errors.message && (
                <p className="text-red-500 text-sm">{formik.errors.message}</p>
              )}

              <button
                type="submit"
                className="bg-blueLight text-white py-2 rounded hover:bg-[#154082]"
              >
                Send
              </button>
            </form>

            {success && (
              <p className="text-green-600 mt-4">
                Your message has been sent successfully!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
