import React, { useState } from "react";
import logo from "../Assets/Vector.svg";
import "./home.css";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import SectionTwo from "../Components/SectionTwo";
import SectionThree from "../Components/SectionThree";
import SectionFour from "../Components/SectionFour";
import SectionFive from "../Components/SectionFive";

export default function Home() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="homeRoot" dir={language === "ar" ? "rtl" : "ltr"}>
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        logoSrc={logo}
      />

      <main className="homeMain" aria-label="Page content">
        <Hero language={language} />
        <SectionTwo language={language} />
        <SectionThree language={language} />
        <SectionFour language={language} />
        <SectionFive language={language} />
      </main>
    </div>
  );
}
