"use client";

import Image from "next/image";
import js from "../public/hero/js.svg";
import next from "../public/hero/nextjs.svg";

const About = () => {
  return (
    <section className="bg-primaryBlue relative flex">
      <div className="mt-16 mx-16 text-white">
        <h1 className="text-5xl leading-[6rem]">About</h1>
        <div className="absolute w-[44%] md:w-[72%] lg:w-[76%] xl:w-[78%] h-2 rounded bg-primaryYallow top-4 xl:left-56 xl:top-28"></div>

        <h2 className="leading-[2.2rem] font-inter mx-20 text-lg">
          Hello, I&apos;m Haneen, Software Engineer Front-End Next.js Developer
          with 3+ years of experience in developing responsive, high-performance
          web apps. I have solid experience with Next.js, React.js, and
          experience with modern front-end technologies like JavaScript (ES6+),
          TypeScript, Tailwind CSS, Bootstrap, Shadcn/ui, and experience in
          integrating RESTful APIs. I am able to convert UI/UX designs into
          scalable and maintainable code, accounting cross-browser compatibility
          and performance. I have good experience of Git version control and
          collaborative workflows. I enjoy writing clean code and component
          based architecture and I enjoy learning to stay current in my field.
          <Image />
        </h2>
      </div>
    </section>
  );
};

export default About;
