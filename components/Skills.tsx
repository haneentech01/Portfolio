"use client";

import Image from "next/image";
import React from "react";
import { skills } from "@/data/Skills";
import coding from "../public/skills/coding.svg";
import fillStar from "../public/skills/fillStar.svg";
import laptop from "../public/skills/laptop.svg";
import youtube from "../public/skills/youtube.svg";
import lineBreak from "../public/lineBreak.svg";

function Skills() {
  return (
    <section
      className="bg-primaryBlue flex-col justify-between relative"
      id="skills"
    >
      <div className="flex items-start">
        <Image src={lineBreak} alt="lineBreak Image" width={450} height={3} />
      </div>

      <Image
        alt="youtube"
        className="hidden md:block top-[200px] right-[50px] lg:top-7 lg:left-[28%] absolute"
        src={youtube}
      />

      <div className="mt-11 mx-20 flex justify-between gap-40">
        <h2 className="text-white relative text-3xl w-full md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 font-oswald ">
          I got the experience.
          <br />
          Here is my toolbelt for success.
          <Image
            alt="fillStar"
            className="hidden md:block absolute top-28 right-[-15px]"
            src={fillStar}
          />
          <Image
            alt="laptop"
            className="hidden lg:block absolute lg:bottom-40 lg:-left-14"
            src={laptop}
          />
          <Image
            alt="coding"
            className="hidden md:block absolute top-[140px] left-20 lg:top-[130px]"
            src={coding}
          />
        </h2>

        {/* Skills Icons */}
        <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
          {skills.map((item, index) => {
            return (
              <div
                title={item.title}
                key={index}
                className="w-10 mx-auto flex items-center flex-col justify-center"
              >
                <Image
                  width={50}
                  height={50}
                  alt={item.title}
                  src={item.icon}
                  style={item.style}
                />
                <p className="text-xs text-fun-gray font-bold mt-3 text-white">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
