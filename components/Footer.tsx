import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  MailCheck,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primaryBlue shadow-[0_-4px_10px_rgba(0,0,0,0.1)] text-white max-h-screen">
      <div className="grid grid-rows-2 w-full relative max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="grid grid-rows-3 lg:grid-cols-3 lg:gap-20 mt-12 items-start justify-items-center ">
          {/* First Clos */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-oswald font-bold text-primaryYallow">
              Haneen Sheikha
            </h1>
            <p>
              I craft high-quality, responsive websites and web applications
              that bring your vision to life — with a focus on clean code,
              modern UI, and great user experience.
            </p>
          </div>

          {/* Second Cols */}
          <div className="flex flex-col gap-5 text-lg">
            <p className="text-primaryYallow font-bold font-oswald text-2xl">
              Have a project in mind? Let&apos;s talk !
            </p>
            <a
              href="haneentech01@gmail.com"
              className="flex items-center gap-2"
            >
              <MailCheck />
              haneentech01@gmail.com
            </a>
            <a
              href="https://wa.me/+970569359991"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <PhoneCall />
              +970569359991
            </a>
          </div>

          {/* Third Cols */}
          <div className="flex flex-col gap-5">
            <p className="text-primaryYallow font-bold text-2xl font-oswald">
              Follow me on social media !
            </p>
            {/* GitHub */}
            <a href="https://github.com/haneentech01" className="flex gap-2">
              <Github size={23} /> GitHub
            </a>

            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/haneentech01/"
              className="flex gap-2"
            >
              <Linkedin size={23} /> Linkedin
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/haneen.shaikha1/"
              className="flex gap-2"
            >
              <Facebook size={23} /> Facebook
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/haneen.shaikha/"
              className="flex gap-2"
            >
              <Instagram size={23} /> Instagram
            </a>

            {/* Email */}
            <a href="haneentech01@gmail.com" className="flex gap-2 ">
              <MessageCircle size={23} className="transform -rotate-90" />
              haneentech01@gmail.com
            </a>
          </div>
        </div>
        <div className="block absolute bottom-20 left-[33%] ">
          <p className="text-primaryYallow font-oswald font-bold text-2xl">
            © 2025 Haneen Sheikha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
