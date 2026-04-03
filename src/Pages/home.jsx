import React, { useState } from "react";
import logo from "../Assets/Vector.svg";
import "./home.css";
import Navbar from "../Components/Navbar";
import MotionSection from "../Components/MotionSection";
import Hero from "../Components/Hero";
import SectionTwo from "../Components/SectionTwo";
import SectionThree from "../Components/SectionThree";
import SectionFour from "../Components/SectionFour";
import SectionFive from "../Components/SectionFive";
import SectionSix from "../Components/SectionSix";
import SectionSeven from "../Components/SectionSeven";
import SectionEight from "../Components/SectionEight";
import Footer from "../Components/Footer";

export default function Home() {
  const [language, setLanguage] = useState("en");
  const isRtl = language === "ar";

  return (
    <div className="homeRoot" dir={isRtl ? "rtl" : "ltr"}>
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        logoSrc={logo}
      />

      <main className="homeMain" aria-label="Page content">
        <MotionSection preset="up-subtle" amount={0.2} rtl={isRtl}>
          <Hero language={language} />
        </MotionSection>
        <MotionSection preset="right" amount={0.12} rtl={isRtl}>
          <SectionTwo language={language} />
        </MotionSection>
        <MotionSection preset="left" amount={0.12} rtl={isRtl}>
          <SectionThree language={language} />
        </MotionSection>
        <MotionSection preset="up" amount={0.12} rtl={isRtl}>
          <SectionFour language={language} />
        </MotionSection>
        <MotionSection preset="right" amount={0.12} rtl={isRtl}>
          <SectionFive language={language} />
        </MotionSection>
        <MotionSection preset="left" amount={0.12} rtl={isRtl}>
          <SectionSix language={language} />
        </MotionSection>
        <MotionSection preset="up-subtle" amount={0.12} rtl={isRtl}>
          <SectionSeven language={language} />
        </MotionSection>
        <MotionSection preset="up" amount={0.15} rtl={isRtl}>
          <SectionEight language={language} />
        </MotionSection>
      </main>

      <MotionSection preset="up-subtle" amount={0.18} rtl={isRtl}>
        <Footer language={language} logoSrc={logo} />
      </MotionSection>
    </div>
  );
}
