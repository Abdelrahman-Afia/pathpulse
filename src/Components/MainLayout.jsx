import { useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../Assets/Vector.svg";
import "../Pages/home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MotionSection from "./MotionSection";

export default function MainLayout() {
  const [language, setLanguage] = useState("en");
  const isRtl = language === "ar";

  return (
    <div className="homeRoot" dir={isRtl ? "rtl" : "ltr"}>
      <Navbar language={language} onLanguageChange={setLanguage} logoSrc={logo} />
      <Outlet context={{ language, setLanguage, isRtl }} />
      <MotionSection preset="up-subtle" amount={0.18} rtl={isRtl}>
        <Footer language={language} logoSrc={logo} />
      </MotionSection>
    </div>
  );
}
