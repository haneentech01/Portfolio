import Image from "next/image";
import React from "react";
import lineBreak from "../public/lineBreak.svg";
import { MessageSquareIcon, PhoneIcon } from "lucide-react";
import star from "../public/skills/star-outline.svg";

const Contact = () => {
  return (
    <section className="bg-primaryBlue flex text-white mb-6" id="contact">
      <div className="flex flex-col items-center mt-32 gap-8">
        <Image src={lineBreak} alt="LineBreak" width={250} height={3} />

        <div className="flex flex-col items-center gap-8 justify-center text-center relative mx-6 xl:mx-52">
          <h3 className="mt-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold inline-block w-auto mb-2 relative">
            Get in Touch - Connect with Me
            <Image
              src={star}
              alt="Star Image"
              width={60}
              height={60}
              className="absolute -left-5 md:-top-10 md:-left-14 transform transition-all -rotate-12"
            />
          </h3>

          <h4 className="text-[#7b89a8] text-2xl font-bold md:text-xl">
            Let&apos;s collaborate! Reach out to discuss projects,
            opportunities, or just to say hello. I&apos;m excited to connect and
            explore potential collaborations in the world of web development and
            beyond.
          </h4>
        </div>

        <div className="space-y-5">
          <p className="text-3xl font-bold mb-10">Contact Information</p>
          <a
            href="mailto:haneentech01@gmail.com"
            className="flex items-center gap-1 font-light transition-colors duration-300"
          >
            <MessageSquareIcon /> haneentech01@gmail.com
          </a>
          <a
            href="tel:+970 569359991"
            className="flex items-center gap-1 font-light transition-colors duration-300"
          >
            <PhoneIcon /> +970 569359991
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
