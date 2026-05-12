"use client";

import Navbar from "@/app/(Home)/components/NavBar";
import Hero from "@/app/(Home)/components/Hero";
import Features from "@/app/(Home)/components/Features";
import Benefits from "@/app/(Home)/components/Benefits";
import Pricing from "@/app/(Home)/components/Pricing";
import Testimonials from "@/app/(Home)/components/Testimonials";
import Contact from "@/app/(Home)/components/Contact";
import Footer from "@/app/(Home)/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
