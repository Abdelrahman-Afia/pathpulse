import { Link } from "react-router-dom";
import "./SectionFour.css";
import sectionFourImage from "../Assets/Section4Pic.png";

export default function SectionFour({ language }) {
  const isArabic = language === "ar";

  return (
    <section className="sectionFour" aria-label="Section four">
      <div className="sectionFourInner">
        <div className="sectionFourContent">
          <h2 className="sectionFourTitle">
            {isArabic ? "هل أنت تائه في متاهة الخيارات؟" : "Are You Lost in the Maze of Choices?"}
          </h2>
          <p className="sectionFourText">
            {isArabic
              ? "انهيار المسارات المهنية التقليدية جعل الكثير من الطلاب يشعرون بالضياع، لكن هذا التحول يحوّل اكتشاف الذات المهني إلى رحلة تمكين بدلًا من عبء. مع التركيز على النمو الشخصي وبناء ملف الأعمال، تقل المسافة بسرعة بين حياتك الأكاديمية الحالية وأهدافك المهنية المستقبلية."
              : "The breakdown of traditional career structures has left many students feeling lost, but this shift is turning professional discovery into an empowering adventure rather than a burden. By focusing on personal growth and portfolio building, the distance between current academic life and future career goals is rapidly shrinking."}
          </p>
          <Link className="sectionFourBtn" to="/pathfinder">
            {isArabic ? "اعثر على نبضك" : "Find Your Pulse"}
          </Link>
        </div>

        <div className="sectionFourImageWrap">
          <img className="sectionFourImage" src={sectionFourImage} alt="" />
        </div>
      </div>
    </section>
  );
}

