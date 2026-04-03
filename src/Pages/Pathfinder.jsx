import { Link, useOutletContext } from "react-router-dom";
import "./home.css";
import "./Pathfinder.css";
import iconBuilding from "../Assets/Building the Future.png";
import iconHelping from "../Assets/Helping Others.png";
import iconCreating from "../Assets/Creating & Designing.png";
import iconAnalyzing from "../Assets/Analyzing Data.png";
import iconLeading from "../Assets/Leading & Managing.png";
import iconCoding from "../Assets/Coding & Tech.png";

const REALMS = [
  {
    key: "building",
    icon: iconBuilding,
    en: { title: "Building the Future", sub: "Engineering, Architecture, Innovation" },
    ar: { title: "بناء المستقبل", sub: "الهندسة، العمارة، الابتكار" },
  },
  {
    key: "helping",
    icon: iconHelping,
    en: { title: "Helping Others", sub: "Healthcare, Education, Social Work" },
    ar: { title: "مساعدة الآخرين", sub: "الرعاية الصحية، التعليم، العمل الاجتماعي" },
  },
  {
    key: "creating",
    icon: iconCreating,
    en: { title: "Creating & Designing", sub: "Art, Design, Media" },
    ar: { title: "الإبداع والتصميم", sub: "الفن، التصميم، الإعلام" },
  },
  {
    key: "analyzing",
    icon: iconAnalyzing,
    en: { title: "Analyzing Data", sub: "Science, Research, Analytics" },
    ar: { title: "تحليل البيانات", sub: "العلوم، البحث، التحليلات" },
  },
  {
    key: "leading",
    icon: iconLeading,
    en: { title: "Leading & Managing", sub: "Business, Leadership, Strategy" },
    ar: { title: "القيادة والإدارة", sub: "الأعمال، القيادة، الاستراتيجية" },
  },
  {
    key: "coding",
    icon: iconCoding,
    en: { title: "Coding & Tech", sub: "Software, AI, Cybersecurity" },
    ar: { title: "البرمجة والتقنية", sub: "البرمجيات، الذكاء الاصطناعي، الأمن السيبراني" },
  },
];

export default function Pathfinder() {
  const { language } = useOutletContext();
  const isArabic = language === "ar";

  return (
    <main className="homeMain" aria-label={isArabic ? "باث فايندر" : "Pathfinder"}>
      <section className="pathfinderPage">
        <div className="pathfinderInner">
          <p className="pathfinderEyebrow">{isArabic ? "باث فايندر" : "Pathfinder"}</p>
          <h1 className="pathfinderTitle">
            {isArabic ? "اختر عالمك" : "Choose your world"}
          </h1>
          <p className="pathfinderSubtitle">
            {isArabic
              ? "اختر المجال الذي يتناغم مع نبضك الداخلي"
              : "Select the realm that resonates with your inner pulse"}
          </p>

          <div className="pathfinderGrid">
            {REALMS.map((realm) => {
              const copy = isArabic ? realm.ar : realm.en;
              return (
                <Link
                  key={realm.key}
                  className="pathfinderCard"
                  to={`/pathfinder/questions?realm=${encodeURIComponent(realm.key)}`}
                  aria-label={copy.title}
                >
                  <div className="pathfinderCardIconWrap">
                    <img className="pathfinderCardIcon" src={realm.icon} alt="" loading="lazy" />
                  </div>
                  <h2 className="pathfinderCardTitle">{copy.title}</h2>
                  <p className="pathfinderCardSub">{copy.sub}</p>
                </Link>
              );
            })}
          </div>

          <p className="pathfinderBack">
            <Link className="pathfinderBackLink" to="/">
              {isArabic ? "العودة إلى الرئيسية" : "Back to home"}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
