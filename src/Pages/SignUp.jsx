import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageMenu } from "../Components/Navbar";
import logo from "../Assets/Vector.svg";
import signupVisual from "../Assets/Signup Page.png";
import iconApple from "../Assets/apple.png";
import iconGoogle from "../Assets/google.png";
import iconFacebook from "../Assets/facebook.png";
import "../Components/SectionEight.css";
import "./home.css";
import "./SignIn.css";

export default function SignUp() {
  const [language, setLanguage] = useState("en");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchError, setMatchError] = useState(false);

  const isArabic = language === "ar";

  useEffect(() => {
    const html = document.documentElement;
    const { style: hs } = html;
    const { style: bs } = document.body;
    const prevHtml = hs.overflow;
    const prevBody = bs.overflow;
    hs.overflow = "hidden";
    bs.overflow = "hidden";
    return () => {
      hs.overflow = prevHtml;
      bs.overflow = prevBody;
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMatchError(true);
      return;
    }
    setMatchError(false);
  }

  return (
    <div className="homeRoot signInRoot" dir={isArabic ? "rtl" : "ltr"}>
      <div className="signInLeft">
        <header className="signInHeader">
          <Link className="signInLogoLink" to="/" aria-label="PathPulse home">
            <img className="signInLogo" src={logo} alt="" width={180} height={44} />
          </Link>
          <div className="signInHeaderLang">
            <LanguageMenu language={language} onLanguageChange={setLanguage} />
          </div>
        </header>

        <main className="signInMain">
          <div className="signInFormCol">
            <h1 className="signInTitle">{isArabic ? "إنشاء حساب" : "Sign up"}</h1>

            <form className="sectionEightForm signInForm" onSubmit={handleSubmit} noValidate>
              <div className="sectionEightInputGroup">
                <input
                  id="signup-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="signup-email">
                  {isArabic ? "البريد الإلكتروني" : "Email"}
                  <span className="sectionEightRequired" aria-hidden="true">
                    *
                  </span>
                </label>
              </div>

              <div className="sectionEightInputGroup">
                <input
                  id="signup-password"
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setMatchError(false);
                  }}
                  required
                  minLength={8}
                />
                <label htmlFor="signup-password">
                  {isArabic ? "كلمة المرور" : "Password"}
                  <span className="sectionEightRequired" aria-hidden="true">
                    *
                  </span>
                </label>
              </div>

              <div className="sectionEightInputGroup">
                <input
                  id="signup-confirm-password"
                  type="password"
                  name="confirmPassword"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setMatchError(false);
                  }}
                  required
                  minLength={8}
                />
                <label htmlFor="signup-confirm-password">
                  {isArabic ? "تأكيد كلمة المرور" : "Confirm password"}
                  <span className="sectionEightRequired" aria-hidden="true">
                    *
                  </span>
                </label>
              </div>

              {matchError ? (
                <p className="signUpMatchError" role="alert">
                  {isArabic ? "كلمات المرور غير متطابقة." : "Passwords do not match."}
                </p>
              ) : null}

              <button type="submit" className="navbarStartFree signInSubmitBtn">
                <span className="navbarStartFreeText">{isArabic ? "إنشاء حساب" : "Sign up"}</span>
                <div className="arrow-wrapper" aria-hidden="true">
                  <div className="arrow" />
                </div>
              </button>
            </form>

            <div className="signInDivider" role="separator">
              <span className="signInDividerLine" aria-hidden="true" />
              <span className="signInDividerText">
                {isArabic ? "أو استخدم أحد الخيارات" : "Or use one of these options"}
              </span>
              <span className="signInDividerLine" aria-hidden="true" />
            </div>

            <div className="signInSocialRow">
              <button type="button" className="signInSocialBtn" aria-label="Apple">
                <img className="signInSocialImg" src={iconApple} alt="" width={30} height={30} />
              </button>
              <button type="button" className="signInSocialBtn" aria-label="Google">
                <img className="signInSocialImg" src={iconGoogle} alt="" width={30} height={30} />
              </button>
              <button type="button" className="signInSocialBtn" aria-label="Facebook">
                <img className="signInSocialImg" src={iconFacebook} alt="" width={30} height={30} />
              </button>
            </div>

            <p className="signInSignup">
              {isArabic ? "لديك حساب بالفعل؟ " : "Have an account? "}
              <Link className="signInSignupLink" to="/sign-in">
                {isArabic ? "سجّل الدخول الآن!" : "Sign in now!"}
              </Link>
            </p>
          </div>
        </main>
      </div>

      <div className="signInVisualCol">
        <img
          className="signInVisual signUpVisual"
          src={signupVisual}
          alt=""
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
}
