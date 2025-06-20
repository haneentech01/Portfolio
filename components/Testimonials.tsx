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
    <section className="bg-primaryBlue flex flex-col">
      <div className="flex relative mt-16 mx-6 xl:mt-40 xl:mx-40">
        <h2 className="text-white font-oswald text-2xl xl:text-4xl">
          Why choose my work!
        </h2>

        {/* Line Break  */}
        <div className="absolute w-[44%] md:w-[72%] lg:w-[76%]  xl:w-[71%] h-2 rounded bg-primaryYallow top-4 right-0 xl:top-6"></div>

        <div className="absolute left-48 -top-9 xl:left-[280px] transform transition-all -rotate-12 w-10 h-10 xl:w-[50px] xl:h-[50px] pr-5">
          <Image src={speech} alt="Speech Image" fill />
        </div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-6 md:mx-8 xl:mx-20 mt-10 relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border-2 border-primaryYallow rounded-lg py-3 px-2 xl:px-5 text-white sm:text-sm md:text-base"
            >
              {testimonial.quote}
            </div>
          ))}

          <div className="absolute -bottom-11 right-0 xl:-right-10 transform transition-all -rotate-12">
            <Image src={yay} alt="Speech Image" width={50} height={50} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
