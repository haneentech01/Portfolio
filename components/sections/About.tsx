"use client";

import Image, { StaticImageData } from "next/image";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/common/SectionHeader";
import rocket from "@/assets/about/Rocket.png";
import astronaut from "@/assets/about/astronaut.png";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

const FALLBACK_ABOUT_TEXT = `
  I’m a Front-End Software Engineer specializing in Next.js and React, with 3+ years
  of experience building fast, scalable, and high-performance web applications.

  I focus on clean, maintainable, component-based code and translating complex UI/UX
  designs into efficient, user-friendly interfaces, with strong attention to
  performance, cross-browser compatibility, and modern best practices.
`;

const AboutSection = () => {
  const [aboutText, setAboutText] = useState<string>(FALLBACK_ABOUT_TEXT);
  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(astronaut);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutText = async () => {
      try {
        const { data, error } = await supabase
          .from("about")
          .select("content, image_url")
          .eq("id", 1)
          .single();

        if (error) {
          console.error("Error fetching about:", error);
          setErrorMsg("Failed to load about section.");
        } else if (data?.content) {
          setAboutText(data.content);
        }

        if (data?.image_url) {
          setImageSrc(data.image_url); // هنا نحط لينك الصورة من Supabase
        }
      } catch (err) {
        console.error(err);
        setErrorMsg("Unexpected error.");
      } finally {
        setLoading(false);
      }
    };

    fetchAboutText();
  }, []);

  return (
    <Section
      id="about"
      bgClassName="bg-primaryBlue py-7 md:py-0"
    >
      <SectionHeader
        title="About"
        icon={rocket}
        underlineClassName="w-[95%] xl:w-[85%]"
        aos="fade-left"
        aosDelay={200}
      />

      <div className="relative text-white pb-14 lg:pb-20 xl:pb-24"
        data-aos="fade-left"
        data-aos-delay={200}
      >
        <p className="-mt-5 xl:mt-0 font-inter whitespace-pre-line text-base 
                      md:text-lg leading-6 md:leading-8 max-w-[69rem]">
          {loading
            ? "Loading..."
            : errorMsg
              ? aboutText
              : aboutText}
        </p>

        <div className="absolute -right-4 lg:right-16 xl:-right-10
                        -bottom-8 md:top-44 lg:top-32 xl:top-12
                        w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-60 xl:w-80 xl:h-80
                      "
        >
          <div
            data-aos="fade-up-left"
            data-aos-delay="200"
            className="w-full h-full"
          >
            <Image
              src={imageSrc}
              alt="About image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </Section>

  );
};

export default AboutSection;