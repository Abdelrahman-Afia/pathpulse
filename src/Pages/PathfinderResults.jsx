import { useMemo } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import "./home.css";
import "./Pathfinder.css";
import "./PathfinderResults.css";
import MotionSection from "../Components/MotionSection";

const SCORE = 90;
const CARDS = [
  {
    id: "strength",
    en: { label: "Top Strength", value: "Creative Problem Solving" },
    ar: { label: "أقوى نقطة", value: "حل المشكلات بإبداع" },
  },
  {
    id: "style",
    en: { label: "Work Style", value: "Collaborative Innovation" },
    ar: { label: "أسلوب العمل", value: "ابتكار جماعي" },
  },
  {
    id: "drive",
    en: { label: "Drive", value: "Impact & Creativity" },
    ar: { label: "الدافع", value: "التأثير والإبداع" },
  },
];

export default function PathfinderResults() {
  const { language, isRtl } = useOutletContext();
  const navigate = useNavigate();
  const isArabic = language === "ar";

  const copy = useMemo(
    () => ({
      title: isArabic ? "تم تفعيل نبضك" : "Your pulse is activated",
      summary: isArabic
        ? `يُظهر نبضك ميلاً بنسبة ${SCORE}% نحو هندسة التصميم`
        : `Your Pulse shows a ${SCORE}% lean toward Design Engineering`,
      dashboard: isArabic ? "عرض لوحة التحكم" : "View your dashboard",
      retake: isArabic ? "إعادة التقييم" : "Retake assessment",
    }),
    [isArabic]
  );

  return (
    <main className="homeMain" aria-label={isArabic ? "نتائج باث فايندر" : "Pathfinder results"}>
      <section className="pathfinderPage pathfinderResults">
        <div className="pathfinderInner">
          <h1 className="pathfinderResultsTitle">{copy.title}</h1>
          <p className="pathfinderResultsScore">{SCORE}%</p>
          <p className="pathfinderResultsSummary">{copy.summary}</p>

          <div className="pathfinderResultsGrid">
            {CARDS.map((card, index) => {
              const block = isArabic ? card.ar : card.en;
              return (
                <MotionSection
                  key={card.id}
                  preset="up"
                  amount={0.12}
                  rtl={isRtl}
                  delay={index * 0.08}
                >
                  <article className="pathfinderResultCard">
                    <p className="pathfinderResultLabel">{block.label}</p>
                    <p className="pathfinderResultValue">{block.value}</p>
                  </article>
                </MotionSection>
              );
            })}
          </div>

          <div className="pathfinderResultsActions">
            <Link className="pathfinderResultsCta" to="/focuspal">
              {copy.dashboard}
            </Link>
            <button
              type="button"
              className="pathfinderResultsRetake"
              onClick={() => navigate("/pathfinder/questions")}
            >
              {copy.retake}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
