import { useMemo } from "react";
import { Link, useOutletContext } from "react-router-dom";
import "./home.css";
import "./TermsOfService.css";
import termsIcon from "../Assets/Terms Of Service Icon.png";

function TermsBodyEn() {
  return (
    <>
      <h2>1. Acceptance of Terms</h2>
      <p>
        Welcome to PathPulse. By accessing or using our platform, you agree to be bound by these Terms of Service
        (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our services. These Terms constitute a
        legally binding agreement between you and PathPulse.
      </p>

      <h2>2. Description of Service</h2>
      <p>PathPulse is a career guidance platform that provides:</p>
      <ul>
        <li>Interactive career discovery tools (Pathfinder)</li>
        <li>Career vitality tracking and monitoring (FocusPal)</li>
        <li>Project idea generation and portfolio building (Ideafit)</li>
        <li>Real-time skill trend analysis (FutureRadar)</li>
        <li>University and program matching services (EduMatch)</li>
      </ul>
      <p>We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.</p>

      <h2>3. User Accounts</h2>
      <h3>3.1 Registration</h3>
      <p>To access certain features, you must create an account. You agree to:</p>
      <ul>
        <li>Provide accurate, current, and complete information</li>
        <li>Maintain and update your information to keep it accurate</li>
        <li>Maintain the security of your account credentials</li>
        <li>Accept responsibility for all activities under your account</li>
        <li>Notify us immediately of any unauthorized use</li>
      </ul>
      <h3>3.2 Eligibility</h3>
      <p>
        You must be at least 16 years old to use PathPulse. By creating an account, you represent and warrant that you meet
        this age requirement and have the legal capacity to enter into these Terms.
      </p>

      <h2>4. User Conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the platform for any illegal or unauthorized purpose</li>
        <li>Violate any laws, regulations, or third-party rights</li>
        <li>Transmit viruses, malware, or harmful code</li>
        <li>Attempt to gain unauthorized access to our systems</li>
        <li>Interfere with or disrupt the platform&apos;s functionality</li>
        <li>Impersonate others or misrepresent your affiliation</li>
        <li>Harvest or collect user information without consent</li>
        <li>Use automated systems (bots, scrapers) without permission</li>
        <li>Post offensive, abusive, or inappropriate content</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <h3>5.1 Our Content</h3>
      <p>
        All content on PathPulse, including text, graphics, logos, images, software, and data compilations, is our property
        or our licensors&apos; property and is protected by intellectual property laws. You may not copy, modify,
        distribute, or create derivative works without explicit permission.
      </p>
      <h3>5.2 Your Content</h3>
      <p>
        You retain ownership of content you submit to PathPulse. By submitting content, you grant us a worldwide,
        non-exclusive, royalty-free license to use, reproduce, modify, and display your content for the purpose of providing
        and improving our services.
      </p>

      <h2>6. Subscription and Payments</h2>
      <h3>6.1 Free and Paid Services</h3>
      <p>
        PathPulse offers both free and premium subscription tiers. Premium features may include advanced analytics,
        personalized coaching, and priority support.
      </p>
      <h3>6.2 Billing</h3>
      <ul>
        <li>Subscription fees are billed in advance on a recurring basis</li>
        <li>You authorize us to charge your payment method automatically</li>
        <li>Prices are subject to change with 30 days&apos; notice</li>
        <li>Refunds are provided according to our refund policy</li>
      </ul>
      <h3>6.3 Cancellation</h3>
      <p>
        You may cancel your subscription at any time. Cancellation will take effect at the end of your current billing
        period, and you will retain access until then.
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        <strong>PATHPULSE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND.</strong>
      </p>
      <ul>
        <li>We do not guarantee career outcomes or job placements</li>
        <li>Career guidance is for informational purposes only</li>
        <li>We are not responsible for decisions you make based on our recommendations</li>
        <li>We do not warrant uninterrupted, error-free, or secure service</li>
        <li>Third-party content and links are not endorsed by us</li>
      </ul>

      <h2>8. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, PATHPULSE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING FROM YOUR USE OF OUR
        SERVICES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE PAST 12 MONTHS.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless PathPulse and its officers, directors, employees, and agents from
        any claims, damages, losses, liabilities, and expenses arising from your use of our services, violation of these
        Terms, or infringement of any rights of another party.
      </p>

      <h2>10. Termination</h2>
      <p>
        We may suspend or terminate your account at any time for violations of these Terms or for any other reason. Upon
        termination, your right to use PathPulse will immediately cease. Sections that by their nature should survive
        termination will remain in effect.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by the laws of Egypt, without regard to conflict of law principles. Any disputes shall be
        resolved in the courts of Cairo, Egypt.
      </p>

      <h2>12. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. We will notify you of material changes via email or through
        the platform. Your continued use after changes constitutes acceptance of the revised Terms.
      </p>

      <h2>13. Contact Information</h2>
      <p>For questions about these Terms, please contact us:</p>
      <ul>
        <li>
          Email:{" "}
          <a className="termsLink" href="mailto:legal@pathpulseapp.com">
            legal@pathpulseapp.com
          </a>
        </li>
        <li>Address: PathPulse HQ, Cairo, Egypt</li>
      </ul>
    </>
  );
}

function TermsBodyAr() {
  return (
    <>
      <h2>١. قبول الشروط</h2>
      <p>
        مرحبًا بك في PathPulse. بمجرد دخولك إلى منصتنا أو استخدامها، فإنك توافق على الالتزام بهذه الشروط (&quot;الشروط&quot;). إذا
        لم توافق على هذه الشروط، يُرجى عدم استخدام خدماتنا. تشكل هذه الشروط اتفاقًا ملزمًا قانونًا بينك وبين PathPulse.
      </p>

      <h2>٢. وصف الخدمة</h2>
      <p>PathPulse منصة لتوجيه المسارات المهنية توفر ما يلي:</p>
      <ul>
        <li>أدوات تفاعلية لاكتشاف المسار المهني (Pathfinder)</li>
        <li>تتبع ورصد حيوية المسار المهني (FocusPal)</li>
        <li>توليد أفكار مشاريع وبناء محفظة أعمال (Ideafit)</li>
        <li>تحليل اتجاهات المهارات في الوقت الفعلي (FutureRadar)</li>
        <li>خدمات مطابقة الجامعات والبرامج (EduMatch)</li>
      </ul>
      <p>نحتفظ بالحق في تعديل أي جانب من خدماتنا أو تعليقه أو إيقافه في أي وقت.</p>

      <h2>٣. حسابات المستخدمين</h2>
      <h3>٣.١ التسجيل</h3>
      <p>للوصول إلى بعض الميزات، يجب إنشاء حساب. وتوافق على ما يلي:</p>
      <ul>
        <li>تقديم معلومات دقيقة وحديثة وكاملة</li>
        <li>الحفاظ على معلوماتك وتحديثها للإبقاء عليها دقيقة</li>
        <li>الحفاظ على أمن بيانات اعتماد حسابك</li>
        <li>تحمل المسؤولية عن جميع الأنشطة التي تتم عبر حسابك</li>
        <li>إبلاغنا فورًا بأي استخدام غير مصرح به</li>
      </ul>
      <h3>٣.٢ الأهلية</h3>
      <p>
        يجب أن يبلغ عمرك ١٦ عامًا على الأقل لاستخدام PathPulse. بإنشائك للحساب، تقر وتضمن أنك تستوفي شرط العمر هذا ولديك
        الأهلية القانونية للدخول في هذه الشروط.
      </p>

      <h2>٤. سلوك المستخدم</h2>
      <p>توافق على عدم القيام بما يلي:</p>
      <ul>
        <li>استخدام المنصة لأي غرض غير قانوني أو غير مصرح به</li>
        <li>انتهاك أي قوانين أو لوائح أو حقوق لأطراف ثالثة</li>
        <li>نقل فيروسات أو برمجيات خبيثة أو أكواد ضارة</li>
        <li>محاولة الحصول على وصول غير مصرح به إلى أنظمتنا</li>
        <li>التدخل في عمل المنصة أو تعطيلها</li>
        <li>انتحال شخصية الآخرين أو تحريف انتمائك</li>
        <li>جمع معلومات المستخدمين دون موافقتهم</li>
        <li>استخدام أنظمة آلية (روبوتات، برامج استخراج) دون إذن</li>
        <li>نشر محتوى مسيء أو مؤذٍ أو غير لائق</li>
      </ul>

      <h2>٥. الملكية الفكرية</h2>
      <h3>٥.١ محتوانا</h3>
      <p>
        جميع المحتويات على PathPulse، بما في ذلك النصوص والرسوم والشعارات والصور والبرمجيات وتجميعات البيانات، هي ملكنا أو
        ملك المرخصين لنا وتخضع لقوانين الملكية الفكرية. لا يجوز نسخها أو تعديلها أو توزيعها أو إنشاء أعمال مشتقة دون إذن صريح.
      </p>
      <h3>٥.٢ محتواك</h3>
      <p>
        تحتفظ بملكية المحتوى الذي تقدمه إلى PathPulse. بتقديمك للمحتوى، تمنحنا ترخيصًا عالميًا غير حصري دون رسوم لاستخدامه
        وإعادة إنتاجه وتعديله وعرضه لتقديم خدماتنا وتحسينها.
      </p>

      <h2>٦. الاشتراك والمدفوعات</h2>
      <h3>٦.١ الخدمات المجانية والمدفوعة</h3>
      <p>
        يقدّم PathPulse مستويات اشتراك مجانية ومدفوعة. قد تشمل ميزات الاشتراك المميز تحليلات متقدمة وتدريبًا مخصصًا ودعمًا
        ذو أولوية.
      </p>
      <h3>٦.٢ الفوترة</h3>
      <ul>
        <li>تُحتسب رسوم الاشتراك مقدمًا على أساس متكرر</li>
        <li>تفوّضنا بخصم وسيلة الدفع تلقائيًا</li>
        <li>تخضع الأسعار للتغيير مع إشعار مسبق لمدة ٣٠ يومًا</li>
        <li>تُمنح المبالغ المستردة وفق سياسة الاسترداد لدينا</li>
      </ul>
      <h3>٦.٣ الإلغاء</h3>
      <p>
        يمكنك إلغاء اشتراكك في أي وقت. يُطبّق الإلغاء في نهاية فترة الفوترة الحالية، وتظل لديك صلاحية الوصول حتى ذلك الحين.
      </p>

      <h2>٧. إخلاء المسؤولية</h2>
      <p>
        <strong>
          تُقدَّم PathPulse &quot;كما هي&quot; و&quot;حسب التوفر&quot; دون أي ضمانات من أي نوع.
        </strong>
      </p>
      <ul>
        <li>لا نضمن نتائج مهنية أو توظيفًا</li>
        <li>التوجيه المهني لأغراض معلوماتية فقط</li>
        <li>لسنا مسؤولين عن القرارات التي تتخذها بناءً على توصياتنا</li>
        <li>لا نضمن خدمة بلا انقطاع أو بلا أخطاء أو آمنة بالكامل</li>
        <li>لا نؤيد محتوى أو روابط أطراف ثالثة</li>
      </ul>

      <h2>٨. حدود المسؤولية</h2>
      <p>
        بأقصى حد يسمح به القانون، لا تتحمل PathPulse المسؤولية عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية،
        أو عن فقدان أرباح أو إيرادات أو بيانات أو استخدام ناتج عن استخدامك لخدماتنا. لا يجوز أن يتجاوز إجمالي مسؤوليتنا
        المبلغ الذي دفعته لنا خلال الـ ١٢ شهرًا الماضية.
      </p>

      <h2>٩. التعويض</h2>
      <p>
        توافق على تعويض PathPulse ومسؤوليها ومديريها وموظفيها ووكلائها والدفاع عنهم وإبراء ذمتهم من أي مطالبات أو أضرار أو
        خسائر أو التزامات أو نفقات ناشئة عن استخدامك للخدمات أو انتهاكك لهذه الشروط أو انتهاكك لحقوق أي طرف آخر.
      </p>

      <h2>١٠. الإنهاء</h2>
      <p>
        قد نعلق حسابك أو ننهيه في أي وقت بسبب انتهاك هذه الشروط أو لأي سبب آخر. عند الإنهاء، يتوقف حقك في استخدام PathPulse
        فورًا. تظل الأحكام التي يقتضي طبيعتها البقاء سارية بعد الإنهاء نافذة.
      </p>

      <h2>١١. القانون الواجب التطبيق</h2>
      <p>
        تخضع هذه الشروط لقوانين جمهورية مصر العربية دون اعتبار لتعارض القوانين. تُحلّ أي نزاعات أمام محاكم القاهرة، مصر.
      </p>

      <h2>١٢. تغييرات الشروط</h2>
      <p>
        نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سنُعلمك بالتغييرات الجوهرية عبر البريد الإلكتروني أو عبر المنصة. استمرارك
        في الاستخدام بعد التغييرات يُعد قبولًا للشروط المعدّلة.
      </p>

      <h2>١٣. معلومات الاتصال</h2>
      <p>للاستفسارات حول هذه الشروط، يُرجى التواصل معنا:</p>
      <ul>
        <li>
          البريد الإلكتروني:{" "}
          <a className="termsLink" href="mailto:legal@pathpulseapp.com" dir="ltr">
            legal@pathpulseapp.com
          </a>
        </li>
        <li>العنوان: المقر الرئيسي لـ PathPulse، القاهرة، مصر</li>
      </ul>
    </>
  );
}

export default function TermsOfService() {
  const { language, isRtl } = useOutletContext();
  const isArabic = language === "ar";

  const copy = useMemo(
    () => ({
      back: isArabic ? "رجوع" : "Back",
      title: isArabic ? "شروط الخدمة" : "Terms of Service",
      updated: isArabic ? "آخر تحديث: ١ أبريل ٢٠٢٦" : "Last updated: April 1, 2026",
    }),
    [isArabic]
  );

  return (
    <main className="homeMain" aria-label={copy.title}>
      <article className="termsPage" lang={isArabic ? "ar" : "en"}>
        <div className="termsInner">
          <Link className="termsBack" to="/">
            <span aria-hidden>{isRtl ? "→" : "←"}</span>
            {copy.back}
          </Link>

          <div className="termsHero">
            <img className="termsIcon" src={termsIcon} alt="" width={44} height={44} />
            <h1 className="termsTitle">{copy.title}</h1>
          </div>
          <p className="termsUpdated">{copy.updated}</p>

          <div className="termsProse">{isArabic ? <TermsBodyAr /> : <TermsBodyEn />}</div>
        </div>
      </article>
    </main>
  );
}
