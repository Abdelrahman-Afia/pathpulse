import { Link } from "react-router-dom";
import "./Hero.css";
import MagicRings from "./MagicRings";

export default function Hero({ language }) {
  const isArabic = language === "ar";

  const heroTitle = isArabic ? "نصمم المستقبل" : "Designing Futures";
  const heroSubtitle = isArabic
    ? "توقف عن التخمين لمستقبلك. ابدأ العيش فيه."
    : "Stop guessing your future. Start living it.";
  const ctaText = isArabic ? "اعثر على نبضك" : "Find Your Pulse";

  return (
    <section className="heroSection" aria-label="Hero">
      <div className="heroStage">
        <div className="heroRingsFrame">
          <div className="heroMagicRingsBg" aria-hidden="true">
            <MagicRings
              color="#004E98"
              colorTwo="#2B7FE5"
              ringCount={6}
              speed={1}
              attenuation={10}
              lineThickness={2}
              baseRadius={0.48}
              radiusStep={0.14}
              scaleRate={0.18}
              opacity={0.85}
              noiseAmount={0.08}
              rotation={0}
              ringGap={1.9}
              fadeIn={0.7}
              fadeOut={0.5}
              followMouse={false}
              mouseInfluence={0.2}
              hoverScale={1.2}
              parallax={0.05}
              clickBurst={false}
            />
          </div>

          <div className="heroContent">
            <h1 className="heroTitle">{heroTitle}</h1>
            <p className="heroSubtitle">{heroSubtitle}</p>
            <Link className="heroCta" to="/pathfinder">
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
