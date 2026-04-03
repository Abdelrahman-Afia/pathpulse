import { useEffect, useRef, useState } from "react";
import "./SectionFive.css";
import sectionFivePic1 from "../Assets/SectionFivePic1.jpg";
import sectionFivePic2 from "../Assets/SectionFivePic2.jpg";

function formatStatValue(n, locale) {
  return Math.round(n).toLocaleString(locale === "ar" ? "ar-EG" : "en-US");
}

function CountUpStat({ end, suffix = "", language }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const runCount = () => {
      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        setDisplay(end);
        return;
      }
      const start = performance.now();
      const duration = 2200;
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - (1 - t) ** 3;
        setDisplay(end * eased);
        if (t < 1) requestAnimationFrame(tick);
        else setDisplay(end);
      };
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        runCount();
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  const text = `${formatStatValue(display, language)}${suffix}`;

  return (
    <span ref={ref} className="sectionFiveCountWrap" aria-hidden="true">
      {text}
    </span>
  );
}

function StatCardFigure({ end, suffix = "", language, className, srLabel }) {
  return (
    <>
      <span className={className}>
        <CountUpStat end={end} suffix={suffix} language={language} />
      </span>
      <span className="sectionFiveSrOnly">{srLabel}</span>
    </>
  );
}

export default function SectionFive({ language }) {
  const isArabic = language === "ar";

  return (
    <section className="sectionFive" aria-label={isArabic ? "الأثر والأرقام" : "Impact and statistics"}>
      <div className="sectionFiveInner">
        <header className="sectionFiveHeader">
          <h2 className="sectionFiveTitle">
            {isArabic
              ? "وجّه الطلاب مسارهم. وجدت الجامعات طلابها. الأرقام تحكي القصة."
              : "Students found their direction. Universities found their students. The numbers tell the story."}
          </h2>
          <p className="sectionFiveLead">
            {isArabic
              ? "أصبح PathPulse الجسر بين الطموح والفعل. كل رقم يعكس حياة حقيقية تتقدّم بوضوح وثقة."
              : "PathPulse has become the bridge between ambition and action. Every metric reflects real lives moving forward with clarity and confidence."}
          </p>
        </header>

        <div className="sectionFiveGrid">
          <article className="sectionFiveCard sectionFiveCardTall">
            <StatCardFigure
              end={12400}
              language={language}
              className="sectionFiveFigure"
              srLabel={isArabic ? "١٢٬٤٠٠ طالب" : "12,400 students guided"}
            />
            <div className="sectionFiveCardFoot">
              <strong className="sectionFiveCardLabel">
                {isArabic ? "طلاب وجّهناهم" : "Students guided"}
              </strong>
              <span className="sectionFiveCardSub">
                {isArabic ? "في أنحاء مصر والعدد في ازدياد" : "Across Egypt and growing"}
              </span>
            </div>
          </article>

          <div className="sectionFiveMedia sectionFiveMediaTop">
            <img
              className="sectionFiveImg"
              src={sectionFivePic1}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>

          <article className="sectionFiveCard sectionFiveCardShort sectionFiveCardMid">
            <StatCardFigure
              end={87}
              language={language}
              className="sectionFiveFigure sectionFiveFigureSm"
              srLabel={isArabic ? "٨٧ شريك جامعات" : "87 university partners"}
            />
            <div className="sectionFiveCardFoot">
              <strong className="sectionFiveCardLabel">
                {isArabic ? "شركاء من الجامعات" : "University partners"}
              </strong>
              <span className="sectionFiveCardSub">
                {isArabic ? "من القاهرة إلى الإسكندرية وما بعدها" : "From Cairo to Alexandria and beyond"}
              </span>
            </div>
          </article>

          <article className="sectionFiveCard sectionFiveCardShort sectionFiveCardTopRight">
            <StatCardFigure
              end={94}
              suffix="%"
              language={language}
              className="sectionFiveFigure sectionFiveFigureSm"
              srLabel={isArabic ? "٩٤٪ ثقة في الاتجاه" : "94% confidence in direction"}
            />
            <div className="sectionFiveCardFoot">
              <strong className="sectionFiveCardLabel">
                {isArabic ? "ثقة في الاتجاه" : "Confidence in direction"}
              </strong>
              <span className="sectionFiveCardSub">
                {isArabic ? "بعد إكمال أول تقييم" : "After completing their first assessment"}
              </span>
            </div>
          </article>

          <div className="sectionFiveMedia sectionFiveMediaBottom">
            <img
              className="sectionFiveImg"
              src={sectionFivePic2}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
