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
    <footer className="bg-primaryBlue text-white py-10 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* First Cols */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-oswald font-bold text-primaryYallow">
            Haneen Sheikha
          </h1>
          <p>
            I craft high-quality, responsive websites and web applications that
            bring your vision to life — with a focus on clean code, modern UI,
            and great user experience.
          </p>
        </div>

        {/* Second Cols */}
        <div className="flex flex-col gap-4 text-lg">
          <p className="text-primaryYallow font-bold font-oswald text-2xl">
            Have a project in mind? Let&apos;s talk!
          </p>
          <a
            href="mailto:haneentech01@gmail.com"
            className="flex items-center gap-2 hover:underline"
          >
            <MailCheck />
            haneentech01@gmail.com
          </a>
          <a
            href="https://wa.me/+970569359991"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <PhoneCall />
            +970569359991
          </a>
        </div>

        {/* Third Cols */}
        <div className="flex flex-col gap-3 text-lg">
          <p className="text-primaryYallow font-bold font-oswald text-2xl">
            Follow me on social media!
          </p>

          <a
            href="https://github.com/haneentech01"
            className="flex items-center gap-2 hover:underline"
          >
            <Github size={23} /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/haneentech01/"
            className="flex items-center gap-2 hover:underline"
          >
            <Linkedin size={23} /> LinkedIn
          </a>

          <a
            href="https://www.facebook.com/haneen.shaikha1/"
            className="flex items-center gap-2 hover:underline"
          >
            <Facebook size={23} /> Facebook
          </a>

          <a
            href="https://www.instagram.com/haneen.shaikha/"
            className="flex items-center gap-2 hover:underline"
          >
            <Instagram size={23} /> Instagram
          </a>

          <a
            href="mailto:haneentech01@gmail.com"
            className="flex items-center gap-2 hover:underline"
          >
            <MessageCircle size={23} className="transform -rotate-90" />
            haneentech01@gmail.com
          </a>
        </div>
      </div>

      {/*  All Rights */}
      <div className="mt-10 text-center">
        <p className="text-primaryYallow font-oswald font-bold text-xl">
          © 2025 Haneen Sheikha All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
