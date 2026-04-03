import { useMemo, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import "./home.css";
import "./EduMatch.css";
import MotionSection from "../Components/MotionSection";

const BUDGET_MIN = 5000;
const BUDGET_MAX = 50000;

const UNIVERSITIES = [
  {
    id: "cairo",
    featured: true,
    tuition: 15000,
    matchScore: 95,
    skillMatch: 92,
    nameEn: "Cairo University",
    nameAr: "جامعة القاهرة",
    locEn: "Cairo",
    locAr: "القاهرة",
    tagsEn: ["Computer Science", "Engineering", "Design"],
    tagsAr: ["علوم الحاسب", "هندسة", "تصميم"],
  },
  {
    id: "auc",
    featured: false,
    tuition: 35000,
    matchScore: 88,
    skillMatch: 85,
    nameEn: "American University in Cairo",
    nameAr: "الجامعة الأمريكية بالقاهرة",
    locEn: "New Cairo",
    locAr: "التجمع الخامس",
    tagsEn: ["Digital Media", "Business", "Engineering"],
    tagsAr: ["إعلام رقمي", "أعمال", "هندسة"],
  },
  {
    id: "alex",
    featured: false,
    tuition: 15000,
    matchScore: 95,
    skillMatch: 92,
    nameEn: "Alexandria University",
    nameAr: "جامعة الإسكندرية",
    locEn: "Alexandria",
    locAr: "الإسكندرية",
    tagsEn: ["Engineering", "Science", "Architecture"],
    tagsAr: ["هندسة", "علوم", "عمارة"],
  },
  {
    id: "ainshams",
    featured: false,
    tuition: 13000,
    matchScore: 78,
    skillMatch: 76,
    nameEn: "Ain Shams University",
    nameAr: "جامعة عين شمس",
    locEn: "Cairo",
    locAr: "القاهرة",
    tagsEn: ["Computer Science", "Business", "Medicine"],
    tagsAr: ["علوم الحاسب", "أعمال", "طب"],
  },
  {
    id: "guc",
    featured: true,
    tuition: 40000,
    matchScore: 90,
    skillMatch: 88,
    nameEn: "German University in Cairo",
    nameAr: "الجامعة الألمانية بالقاهرة",
    locEn: "New Cairo",
    locAr: "التجمع الخامس",
    tagsEn: ["Engineering", "Design", "Technology"],
    tagsAr: ["هندسة", "تصميم", "تقنية"],
  },
  {
    id: "nile",
    featured: false,
    tuition: 32000,
    matchScore: 85,
    skillMatch: 90,
    nameEn: "Nile University",
    nameAr: "جامعة النيل",
    locEn: "Sheikh Zayed",
    locAr: "الشيخ زايد",
    tagsEn: ["Computer Science", "Engineering", "Design"],
    tagsAr: ["علوم الحاسب", "هندسة", "تصميم"],
  },
];

function formatTuitionShort(n) {
  if (n >= 1000) return `$${Math.round(n / 1000)}k`;
  return `$${n}`;
}

function formatMoney(n) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function EduMatch() {
  const { language, isRtl } = useOutletContext();
  const isArabic = language === "ar";

  const [minBudget, setMinBudget] = useState(BUDGET_MIN);
  const [maxBudget, setMaxBudget] = useState(BUDGET_MAX);
  const [minSkill, setMinSkill] = useState(70);

  const copy = useMemo(
    () => ({
      back: isArabic ? "رجوع" : "Back",
      eyebrow: isArabic ? "إيديو ماتش" : "EduMatch",
      title: isArabic ? "بوصلتك الأكاديمية" : "Your academic GPS",
      tagline: isArabic
        ? "اعثر على جامعات تلائم نبضك وميزانيتك"
        : "Find universities that match your pulse and budget",
      budgetTitle: isArabic ? "$ نطاق الميزانية" : "$ Budget range",
      minLabel: isArabic ? "الحد الأدنى" : "Min",
      maxLabel: isArabic ? "الحد الأقصى" : "Max",
      perYear: isArabic ? "/سنة" : "/year",
      skillTitle: isArabic ? "📈 تطابق المهارات" : "📈 Skill match",
      minSkillLabel: isArabic ? "الحد الأدنى للتطابق" : "Minimum match",
      countLine: isArabic ? "جامعات تلائم نبضك" : "Universities match your pulse",
      empty: isArabic ? "لا توجد نتائج ضمن عوامل التصفية." : "No universities match your filters.",
      matchScore: isArabic ? "درجة التطابق" : "Match score",
      skillMatch: isArabic ? "تطابق المهارات" : "Skill match",
      tuition: isArabic ? "الرسوم/سنة" : "Tuition/year",
      learnMore: isArabic ? "اعرف المزيد" : "Learn more",
      compare: isArabic ? "قارن" : "Compare",
    }),
    [isArabic]
  );

  const filtered = useMemo(() => {
    const lo = Math.min(minBudget, maxBudget);
    const hi = Math.max(minBudget, maxBudget);
    return UNIVERSITIES.filter(
      (u) => u.tuition >= lo && u.tuition <= hi && u.skillMatch >= minSkill
    );
  }, [minBudget, maxBudget, minSkill]);

  return (
    <main className="homeMain" aria-label={isArabic ? "إيديو ماتش" : "EduMatch"}>
      <section className="eduMatchPage">
        <div className="eduMatchInner">
          <Link className="eduMatchBack" to="/">
            <span aria-hidden>{isRtl ? "→" : "←"}</span>
            {copy.back}
          </Link>

          <p className="eduMatchEyebrow">{copy.eyebrow}</p>
          <h1 className="eduMatchTitle">{copy.title}</h1>
          <p className="eduMatchTagline">{copy.tagline}</p>

          <div className="eduMatchLayout">
            <aside className="eduMatchSidebar" aria-label={isArabic ? "عوامل التصفية" : "Filters"}>
              <div className="eduMatchPanel">
                <h2 className="eduMatchPanelTitle">{copy.budgetTitle}</h2>
                <div className="eduMatchSliderBlock">
                  <label className="eduMatchSliderLabel" htmlFor="edu-min-budget">
                    {copy.minLabel}: {formatMoney(minBudget)}
                    {copy.perYear}
                  </label>
                  <input
                    id="edu-min-budget"
                    type="range"
                    className="eduMatchRange"
                    min={BUDGET_MIN}
                    max={BUDGET_MAX}
                    step={1000}
                    value={minBudget}
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      setMinBudget(v);
                      if (v > maxBudget) setMaxBudget(v);
                    }}
                  />
                </div>
                <div className="eduMatchSliderBlock">
                  <label className="eduMatchSliderLabel" htmlFor="edu-max-budget">
                    {copy.maxLabel}: {formatMoney(maxBudget)}
                    {copy.perYear}
                  </label>
                  <input
                    id="edu-max-budget"
                    type="range"
                    className="eduMatchRange"
                    min={BUDGET_MIN}
                    max={BUDGET_MAX}
                    step={1000}
                    value={maxBudget}
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      setMaxBudget(v);
                      if (v < minBudget) setMinBudget(v);
                    }}
                  />
                </div>
              </div>

              <div className="eduMatchPanel">
                <h2 className="eduMatchPanelTitle">{copy.skillTitle}</h2>
                <div className="eduMatchSliderBlock">
                  <label className="eduMatchSliderLabel" htmlFor="edu-skill">
                    {copy.minSkillLabel}: {minSkill}%
                  </label>
                  <input
                    id="edu-skill"
                    type="range"
                    className="eduMatchRange"
                    min={0}
                    max={100}
                    step={1}
                    value={minSkill}
                    onChange={(e) => setMinSkill(Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="eduMatchPanel">
                <p className="eduMatchCountNum" aria-live="polite">
                  {filtered.length}
                </p>
                <p className="eduMatchCountText">{copy.countLine}</p>
              </div>
            </aside>

            <div className="eduMatchResults">
              {filtered.length === 0 ? (
                <p className="eduMatchEmpty">{copy.empty}</p>
              ) : (
                filtered.map((u, index) => {
                  const name = isArabic ? u.nameAr : u.nameEn;
                  const loc = isArabic ? u.locAr : u.locEn;
                  const tags = isArabic ? u.tagsAr : u.tagsEn;

                  return (
                    <MotionSection
                      key={u.id}
                      preset="up"
                      amount={0.1}
                      rtl={isRtl}
                      delay={Math.min(index * 0.05, 0.3)}
                    >
                      <article className="eduMatchCard">
                        <div className="eduMatchCardMain">
                          <div className="eduMatchCardTop">
                            <h2 className="eduMatchCardName">{name}</h2>
                            {u.featured ? (
                              <svg className="eduMatchStar" viewBox="0 0 24 24" aria-hidden>
                                <path
                                  fill="currentColor"
                                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                />
                              </svg>
                            ) : null}
                          </div>
                          <p className="eduMatchLoc">
                            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                              <path
                                fill="currentColor"
                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
                              />
                            </svg>
                            {loc}
                          </p>
                          <div className="eduMatchTags">
                            {tags.map((t) => (
                              <span key={t} className="eduMatchTag">
                                {t}
                              </span>
                            ))}
                          </div>
                          <div className="eduMatchStats">
                            <div className="eduMatchStat">
                              <span className="eduMatchStatLabel">{copy.matchScore}</span>
                              <span className="eduMatchStatValue">{u.matchScore}%</span>
                            </div>
                            <div className="eduMatchStat">
                              <span className="eduMatchStatLabel">{copy.skillMatch}</span>
                              <span className="eduMatchStatValue">{u.skillMatch}%</span>
                            </div>
                            <div className="eduMatchStat">
                              <span className="eduMatchStatLabel">{copy.tuition}</span>
                              <span className="eduMatchStatValue">{formatTuitionShort(u.tuition)}</span>
                            </div>
                          </div>
                        </div>
                        <div className="eduMatchCardActions">
                          <button type="button" className="eduMatchBtnSolid">
                            {copy.learnMore}
                          </button>
                          <button type="button" className="eduMatchBtnOutline">
                            {copy.compare}
                          </button>
                        </div>
                      </article>
                    </MotionSection>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
