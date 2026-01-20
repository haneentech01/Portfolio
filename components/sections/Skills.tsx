"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Section from "@/components/layout/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { supabase } from "@/lib/supabaseClient";

import coding from "@/assets/skills/coding.svg";
import fillStar from "@/assets/skills/fillStar.svg";
import laptop from "@/assets/skills/laptop.svg";
import youtube from "@/assets/skills/youtube.svg";
import star from '@/assets/skills/star-outline.svg'
import { Skill } from "@/data/Skills";


function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { data, error } = await supabase
          .from("skills")
          .select("id, title, icon_url, sort_order")
          .order("sort_order", { ascending: true });

        if (error) {
          console.error("Error fetching skills:", error);
        } else if (data) {
          setSkills(data as Skill[]);
        }
      } catch (err) {
        console.error("Unexpected error fetching skills:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <Section
      id="skills"
      bgClassName="bg-primaryBlue"
      className="flex-col"
    >
      <SectionHeader
        title="Skills"
        icon={star}
        underlineClassName="w-0 md:w-0"
        aos="fade-up"
        aosDelay={200}
      />

      {/* Line + YouTube Icon */}
      <div className="flex -mt-6 md:-mt-8 lg:-mt-10 relative">
        <div className="absolute sm:w-[200px] sm:h-[20px] lg:w-[40rem] lg:h-[2rem] lg:-left-24">
          <div className="relative w-full h-full">
            <Image src="/lineBreak.svg" alt="Line Break" fill />
          </div>
        </div>

        <div className="hidden xl:block absolute lg:top-7 lg:left-[28%] lg:w-[80px] lg:h-[80px]">
          <Image src={youtube} alt="YouTube" fill />
        </div>
      </div>

      {/* Content */}
      <div className="mt-9 lg:mt-16 flex flex-col lg:flex-row 
                      justify-start items-start gap-12 md:gap-16 
                      xl:gap-72 relative">
        {/* Text + Decorative Icons */}
        <div
          className="relative text-white text-3xl font-bold font-oswald 
                      md:max-w-lg xl:max-w-6xl mb-10 md:mb-0"
          data-aos="fade-right"
          data-aos-delay="250"
        >
          <h2>
            I got the experience.
            <br />
            Here is my toolbelt for success.
          </h2>

          <div className="hidden xl:block absolute top-28 -right-4 w-10 h-10">
            <Image src={fillStar} alt="Star" fill />
          </div>

          <div className="absolute w-24 h-24 -bottom-16 right-12 
                          md:w-20 md:h-20 md:-top-10 md:right-8 
                          lg:w-[100px] lg:h-[100px] lg:top-56 lg:left-3 
                          xl:w-[170px] xl:h-[170px] xl:top-52 xl:left-12">
            <Image src={laptop} alt="Laptop" fill />
          </div>

          <div className="absolute w-14 h-14 -bottom-2 right-3 
                          md:w-16 md:h-16 md:-top-16 md:-right-5 
                          lg:w-[80px] lg:h-[80px] lg:top-[180px] lg:left-20 
                          xl:w-[100px] xl:h-[100px] xl:top-40 xl:left-40">
            <Image src={coding} alt="Coding" fill />
          </div>
        </div>

        {/* grid skills */}
        <div
          className="w-full max-w-xl mx-auto lg:mx-0 grid 
                    grid-cols-3 sm:grid-cols-3 md:grid-cols-4 
                    lg:grid-cols-5 xl:grid-cols-6 
                    gap-x-6 gap-y-10 sm:gap-8 md:gap-10 
                    lg:gap-x-10 lg:gap-y-12
                    xl:gap-x-14 xl:gap-y-12
                    justify-items-center
                    place-content-center items-center px-2"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          {loading ? (
            <p className="text-white text-sm col-span-full text-center">
              Loading skills...
            </p>
          ) : skills.length === 0 ? (
            <p className="text-white text-sm col-span-full text-center">
              No skills found.
            </p>
          ) : (
            skills.map((item) => (
              <div
                key={item.id}
                title={item.title}
                className="flex flex-col items-center justify-center mx-auto"
                data-aos="zoom-in"
                data-aos-delay="350"
              >
                {item.icon_url && (
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                    <Image
                      src={item.icon_url}
                      alt={item.title}
                      fill
                      className={
                        item.title === "NextJS" ||
                          item.title === "GitHub" ||
                          item.title === "Json"
                          ? "object-contain invert"
                          : "object-contain"
                      }
                    />
                  </div>
                )}
                <p className="mt-3 text-xs font-bold text-white">
                  {item.title}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </Section>
  );
}

export default Skills;