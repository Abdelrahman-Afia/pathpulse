import "./SectionTwo.css";
import sectionBanner from "../Assets/Section2Pic.png";
import sectionVideo from "../Assets/SectionTwoVideo.mp4";

export default function SectionTwo({ language }) {
  const isArabic = language === "ar";

  const titleLineOne = isArabic
    ? "نشكّل مستقبلاً مشرقًا"
    : "Shaping Bright Futures With Anxiety";
  const titleLineTwo = isArabic
    ? "بخيارات مهنية بلا قلق"
    : "Free Career Choices";

  const subtitleLineOne = isArabic
    ? "مساعدك الشخصي الذكي للتخطيط للتعليم والمسار المهني. لا تكتفِ بإيجاد وظيفة."
    : "Your personalized co-pilot for education and career planning. Don't just find a job.";
  const subtitleLineTwo = isArabic
    ? "اعثر على مسار له نبض."
    : "Find a path with a pulse.";

  const cta = isArabic ? "استكشف الأدوات" : "Explore Tools";
  const playLabel = isArabic
    ? "تشغيل الفيديو في علامة تبويب جديدة"
    : "Play video in new tab";

  return (
    <section className="sectionTwo" aria-label="Section two">
      <div className="sectionTwoCard">
        <div className="sectionTwoMedia" aria-hidden="true">
          <img
            className="sectionTwoBanner"
            src={sectionBanner}
            alt=""
            decoding="async"
          />
          <div className="sectionTwoImageOverlay" />
        </div>

        <a
          className="sectionTwoPlay"
          href={sectionVideo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={playLabel}
        >
          <svg viewBox="0 0 120 120" focusable="false" aria-hidden="true">
            <rect
              fill="rgba(0, 78, 152, 0.4)"
              width="120"
              height="120"
              rx="60"
            />
            <path d="M50 39V81L84 60L50 39Z" fill="#ffffff" />
          </svg>
        </a>

        <div className="sectionTwoBottomRow">
          <div className="sectionTwoContent">
            <h2 className="sectionTwoTitle">
              <span>{titleLineOne}</span>
              <span>{titleLineTwo}</span>
            </h2>
            <p className="sectionTwoSubtitle">
              <span>{subtitleLineOne}</span>
              <span>{subtitleLineTwo}</span>
            </p>
          </div>

          <div className="sectionTwoActions">
            <a className="sectionTwoCta" href="#explore-tools">
              {cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
