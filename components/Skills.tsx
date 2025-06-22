"use client";

import Image from "next/image";
import React from "react";
import { skills } from "@/data/Skills";
import coding from "../assets/skills/coding.svg";
import fillStar from "../assets/skills/fillStar.svg";
import laptop from "../assets/skills/laptop.svg";
import youtube from "../assets/skills/youtube.svg";

function Skills() {
  return (
    <section className="bg-primaryBlue relative flex flex-col" id="skills">
      {/* Decorative Line and Floating YouTube Icon */}
      <div className="flex mt-20 lg:mt-40 relative">
        <div className="absolute flex sm:items-center lg:items-start sm:w-[200px] sm:h-[20px] lg:w-[40rem] lg:h-[2rem] lg:-left-24 ">
          <Image src="/lineBreak.svg" alt="Line Break" fill />
        </div>

        <div className="hidden xl:block absolute lg:top-7 lg:left-[28%] lg:w-[80px] lg:h-[80px]">
          <Image src={youtube} alt="YouTube" fill />
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-9 m lg:mt-16 mx-6 flex flex-col lg:flex-row justify-between gap-16 md:gap-20 xl:gap-40 relative">
        {/* Title and Floating Icons */}
        <div className="relative text-white text-3xl font-bold font-oswald md:max-w-lg mb-10 md:mb-0">
          <h2>
            I got the experience.
            <br />
            Here is my toolbelt for success.
          </h2>

          {/* Floating Icons */}
          <Image
            src={fillStar}
            alt="Star"
            className="hidden xl:block absolute top-28 -right-4"
          />
          <div className="w-24 h-24 -bottom-16 right-12 md:w-20 md:h-20 md:-bottom-6 md:right-9 block absolute lg:w-[100px] lg:h-[100px] lg:top-52 lg:left-3 xl:w-[170px] xl:h-[170px] xl:top-52 xl:left-12">
            <Image src={laptop} alt="Laptop" fill />
          </div>
          <div className="w-14 h-14 -bottom-2 right-3 md:w-16 md:h-16 md:bottom-2 md:-right-3 block absolute lg:w-[80px] lg:h-[80px] lg:top-[160px] lg:left-20 xl:w-[100px] xl:h-[100px] xl:top-40 xl:left-40">
            <Image src={coding} alt="Coding" fill />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-x-8 gap-y-12 sm:gap-8 md:gap-12 w-full max-w-lg mx-auto lg:mx-0 place-content-center items-center">
          {skills.map((item, index) => (
            <div
              key={index}
              title={item.title}
              className="flex flex-col items-center justify-center w-10 mx-auto"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={50}
                height={50}
                style={item.style}
              />
              <p className="mt-3 text-xs font-bold text-white">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
