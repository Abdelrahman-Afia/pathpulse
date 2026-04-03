import { useMemo } from "react";
import { Link, useOutletContext } from "react-router-dom";
import "./home.css";
import "./NotFound.css";

export default function NotFound() {
  const { language } = useOutletContext();
  const isArabic = language === "ar";

  const copy = useMemo(
    () => ({
      label: isArabic ? "خطأ" : "Error",
      home: isArabic ? "العودة إلى الرئيسية" : "Back to home",
    }),
    [isArabic]
  );

  return (
    <main className="homeMain notFoundMain" aria-label={isArabic ? "صفحة غير موجودة" : "Page not found"}>
      <div className="notFoundInner">
        <p className="notFoundLabel">{copy.label}</p>
        <h1 className="notFoundCode">404</h1>
        <Link className="notFoundBtn" to="/">
          {copy.home}
        </Link>
      </div>
    </main>
  );
}
