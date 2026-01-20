import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/utiliy/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/utiliy/Navbar";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
