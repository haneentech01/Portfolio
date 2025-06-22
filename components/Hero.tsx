"use client";
import Image from "next/image";
import React from "react";
import TypewriterText from "./TypewriterText";
import { motion } from "framer-motion";
import code from "../assets/hero/code.svg";
import coder from "../assets/hero/coder.svg";
import dino from "../assets/hero/dino.svg";
import html from "../assets/hero/html.svg";
import js from "../assets/hero/js.svg";
import nextjs from "../assets/hero/nextjs.svg";
import star from "../assets/hero/pop1.svg";

const Hero = () => {
  return (
    <section className="bg-primaryBlue">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center lg:gap-10 gap-36 px-4 pb-10 lg:grid-cols-2 lg:p-4 text-white">
        <div className="flex min-h-48 flex-col justify-between xl:min-h-56 xl:max-w-[33.75rem] font-inter sm:items-center lg:items-start sm:mx-5 md:mx-10 lg:mx-5 xl:mx-0">
          {/* About */}
          <h1 className="leading-8 lg:leading-[50px] xl:leading-[40px] mt-9 md:mt-12 lg:mt-16 mb-2 block text-xl md:text-3xl xl:text-2xl ">
            Hey, I&apos;m{" "}
            <span className="font-bold font-oswald text-2xl md:text-4xl xl:text-3xl text-[#9cceff]">
              Haneen {""}
            </span>
            .I&apos;m a{" "}
            <span className="block text-3xl md:text-4xl xl:text-5xl font-bold font-oswald text-primaryYallow leading-[60px] md:leading-[70px] lg:leading-[80px] xl:leading-[80px]">
              <TypewriterText />
            </span>
            , I develop fast, responsive, and user-friendly websites, offering
            creative and practical solutions to everyday challenges.
          </h1>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-6 font-inter">
            <a
              href="#contact"
              aria-label="Connect with me"
              className="bg-blueLight border-dashed border-2 border-sky-500 min-w-32 cursor-pointer rounded-xl px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E] hover:bg-hoverBlueLight"
            >
              Hire Me
            </a>
            <a
              href="https://github.com/haneentech01"
              target="_blank"
              aria-label="View GitHub Profile"
              className="border-dashed border-2 border-sky-500 cursor-pointer rounded-xl px-[14px] py-[10px] text-sm hover:bg-hoverPrimaryBlue "
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Images */}
        <div className="hideen lg:flex max-w-[1200px] relative  ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            {/* Hero Image */}
            <div className="hidden lg:block relative lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] xl:mx-auto ">
              <Image src="/circle.png" alt="Circle Image" fill />

              <Image
                src="/logo.png"
                alt="Hero Image"
                fill
                className="object-contain lg:p-5 p-7 xl:right-0"
              />
            </div>
          </motion.div>

          {/* HTML Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="hidden lg:block absolute  xl:-right-8 xl:w-[70px] xl:h-[70px] lg:bottom-40 lg:-right-2 lg:w-11 lg:h-11"
          >
            <Image src={html} alt="HTML Image" fill />
          </motion.div>

          {/* Code Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="hidden lg:block xl:top-12 xl:right-10 absolute lg:right-11 lg:top-9 lg:w-11 lg:h-11 xl:w-[80px] xl:h-[80px] "
          >
            <Image src={code} alt="Code Image" fill />
          </motion.div>

          {/* JS Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="hidden lg:block xl:-top-4 xl:ms-32 xl:w-[66px] xl:h-[66px] absolute lg:w-16 lg:h-16 lg:-top-12 lg:ms-32"
          >
            <Image src={js} alt="JS Image" fill />
          </motion.div>

          {/* Coder Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="hidden lg:block absolute xl:bottom-10 xl:-ms-32 xl:w-[160px] xl:h-[160px] lg:w-28 lg:h-28 lg:bottom-5 lg:-ms-12"
          >
            <Image src={coder} alt="Coder Image" fill />
          </motion.div>

          {/* Next Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="hidden lg:block xl:top-20 xl:-ms-28 xl:w-[80px] xl:h-[80px] absolute lg:w-12 lg:h-12 lg:top-20 lg:-ms-14"
          >
            <Image src={nextjs} alt="Next Image" width={80} height={80} />
          </motion.div>

          {/* Dino Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="hidden lg:block xl:-bottom-16 xl:ms-36 xl:w-[80px] xl:h-[80px] absolute lg:w-20 lg:h-20 lg:-bottom-16 lg:ms-40 z-10"
          >
            <Image src={dino} alt="Dino Image" fill />
          </motion.div>

          {/* Star Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="hidden lg:block xl:-bottom-5 xl:right-10 xl:w-[80px] xl:h-[80px] absolute lg:w-16 h-16 lg:-bottom-5 lg:right-5 z-10"
          >
            <Image src={star} alt="star Image" fill />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
