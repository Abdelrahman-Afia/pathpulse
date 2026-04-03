import { Link } from "react-router-dom";
import "./SectionSeven.css";
import sectionSevenPic from "../Assets/sectionsevenpic.jpg";

export default function SectionSeven({ language }) {
  const isArabic = language === "ar";

  return (
    <section className="sectionSeven" aria-label={isArabic ? "ابدأ الآن" : "Get started"}>
      <div className="sectionSevenInner">
        <div className="sectionSevenContent">
          <h2 className="sectionSevenTitle">
            {isArabic ? "مسارك يبدأ الآن" : "Your path starts now"}
          </h2>
          <p className="sectionSevenText">
            {isArabic
              ? "توقف عن التخمين. ابدأ الاكتشاف. النبض بانتظارك."
              : "Stop guessing. Start discovering. The pulse is waiting."}
          </p>
          <div className="sectionSevenActions">
            <Link className="navbarStartFree" to="/pathfinder">
              <span className="navbarStartFreeText">
                {isArabic ? "ابدأ" : "Begin"}
              </span>
              <div className="arrow-wrapper" aria-hidden="true">
                <div className="arrow" />
              </div>
            </Link>
            <a className="navbarSignIn" href="#explore-tools">
              {isArabic ? "استكشف الميزات" : "Explore features"}
            </a>
          </div>
        </div>

        <div className="sectionSevenImageWrap">
          <img
            className="sectionSevenImage"
            src={sectionSevenPic}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
