"use client";

import speech from "../public/testimonials/speech.svg";
import Image from "next/image";
import yay from "../public/testimonials/yay.svg";
import { testimonials } from "@/data/Skills";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="bg-primaryBlue flex flex-col h-screen">
      <div className="flex relative mt-40 mx-40">
        <h2 className="text-white font-oswald text-4xl">Why choose my work!</h2>
        <div className="absolute w-[71%] h-2 rounded bg-primaryYallow right-0 top-6"></div>
        <Image
          src={speech}
          alt="Speech Image"
          width={50}
          height={50}
          className="absolute -top-9 left-[280px] transform transition-all -rotate-12"
        />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="grid grid-cols-3 gap-4 mx-20 mt-10 relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border-2 border-primaryYallow rounded-lg py-3 px-5 text-white"
            >
              {testimonial.quote}
            </div>
          ))}

          <Image
            src={yay}
            alt="Speech Image"
            width={50}
            height={50}
            className="absolute -bottom-11 -right-10 transform transition-all -rotate-12"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
