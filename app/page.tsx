"use client";

import { Navbar, Hero, About, Projects, Contact, Footer } from "@/components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
