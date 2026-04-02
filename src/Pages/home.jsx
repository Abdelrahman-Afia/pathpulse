import React, { useState } from "react";
import logo from "../Assets/Vector.svg";
import "./home.css";
import Navbar from "../Components/Navbar";

export default function Home() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="homeRoot" dir={language === "ar" ? "rtl" : "ltr"}>
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        logoSrc={logo}
      />
      <main className="homeMain" aria-label="Page content" />
    </div>
  );
}
