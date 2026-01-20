"use client";

import speech from "@/assets/testimonials/speech.svg";
import Image from "next/image";
import yay from "@/assets/testimonials/yay.svg";
import { Testimonial } from "@/data/Skills";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase
          .from("testimonials")
          .select("id, quote, name, job")
          .order("sort_order", { ascending: true });

        if (error) {
          console.error("Error fetching testimonials:", error);
        } else if (data) {
          setTestimonials(data);
        }
      } catch (err) {
        console.error("Unexpected error fetching testimonials:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="bg-primaryBlue flex flex-col">
      <div className="flex relative mt-16 mx-6 xl:mt-40 xl:mx-40">
        <h2 className="text-white font-oswald text-2xl xl:text-4xl">
          Why choose my work!
        </h2>

        {/* Line Break  */}
        <div className="absolute w-[42%] md:w-[72%] lg:w-[76%] xl:w-[71%] h-2 rounded bg-primaryYallow top-4 right-0 xl:top-6"></div>

        <div className="absolute left-[11.7rem] -top-9 xl:left-[285px] transform transition-all -rotate-12 w-10 h-10 xl:w-[50px] xl:h-[50px] pr-5">
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
          {loading ? (
            <p className="text-white text-sm col-span-full text-center">
              Loading testimonials...
            </p>
          ) : testimonials.length === 0 ? (
            <p className="text-white text-sm col-span-full text-center">
              No testimonials found.
            </p>
          ) : (
            testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="border-2 border-primaryYallow rounded-lg py-3 px-4 xl:p-7 text-white sm:text-sm md:text-base"
              >
                {testimonial.quote}
                {(testimonial.name || testimonial.job) && (
                  <p className="mt-2 text-xs text-gray-300">
                    {testimonial.name}
                    {testimonial.job ? ` • ${testimonial.job}` : ""}
                  </p>
                )}
              </div>
            ))
          )}

          <div className="absolute -bottom-11 right-0 xl:-right-10 transform transition-all -rotate-12">
            <Image src={yay} alt="Yay Image" width={50} height={50} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
