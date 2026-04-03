import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function SocialIcon({ name }) {
  const common = { className: "footerSocialSvg", viewBox: "0 0 24 24", "aria-hidden": true };
  switch (name) {
    case "facebook":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
          />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
          />
        </svg>
      );
    default:
      return null;
  }
}

const discoverKeys = [
  { key: "pathfinder", en: "Pathfinder", ar: "باث فايندر", path: "/pathfinder" },
  { key: "focuspal", en: "FocusPal", ar: "فوكاس بال", path: "/focuspal" },
  { key: "ideafit", en: "Ideafit", ar: "إيديا فيت", path: "/" },
  { key: "futureradar", en: "FutureRadar", ar: "فيوتشر رادار", path: "/" },
  { key: "edumatch", en: "EduMatch", ar: "إيديو ماتش", path: "/" },
];

const buildLinks = [
  { key: "about", en: "About us", ar: "من نحن" },
  { key: "careers", en: "Careers", ar: "الوظائف" },
  { key: "blog", en: "Blog", ar: "المدونة" },
];

const socialLinks = [
  { key: "facebook", en: "Facebook", ar: "فيسبوك", href: "https://www.facebook.com/" },
  { key: "instagram", en: "Instagram", ar: "إنستغرام", href: "https://www.instagram.com/" },
  { key: "x", en: "X (Twitter)", ar: "إكس", href: "https://x.com/" },
  { key: "linkedin", en: "LinkedIn", ar: "لينكد إن", href: "https://www.linkedin.com/" },
  { key: "youtube", en: "YouTube", ar: "يوتيوب", href: "https://www.youtube.com/" },
];

export default function Footer({ language, logoSrc }) {
  const isArabic = language === "ar";
  const [email, setEmail] = useState("");

  function handleNewsletterSubmit(e) {
    e.preventDefault();
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="footerInner">
        <div className="footerTop">
          <div className="footerCol footerColBrand">
            <Link className="footerLogoLink" to="/" aria-label="PathPulse home">
              <img className="footerLogo" src={logoSrc} alt="" width={160} height={40} />
            </Link>
            <p className="footerTagline">
              {isArabic
                ? "ابقَ على النبض. تلقَّ تحديثات حول المسارات والأدوات الجديدة."
                : "Stay in the pulse. Get updates on new pathways and tools."}
            </p>
            <form className="footerNewsletter" onSubmit={handleNewsletterSubmit} noValidate>
              <div className="footerNewsletterRow">
                <input
                  className="footerEmailInput"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder={isArabic ? "بريدك الإلكتروني" : "Your email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label={isArabic ? "بريدك الإلكتروني" : "Your email"}
                />
                <button type="submit" className="footerSubscribeBtn">
                  {isArabic ? "اشترك" : "Subscribe"}
                </button>
              </div>
            </form>
            <p className="footerDisclaimer">
              {isArabic
                ? "توافق على سياسة الخصوصية وتوافق على استلام التحديثات من PathPulse."
                : "You agree to our Privacy Policy and consent to receive updates from PathPulse."}
            </p>
          </div>

          <div className="footerCol">
            <h3 className="footerHeading">{isArabic ? "اكتشف" : "Discover"}</h3>
            <ul className="footerList">
              {discoverKeys.map((item) => (
                <li key={item.key}>
                  <Link className="footerLink" to={item.path}>
                    {isArabic ? item.ar : item.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footerCol">
            <h3 className="footerHeading">{isArabic ? "ابنِ" : "Build"}</h3>
            <ul className="footerList">
              {buildLinks.map((item) => (
                <li key={item.key}>
                  <a className="footerLink" href="/">
                    {isArabic ? item.ar : item.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footerCol">
            <h3 className="footerHeading">{isArabic ? "تواصل" : "Connect"}</h3>
            <ul className="footerList footerListSocial">
              {socialLinks.map((item) => (
                <li key={item.key}>
                  <a
                    className="footerLink footerLinkSocial"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon name={item.key} />
                    <span>{isArabic ? item.ar : item.en}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footerRule" aria-hidden="true" />

        <div className="footerBottom">
          <p className="footerCopyright">
            {isArabic ? "© ٢٠٢٦ PathPulse. جميع الحقوق محفوظة." : "© 2026 PathPulse. All rights reserved."}
          </p>
          <nav className="footerLegal" aria-label={isArabic ? "قانوني" : "Legal"}>
            <a className="footerLegalLink" href="/">
              {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
            </a>
            <a className="footerLegalLink" href="/">
              {isArabic ? "شروط الخدمة" : "Terms of Service"}
            </a>
            <a className="footerLegalLink" href="/">
              {isArabic ? "إعدادات ملفات تعريف الارتباط" : "Cookies Settings"}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
