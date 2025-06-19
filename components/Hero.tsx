"use client";
import Image from "next/image";
import React from "react";
import TypewriterText from "./TypewriterText";
import { motion } from "framer-motion";
import circle from "../assets/download (10).png";

const Hero = () => {
  return (
    <section className="bg-primaryBlue h-screen">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-36 px-4 pb-10 md:grid-cols-2 lg:p-4 text-white">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem] font-inter">
          {/* About */}
          <h1 className="leading-8 lg:leading-[50px] mt-2 mb-2 block text-lg lg:text-2xl ">
            Hey, I&apos;m{" "}
            <span className="font-bold font-oswald text-xl lg:text-3xl text-[#9cceff]">
              Haneen {""}
            </span>
            .I&apos;m a{" "}
            <span className="block text-3xl lg:text-5xl font-bold font-oswald text-primaryYallow leading-[60px] lg:leading-[80px]">
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
              className="bg-blueLight border-dashed border-2 border-sky-500 min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E] hover:bg-hoverBlueLight"
            >
              Hire Me
            </a>
            <a
              href="https://github.com/haneentech01"
              target="_blank"
              aria-label="View GitHub Profile"
              className="border-dashed border-2 border-sky-500 cursor-pointer rounded-lg px-[14px] py-[10px] text-sm hover:bg-hoverPrimaryBlue "
            >
              GitHub Profile
            </a>
          </div>
        </div>

        <div className="flex mt-10 max-w-[1200px] ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="relative w-[500px] h-[500px] mx-auto ">
              <Image src={circle} alt="Circle Image" fill />

              <Image
                src="/logo.png"
                alt="Hero Image"
                fill
                className="object-contain p-7 right-0"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="block bottom-52 right-2 absolute"
          >
            <Image
              src="/hero/html.svg"
              alt="HTML Image"
              width={70}
              height={70}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="block top-32 right-10 absolute"
          >
            <Image
              src="/hero/code.svg"
              alt="Code Image"
              width={80}
              height={80}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="block top-[6.5rem] ms-32 absolute"
          >
            <Image src="/hero/js.svg" alt="JS Image" width={75} height={75} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="block bottom-12 -ms-32 absolute"
          >
            <Image
              src="/hero/coder.svg"
              alt="Coder Image"
              width={160}
              height={160}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="block top-40 -ms-32 absolute"
          >
            <Image
              src="/hero/nextjs.svg"
              alt="Next Image"
              width={80}
              height={80}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="block -bottom-24 ms-36 absolute"
          >
            <Image
              src="/hero/dino.svg"
              alt="Dino Image"
              width={80}
              height={80}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="block -bottom-[4.5rem] right-24 absolute"
          >
            <Image
              src="/hero/pop1.svg"
              alt="star Image"
              width={70}
              height={70}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
