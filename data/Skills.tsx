type Skill = {
  title: string;
  icon: string;
  style?: object;
};
type Testimonial = {
  quote: string;
  name?: string;
  job?: string;
};

export const skills: Skill[] = [
  {
    title: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/github/github-original.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    title: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    title: "Material UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    title: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/bootstrap/bootstrap-original.svg",
  },
  {
    title: "axios",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/axios/axios-plain-wordmark.svg",
  },
  {
    title: "AntDesign",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/antdesign/antdesign-plain.svg",
  },
  {
    title: "Reactrouter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/reactrouter/reactrouter-original.svg",
  },
  {
    title: "Canva",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/canva/canva-original.svg",
  },
  {
    title: "Jira",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/jira/jira-original.svg",
  },
  {
    title: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/flutter/flutter-original.svg",
  },
  {
    title: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/mongodb/mongodb-original.svg",
  },
  {
    title: "Json",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/json/json-original.svg",
    style: { filter: "invert(1)" },
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Every successful project starts by understanding the project's goals and requirements to be successful. Whether you are a startup, anonline store, a school, a freelancer, a law firm, or a clinic, I willdo my best to know your project in its entirety and provide you withtailored digital products and services with speed, performance, and agreat user experiences. I use modern technologies, such as React andNext.js, to achieve professional responsive interfaces that functionwell from any device.",
  },
  {
    quote:
      "I respect the trust each client places in me. For this reason, I work hard to provide a seamless working experience with clear and professional communication as the foundation for the agreement. Clients receive the work they need, when they need it, with the expectations of quality, clean code, and attention to detail. I approach every project with a long-term view of working together, not just as a project itself.",
  },
  {
    quote:
      "I have an actual passion for continued learning, always looking for ways to improve my skills and become familiar with the latest web world evolution and trends. When faced with a new technology or challenge that I have not worked with before, I attack it with the mindset of a passionate researcher to be able to learn the skill, perform, and enhance every project I work on.",
  },
];
