"use client";

import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
  children: ReactNode;
};

export default function AOSProvider({ children }: Props) {
  useEffect(() => {
    AOS.init({
      duration: 600, 
      easing: "ease-out",
      once: true,      
    });
  }, []);

  return <>{children}</>;
}