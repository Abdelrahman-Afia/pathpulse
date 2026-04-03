import { useMemo, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import "./home.css";
import "./Pathfinder.css";
import "./PathfinderQuestions.css";
import MotionSection from "../Components/MotionSection";

const QUESTIONS = [
  {
    id: "team",
    en: {
      q: "Do you prefer working alone or in teams?",
      options: ["Alone", "Small teams", "Large teams", "Flexible"],
    },
    ar: {
      q: "هل تفضل العمل بمفردك أم ضمن فرق؟",
      options: ["بمفردي", "فرق صغيرة", "فرق كبيرة", "مرن"],
    },
  },
  {
    id: "motivation",
    en: {
      q: "What motivates you most?",
      options: ["Impact", "Income", "Creativity", "Stability"],
    },
    ar: {
      q: "ما الذي يحفزك أكثر؟",
      options: ["التأثير", "الدخل", "الإبداع", "الاستقرار"],
    },
  },
  {
    id: "challenges",
    en: {
      q: "How do you handle challenges?",
      options: ["Analyze deeply", "Try quickly", "Ask others", "Research first"],
    },
    ar: {
      q: "كيف تتعامل مع التحديات؟",
      options: ["تحليل عميق", "تجربة سريعة", "سؤال الآخرين", "البحث أولاً"],
    },
  },
];

export default function PathfinderQuestions() {
  const { language, isRtl } = useOutletContext();
  const navigate = useNavigate();
  const isArabic = language === "ar";
  const [answers, setAnswers] = useState(() =>
    QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: null }), {})
  );

  const copy = useMemo(
    () => ({
      eyebrow: isArabic ? "باث فايندر" : "Pathfinder",
      title: isArabic ? "لننتقل أعمق" : "Let's go deeper",
      subtitle: isArabic
        ? "أجب عن بعض الأسئلة السريعة لصقل نبضك"
        : "Answer a few quick questions to refine your pulse.",
      back: isArabic ? "رجوع" : "Back",
      submit: isArabic ? "إرسال" : "Submit",
    }),
    [isArabic]
  );

  const allAnswered = QUESTIONS.every((q) => answers[q.id] != null);

  function selectOption(questionId, option) {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  }

  return (
    <main
      className="homeMain"
      aria-label={isArabic ? "أسئلة باث فايندر" : "Pathfinder questions"}
    >
      <section className="pathfinderPage">
        <div className="pathfinderInner">
          <div className="pathfinderQuestionsTop">
            <Link className="pathfinderBackNav" to="/pathfinder">
              <span className="pathfinderBackNavIcon" aria-hidden>
                {isRtl ? "→" : "←"}
              </span>
              {copy.back}
            </Link>
          </div>

          <p className="pathfinderEyebrow">{copy.eyebrow}</p>
          <h1 className="pathfinderTitle">{copy.title}</h1>
          <p className="pathfinderSubtitle">{copy.subtitle}</p>

          <div className="pathfinderQStack">
            {QUESTIONS.map((item, index) => {
              const block = isArabic ? item.ar : item.en;
              return (
                <MotionSection
                  key={item.id}
                  preset="up"
                  amount={0.12}
                  rtl={isRtl}
                  delay={index * 0.08}
                >
                  <article className="pathfinderQCard" aria-labelledby={`pathfinder-q-${item.id}`}>
                    <h2 id={`pathfinder-q-${item.id}`} className="pathfinderQTitle">
                      {block.q}
                    </h2>
                    <div className="pathfinderQGrid" role="group" aria-label={block.q}>
                      {block.options.map((opt) => {
                        const selected = answers[item.id] === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            className={`pathfinderQOpt${selected ? " pathfinderQOpt--selected" : ""}`}
                            onClick={() => selectOption(item.id, opt)}
                            aria-pressed={selected}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </article>
                </MotionSection>
              );
            })}
          </div>

          <div className="pathfinderSubmitRow">
            <button
              type="button"
              className="pathfinderSubmitBtn"
              disabled={!allAnswered}
              onClick={() => navigate("/pathfinder/results")}
            >
              {copy.submit}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
