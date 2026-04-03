import { useMemo, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import "./home.css";
import "./FutureRadar.css";
import MotionSection from "../Components/MotionSection";

const CX = 200;
const CY = 200;

const FILTERS = [
  { key: "all", en: "All", ar: "الكل" },
  { key: "aiml", en: "AI/ML", ar: "ذكاء اصطناعي" },
  { key: "design", en: "Design", ar: "تصميم" },
  { key: "tech", en: "Tech", ar: "تقنية" },
  { key: "business", en: "Business", ar: "أعمال" },
  { key: "science", en: "Science", ar: "علوم" },
  { key: "security", en: "Security", ar: "أمن" },
];

const SKILLS = [
  {
    id: "ai-ethics",
    cat: "aiml",
    nameEn: "AI Ethics",
    nameAr: "أخلاقيات الذكاء الاصطناعي",
    catLabelEn: "AI/ML",
    catLabelAr: "ذكاء اصطناعي",
    heat: 95,
    heatTone: "orange",
    growth: "+180%",
    growthTone: "green",
    icon: "trend",
  },
  {
    id: "spatial",
    cat: "design",
    nameEn: "Spatial Design",
    nameAr: "التصميم المكاني",
    catLabelEn: "Design",
    catLabelAr: "تصميم",
    heat: 88,
    heatTone: "cyan",
    growth: "+124%",
    growthTone: "cyan",
    icon: "bolt",
  },
  {
    id: "quantum",
    cat: "tech",
    nameEn: "Quantum Computing",
    nameAr: "الحوسبة الكمية",
    catLabelEn: "Tech",
    catLabelAr: "تقنية",
    heat: 72,
    heatTone: "cyan",
    growth: "+95%",
    growthTone: "green",
    icon: "trend",
  },
  {
    id: "sustainability",
    cat: "business",
    nameEn: "Sustainability",
    nameAr: "الاستدامة",
    catLabelEn: "Business",
    catLabelAr: "أعمال",
    heat: 91,
    heatTone: "orange",
    growth: "+142%",
    growthTone: "cyan",
    icon: "bolt",
  },
  {
    id: "web3",
    cat: "tech",
    nameEn: "Web3 Development",
    nameAr: "تطوير Web3",
    catLabelEn: "Tech",
    catLabelAr: "تقنية",
    heat: 84,
    heatTone: "orange",
    growth: "+76%",
    growthTone: "green",
    icon: "trend",
  },
  {
    id: "bioinfo",
    cat: "science",
    nameEn: "Bioinformatics",
    nameAr: "معلوماتية حيوية",
    catLabelEn: "Science",
    catLabelAr: "علوم",
    heat: 79,
    heatTone: "cyan",
    growth: "+88%",
    growthTone: "cyan",
    icon: "bolt",
  },
  {
    id: "ux-writing",
    cat: "design",
    nameEn: "UX Writing",
    nameAr: "كتابة تجربة المستخدم",
    catLabelEn: "Design",
    catLabelAr: "تصميم",
    heat: 86,
    heatTone: "cyan",
    growth: "+112%",
    growthTone: "green",
    icon: "trend",
  },
  {
    id: "devops",
    cat: "tech",
    nameEn: "DevOps",
    nameAr: "ديف أوبس",
    catLabelEn: "Tech",
    catLabelAr: "تقنية",
    heat: 93,
    heatTone: "orange",
    growth: "+65%",
    growthTone: "cyan",
    icon: "trend",
  },
  {
    id: "privacy",
    cat: "security",
    nameEn: "Data Privacy",
    nameAr: "خصوصية البيانات",
    catLabelEn: "Security",
    catLabelAr: "أمن",
    heat: 90,
    heatTone: "cyan",
    growth: "+155%",
    growthTone: "green",
    icon: "bolt",
  },
  {
    id: "arvr",
    cat: "design",
    nameEn: "AR/VR Design",
    nameAr: "تصميم AR/VR",
    catLabelEn: "Design",
    catLabelAr: "تصميم",
    heat: 87,
    heatTone: "orange",
    growth: "+103%",
    growthTone: "cyan",
    icon: "trend",
  },
];

const BLIPS = [
  { r: 52, deg: 20, color: "#004e98" },
  { r: 98, deg: 110, color: "#e9a00a" },
  { r: 75, deg: 200, color: "#004e98" },
  { r: 130, deg: 300, color: "#004e98" },
  { r: 115, deg: 45, color: "#e9a00a" },
  { r: 145, deg: 220, color: "#004e98" },
];

function polarDeg(cx, cy, r, deg) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

function RadarGraphic() {
  const rings = [44, 88, 132, 176];

  return (
    <svg className="futureRadarSvg" viewBox="0 0 400 400" aria-hidden>
      {rings.map((r) => (
        <circle
          key={r}
          cx={CX}
          cy={CY}
          r={r}
          fill="none"
          stroke="rgba(0, 180, 216, 0.45)"
          strokeWidth="1.5"
        />
      ))}
      <g transform={`translate(${CX} ${CY})`}>
        <g className="futureRadarScan">
          <line
            x1={0}
            y1={0}
            x2={0}
            y2={-176}
            stroke="#004e98"
            strokeWidth="2"
            strokeLinecap="round"
            opacity={0.85}
          />
        </g>
      </g>
      {BLIPS.map((b, i) => {
        const [bx, by] = polarDeg(CX, CY, b.r, b.deg);
        return <circle key={i} cx={bx} cy={by} r={5} fill={b.color} opacity={0.95} />;
      })}
      <circle cx={CX} cy={CY} r={6} fill="#004e98" />
    </svg>
  );
}

function TrendIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"
      />
    </svg>
  );
}

function BoltIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="currentColor" d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z" />
    </svg>
  );
}

export default function FutureRadar() {
  const { language, isRtl } = useOutletContext();
  const isArabic = language === "ar";
  const [filter, setFilter] = useState("all");

  const copy = useMemo(
    () => ({
      back: isArabic ? "رجوع" : "Back",
      eyebrow: isArabic ? "فيوتشر رادار" : "FutureRadar",
      title: isArabic ? "أفق المهارات" : "The skill horizon",
      subtitle: isArabic
        ? "اتجاهات لحظية تُظهر الأكثر طلباً في سوق العمل"
        : "Real-time trends showing what's hot in the job market",
      trending: isArabic ? "المهارات الرائجة" : "Trending skills",
      marketHeat: isArabic ? "حرارة السوق" : "Market heat",
      growth: isArabic ? "النمو" : "Growth",
      sync: isArabic ? "مزامنة مع المسار" : "Sync to Path",
    }),
    [isArabic]
  );

  const visible = useMemo(
    () => SKILLS.filter((s) => filter === "all" || s.cat === filter),
    [filter]
  );

  return (
    <main className="homeMain" aria-label={isArabic ? "فيوتشر رادار" : "FutureRadar"}>
      <section className="futureRadarPage">
        <div className="futureRadarInner">
          <Link className="futureRadarBack" to="/">
            <span aria-hidden>{isRtl ? "→" : "←"}</span>
            {copy.back}
          </Link>

          <p className="futureRadarEyebrow">{copy.eyebrow}</p>
          <h1 className="futureRadarTitle">{copy.title}</h1>
          <p className="futureRadarSubtitle">{copy.subtitle}</p>

          <MotionSection preset="up-subtle" amount={0.15} rtl={isRtl}>
            <div className="futureRadarHero">
              <div className="futureRadarSvgWrap">
                <RadarGraphic />
              </div>
            </div>
          </MotionSection>

          <div className="futureRadarFilters" role="tablist" aria-label={isArabic ? "تصفية الفئة" : "Category filters"}>
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                role="tab"
                aria-selected={filter === f.key}
                className={`futureRadarFilter${filter === f.key ? " futureRadarFilter--active" : ""}`}
                onClick={() => setFilter(f.key)}
              >
                {isArabic ? f.ar : f.en}
              </button>
            ))}
          </div>

          <h2 className="futureRadarSectionTitle">{copy.trending}</h2>

          <div className="futureRadarGrid">
            {visible.map((skill, index) => {
              const title = isArabic ? skill.nameAr : skill.nameEn;
              const cat = isArabic ? skill.catLabelAr : skill.catLabelEn;
              const heatClass =
                skill.heatTone === "orange"
                  ? "futureRadarHeatFill--orange"
                  : "futureRadarHeatFill--cyan";
              const growthClass =
                skill.growthTone === "green"
                  ? "futureRadarGrowth--green"
                  : "futureRadarGrowth--cyan";
              const Icon = skill.icon === "bolt" ? BoltIcon : TrendIcon;
              const iconClass = `futureRadarCardIcon futureRadarCardIcon--${
                skill.icon === "bolt" ? "bolt" : "trend"
              }`;

              return (
                <MotionSection
                  key={skill.id}
                  preset="up"
                  amount={0.1}
                  rtl={isRtl}
                  delay={Math.min(index * 0.04, 0.35)}
                >
                  <article className="futureRadarCard">
                    <div className="futureRadarCardHead">
                      <h3 className="futureRadarCardTitle">{title}</h3>
                      <Icon className={iconClass} />
                    </div>
                    <span className="futureRadarCat">{cat}</span>
                    <p className="futureRadarHeatLabel">{copy.marketHeat}</p>
                    <div className="futureRadarHeatRow">
                      <div className="futureRadarHeatTrack">
                        <div
                          className={`futureRadarHeatFill ${heatClass}`}
                          style={{ width: `${skill.heat}%` }}
                        />
                      </div>
                      <span className="futureRadarHeatPct">{skill.heat}%</span>
                    </div>
                    <p className="futureRadarGrowth">
                      <span className="futureRadarGrowthLabel">{copy.growth}</span>
                      <span className={growthClass}>{skill.growth}</span>
                    </p>
                    <button type="button" className="futureRadarSync">
                      {copy.sync}
                      <span aria-hidden>{isRtl ? "←" : "→"}</span>
                    </button>
                  </article>
                </MotionSection>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
