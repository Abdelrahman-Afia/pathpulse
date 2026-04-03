import { useMemo } from "react";
import { Link, useOutletContext } from "react-router-dom";
import "./home.css";
import "./Careers.css";
import MotionSection from "../Components/MotionSection";
import jobIcon from "../Assets/Jobicon.png";

const VALUES = [
  {
    key: "passion",
    titleEn: "Passion",
    titleAr: "الشغف",
    bodyEn: "Fueling innovation with a drive for excellence in career development.",
    bodyAr: "نغذي الابتكار برغبة لا تتزعزع في التميز في تطوير المسارات المهنية.",
  },
  {
    key: "integrity",
    titleEn: "Integrity",
    titleAr: "النزاهة",
    bodyEn: "Building trust through transparency, honesty, and ethical practices.",
    bodyAr: "نبني الثقة عبر الشفافية والصدق والممارسات الأخلاقية.",
  },
  {
    key: "growth",
    titleEn: "Growth mindset",
    titleAr: "عقلية النمو",
    bodyEn: "Embracing challenges as opportunities for continuous learning and improvement.",
    bodyAr: "نستقبل التحديات كفرص للتعلم المستمر والتحسين.",
  },
  {
    key: "user",
    titleEn: "User-centric",
    titleAr: "مركّز على المستخدم",
    bodyEn: "Putting our users at the heart of everything we build, ensuring their success is our own.",
    bodyAr: "نضع مستخدمينا في مركز كل ما نبنيه؛ نجاحهم هو نجاحنا.",
  },
];

const JOBS = [
  {
    key: "fs",
    titleEn: "Senior Full-Stack Engineer",
    titleAr: "مهندس برمجيات متكامل أول",
    metaEn: "Remote • Full-time",
    metaAr: "عن بُعد • دوام كامل",
    descEn: "Ship features across our React and Node stack and mentor engineers building the career OS.",
    descAr: "طوّر ميزات على React وNode وادعم الفريق في بناء منظومة المسارات المهنية.",
    tagsEn: ["Engineering", "React", "Node.js"],
    tagsAr: ["هندسة", "React", "Node.js"],
  },
  {
    key: "design",
    titleEn: "Product Designer",
    titleAr: "مصمم منتجات",
    metaEn: "Remote • Full-time",
    metaAr: "عن بُعد • دوام كامل",
    descEn: "Craft intuitive flows for students and partners from research to high-fidelity UI.",
    descAr: "صمّم تجارب بديهية للطلاب والشركاء من البحث إلى الواجهات التفصيلية.",
    tagsEn: ["Design", "Figma", "UX"],
    tagsAr: ["تصميم", "Figma", "تجربة المستخدم"],
  },
  {
    key: "coach",
    titleEn: "Success Coach",
    titleAr: "مدرب نجاح",
    metaEn: "Remote • Part-time",
    metaAr: "عن بُعد • جزئي",
    descEn: "Guide students through Pathfinder outcomes and help them stay motivated on their path.",
    descAr: "وجّه الطلاب عبر نتائج Pathfinder وشجّعهم على الاستمرار في مسارهم.",
    tagsEn: ["Coaching"],
    tagsAr: ["تدريب"],
  },
  {
    key: "ds",
    titleEn: "Data Scientist",
    titleAr: "عالم بيانات",
    metaEn: "New York, NY • Full-time",
    metaAr: "نيويورك • دوام كامل",
    descEn: "Model labor-market signals and recommendation quality to power personalized guidance.",
    descAr: "نمذجة إشارات سوق العمل وجودة التوصيات لتوجيه مخصص.",
    tagsEn: ["Data", "ML", "Python"],
    tagsAr: ["بيانات", "تعلم آلي", "Python"],
  },
  {
    key: "writer",
    titleEn: "Content Writer",
    titleAr: "كاتب محتوى",
    metaEn: "Remote • Contract",
    metaAr: "عن بُعد • تعاقدي",
    descEn: "Tell stories that inspire students and explain complex career topics with clarity.",
    descAr: "اكتب قصصًا تلهم الطلاب وتشرح موضوعات المسارات بوضوح.",
    tagsEn: ["Content", "Editorial"],
    tagsAr: ["محتوى", "تحرير"],
  },
  {
    key: "devops",
    titleEn: "DevOps Engineer",
    titleAr: "مهندس DevOps",
    metaEn: "Remote • Full-time",
    metaAr: "عن بُعد • دوام كامل",
    descEn: "Own CI/CD, observability, and secure cloud infrastructure for our growing platform.",
    descAr: "تولّى التكامل المستمر والمراقبة والبنية السحابية الآمنة لمنصتنا.",
    tagsEn: ["DevOps", "AWS", "Security"],
    tagsAr: ["DevOps", "AWS", "أمن"],
  },
];

const BENEFITS = [
  { key: "b1", en: "Remote-first culture", ar: "ثقافة عن بُعد أولاً" },
  { key: "b2", en: "Competitive compensation & equity", ar: "تعويضات تنافسية وحصص" },
  { key: "b3", en: "Health & wellness programs", ar: "برامج صحة وعافية" },
  { key: "b4", en: "Flexible time off & holidays", ar: "إجازات مرنة وعطل" },
  { key: "b5", en: "Annual learning budget", ar: "ميزانية تعلّم سنوية" },
  { key: "b6", en: "Inclusive & diverse environment", ar: "بيئة شاملة ومتنوعة" },
  { key: "b7", en: "Latest tech & equipment", ar: "أحدث التقنيات والمعدات" },
  { key: "b8", en: "Team offsites & events", ar: "لقاءات فريق وفعاليات" },
];

const CAREERS_EMAIL = "careers@pathpulseapp.com";

function jobApplyHref(title) {
  const subject = encodeURIComponent(`Application: ${title}`);
  return `mailto:${CAREERS_EMAIL}?subject=${subject}`;
}

export default function Careers() {
  const { language, isRtl } = useOutletContext();
  const isArabic = language === "ar";

  const copy = useMemo(
    () => ({
      heroTitle: isArabic
        ? "ابنوا مستقبل التوجيه المهني"
        : "Build the future of career guidance",
      heroLead: isArabic
        ? "انضم إلى فريق شغوف بتمكين المسارات عبر التقنية. نبحث عن مفكرين وصنّاع ومبتكرين يشاركوننا مهمتنا."
        : "Join a passionate team dedicated to empowering careers through technology. We're looking for thinkers, makers, and innovators to join our mission.",
      valuesTitle: isArabic ? "قيمنا" : "Our values",
      valuesSub: isArabic ? "ما نؤمن به" : "What we believe in",
      jobsTitle: isArabic ? "الوظائف المتاحة" : "Open positions",
      jobsSub: isArabic ? "انضم إلى فريقنا المتنامي" : "Join our growing team",
      apply: isArabic ? "قدّم الآن" : "Apply now",
      benefitsTitle: isArabic ? "المزايا والحوافز" : "Benefits & perks",
      benefitsSub: isArabic ? "كيف ندعم فريقنا" : "How we support our team",
      ctaTitle: isArabic ? "لم تجد المناسب؟" : "Don't see a fit?",
      ctaLead: isArabic
        ? "نبحث دائمًا عن المواهب. تواصل معنا وأخبرنا كيف يمكنك المساهمة في مهمتنا."
        : "We're always looking for talented individuals. Get in touch with us and tell us how you can contribute to our mission.",
      ctaBtn: isArabic ? "تواصل معنا" : "Get in touch",
    }),
    [isArabic]
  );

  const ctaMailto = useMemo(() => {
    const subject = encodeURIComponent(isArabic ? "استفسار مهني" : "Careers inquiry");
    return `mailto:${CAREERS_EMAIL}?subject=${subject}`;
  }, [isArabic]);

  return (
    <main className="homeMain" aria-label={isArabic ? "الوظائف" : "Careers"}>
      <section className="careersPage">
        <div className="careersInner">
          <header className="careersHero">
            <h1 className="careersHeroTitle">{copy.heroTitle}</h1>
            <p className="careersHeroLead">{copy.heroLead}</p>
          </header>

          <h2 className="careersSectionTitle">{copy.valuesTitle}</h2>
          <p className="careersSectionSub">{copy.valuesSub}</p>
          <div className="careersValuesGrid">
            {VALUES.map((item, index) => (
              <MotionSection key={item.key} preset="up" amount={0.12} rtl={isRtl} delay={index * 0.05}>
                <article className="careersMotionCard">
                  <h3 className="careersCardTitle">{isArabic ? item.titleAr : item.titleEn}</h3>
                  <p className="careersCardBody">{isArabic ? item.bodyAr : item.bodyEn}</p>
                </article>
              </MotionSection>
            ))}
          </div>

          <h2 className="careersSectionTitle">{copy.jobsTitle}</h2>
          <p className="careersSectionSub">{copy.jobsSub}</p>
          <div className="careersJobsList">
            {JOBS.map((job, index) => {
              const title = isArabic ? job.titleAr : job.titleEn;
              const tags = (isArabic ? job.tagsAr : job.tagsEn) || [];
              const tagList = Array.isArray(tags) ? tags : [tags];
              return (
                <MotionSection key={job.key} preset="up" amount={0.08} rtl={isRtl} delay={index * 0.04}>
                  <article className="careersJobCard">
                    <div className="careersJobTop">
                      <div className="careersJobIconWrap">
                        <img className="careersJobIcon" src={jobIcon} alt="" width={48} height={48} />
                      </div>
                      <div className="careersJobMain">
                        <h3 className="careersJobTitle">{title}</h3>
                        <p className="careersJobMeta">{isArabic ? job.metaAr : job.metaEn}</p>
                        <p className="careersJobDesc">{isArabic ? job.descAr : job.descEn}</p>
                        <div className="careersJobTags">
                          {tagList.map((tag) => (
                            <span key={tag} className="careersTag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <a className="careersApplyBtn" href={jobApplyHref(title)}>
                      {copy.apply}
                    </a>
                  </article>
                </MotionSection>
              );
            })}
          </div>

          <h2 className="careersSectionTitle">{copy.benefitsTitle}</h2>
          <p className="careersSectionSub">{copy.benefitsSub}</p>
          <div className="careersBenefitsGrid">
            {BENEFITS.map((item, index) => (
              <MotionSection key={item.key} preset="up" amount={0.1} rtl={isRtl} delay={index * 0.03}>
                <article className="careersMotionCard careersBenefitCard">
                  <p className="careersCardBody">{isArabic ? item.ar : item.en}</p>
                </article>
              </MotionSection>
            ))}
          </div>

          <div className="careersCta">
            <h2 className="careersCtaTitle">{copy.ctaTitle}</h2>
            <p className="careersCtaLead">{copy.ctaLead}</p>
            <a className="careersCtaBtn" href={ctaMailto}>
              {copy.ctaBtn}
              <span className="careersCtaArrow" aria-hidden>
                {isRtl ? "←" : "→"}
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
