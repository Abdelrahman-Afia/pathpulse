import { Link } from "react-router-dom";
import "./SectionThree.css";
import card1 from "../Assets/Card1.png";
import card2 from "../Assets/Card2.png";
import card3 from "../Assets/Card3.png";
import card4 from "../Assets/Card4.png";
import card5 from "../Assets/Card5.png";

const cards = [
  {
    id: "pathfinder",
    to: "/pathfinder",
    enTag: "Discover",
    arTag: "اكتشف",
    enTitle: "Pathfinder reads your strengths",
    arTitle: "باث فايندر يقرأ نقاط قوتك",
    enDesc: "Visual cards reveal what matters most to you",
    arDesc: "بطاقات بصرية تكشف ما يهمك أكثر",
    enCta: "Start",
    arCta: "ابدأ",
    image: card1,
    large: true,
  },
  {
    id: "focuspal",
    to: "/focuspal",
    enTag: "Monitor",
    arTag: "راقب",
    enTitle: "FocusPal tracks growth",
    arTitle: "فوكاس بال يتابع التطور",
    enDesc: "Watch your vitality rise with every achievement",
    arDesc: "تابع تقدمك مع كل إنجاز",
    enCta: "Build",
    arCta: "ابنِ",
    image: card2,
  },
  {
    id: "ideafit",
    to: "/ideafit",
    enTag: "Create",
    arTag: "أنشئ",
    enTitle: "Ideafit builds portfolios",
    arTitle: "إيديا فيت يبني ملفات أعمال",
    enDesc: "Turn your skills into real work that matters",
    arDesc: "حوّل مهاراتك إلى أعمال حقيقية مؤثرة",
    enCta: "Launch",
    arCta: "انطلق",
    image: card3,
  },
  {
    id: "futureradar",
    to: "/futureradar",
    enTag: "Scan",
    arTag: "حلّل",
    enTitle: "FutureRadar",
    arTitle: "فيوتشر رادار",
    enDesc: "See what the market needs before it asks",
    arDesc: "اعرف احتياجات السوق قبل أن يطلبها",
    enCta: "Watch",
    arCta: "شاهد",
    image: card4,
  },
  {
    id: "edumatch",
    to: "/edumatch",
    enTag: "Match",
    arTag: "طابق",
    enTitle: "EduMatch finds your fit",
    arTitle: "إديو ماتش يجد الأنسب لك",
    enDesc: "Universities aligned with your goals and budget",
    arDesc: "جامعات مناسبة لأهدافك وميزانيتك",
    enCta: "Explore",
    arCta: "استكشف",
    image: card5,
  },
];

export default function SectionThree({ language }) {
  const isArabic = language === "ar";

  return (
    <section className="sectionThree" id="explore-tools" aria-label="Explore tools">
      <div className="sectionThreeIntro">
        <p className="sectionThreeEyebrow">{isArabic ? "استكشف" : "Explore"}</p>
        <h2 className="sectionThreeTitle">
          {isArabic ? "خمس أدوات، مهمة واحدة" : "Five tools, one mission"}
        </h2>
        <p className="sectionThreeSubtitle">
          {isArabic
            ? "مصممة لتدفعك للأمام بوضوح وهدف."
            : "Built to move you forward with clarity and purpose"}
        </p>
      </div>

      <div className="sectionThreeGrid">
        {cards.map((card) => {
          const title = isArabic ? card.arTitle : card.enTitle;
          return (
            <Link
              key={card.id}
              className={`toolCard ${card.large ? "toolCardLarge" : ""}`}
              to={card.to}
              aria-label={title}
            >
              <img className="toolCardImage" src={card.image} alt="" />
              <div className="toolCardOverlay" aria-hidden />

              <div className="toolCardContent">
                <p className="toolCardTag">
                  {isArabic ? card.arTag : card.enTag}
                </p>
                <h3 className="toolCardTitle">{title}</h3>
                <p className="toolCardDesc">
                  {isArabic ? card.arDesc : card.enDesc}
                </p>
                <span className="toolCardCta">
                  {isArabic ? card.arCta : card.enCta}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
