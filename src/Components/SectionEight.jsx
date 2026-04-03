import { useState } from "react";
import "./SectionEight.css";
import mapImage from "../Assets/Map.png";

export default function SectionEight({ language }) {
  const isArabic = language === "ar";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  const mapAlt = isArabic
    ? "خريطة لمنطقة شيراتون بالقاهرة"
    : "Map of the Sheraton area, Cairo";

  return (
    <section className="sectionEight" aria-label={isArabic ? "اتصل بنا" : "Contact us"}>
      <div className="sectionEightInner">
        <div className="sectionEightFormCol">
          <p className="sectionEightEyebrow">{isArabic ? "تواصل" : "Connect"}</p>
          <h2 className="sectionEightTitle">{isArabic ? "تواصل معنا" : "Get in touch"}</h2>
          <p className="sectionEightSub">
            {isArabic ? "نحن هنا للإجابة عن أسئلتك" : "We're here to answer your questions"}
          </p>

          <form className="sectionEightForm" onSubmit={handleSubmit} noValidate>
            <div className="sectionEightInputGroup">
              <input
                id="section-eight-name"
                type="text"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="section-eight-name">
                {isArabic ? "الاسم" : "Name"}
                <span className="sectionEightRequired" aria-hidden="true">
                  *
                </span>
              </label>
            </div>

            <div className="sectionEightInputGroup">
              <input
                id="section-eight-email"
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="section-eight-email">
                {isArabic ? "البريد الإلكتروني" : "Email"}
                <span className="sectionEightRequired" aria-hidden="true">
                  *
                </span>
              </label>
            </div>

            <div className="sectionEightInputGroup sectionEightInputGroup--textarea">
              <textarea
                id="section-eight-message"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <label htmlFor="section-eight-message">
                {isArabic ? "الرسالة" : "Message"}
                <span className="sectionEightRequired" aria-hidden="true">
                  *
                </span>
              </label>
            </div>

            <label className="sectionEightCheckboxContainer">
              <span className="sectionEightCheckmarkBox">
                <input
                  type="checkbox"
                  className="sectionEightCustomCheckbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                />
                <span className="sectionEightCheckmark" aria-hidden="true" />
              </span>
              <span className="sectionEightCheckboxText">
                {isArabic ? "أوافق على الشروط" : "I agree to the terms"}
              </span>
            </label>

            <button type="submit" className="navbarStartFree sectionEightSubmit">
              <span className="navbarStartFreeText">{isArabic ? "إرسال" : "Send"}</span>
              <div className="arrow-wrapper" aria-hidden="true">
                <div className="arrow" />
              </div>
            </button>
          </form>
        </div>

        <div className="sectionEightMapWrap">
          <img className="sectionEightMap" src={mapImage} alt={mapAlt} loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}
