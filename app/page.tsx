import ActivityArea from "@/components/ActivityArea";
import Artikel from "@/components/Artikel";
import ContactArea from "@/components/ContactArea";
import FitHubApp from "@/components/FitHubApp";
import HeroSection from "@/components/HeroSection";
import MembershipArea from "@/components/MembershipArea";
import Testimonials from "@/components/Testimonials";

import React from "react";

const page = () => {
  return (
    <>
      <main className="">
        <HeroSection />
        <MembershipArea />
        <ActivityArea />
        <Testimonials />
        <ContactArea />
        <FitHubApp />
        <Artikel />
      </main>
    </>
  );
};

export default page;
