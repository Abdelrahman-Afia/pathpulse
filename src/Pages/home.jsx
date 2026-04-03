import React from "react";
import { useOutletContext } from "react-router-dom";
import "./home.css";
import MotionSection from "../Components/MotionSection";
import Hero from "../Components/Hero";
import SectionTwo from "../Components/SectionTwo";
import SectionThree from "../Components/SectionThree";
import SectionFour from "../Components/SectionFour";
import SectionFive from "../Components/SectionFive";
import SectionSix from "../Components/SectionSix";
import SectionSeven from "../Components/SectionSeven";
import SectionEight from "../Components/SectionEight";

export default function Home() {
  const { language, isRtl } = useOutletContext();

  return (
    <main className="homeMain" aria-label="Page content">
      <MotionSection preset="up-subtle" amount={0.2} rtl={isRtl}>
        <Hero language={language} />
      </MotionSection>
      <MotionSection preset="up" amount={0.12} rtl={isRtl}>
        <SectionTwo language={language} />
      </MotionSection>
      <MotionSection preset="up-subtle" amount={0.12} rtl={isRtl}>
        <SectionThree language={language} />
      </MotionSection>
      <MotionSection preset="up" amount={0.12} rtl={isRtl}>
        <SectionFour language={language} />
      </MotionSection>
      <MotionSection preset="up-subtle" amount={0.12} rtl={isRtl}>
        <SectionFive language={language} />
      </MotionSection>
      <MotionSection preset="up" amount={0.12} rtl={isRtl}>
        <SectionSix language={language} />
      </MotionSection>
      <MotionSection preset="up-subtle" amount={0.12} rtl={isRtl}>
        <SectionSeven language={language} />
      </MotionSection>
      <MotionSection preset="up" amount={0.15} rtl={isRtl}>
        <SectionEight language={language} />
      </MotionSection>
    </main>
  );
}
