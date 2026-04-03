import { useMemo } from "react";
import { Link, useOutletContext } from "react-router-dom";
import "./home.css";
import "./FocusPal.css";
import MotionSection from "../Components/MotionSection";

const VITALITY = 85;

function polar(cx, cy, radius, angleRad) {
  return [cx + radius * Math.cos(angleRad), cy + radius * Math.sin(angleRad)];
}

function polygonPoints(values, cx, cy, maxR) {
  const n = values.length;
  return values
    .map((v, i) => {
      const angle = -Math.PI / 2 + (i * 2 * Math.PI) / n;
      const [x, y] = polar(cx, cy, maxR * Math.min(1, Math.max(0, v)), angle);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

function SkillRadar({ labels, skills, market }) {
  const cx = 160;
  const cy = 160;
  const R = 118;
  const n = 6;

  const gridPolygons = [0.33, 0.66, 1].map((t) => polygonPoints(Array(n).fill(t), cx, cy, R));
  const axisLines = Array.from({ length: n }, (_, i) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / n;
    const [x, y] = polar(cx, cy, R, angle);
    return { x, y, angle, label: labels[i] };
  });

  return (
    <div className="focuspalRadarWrap">
      <svg className="focuspalRadarSvg" viewBox="0 0 320 320" aria-hidden>
        {gridPolygons.map((pts, idx) => (
          <polygon
            key={idx}
            points={pts}
            fill="none"
            stroke="rgba(0, 78, 152, 0.18)"
            strokeWidth="1"
          />
        ))}
        {axisLines.map((a, i) => (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={a.x}
            y2={a.y}
            stroke="rgba(0, 78, 152, 0.22)"
            strokeWidth="1"
          />
        ))}
        <polygon
          points={polygonPoints(market, cx, cy, R)}
          fill="none"
          stroke="#e9c46a"
          strokeWidth="2.5"
          strokeDasharray="6 5"
        />
        <polygon
          points={polygonPoints(skills, cx, cy, R)}
          fill="rgba(0, 180, 216, 0.42)"
          stroke="#00b4d8"
          strokeWidth="2"
        />
        {axisLines.map((a, i) => {
          const lx = polar(cx, cy, R + 22, a.angle);
          return (
            <text
              key={`l-${i}`}
              x={lx[0]}
              y={lx[1]}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#004e98"
              fontSize="11"
              fontWeight="700"
            >
              {a.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

export default function FocusPal() {
  const { language, isRtl } = useOutletContext();
  const isArabic = language === "ar";

  const radarLabels = isArabic
    ? ["تصميم", "برمجة", "قيادة", "تواصل", "تحليل", "إبداع"]
    : ["Design", "Coding", "Leadership", "Communication", "Analysis", "Creativity"];

  const skills = [0.88, 0.46, 0.72, 0.68, 0.56, 0.92];
  const market = [0.64, 0.78, 0.7, 0.82, 0.74, 0.54];

  const copy = useMemo(
    () => ({
      eyebrow: isArabic ? "فوكاس بال" : "FocusPal",
      title: isArabic ? "مؤشرات مسارك المهني" : "Your career vitals",
      subtitle: isArabic
        ? "مراقب صحّة مخصص لرحلتك المهنية"
        : "A personalized health monitor for your professional journey",
      vitality: isArabic ? "درجة الحيوية" : "Vitality Score",
      caption: isArabic ? "نبض مسارك قوي ومستقر" : "Your career pulse is Strong & Steady",
      week: isArabic ? "هذا الأسبوع" : "This Week",
      growth: isArabic ? "+8% نمو" : "+8% Growth",
      goals: isArabic ? "الأهداف المحققة" : "Goals Hit",
      goalsVal: isArabic ? "3 من 5" : "3 of 5",
      milestones: isArabic ? "معالم" : "Milestones",
      milestonesVal: isArabic ? "1 مكتمل" : "1 Completed",
      path: isArabic ? "المسار" : "The Path",
      radar: isArabic ? "رادار المهارات" : "Skill Radar",
      legendYou: isArabic ? "مهاراتك الحالية" : "Your Current Skills",
      legendMarket: isArabic ? "طلب السوق" : "Market Demand",
      insight: isArabic
        ? "ملاحظة: إبداعك أعلى من متوسط طلب السوق! ركّز على تطوير مهارات البرمجة لتتماشى مع احتياجات الصناعة."
        : "Insight: Your creativity is above market demand! Focus on developing coding skills to match industry needs.",
      timeline: [
        {
          done: true,
          title: isArabic ? "أكملت باث فايندر" : "Completed Pathfinder",
          sub: isArabic ? "اليوم" : "Today",
        },
        {
          done: false,
          title: isArabic ? "ابنِ أول مشروع في المحفظة" : "Build First Portfolio Project",
          sub: isArabic ? "هذا الأسبوع" : "This Week",
        },
        {
          done: false,
          title: isArabic ? "أتقن المهارات الأساسية" : "Master Core Skills",
          sub: isArabic ? "هذا الشهر" : "This Month",
        },
        {
          done: false,
          title: isArabic ? "تقدّم لأفضل البرامج" : "Apply to Top Programs",
          sub: isArabic ? "الشهر القادم" : "Next Month",
        },
        {
          done: false,
          title: isArabic ? "احصل على دور أحلامك" : "Land Your Dream Role",
          sub: isArabic ? "هذا العام" : "This Year",
        },
      ],
      cards: [
        {
          to: "/ideafit",
          title: isArabic ? "ابدأ مشروعاً" : "Start a Project",
          sub: isArabic ? "ابنِ محفظتك مع Ideafit" : "Build your portfolio with Ideafit",
        },
        {
          to: "/futureradar",
          title: isArabic ? "اطلع على الاتجاهات" : "Check Trends",
          sub: isArabic ? "شاهد الأكثر طلباً في FutureRadar" : "See what's hot in FutureRadar",
        },
        {
          to: "/edumatch",
          title: isArabic ? "اعثر على برامج" : "Find Programs",
          sub: isArabic ? "طابق المدارس في EduMatch" : "Match with schools in EduMatch",
        },
      ],
    }),
    [isArabic]
  );

  return (
    <main className="homeMain" aria-label={isArabic ? "فوكاس بال" : "FocusPal"}>
      <section className="focuspalPage">
        <div className="focuspalInner">
          <p className="focuspalEyebrow">{copy.eyebrow}</p>
          <h1 className="focuspalTitle">{copy.title}</h1>
          <p className="focuspalSubtitle">{copy.subtitle}</p>

          <MotionSection preset="up-subtle" amount={0.14} rtl={isRtl}>
            <div className="focuspalVitality">
              <div className="focuspalVitalityMain">
                <div className="focuspalVitalityLabelRow">
                  <svg className="focuspalPulseIcon" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M2 12h3l2-7 4 14 3-10 2 3h8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{copy.vitality}</span>
                </div>
                <p className="focuspalVitalityScore">{VITALITY}%</p>
                <p className="focuspalVitalityCaption">{copy.caption}</p>
              </div>
              <div className="focuspalVitalitySide">
                <div className="focuspalMiniMetric">
                  <svg className="focuspalMiniIcon" viewBox="0 0 24 24" aria-hidden>
                    <path
                      fill="currentColor"
                      d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
                    />
                  </svg>
                  <div className="focuspalMiniText">
                    <p className="focuspalMiniLabel">{copy.week}</p>
                    <p className="focuspalMiniValue">{copy.growth}</p>
                  </div>
                </div>
                <div className="focuspalMiniMetric">
                  <svg className="focuspalMiniIcon" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                  <div className="focuspalMiniText">
                    <p className="focuspalMiniLabel">{copy.goals}</p>
                    <p className="focuspalMiniValue">{copy.goalsVal}</p>
                  </div>
                </div>
                <div className="focuspalMiniMetric">
                  <svg className="focuspalMiniIcon" viewBox="0 0 24 24" aria-hidden>
                    <path
                      fill="currentColor"
                      d="M12 2l2.4 7.4h7.8l-6.3 4.6 2.4 7.4L12 16.8 5.7 21.4l2.4-7.4-6.3-4.6h7.8z"
                    />
                  </svg>
                  <div className="focuspalMiniText">
                    <p className="focuspalMiniLabel">{copy.milestones}</p>
                    <p className="focuspalMiniValue">{copy.milestonesVal}</p>
                  </div>
                </div>
              </div>
            </div>
          </MotionSection>

          <div className="focuspalMidRow">
            <MotionSection preset="up" amount={0.12} rtl={isRtl} delay={0.05}>
              <div className="focuspalPanel">
                <h2 className="focuspalPanelHead">{copy.path}</h2>
                <ul className="focuspalTimeline">
                  {copy.timeline.map((row, i) => (
                    <li key={i} className="focuspalTimelineItem">
                      <div
                        className={`focuspalTimelineDot${
                          row.done ? " focuspalTimelineDot--done" : " focuspalTimelineDot--upcoming"
                        }`}
                      >
                        {row.done ? (
                          <svg viewBox="0 0 24 24" aria-hidden>
                            <path
                              fill="currentColor"
                              d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                            />
                          </svg>
                        ) : null}
                      </div>
                      <div>
                        <p className="focuspalTimelineTitle">{row.title}</p>
                        <p className="focuspalTimelineSub">{row.sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionSection>

            <MotionSection preset="up" amount={0.12} rtl={isRtl} delay={0.1}>
              <div className="focuspalPanel">
                <h2 className="focuspalPanelHead">{copy.radar}</h2>
                <SkillRadar labels={radarLabels} skills={skills} market={market} />
                <div className="focuspalRadarLegend">
                  <span className="focuspalRadarLegendItem">
                    <span className="focuspalLegendSwatch focuspalLegendSwatch--you" />
                    {copy.legendYou}
                  </span>
                  <span className="focuspalRadarLegendItem">
                    <span className="focuspalLegendSwatch focuspalLegendSwatch--market" />
                    {copy.legendMarket}
                  </span>
                </div>
                <p className="focuspalInsight">{copy.insight}</p>
              </div>
            </MotionSection>
          </div>

          <div className="focuspalActions">
            {copy.cards.map((c, index) => (
              <MotionSection key={c.title} preset="up-subtle" amount={0.12} rtl={isRtl} delay={index * 0.06}>
                <Link className="focuspalActionCard" to={c.to}>
                  <h3 className="focuspalActionTitle">{c.title}</h3>
                  <p className="focuspalActionSub">{c.sub}</p>
                </Link>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
