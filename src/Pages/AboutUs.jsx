import { useMemo } from "react";
import { Link, useOutletContext } from "react-router-dom";
import "./home.css";
import "./AboutUs.css";
import MotionSection from "../Components/MotionSection";
import { resolveAboutIcon } from "../utils/aboutIcons";

const STORY = [
  {
    key: "problem",
    iconTry: ["The Problem", "Problem", "About The Problem"],
    emoji: "⚠️",
    titleEn: "The Problem",
    titleAr: "المشكلة",
    bodyEn:
      "Traditional career guidance treats students like statistics—generic advice, outdated tools, and one-size-fits-all approaches that ignore individual passions and market realities.",
    bodyAr:
      "تعامل التوجيه المهني التقليدي مع الطلاب كأرقام: نصائح عامة، أدوات قديمة، ومقاربة موحّدة تتجاهل الشغف الفردي وواقع سوق العمل.",
  },
  {
    key: "solution",
    iconTry: ["The Solution", "Solution", "About The Solution"],
    emoji: "💡",
    titleEn: "The Solution",
    titleAr: "الحل",
    bodyEn:
      "We reimagined career guidance from the ground up, treating careers as living, evolving ecosystems that pulse with vitality and grow organically.",
    bodyAr:
      "أعدنا تصور التوجيه المهني من الصفر، فاعتبرنا المسارات المهنية أنظمة بيئية حية تتطور وتنبض بالحيوية وتنمو بشكل عضوي.",
  },
  {
    key: "mission",
    iconTry: ["The Mission", "Mission", "About The Mission"],
    emoji: "🎯",
    titleEn: "The Mission",
    titleAr: "المهمة",
    bodyEn:
      "To empower every student to discover, track, and grow their career with data-driven insights, personalized guidance, and cutting-edge technology.",
    bodyAr:
      "تمكين كل طالب من اكتشاف مساره وتتبعه وتنميته عبر رؤى مبنية على البيانات، وتوجيه مخصص، وتقنية متطورة.",
  },
];

const IMPACT = [
  {
    key: "s1",
    value: "10,000+",
    labelEn: "Students guided",
    labelAr: "طالب تم توجيههم",
    iconTry: ["Students Guided", "StudentsGuided", "Students guided"],
  },
  {
    key: "s2",
    value: "95%",
    labelEn: "Satisfaction rate",
    labelAr: "معدل الرضا",
    iconTry: ["Satisfaction Rate", "SatisfactionRate"],
  },
  {
    key: "s3",
    value: "50,000+",
    labelEn: "Career paths mapped",
    labelAr: "مسار مهني مُرسَم",
    iconTry: ["Career Paths Mapped", "CareerPathsMapped"],
  },
  {
    key: "s4",
    value: "500+",
    labelEn: "Partner universities",
    labelAr: "جامعة شريكة",
    iconTry: ["Partner Universities", "PartnerUniversities"],
  },
];

const JOURNEY = [
  {
    year: "2023",
    titleEn: "The beginning",
    titleAr: "البداية",
    bodyEn: "Founded in Cairo with a mission to reimagine career guidance for the digital age.",
    bodyAr: "تأسست في القاهرة بمهمة إعادة تصور التوجيه المهني لعصر رقمي.",
  },
  {
    year: "2024",
    titleEn: "Product launch",
    titleAr: "إطلاق المنتج",
    bodyEn: "Launched beta with Pathfinder and FocusPal to 1,000 students.",
    bodyAr: "إطلاق نسخة تجريبية مع Pathfinder وFocusPal لألف طالب.",
  },
  {
    year: "2025",
    titleEn: "Rapid growth",
    titleAr: "نمو سريع",
    bodyEn: "Reached 10,000+ active users and partnered with 50+ universities across Egypt.",
    bodyAr: "وصلنا إلى أكثر من ١٠ آلاف مستخدم نشط وشراكة مع أكثر من ٥٠ جامعة في مصر.",
  },
  {
    year: "2026",
    titleEn: "Full platform",
    titleAr: "المنصة الكاملة",
    bodyEn: "Released the complete ecosystem with all five pillars and expanded to North Africa.",
    bodyAr: "إطلاق المنظومة الكاملة بجميع الركائز الخمس والتوسع في شمال أفريقيا.",
  },
];

const TEAM = [
  {
    key: "afia",
    iconTry: ["Afia", "CEO Afia", "Afia CEO"],
    emoji: "👨‍💻",
    name: "Afia",
    roleEn: "CEO & Founder",
    roleAr: "الرئيس التنفيذي والمؤسس",
    bioEn: "Former career counselor who saw thousands of students struggle with outdated guidance.",
    bioAr: "مستشار مهني سابق شهد آلاف الطلاب يعانون من توجيه قديم.",
  },
  {
    key: "sarah",
    iconTry: ["Sarah Ahmed", "SarahAhmed", "Sarah"],
    emoji: "👩‍💼",
    name: "Sarah Ahmed",
    roleEn: "CTO & Co-Founder",
    roleAr: "مديرة التقنية والشريكة المؤسسة",
    bioEn: "Tech visionary who built the AI systems powering PathPulse's recommendations.",
    bioAr: "رائدة تقنية بنت أنظمة الذكاء الاصطناعي التي تدعم توصيات PathPulse.",
  },
  {
    key: "layla",
    iconTry: ["Layla Ibrahim", "LaylaIbrahim", "Layla"],
    emoji: "👩‍🎨",
    name: "Layla Ibrahim",
    roleEn: "Chief Product Officer",
    roleAr: "رئيسة المنتج",
    bioEn: "Product designer obsessed with creating intuitive, beautiful user experiences.",
    bioAr: "مصممة منتجات شغوفة بتجارب مستخدم بديهية وجميلة.",
  },
  {
    key: "mohamed",
    iconTry: ["Mohamed Khaled", "MohamedKhaled", "Mohamed"],
    emoji: "👨‍🔬",
    name: "Mohamed Khaled",
    roleEn: "Head of Data Science",
    roleAr: "رئيس علوم البيانات",
    bioEn: "ML expert who turns career data into actionable insights and predictions.",
    bioAr: "خبير تعلم آلي يحوّل بيانات المسارات إلى رؤى وتوقعات قابلة للتنفيذ.",
  },
];

const VALUES = [
  {
    key: "student",
    iconTry: ["Student-First", "Student First", "StudentFirst"],
    emoji: "🎓",
    titleEn: "Student-first",
    titleAr: "الطالب أولاً",
    bodyEn: "Every decision starts with how it helps students.",
    bodyAr: "كل قرار ينطلق من مدى فائدته للطلاب.",
  },
  {
    key: "innovation",
    iconTry: ["Innovation"],
    emoji: "🚀",
    titleEn: "Innovation",
    titleAr: "الابتكار",
    bodyEn: "We challenge the status quo and reimagine possibilities.",
    bodyAr: "نتحدى الوضع القائم ونعيد تصور الإمكانات.",
  },
  {
    key: "data",
    iconTry: ["Data-Driven", "Data Driven", "DataDriven"],
    emoji: "📊",
    titleEn: "Data-driven",
    titleAr: "قائم على البيانات",
    bodyEn: "Insights backed by real market data and research.",
    bodyAr: "رؤى مدعومة ببيانات سوق حقيقية وأبحاث.",
  },
  {
    key: "community",
    iconTry: ["Community"],
    emoji: "🤝",
    titleEn: "Community",
    titleAr: "المجتمع",
    bodyEn: "Building a supportive ecosystem for career growth.",
    bodyAr: "بناء منظومة داعمة لنمو المسارات المهنية.",
  },
  {
    key: "excellence",
    iconTry: ["Excellence"],
    emoji: "⭐",
    titleEn: "Excellence",
    titleAr: "التميز",
    bodyEn: "Committed to delivering the highest quality experience.",
    bodyAr: "ملتزمون بأعلى جودة في التجربة.",
  },
  {
    key: "accessibility",
    iconTry: ["Accessibility"],
    emoji: "♿",
    titleEn: "Accessibility",
    titleAr: "إتاحة الوصول",
    bodyEn: "Career guidance should be available to everyone.",
    bodyAr: "يجب أن يكون التوجيه المهني متاحًا للجميع.",
  },
];

export default function AboutUs() {
  const { language, isRtl } = useOutletContext();
  const isArabic = language === "ar";

  const copy = useMemo(
    () => ({
      back: isArabic ? "رجوع" : "Back",
      kicker: isArabic ? "من نحن" : "About PathPulse",
      heroTitle: isArabic ? "نبني المستقبل" : "We're building the future",
      heroLead: isArabic
        ? "وُلد PathPulse من إيمان بسيط: مسارك المهني ليس وثيقة ثابتة تُودَع في ملف—بل كائن حي يستحق أن يُرعى ويُتابع ويُحتفى به."
        : "PathPulse was born from a simple belief: Your career isn't a static document to be filed away—it's a living, breathing organism that deserves to be nurtured, tracked, and celebrated.",
      story: isArabic ? "قصتنا" : "Our story",
      impact: isArabic ? "أثرنا" : "Our impact",
      impactSub: isArabic ? "فرق حقيقي في حياة الطلاب" : "Making a real difference in students' lives",
      journey: isArabic ? "رحلتنا" : "Our journey",
      team: isArabic ? "تعرّف على الفريق" : "Meet the team",
      teamSub: isArabic ? "الأشخاص الذين يبنون نبض مسارك" : "The people building your career pulse",
      values: isArabic ? "ما نؤمن به" : "What we believe",
      ctaTitle: isArabic ? "انضم إلى مهمتنا" : "Join our mission",
      ctaBody: isArabic
        ? "سواء كنت طالبًا تبحث عن التوجيه أو تتشاركنا الرؤية، يسعدنا انضمامك إلى مجتمعنا."
        : "Whether you're a student looking for guidance or someone who shares our vision, we'd love to have you in our community.",
      getStarted: isArabic ? "ابدأ الآن" : "Get started",
      joinTeam: isArabic ? "انضم للفريق" : "Join our team",
    }),
    [isArabic]
  );

  function renderIcon(iconTry, emoji) {
    const src = resolveAboutIcon(...iconTry);
    if (src) {
      return (
        <div className="aboutCardIconWrap">
          <img className="aboutCardIcon" src={src} alt="" />
        </div>
      );
    }
    return (
      <span className="aboutCardIconWrap aboutEmojiFallback" aria-hidden>
        {emoji}
      </span>
    );
  }

  return (
    <main className="homeMain" aria-label={isArabic ? "من نحن" : "About us"}>
      <section className="aboutPage">
        <div className="aboutInner">
          <Link className="aboutBack" to="/">
            <span aria-hidden>{isRtl ? "→" : "←"}</span>
            {copy.back}
          </Link>

          <header className="aboutHero">
            <p className="aboutHeroKicker">{copy.kicker}</p>
            <h1 className="aboutHeroTitle">{copy.heroTitle}</h1>
            <p className="aboutHeroLead">{copy.heroLead}</p>
          </header>

          <h2 className="aboutSectionTitle">{copy.story}</h2>
          <div className="aboutStoryGrid">
            {STORY.map((item, index) => (
              <MotionSection key={item.key} preset="up" amount={0.12} rtl={isRtl} delay={index * 0.06}>
                <article className="aboutMotionCard">
                  {renderIcon(item.iconTry, item.emoji)}
                  <h3 className="aboutCardTitle">{isArabic ? item.titleAr : item.titleEn}</h3>
                  <p className="aboutCardBody">{isArabic ? item.bodyAr : item.bodyEn}</p>
                </article>
              </MotionSection>
            ))}
          </div>

          <h2 className="aboutSectionTitle">{copy.impact}</h2>
          <p className="aboutSectionSub aboutSectionSub--center">{copy.impactSub}</p>
          <div className="aboutImpactGrid">
            {IMPACT.map((item, index) => {
              const statIcon = resolveAboutIcon(...item.iconTry);
              return (
                <MotionSection key={item.key} preset="up" amount={0.1} rtl={isRtl} delay={index * 0.05}>
                  <article className="aboutMotionCard aboutMotionCard--stat">
                    {statIcon ? (
                      <div className="aboutStatIconWrap">
                        <img className="aboutStatIcon" src={statIcon} alt="" width={48} height={48} />
                      </div>
                    ) : null}
                    <p className="aboutStatValue">{item.value}</p>
                    <p className="aboutStatLabel">{isArabic ? item.labelAr : item.labelEn}</p>
                  </article>
                </MotionSection>
              );
            })}
          </div>

          <h2 className="aboutSectionTitle">{copy.journey}</h2>
          <div className="aboutJourney">
            <ul className="aboutJourneyList">
              {JOURNEY.map((item, index) => (
                <li key={item.year} className="aboutJourneyItem">
                  <MotionSection preset="up-subtle" amount={0.12} rtl={isRtl} delay={index * 0.07}>
                    <article className="aboutMotionCard">
                      <p className="aboutStatValue" style={{ fontSize: "clamp(22px, 3vw, 30px)" }}>
                        {item.year}
                      </p>
                      <h3 className="aboutCardTitle">{isArabic ? item.titleAr : item.titleEn}</h3>
                      <p className="aboutCardBody">{isArabic ? item.bodyAr : item.bodyEn}</p>
                    </article>
                  </MotionSection>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="aboutSectionTitle">{copy.team}</h2>
          <p className="aboutSectionSub aboutSectionSub--center">{copy.teamSub}</p>
          <div className="aboutTeamGrid">
            {TEAM.map((member, index) => {
              const photo = resolveAboutIcon(...member.iconTry);
              return (
                <MotionSection key={member.key} preset="up" amount={0.1} rtl={isRtl} delay={index * 0.06}>
                  <article className="aboutMotionCard aboutMotionCard--team">
                    {photo ? (
                      <img className="aboutTeamPhoto" src={photo} alt="" width={88} height={88} />
                    ) : (
                      <div className="aboutTeamEmoji" aria-hidden>
                        {member.emoji}
                      </div>
                    )}
                    <h3 className="aboutCardTitle">{member.name}</h3>
                    <p className="aboutTeamRole">{isArabic ? member.roleAr : member.roleEn}</p>
                    <p className="aboutCardBody">{isArabic ? member.bioAr : member.bioEn}</p>
                  </article>
                </MotionSection>
              );
            })}
          </div>

          <h2 className="aboutSectionTitle">{copy.values}</h2>
          <div className="aboutValuesGrid">
            {VALUES.map((item, index) => (
              <MotionSection key={item.key} preset="up" amount={0.1} rtl={isRtl} delay={index * 0.04}>
                <article className="aboutMotionCard">
                  {renderIcon(item.iconTry, item.emoji)}
                  <h3 className="aboutCardTitle">{isArabic ? item.titleAr : item.titleEn}</h3>
                  <p className="aboutCardBody">{isArabic ? item.bodyAr : item.bodyEn}</p>
                </article>
              </MotionSection>
            ))}
          </div>

          <div className="aboutCta">
            <p className="aboutCtaText">{copy.ctaBody}</p>
            <div className="aboutCtaRow">
              <Link className="aboutCtaBtn aboutCtaBtn--primary" to="/sign-up">
                {copy.getStarted}
              </Link>
              <a className="aboutCtaBtn aboutCtaBtn--ghost" href="mailto:careers@pathpulseapp.com">
                {copy.joinTeam}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
