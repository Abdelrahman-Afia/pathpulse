import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import "./home.css";
import "./CookieSettings.css";
import cookieIcon from "../Assets/COOKIE SETTINGS.png";

const STORAGE_KEY = "pathpulse_cookie_prefs";

function loadPrefs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const p = JSON.parse(raw);
    if (typeof p !== "object" || p === null) return null;
    return p;
  } catch {
    return null;
  }
}

function CookieToggle({ enabled, onChange, disabled, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      aria-label={label}
      disabled={disabled}
      className={`cookieToggle ${enabled ? "cookieToggle--on" : ""} ${disabled ? "cookieToggle--disabled" : ""}`}
      onClick={() => {
        if (!disabled) onChange(!enabled);
      }}
    >
      <span className="cookieToggleKnob" />
    </button>
  );
}

const CATEGORIES = [
  {
    key: "essential",
    alwaysOn: true,
    titleEn: "Essential Cookies",
    titleAr: "ملفات تعريف ارتباط أساسية",
    descEn:
      "Required for the website to function properly. These cookies enable core functionality such as security, authentication, and accessibility.",
    descAr:
      "مطلوبة لتشغيل الموقع بشكل سليم. تتيح وظائف أساسية مثل الأمان والمصادقة وإتاحة الوصول.",
    examplesEn: "Session management, load balancing, security tokens.",
    examplesAr: "إدارة الجلسات، موازنة الأحمال، رموز الأمان.",
  },
  {
    key: "analytics",
    titleEn: "Analytics Cookies",
    titleAr: "ملفات تحليلية",
    descEn:
      "Help us understand how visitors interact with our platform by collecting and reporting information anonymously to improve our services.",
    descAr:
      "تساعدنا على فهم تفاعل الزوار مع المنصة عبر جمع معلومات مجهولة وتحسين خدماتنا.",
    examplesEn: "Google Analytics, usage statistics, page views.",
    examplesAr: "Google Analytics، إحصاءات الاستخدام، مشاهدات الصفحات.",
  },
  {
    key: "marketing",
    titleEn: "Marketing Cookies",
    titleAr: "ملفات تسويقية",
    descEn:
      "Used to track visitors across websites to display ads that are relevant and engaging. These cookies may be set by third-party advertising partners.",
    descAr:
      "تُستخدم لتتبع الزوار عبر المواقع لعرض إعلانات مناسبة. قد تضعها جهات إعلانية طرف ثالث.",
    examplesEn: "Facebook Pixel, Google Ads, retargeting campaigns.",
    examplesAr: "Facebook Pixel، إعلانات Google، حملات إعادة الاستهداف.",
  },
  {
    key: "personalization",
    titleEn: "Personalization Cookies",
    titleAr: "ملفات تخصيص",
    descEn:
      "Allow us to remember your preferences and provide customized content, career recommendations, and user experience tailored to your needs.",
    descAr:
      "تسمح بتذكّر تفضيلاتك وتقديم محتوى وتوصيات مهنية وتجربة مخصصة لاحتياجاتك.",
    examplesEn: "Language preferences, theme settings, personalized recommendations.",
    examplesAr: "تفضيلات اللغة، إعدادات المظهر، توصيات مخصصة.",
  },
];

function defaultState() {
  return {
    essential: true,
    analytics: true,
    marketing: false,
    personalization: true,
  };
}

export default function CookieSettings() {
  const { language } = useOutletContext();
  const isArabic = language === "ar";

  const [prefs, setPrefs] = useState(defaultState);

  useEffect(() => {
    const saved = loadPrefs();
    if (saved) {
      setPrefs((prev) => ({
        ...prev,
        ...saved,
        essential: true,
      }));
    }
  }, []);

  const persist = useCallback((next) => {
    const withEssential = { ...next, essential: true };
    setPrefs(withEssential);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(withEssential));
    } catch {
      /* ignore */
    }
  }, []);

  const copy = useMemo(
    () => ({
      title: isArabic ? "إعدادات ملفات تعريف الارتباط" : "Cookie settings",
      sub: isArabic ? "إدارة تفضيلات ملفات تعريف الارتباط" : "Manage your cookie preferences",
      intro1: isArabic
        ? "يستخدم PathPulse ملفات تعريف الارتباط لتحسين تجربتك وتذكّر تفضيلاتك وتحليل استخدام المنصة."
        : "PathPulse uses cookies to improve your experience, remember your preferences, and understand how our platform is used.",
      intro2: isArabic
        ? "ملفات تعريف الارتباط الأساسية مطلوبة لتشغيل المنصة ولا يمكن تعطيلها."
        : "Essential cookies are required for the platform to function and cannot be turned off.",
      alwaysActive: isArabic ? "دائمًا مفعّل" : "Always active",
      save: isArabic ? "حفظ التفضيلات" : "Save preferences",
      acceptAll: isArabic ? "قبول الكل" : "Accept all",
      needInfo: isArabic ? "تحتاج إلى مزيد من المعلومات؟" : "Need more information?",
      needInfoBody: isArabic
        ? "اطّلع على سياسة الخصوصية وشروط الخدمة لمزيد من التفاصيل حول البيانات وحقوقك."
        : "Review our Privacy Policy and Terms of Service for more detail on data practices and your rights.",
      privacy: isArabic ? "سياسة الخصوصية" : "Privacy Policy",
      terms: isArabic ? "شروط الخدمة" : "Terms of Service",
    }),
    [isArabic]
  );

  function setKey(key, value) {
    if (key === "essential") return;
    persist({ ...prefs, [key]: value });
  }

  function handleSave() {
    persist(prefs);
  }

  function handleAcceptAll() {
    persist({
      essential: true,
      analytics: true,
      marketing: true,
      personalization: true,
    });
  }

  return (
    <main className="homeMain" aria-label={isArabic ? "إعدادات ملفات تعريف الارتباط" : "Cookie settings"}>
      <section className="cookiePage">
        <div className="cookieInner">
          <header className="cookiePageHeader">
            <div className="cookiePageIconWrap">
              <img className="cookiePageIcon" src={cookieIcon} alt="" width={48} height={48} />
            </div>
            <div className="cookiePageTitles">
              <h1 className={`cookiePageTitle${isArabic ? " cookiePageTitle--ar" : ""}`}>{copy.title}</h1>
              <p className="cookiePageSub">{copy.sub}</p>
            </div>
          </header>

          <div className="cookieIntro">
            <p>{copy.intro1}</p>
            <p>{copy.intro2}</p>
          </div>

          {CATEGORIES.map((cat) => {
            const on = prefs[cat.key];
            const title = isArabic ? cat.titleAr : cat.titleEn;
            const desc = isArabic ? cat.descAr : cat.descEn;
            const examples = isArabic ? cat.examplesAr : cat.examplesEn;
            return (
              <article key={cat.key} className="cookieCard">
                <div className="cookieCardBody">
                  <div className="cookieCardHead">
                    <h2 className="cookieCardTitle">{title}</h2>
                    {cat.alwaysOn ? <span className="cookieBadge">{copy.alwaysActive}</span> : null}
                  </div>
                  <p className="cookieCardDesc">{desc}</p>
                  <p className="cookieCardExamples">{examples}</p>
                </div>
                <div className="cookieToggleWrap">
                  <CookieToggle
                    enabled={on}
                    disabled={cat.alwaysOn}
                    label={title}
                    onChange={(v) => setKey(cat.key, v)}
                  />
                </div>
              </article>
            );
          })}

          <div className="cookieActions">
            <button type="button" className="cookieBtnPrimary" onClick={handleSave}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {copy.save}
            </button>
            <button type="button" className="cookieBtnGhost" onClick={handleAcceptAll}>
              {copy.acceptAll}
            </button>
          </div>

          <div className="cookieInfoBox">
            <h3 className="cookieInfoTitle">{copy.needInfo}</h3>
            <p className="cookieInfoText">{copy.needInfoBody}</p>
            <div className="cookieInfoLinks">
              <Link className="cookieInfoLink" to="/privacy-policy">
                {copy.privacy}
              </Link>
              <Link className="cookieInfoLink" to="/terms-of-service">
                {copy.terms}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
