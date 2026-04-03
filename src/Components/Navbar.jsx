import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export function LanguageMenu({ language, onLanguageChange }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    function onPointerDown(e) {
      const root = rootRef.current;
      if (!root) return;
      if (!root.contains(e.target)) setOpen(false);
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, []);

  return (
    <div className="navbarLang">
      <div ref={rootRef} className="menu navbarLangDropdown">
        <div className={`item ${open ? 'open' : ''}`}>
          <button
            type="button"
            className="link"
            aria-haspopup="true"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span>{language === 'ar' ? 'العربية' : 'English'}</span>
            <svg viewBox="0 0 360 360" aria-hidden="true" xmlSpace="preserve">
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </button>

          <div className="submenu" role="menu" aria-label="Language options">
            <div className="submenu-item">
              <button
                type="button"
                className="submenu-link"
                role="menuitem"
                onClick={() => {
                  onLanguageChange('en');
                  setOpen(false);
                }}
              >
                English
              </button>
            </div>
            <div className="submenu-item">
              <button
                type="button"
                className="submenu-link"
                role="menuitem"
                onClick={() => {
                  onLanguageChange('ar');
                  setOpen(false);
                }}
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar({ language, onLanguageChange, logoSrc }) {
  const isArabic = language === 'ar';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = useMemo(
    () => [
      { key: 'pathfinder', en: 'Pathfinder', ar: 'باث فايندر' },
      { key: 'focuspal', en: 'FocusPal', ar: 'فوكاس بال' },
      { key: 'ideafit', en: 'Ideafit', ar: 'ايديا فيت' },
      { key: 'futureradar', en: 'FutureRadar', ar: 'فيوتشر رادار' },
      { key: 'edumatch', en: 'EduMatch', ar: 'اديو ماتش' },
    ],
    []
  );

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    }
    if (mobileMenuOpen) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="navbar" role="navigation" aria-label="Top navigation">
      <div className={`navbarInner ${isArabic ? 'fontArabic' : 'fontEnglish'}`}>
        <Link className="navbarLogo" to="/" aria-label="PathPulse home">
          <img className="navbarLogoImg" src={logoSrc} alt="PathPulse" />
        </Link>

        <nav className="navbarLinks" aria-label="Primary navigation">
          {links.map((item) => (
            <a
              key={item.key}
              className="navbarLink"
              href="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isArabic ? item.ar : item.en}
            </a>
          ))}
        </nav>

        <div className="navbarActions">
          <LanguageMenu
            language={language}
            onLanguageChange={(nextLang) => {
              onLanguageChange(nextLang);
              setMobileMenuOpen(false);
            }}
          />

          <Link className="navbarSignIn" to="/sign-in">
            {isArabic ? 'تسجيل الدخول' : 'Sign in'}
          </Link>

          <a className="navbarStartFree" href="/">
            <span className="navbarStartFreeText">
              {isArabic ? 'ابدأ مجانا' : 'Start free'}
            </span>
            <div className="arrow-wrapper" aria-hidden="true">
              <div className="arrow" />
            </div>
          </a>
        </div>

        <button
          type="button"
          className="navbarBurgerBtn"
          aria-label={isArabic ? 'فتح القائمة' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="navbarMobileMenu"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <span className="navbarBurgerIcon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id="navbarMobileMenu"
        className={`navbarMobileMenu ${mobileMenuOpen ? 'open' : ''} ${
          isArabic ? 'fontArabic' : 'fontEnglish'
        }`}
      >
        <nav className="navbarMobileLinks" aria-label="Mobile navigation">
          {links.map((item) => (
            <a
              key={item.key}
              className="navbarMobileLink"
              href="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isArabic ? item.ar : item.en}
            </a>
          ))}
        </nav>

        <div className="navbarMobileActions">
          <div className="navbarMobileLang">
            <LanguageMenu
              language={language}
              onLanguageChange={(nextLang) => {
                onLanguageChange(nextLang);
                setMobileMenuOpen(false);
              }}
            />
          </div>

          <Link
            className="navbarMobileSignIn"
            to="/sign-in"
            onClick={() => setMobileMenuOpen(false)}
          >
            {isArabic ? 'تسجيل الدخول' : 'Sign in'}
          </Link>
          <a
            className="navbarMobileStartFree"
            href="/"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="navbarStartFreeText">
              {isArabic ? 'ابدأ مجانا' : 'Start free'}
            </span>
            <div className="arrow-wrapper" aria-hidden="true">
              <div className="arrow" />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

