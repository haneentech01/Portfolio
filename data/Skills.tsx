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

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
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

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with shopping cart, user authentication, payment integration, and admin dashboard. Built with modern React patterns and optimized for performance.",
    image: "/ecommerce.jpg",
    technologies: ["React", "JavaScript", "Bootstrap", "Redux", "Stripe API"],
    githubUrl: "https://github.com/haneentech01/e-commerce-project",
  },
  {
    title: "Movie App",
    description:
      " I Developed a movie discovery app with, featuring trending movies, search, and detailed pages.  Integrated a mock API for real-time data fetching, enabling smooth navigation and filtering.",
    image: "/movie.png",
    technologies: ["React", "JavaScript", "Bootstrap", "Redux", "mock API"],
    githubUrl: "https://github.com/haneentech01/reactjs-movies-redux",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills. Features smooth animations, contact forms, and optimized performance with excellent lighthouse scores.",
    image: "/portfolio.png",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/haneentech01/Portfolio",
    demoUrl: "https://portfolio-flame-kappa-glnzlrdde5.vercel.app/",
  },
  {
    title: "Special Design",
    description:
      "This is a static website designed to showcase profile information, skills, photo gallery, timeline, benefits, and testimonials. It uses a simple and elegant design suitable for professionally showcasing projects or services.",
    image: "/specialDesign.png",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/haneentech01/SpecialDesign-master",
    demoUrl: "https://haneentech01.github.io/SpecialDesign-master/",
  },
];
