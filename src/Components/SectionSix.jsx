import "./SectionSix.css";
import amiraHassan from "../Assets/Amira Hassan.png";
import omarKhalil from "../Assets/Omar Khalil.png";
import laylaMansour from "../Assets/Layla Mansour.png";

const testimonials = [
  {
    id: "amira",
    image: amiraHassan,
    enQuote:
      "PathPulse showed me what I was actually good at, not what I thought I should be.",
    arQuote:
      "أراني PathPulse ما كنت أجيده فعلًا، وليس ما ظننت أنني يجب أن أكون عليه.",
    name: "Amira Hassan",
    enMeta: "Engineering student, Cairo",
    arMeta: "طالبة هندسة، القاهرة",
  },
  {
    id: "omar",
    image: omarKhalil,
    enQuote:
      "The Pulse Orb made me see my growth. Every milestone felt real, felt earned.",
    arQuote:
      "جعلني نبض المدار أرى نموي. كل محطة شعرت حقيقية، ومكتسبة.",
    name: "Omar Khalil",
    enMeta: "Design student, Alexandria",
    arMeta: "طالب تصميم، الإسكندرية",
  },
  {
    id: "layla",
    image: laylaMansour,
    enQuote:
      "I stopped guessing about universities. The match score did the work for me.",
    arQuote:
      "توقفت عن التخمين بشأن الجامعات. درجة التطابق عملت العمل نيابة عني.",
    name: "Layla Mansour",
    enMeta: "Business student, Giza",
    arMeta: "طالبة أعمال، الجيزة",
  },
];

function StarRow() {
  return (
    <div className="sectionSixStars" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className="sectionSixStar">
          ★
        </span>
      ))}
    </div>
  );
}

export default function SectionSix({ language }) {
  const isArabic = language === "ar";

  return (
    <section
      className="sectionSix"
      aria-label={isArabic ? "شهادات الطلاب" : "Student testimonials"}
    >
      <div className="sectionSixInner">
        <header className="sectionSixHeader">
          <h2 className="sectionSixTitle">
            {isArabic ? "أصوات حقيقية" : "Real voices"}
          </h2>
          <p className="sectionSixSubtitle">
            {isArabic ? "طلاب وجدوا طريقهم" : "Students who found their way"}
          </p>
        </header>

        <ul className="sectionSixGrid">
          {testimonials.map((t) => (
            <li key={t.id} className="sectionSixCardWrap">
              <article className="sectionSixCard">
                <StarRow />
                <blockquote className="sectionSixQuote">
                  <p>{isArabic ? t.arQuote : t.enQuote}</p>
                </blockquote>
                <footer className="sectionSixFooter">
                  <img
                    className="sectionSixAvatar"
                    src={t.image}
                    alt=""
                    width={56}
                    height={56}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="sectionSixIdentity">
                    <cite className="sectionSixName">{t.name}</cite>
                    <span className="sectionSixMeta">
                      {isArabic ? t.arMeta : t.enMeta}
                    </span>
                  </div>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
