"use client";

import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  // const roles = ["Software Engineer", "Front-end Developer", "Freelancer"];
  return (
    <Typewriter
      options={{
        strings: ["Software Engineer", "Front-End Developer", "Freelancer"],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
      }}

      // onInit={(typewriter) => {
      //   roles.map((role) => {
      //     typewriter
      //       .typeString(role)
      //       .pauseFor(1500)
      //       .deleteAll()
      //       .pauseFor(1500);
      //   });
      //   typewriter.start();
      //   typewriter.loop = true;
      // }}
    />
  );
};

export default TypewriterText;
