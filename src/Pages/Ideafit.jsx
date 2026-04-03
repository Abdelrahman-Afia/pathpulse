import { useCallback, useMemo, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "./home.css";
import "./Ideafit.css";
import spinHub from "../Assets/spin.png";

const SEGMENTS = 6;
const CX = 160;
const CY = 160;
const R = 148;

function degToRad(d) {
  return (d * Math.PI) / 180;
}

function polar(cx, cy, r, deg) {
  const rad = degToRad(deg);
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

function slicePath(a0, a1) {
  const [x0, y0] = polar(CX, CY, R, a0);
  const [x1, y1] = polar(CX, CY, R, a1);
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M ${CX} ${CY} L ${x0.toFixed(2)} ${y0.toFixed(2)} A ${R} ${R} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} Z`;
}

const WHEEL_PROJECTS = [
  {
    id: "collab-hub",
    trackKey: "fullstack",
    levelKey: "intermediate",
    titleEn: "Student Collaboration Hub",
    titleAr: "مركز تعاون الطلاب",
    descEn:
      "Create a platform where students can find study partners, share notes, and collaborate on projects in real-time.",
    descAr:
      "أنشئ منصة يجد فيها الطلاب شركاء دراسة، يشاركون الملاحظات ويتعاونون على المشاريع في الوقت الفعلي.",
    skillsEn: ["WebSockets", "React", "Node.js"],
    skillsAr: ["WebSockets", "React", "Node.js"],
    timeEn: "4–5 weeks",
    timeAr: "4–5 أسابيع",
  },
  {
    id: "transit",
    trackKey: "ux",
    levelKey: "intermediate",
    titleEn: "Transit Companion for Elderly",
    titleAr: "رفيق النقل لكبار السن",
    descEn:
      "Design a mobile app that helps elderly users navigate public transportation with voice guidance and large, clear interfaces.",
    descAr:
      "صمّم تطبيقاً ييسّر على كبار السن استخدام النقل العام بإرشاد صوتي وواجهات كبيرة وواضحة.",
    skillsEn: ["Accessibility", "UI Systems", "Voice UX"],
    skillsAr: ["إمكانية الوصول", "أنظمة واجهة", "تجربة صوتية"],
    timeEn: "2–3 weeks",
    timeAr: "2–3 أسابيع",
  },
  {
    id: "fashion",
    trackKey: "fullstack",
    levelKey: "advanced",
    titleEn: "Sustainable Fashion Tracker",
    titleAr: "متتبع أزياء مستدامة",
    descEn:
      "Create a web platform that tracks the environmental impact of clothing brands and suggests eco-friendly alternatives.",
    descAr:
      "أنشئ منصة ويب تقيس الأثر البيئي لعلامات الملابس وتقترح بدائل صديقة للبيئة.",
    skillsEn: ["APIs", "Data viz", "PostgreSQL"],
    skillsAr: ["واجهات برمجة", "تصور بيانات", "PostgreSQL"],
    timeEn: "4–6 weeks",
    timeAr: "4–6 أسابيع",
  },
  {
    id: "artisan",
    trackKey: "mobile",
    levelKey: "advanced",
    titleEn: "Local Artisan Marketplace",
    titleAr: "سوق الحرفيين المحليين",
    descEn:
      "Build a marketplace connecting local artisans with customers, featuring AR previews of products in home settings.",
    descAr:
      "ابنِ سوقاً يربط الحرفيين بالعملاء مع معاينة بالواقع المعزّز داخل المنزل.",
    skillsEn: ["React Native", "AR", "Payments"],
    skillsAr: ["React Native", "AR", "مدفوعات"],
    timeEn: "6–8 weeks",
    timeAr: "6–8 أسابيع",
  },
  {
    id: "food-rescue",
    trackKey: "fullstack",
    levelKey: "intermediate",
    titleEn: "Campus Food Rescue Network",
    titleAr: "شبكة إنقاذ طعام الحرم",
    descEn:
      "Connect surplus campus dining with students through a simple scheduling and pickup app with notifications.",
    descAr:
      "اربط فائض مطاعم الحرم بالطلاب عبر تطبيق جدولة واستلام مع إشعارات.",
    skillsEn: ["Maps", "Push alerts", "Express"],
    skillsAr: ["خرائط", "تنبيهات", "Express"],
    timeEn: "3–4 weeks",
    timeAr: "3–4 أسابيع",
  },
  {
    id: "study-timer",
    trackKey: "ux",
    levelKey: "beginner",
    titleEn: "Mindful Study Timer",
    titleAr: "مؤقت دراسة واعٍ",
    descEn:
      "Design a calming timer app with focus sessions, break reminders, and gentle progress visuals for daily habits.",
    descAr:
      "صمّم مؤقتاً هادئاً لجلسات تركيز واستراحات وتقدم بصري لعادات يومية.",
    skillsEn: ["Micro-interactions", "Figma", "CSS"],
    skillsAr: ["تفاعلات دقيقة", "Figma", "CSS"],
    timeEn: "1–2 weeks",
    timeAr: "1–2 أسبوعين",
  },
];

const CHALLENGES = [
  {
    id: "c1",
    trackKey: "ux",
    levelKey: "intermediate",
    titleEn: "Transit Companion for Elderly",
    titleAr: "رفيق النقل لكبار السن",
    descEn:
      "Design a mobile app that helps elderly users navigate public transportation with voice guidance and large, clear interfaces.",
    descAr:
      "صمّم تطبيقاً ييسّر على كبار السن استخدام النقل العام بإرشاد صوتي وواجهات كبيرة وواضحة.",
    timeEn: "2–3 weeks",
    timeAr: "2–3 أسابيع",
  },
  {
    id: "c2",
    trackKey: "fullstack",
    levelKey: "advanced",
    titleEn: "Sustainable Fashion Tracker",
    titleAr: "متتبع أزياء مستدامة",
    descEn:
      "Create a web platform that tracks the environmental impact of clothing brands and suggests eco-friendly alternatives.",
    descAr:
      "أنشئ منصة ويب تقيس الأثر البيئي لعلامات الملابس وتقترح بدائل صديقة للبيئة.",
    timeEn: "4–6 weeks",
    timeAr: "4–6 أسابيع",
  },
  {
    id: "c3",
    trackKey: "mobile",
    levelKey: "advanced",
    titleEn: "Local Artisan Marketplace",
    titleAr: "سوق الحرفيين المحليين",
    descEn:
      "Build a marketplace connecting local artisans with customers, featuring AR previews of products in home settings.",
    descAr:
      "ابنِ سوقاً يربط الحرفيين بالعملاء مع معاينة بالواقع المعزّز داخل المنزل.",
    timeEn: "6–8 weeks",
    timeAr: "6–8 أسابيع",
  },
];

const TRACK_LABELS = {
  fullstack: { en: "Full Stack", ar: "فول ستاك" },
  ux: { en: "UX Design", ar: "تجربة المستخدم" },
  mobile: { en: "Mobile Dev", ar: "تطوير موبايل" },
};

const LEVEL_LABELS = {
  beginner: { en: "Beginner", ar: "مبتدئ", cls: "ideafitBadge--level-yellow" },
  intermediate: { en: "Intermediate", ar: "متوسط", cls: "ideafitBadge--level-yellow" },
  advanced: { en: "Advanced", ar: "متقدم", cls: "ideafitBadge--level-pink" },
};

function WheelSvg() {
  const slices = [];
  for (let i = 0; i < SEGMENTS; i += 1) {
    const a0 = -90 + i * (360 / SEGMENTS);
    const a1 = -90 + (i + 1) * (360 / SEGMENTS);
    slices.push(<path key={i} className="ideafitWheelSlice" d={slicePath(a0, a1)} />);
  }
  const hubSize = 48;
  const hubOffset = hubSize / 2;

  return (
    <svg className="ideafitWheelSvg" viewBox="0 0 320 320" aria-hidden>
      <defs>
        <clipPath id="ideafitHubClip">
          <circle cx={CX} cy={CY} r={30} />
        </clipPath>
      </defs>
      {slices}
      <circle className="ideafitWheelCenter" cx={CX} cy={CY} r={44} />
      <image
        className="ideafitWheelHubImage"
        href={spinHub}
        x={CX - hubOffset}
        y={CY - hubOffset}
        width={hubSize}
        height={hubSize}
        clipPath="url(#ideafitHubClip)"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}

export default function Ideafit() {
  const { language } = useOutletContext();
  const isArabic = language === "ar";
  const reduceMotion = useReducedMotion();

  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [selected, setSelected] = useState(null);
  const pendingIndexRef = useRef(null);

  const copy = useMemo(
    () => ({
      eyebrow: isArabic ? "إيديا فيت" : "Ideafit",
      title: isArabic ? "مختبر الابتكار" : "The innovation lab",
      subtitle: isArabic
        ? "دوّر العجلة وولّد أفكار مشاريع تليق بمحفظتك"
        : "Spin the wheel and generate portfolio-worthy project ideas.",
      spin: isArabic ? "دوّر العجلة" : "Spin the wheel",
      empty: isArabic
        ? "دوّر العجلة لتوليد فكرة مشروعك التالية"
        : "Spin the wheel to generate your next project idea",
      challenges: isArabic ? "أو اختر من بطاقات التحدي" : "Or choose from challenge cards",
      skills: isArabic ? "المهارات التي ستتدرّب عليها" : "Skills you'll practice",
      start: isArabic ? "ابدأ هذا المشروع" : "Start this project",
      save: isArabic ? "حفظ الملخص" : "Save brief",
      timeLabel: isArabic ? "المدة المتوقعة" : "Estimated time",
    }),
    [isArabic]
  );

  const trackOf = (key) => (isArabic ? TRACK_LABELS[key].ar : TRACK_LABELS[key].en);
  const levelOf = (key) => {
    const L = LEVEL_LABELS[key];
    return { text: isArabic ? L.ar : L.en, cls: L.cls };
  };

  const finishSpin = useCallback(() => {
    const idx = pendingIndexRef.current;
    pendingIndexRef.current = null;
    if (idx == null) return;
    setSelected(WHEEL_PROJECTS[idx]);
    setSpinning(false);
  }, []);

  const handleSpin = () => {
    if (spinning) return;
    const idx = Math.floor(Math.random() * WHEEL_PROJECTS.length);
    pendingIndexRef.current = idx;

    if (reduceMotion) {
      pendingIndexRef.current = null;
      setRotation((r) => r + (idx + 1) * 60);
      setSelected(WHEEL_PROJECTS[idx]);
      return;
    }

    setSpinning(true);
    const extra = 2160 + idx * (360 / SEGMENTS) + Math.random() * 8;
    setRotation((r) => r + extra);
  };

  const onWheelTransitionEnd = (e) => {
    if (e.propertyName !== "transform") return;
    if (pendingIndexRef.current == null) return;
    finishSpin();
  };

  const renderProjectCard = (project, showActions) => {
    const track = trackOf(project.trackKey);
    const level = levelOf(project.levelKey);
    const title = isArabic ? project.titleAr : project.titleEn;
    const desc = isArabic ? project.descAr : project.descEn;
    const skills = isArabic ? project.skillsAr : project.skillsEn;
    const time = isArabic ? project.timeAr : project.timeEn;

    return (
      <>
        <div className="ideafitResultHead">
          <span className="ideafitBadge ideafitBadge--track">
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
              <path
                fill="currentColor"
                d="M12 2l2.4 7.4h7.8l-6.3 4.6 2.4 7.4L12 16.8 5.7 21.4l2.4-7.4-6.3-4.6h7.8z"
              />
            </svg>
            {track}
          </span>
          <span className={`ideafitBadge ${level.cls}`}>{level.text}</span>
        </div>
        <h2 className="ideafitResultTitle">{title}</h2>
        <p className="ideafitResultDesc">{desc}</p>
        {skills?.length ? (
          <>
            <p className="ideafitSkillsLabel">{copy.skills}</p>
            <div className="ideafitSkillRow">
              {skills.map((s) => (
                <span key={s} className="ideafitSkillPill">
                  {s}
                </span>
              ))}
            </div>
          </>
        ) : null}
        <p className="ideafitResultMeta">
          {copy.timeLabel}: {time}
        </p>
        {showActions ? (
          <div className="ideafitResultActions">
            <button type="button" className="ideafitBtnPrimary">
              {copy.start}
            </button>
            <button type="button" className="ideafitBtnGhost">
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                <path
                  fill="currentColor"
                  d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
                />
              </svg>
              {copy.save}
            </button>
          </div>
        ) : null}
      </>
    );
  };

  return (
    <main className="homeMain" aria-label={isArabic ? "إيديا فيت" : "Ideafit"}>
      <section className="ideafitPage">
        <div className="ideafitInner">
          <p className="ideafitEyebrow">{copy.eyebrow}</p>
          <h1 className="ideafitTitle">{copy.title}</h1>
          <p className="ideafitSubtitle">{copy.subtitle}</p>

          <div className="ideafitHero">
            <div className="ideafitWheelColumn">
              <div className="ideafitWheelStage">
                <div className="ideafitWheelPointer" aria-hidden />
                <div
                  className={`ideafitWheelRotate${reduceMotion ? " ideafitWheelRotate--instant" : ""}`}
                  style={{ transform: `rotate(${rotation}deg)` }}
                  onTransitionEnd={onWheelTransitionEnd}
                >
                  <WheelSvg />
                </div>
              </div>
              <button
                type="button"
                className="ideafitSpinBtn"
                onClick={handleSpin}
                disabled={spinning}
                aria-busy={spinning}
              >
                <svg className="ideafitSpinIcon" viewBox="0 0 24 24" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                  />
                </svg>
                {copy.spin}
              </button>
            </div>

            <div className="ideafitResult" aria-live="polite">
              <AnimatePresence mode="wait">
                {selected ? (
                  <motion.div
                    key={selected.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {renderProjectCard(selected, true)}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ideafitResultEmpty"
                  >
                    <svg className="ideafitResultEmptyIcon" viewBox="0 0 24 24" aria-hidden>
                      <path
                        fill="currentColor"
                        d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"
                      />
                    </svg>
                    <p className="ideafitResultEmptyText">{copy.empty}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <h2 className="ideafitSectionTitle">{copy.challenges}</h2>
          <div className="ideafitChallengeGrid">
            {CHALLENGES.map((c) => {
              const track = trackOf(c.trackKey);
              const level = levelOf(c.levelKey);
              return (
                <article key={c.id} className="ideafitChallengeCard">
                  <div className="ideafitChallengeTags">
                    <span className="ideafitBadge ideafitBadge--track">{track}</span>
                    <span className={`ideafitBadge ${level.cls}`}>{level.text}</span>
                  </div>
                  <h3 className="ideafitChallengeTitle">
                    {isArabic ? c.titleAr : c.titleEn}
                  </h3>
                  <p className="ideafitChallengeDesc">
                    {isArabic ? c.descAr : c.descEn}
                  </p>
                  <p className="ideafitChallengeTime">
                    {isArabic ? c.timeAr : c.timeEn}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
