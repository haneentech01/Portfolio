"use client";

import Image from "next/image";
import rocket from "../assets/about/Rocket.png";
import astronaut from "../assets/about/astronaut.png";

const About = () => {
  return (
    <section className="bg-primaryBlue relative flex">
      <div className="-mt-36 md:-mt-[9.4rem] lg:mt-10 xl:mt-16 mx-5 md:mx-7 lg:mx-12 xl:mx-32 text-white">
        <h1 className="text-4xl md:text-5xl leading-[6rem] md:leading-[7rem] relative ml-10 md:ml-14 font-oswald ">
          About
          <div className="w-16 h-16 md:w-20 md:h-20 absolute top-4 md:top-4 -left-14 md:-left-[4.5rem]">
            <Image src={rocket} alt={""} />
          </div>
        </h1>
        <div className="absolute w-[58%] md:w-[72%] lg:w-[74%] xl:w-[76%] h-2 rounded bg-primaryYallow -top-24 right-5  md:-top-[5.8rem] lg:top-24  xl:top-[7.5rem]"></div>

        <h2 className="leading-6 md:leading-[2.2rem] font-inter mx-0 xl:mx-20 text-sm md:text-lg relative">
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
          <div className="block w-36 h-36 md:w-40 md:h-40 lg:w-60 lg:h-60 absolute -right-5 -bottom-[4.5rem] md:-right-5 lg:-right-4 xl:-right-40 md:-bottom-16 lg:-bottom-32 xl:top-28 z-10">
            <Image src={astronaut} alt="Astronaut Image" fill />
          </div>
        </h2>
      </div>
    </section>
  );
};

export default About;
