import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { SearchBar } from "../components/SearchBar";
import { ContactForm } from "../components/ContactForm";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";

const LandingPage = () => {
  return (
    <div>
      <SearchBar />
      <Hero />
      <Services />
      <Pricing />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default LandingPage;
