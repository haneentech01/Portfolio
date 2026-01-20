"use client";

import { ReactNode } from "react";

type SectionProps = {
  id: string;
  bgClassName?: string;
  className?: string;
  children: ReactNode;
};

const Section = ({
  id,
  bgClassName = "bg-primaryBlue",
  className = "",
  children,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`relative ${bgClassName} overflow-hidden`}
    >
      <div
        className={`
          mx-auto 
          max-w-[1280px] 
          px-5 md:px-8 xl:px-6 
          py-16 md:py-24
          ${className}
        `}
      >
        {children}
      </div>
    </section>
  );
};


export default Section;