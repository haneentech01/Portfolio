"use client";
import Image from "next/image";
import React from "react";
import TypewriterText from "../TypewriterText";
import { motion } from "framer-motion";
import code from "@/assets/hero/code.svg";
import coder from "@/assets/hero/coder.svg";
import dino from "@/assets/hero/dino.svg";
import html from "@/assets/hero/html.svg";
import js from "@/assets/hero/js.svg";
import nextjs from "@/assets/hero/nextjs.svg";
import star from "@/assets/hero/pop1.svg";
import Section from "../layout/Section";

const imagesContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.18,
    },
  },
};

const imageItemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0, 0.71, 0.2, 1.01] as const,
    },
  },
};

const Hero = () => {
  return (
    <Section id="hero" bgClassName="bg-primaryBlue">
      <div className="grid grid-cols-1 lg:grid-cols-2 
                      items-start gap-10 lg:gap-16
                      xl:gap-48 text-white">

        {/* Text */}
        <div className="flex flex-col justify-between font-inter items-center md:items-start">
          <h1 className="leading-8 lg:leading-[50px] xl:leading-[40px] 
                          mt-6 md:mt-8 lg:mt-10 mb-2 block text-xl 
                          md:text-3xl xl:text-2xl text-center 
                          md:text-start">
            Hey, I&apos;m{" "}
            <span className="font-bold font-oswald text-2xl md:text-4xl xl:text-3xl text-[#9cceff]">
              Haneen{" "}
            </span>
            .I&apos;m a{" "}
            <span className="block text-3xl md:text-4xl xl:text-5xl font-bold font-oswald text-primaryYallow leading-[60px] md:leading-[70px] lg:leading-[80px] xl:leading-[80px]">
              <TypewriterText />
            </span>
            <p className="max-w-lg xl:max-w-6xl text-xl md:text-3xl xl:text-2xl 
                         text-white mt-4">
              I build fast, scalable, and elegant web applications using
              <strong> Next.js, React, and modern UI systems</strong>.
            </p>
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 font-inter justify-center lg:justify-start">
            <a
              href="#contact"
              aria-label="Connect with me"
              className="bg-blueLight border-dashed border-2 border-sky-500 
                          min-w-32 cursor-pointer rounded-xl px-5 py-[10px] 
                          text-center text-sm font-medium text-[#dddddd] 
                          hover:bg-hoverBlueLight"
            >
              Hire Me
            </a>
            <a
              href="https://github.com/haneentech01"
              target="_blank"
              aria-label="View GitHub Profile"
              className="border-dashed border-2 border-sky-500 cursor-pointer 
                        rounded-xl px-5 py-[10px] text-sm hover:bg-hoverPrimaryBlue "
            >
              GitHub Profile
            </a>
          </div>
        </div>


        {/* Images Container */}
        <motion.div
          className="hidden lg:flex relative justify-center"
          variants={imagesContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo*/}
          <motion.div variants={imageItemVariants}>
            <div className="relative w-[360px] h-[360px] 
                            lg:w-[420px] lg:h-[420px] 
                            xl:w-[420px] xl:h-[420px]">
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
            variants={imageItemVariants}
            className="hidden xl:block absolute -right-16 bottom-36 
                      w-[60px] h-[60px]"
          >
            <Image src={html} alt="HTML Image" fill />
          </motion.div>

          {/* Code Image */}
          <motion.div
            variants={imageItemVariants}
            className="hidden xl:block absolute top-2 right-3 w-[70px] h-[70px]"
          >
            <Image src={code} alt="Code Image" fill />
          </motion.div>

          {/* JS Image */}
          <motion.div
            variants={imageItemVariants}
            className="hidden xl:block absolute -top-10 left-32 w-[70px] h-[70px]"
          >
            <Image src={js} alt="JS Image" fill />
          </motion.div>

          {/* Coder Image */}
          <motion.div
            variants={imageItemVariants}
            className="hidden xl:block absolute -bottom-2 
                      -left-11 w-[130px] h-[130px]"
          >
            <Image src={coder} alt="Coder Image" fill />
          </motion.div>

          {/* Next Image */}
          <motion.div
            variants={imageItemVariants}
            className="hidden xl:block absolute top-20 
                      -left-16 w-[70px] h-[70px]"
          >
            <Image src={nextjs} alt="Next Image" fill />
          </motion.div>

          {/* Dino Image */}
          <motion.div
            variants={imageItemVariants}
            className="hidden xl:block absolute -bottom-16 right-36 
                      w-[70px] h-[70px] z-10"
          >
            <Image src={dino} alt="Dino Image" fill />
          </motion.div>

          {/* Star Image */}
          <motion.div
            variants={imageItemVariants}
            className="hidden xl:block absolute -bottom-4 -right-10 w-[80px] h-[80px] z-10"
          >
            <Image src={star} alt="Star Image" fill />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;