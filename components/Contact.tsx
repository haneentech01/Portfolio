import Image from "next/image";
import React from "react";
import lineBreak from "../public/lineBreak.svg";
import { MessageSquareIcon, PhoneIcon } from "lucide-react";
import star from "../public/skills/star-outline.svg";

const Contact = () => {
  return (
    <section className="bg-primaryBlue flex h-screen text-white" id="contact">
      <div className="flex flex-col items-center mt-10 gap-8">
        <Image src={lineBreak} alt="LineBreak" width={250} height={3} />

        <div className="flex flex-col items-center gap-8 justify-center w-full text-center relative mx-64">
          <h3 className="mt-4 text-4xl font-bold sm:text-6xl inline-block w-auto mb-8 relative">
            Get in Touch - Connect with Me
            <Image
              src={star}
              alt="Star Image"
              width={60}
              height={60}
              className="absolute -top-10 -left-14 transform transition-all -rotate-12"
            />
          </h3>

          <h4 className="text-[#7b89a8] text-2xl font-bold md:text-xl">
            Let&apos;s collaborate! Reach out to discuss projects,
            opportunities, or just to say hello. I&apos;m excited to connect and
            explore potential collaborations in the world of web development and
            beyond.
          </h4>
        </div>

        <div className="space-y-2">
          <p className="text-neutral text-lg font-bold">Contact Information</p>
          <a
            href="mailto:johndoe@gmail.com"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300"
          >
            <MessageSquareIcon /> johndoe@gmail.com
          </a>
          <a
            href="tel:+92 3123456789"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300"
          >
            <PhoneIcon /> +92 3123456789
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
