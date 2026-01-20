export type Skill = {
  id: number;
  title: string;
  icon_url: string | null;
  sort_order: number | null;
};

export type Testimonial = {
  id: number;
  quote: string;
  name?: string;
  job?: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
};

export const skills: Skill[] = [
  {
    id: 1,
    title: "HTML",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    sort_order: 1,
  },
  {
    id: 2,
    title: "CSS",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    sort_order: 2,
  },
  {
    id: 3,
    title: "Javascript",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    sort_order: 3,
  },
  {
    id: 4,
    title: "TailwindCSS",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    sort_order: 4,
  },
  {
    id: 5,
    title: "React",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    sort_order: 5,
  },
  {
    id: 6,
    title: "NextJS",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    sort_order: 6,
  },
  {
    id: 7,
    title: "Typescript",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    sort_order: 7,
  },
  {
    id: 8,
    title: "Git",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    sort_order: 8,
  },
  {
    id: 9,
    title: "GitHub",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/github/github-original.svg",
    sort_order: 9,
  },
  {
    id: 10,
    title: "Figma",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    sort_order: 10,
  },
  {
    id: 11,
    title: "Redux",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    sort_order: 11,
  },
  {
    id: 12,
    title: "Material UI",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    sort_order: 12,
  },
  {
    id: 13,
    title: "Bootstrap",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/bootstrap/bootstrap-original.svg",
    sort_order: 13,
  },
  {
    id: 14,
    title: "axios",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/axios/axios-plain-wordmark.svg",
    sort_order: 14,
  },
  {
    id: 15,
    title: "AntDesign",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/antdesign/antdesign-plain.svg",
    sort_order: 15,
  },
  {
    id: 16,
    title: "Reactrouter",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/reactrouter/reactrouter-original.svg",
  sort_order: 16,
  },
  {
    id: 17,
    title: "Canva",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/canva/canva-original.svg",
  sort_order: 17,
  },
  {
    id: 18,
    title: "Jira",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/jira/jira-original.svg",
  sort_order: 18,
  },
  {
    id: 19,
    title: "Flutter",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/flutter/flutter-original.svg",
  sort_order: 19,
  },
  {
    id: 20,
    title: "MongoDB",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/mongodb/mongodb-original.svg",
  sort_order: 20,
  },
  {
    id: 21,
    title: "Json",
    icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/json/json-original.svg",
    sort_order: 21,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "I build with purpose, not just code.I start every project by understanding your goals and users, then translate them into fast, responsive, and scalable web solutions using modern technologies like React and Next.js.",
    id: 1
  },
  {
    quote: "Clear communication. Clean code. Reliable delivery.I respect the trust my clients place in me and focus on delivering high-quality work, on time, with long-term maintainability in mind.",
    id: 2
  },
  {
    quote:
      "Always learning, always improving.I actively stay up to date with modern front-end trends and technologies, approaching new challenges with a problem-solving and research-driven mindset.",
    id: 3
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
