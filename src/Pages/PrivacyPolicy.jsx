import { useMemo } from "react";
import { Link, useOutletContext } from "react-router-dom";
import "./home.css";
import "./TermsOfService.css";
import privacyIcon from "../Assets/PRIVACY POLICY.png";

function PrivacyBodyEn() {
  return (
    <>
      <h2>1. Introduction</h2>
      <p>
        Welcome to PathPulse (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your
        personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our career
        guidance platform.
      </p>
      <p>
        PathPulse treats careers as living, evolving ecosystems, and we treat your data with the same care and respect. This
        policy applies to all users of PathPulse services.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>2.1 Personal Information</h3>
      <ul>
        <li>Name, email address, and contact information</li>
        <li>Date of birth and educational background</li>
        <li>Career interests, skills, and assessment responses</li>
        <li>Profile pictures and biographical information</li>
      </ul>
      <h3>2.2 Usage Data</h3>
      <ul>
        <li>Pages visited and features used within PathPulse</li>
        <li>Time spent on the platform and interaction patterns</li>
        <li>Device information, IP address, and browser type</li>
        <li>Career assessment results and progress tracking data</li>
      </ul>
      <h3>2.3 Cookies and Tracking Technologies</h3>
      <p>
        We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized
        recommendations. You can manage cookie preferences through our{" "}
        <Link className="termsLink" to="/cookie-settings">
          Cookie Settings
        </Link>{" "}
        page.
      </p>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>Provide personalized career guidance and recommendations</li>
        <li>Track your vitality scores and career progress over time</li>
        <li>Match you with suitable educational programs and universities</li>
        <li>Improve our services through data analysis and user feedback</li>
        <li>Send you relevant updates, tips, and educational content</li>
        <li>Ensure platform security and prevent fraudulent activity</li>
        <li>Comply with legal obligations and enforce our terms</li>
      </ul>

      <h2>4. Data Sharing and Disclosure</h2>
      <p>
        We do not sell your personal information. We may share your data only in the following circumstances:
      </p>
      <ul>
        <li>
          <strong>Partner universities:</strong> With your consent, we may share relevant information with educational institutions
          you&apos;re interested in.
        </li>
        <li>
          <strong>Service providers:</strong> Third-party vendors who help us operate our platform (hosting, analytics, customer
          support).
        </li>
        <li>
          <strong>Legal requirements:</strong> When required by law or to protect our rights and safety.
        </li>
        <li>
          <strong>Business transfers:</strong> In connection with mergers, acquisitions, or asset sales.
        </li>
      </ul>

      <h2>5. Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular
        security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute
        security.
      </p>

      <h2>6. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>
          <strong>Access:</strong> Request a copy of your personal data
        </li>
        <li>
          <strong>Correction:</strong> Update or correct inaccurate information
        </li>
        <li>
          <strong>Deletion:</strong> Request deletion of your account and data
        </li>
        <li>
          <strong>Portability:</strong> Receive your data in a portable format
        </li>
        <li>
          <strong>Objection:</strong> Object to certain data processing activities
        </li>
        <li>
          <strong>Withdraw consent:</strong> Withdraw previously given consent at any time
        </li>
      </ul>
      <p>
        To exercise these rights, contact us at{" "}
        <a className="termsLink" href="mailto:privacy@pathpulseapp.com" dir="ltr">
          privacy@pathpulseapp.com
        </a>
        .
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We retain your personal data only as long as necessary to provide our services and fulfill the purposes outlined in this
        policy. When you delete your account, we will remove or anonymize your data within 30 days, except where we&apos;re legally
        required to retain it longer.
      </p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        PathPulse is intended for users aged 16 and above. We do not knowingly collect personal information from children under
        16. If you believe we have collected information from a child under 16, please contact us immediately.
      </p>

      <h2>9. International Data Transfers</h2>
      <p>
        Your data may be transferred to and processed in countries other than your own. We ensure adequate protection through
        standard contractual clauses and other legal mechanisms compliant with applicable data protection laws.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this privacy policy periodically. We will notify you of significant changes via email or through a
        prominent notice on our platform. Your continued use of PathPulse after changes indicates acceptance of the updated
        policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>If you have questions or concerns about this privacy policy or our data practices:</p>
      <ul>
        <li>
          Email:{" "}
          <a className="termsLink" href="mailto:privacy@pathpulseapp.com" dir="ltr">
            privacy@pathpulseapp.com
          </a>
        </li>
        <li>Address: PathPulse HQ, Cairo, Egypt</li>
        <li>
          Data Protection Officer:{" "}
          <a className="termsLink" href="mailto:dpo@pathpulseapp.com" dir="ltr">
            dpo@pathpulseapp.com
          </a>
        </li>
      </ul>
    </>
  );
}

function PrivacyBodyAr() {
  return (
    <>
      <h2>١. مقدمة</h2>
      <p>
        مرحبًا بك في PathPulse («نحن» أو «لنا»). نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع
        معلوماتك واستخدامها وحمايتها عند استخدامك منصة التوجيه المهني.
      </p>
      <p>
        يعامل PathPulse المسارات المهنية كأنظمة بيئية حية متطورة، ونعامل بياناتك بنفس العناية والاحترام. تنطبق هذه السياسة على جميع
        مستخدمي خدمات PathPulse.
      </p>

      <h2>٢. المعلومات التي نجمعها</h2>
      <h3>٢.١ المعلومات الشخصية</h3>
      <ul>
        <li>الاسم والبريد الإلكتروني ومعلومات الاتصال</li>
        <li>تاريخ الميلاد والخلفية التعليمية</li>
        <li>اهتماماتك المهنية ومهاراتك وإجابات التقييم</li>
        <li>صور الملف الشخصي والمعلومات السيرةية</li>
      </ul>
      <h3>٢.٢ بيانات الاستخدام</h3>
      <ul>
        <li>الصفحات التي تزورها والميزات التي تستخدمها داخل PathPulse</li>
        <li>الوقت المستغرق على المنصة وأنماط التفاعل</li>
        <li>معلومات الجهاز وعنوان IP ونوع المتصفح</li>
        <li>نتائج تقييم المسار المهني وبيانات تتبع التقدم</li>
      </ul>
      <h3>٢.٣ ملفات تعريف الارتباط وتقنيات التتبع</h3>
      <p>
        نستخدم ملفات تعريف الارتباط وتقنيات مماثلة لتحسين تجربتك وتحليل أنماط الاستخدام وتقديم توصيات مخصصة. يمكنك إدارة
        التفضيلات عبر صفحة{" "}
        <Link className="termsLink" to="/cookie-settings">
          إعدادات ملفات تعريف الارتباط
        </Link>
        .
      </p>

      <h2>٣. كيف نستخدم معلوماتك</h2>
      <ul>
        <li>تقديم توجيه مهني وتوصيات مخصصة</li>
        <li>تتبع درجات الحيوية وتقدمك المهني بمرور الوقت</li>
        <li>مطابقتك مع البرامج التعليمية والجامعات المناسبة</li>
        <li>تحسين خدماتنا عبر تحليل البيانات وملاحظات المستخدمين</li>
        <li>إرسال تحديثات ونصائح ومحتوى تعليمي ذي صلة</li>
        <li>ضمان أمن المنصة ومنع الاحتيال</li>
        <li>الامتثال للالتزامات القانونية وتنفيذ شروطنا</li>
      </ul>

      <h2>٤. مشاركة البيانات والإفصاح</h2>
      <p>لا نبيع معلوماتك الشخصية. قد نشارك بياناتك فقط في الحالات التالية:</p>
      <ul>
        <li>
          <strong>الجامعات الشريكة:</strong> بموافقتك، قد نشارك معلومات ذات صلة مع مؤسسات تعليمية تهتم بها.
        </li>
        <li>
          <strong>مقدمو الخدمات:</strong> موردون من أطراف ثالثة يساعدوننا في تشغيل المنصة (استضافة، تحليلات، دعم العملاء).
        </li>
        <li>
          <strong>المتطلبات القانونية:</strong> عند الاقتضاء بموجب القانون أو لحماية حقوقنا وسلامتنا.
        </li>
        <li>
          <strong>تحويلات أعمال:</strong> في إطار عمليات اندماج أو استحواذ أو بيع أصول.
        </li>
      </ul>

      <h2>٥. أمن البيانات</h2>
      <p>
        نطبق تدابير أمنية معيارية لحماية بياناتك، بما في ذلك التشفير والخوادم الآمنة ومراجعات أمنية دورية. ومع ذلك، لا توجد طريقة
        نقل عبر الإنترنت آمنة بنسبة ١٠٠٪، ولا يمكننا ضمان أمنًا مطلقًا.
      </p>

      <h2>٦. حقوقك</h2>
      <p>لديك الحق في:</p>
      <ul>
        <li>
          <strong>الوصول:</strong> طلب نسخة من بياناتك الشخصية
        </li>
        <li>
          <strong>التصحيح:</strong> تحديث أو تصحيح المعلومات غير الدقيقة
        </li>
        <li>
          <strong>الحذف:</strong> طلب حذف حسابك وبياناتك
        </li>
        <li>
          <strong>قابلية النقل:</strong> استلام بياناتك بصيغة قابلة للنقل
        </li>
        <li>
          <strong>الاعتراض:</strong> الاعتراض على أنشطة معالجة معينة
        </li>
        <li>
          <strong>سحب الموافقة:</strong> سحب الموافقة الممنوحة سابقًا في أي وقت
        </li>
      </ul>
      <p>
        لممارسة هذه الحقوق، تواصل معنا على{" "}
        <a className="termsLink" href="mailto:privacy@pathpulseapp.com" dir="ltr">
          privacy@pathpulseapp.com
        </a>
        .
      </p>

      <h2>٧. الاحتفاظ بالبيانات</h2>
      <p>
        نحتفظ ببياناتك الشخصية فقط للمدة اللازمة لتقديم خدماتنا وتحقيق الأغراض الواردة في هذه السياسة. عند حذف حسابك، سنزيل
        بياناتك أو نجعلها مجهولة المصدر خلال ٣٠ يومًا، إلا إذا كان القانون يفرض الاحتفاظ بها لفترة أطول.
      </p>

      <h2>٨. خصوصية الأطفال</h2>
      <p>
        PathPulse مخصص للمستخدمين من عمر ١٦ عامًا فأكثر. لا نجمع عن علم معلومات شخصية من أطفال دون ١٦ عامًا. إذا اعتقدت أننا جمعنا
        معلومات من طفل دون ١٦، يُرجى التواصل معنا فورًا.
      </p>

      <h2>٩. التحويلات الدولية للبيانات</h2>
      <p>
        قد تُنقل بياناتك وتُعالج في دول غير بلدك. نضمن حماية كافية عبر بنود تعاقدية قياسية وآليات قانونية أخرى متوافقة مع قوانين
        حماية البيانات المعمول بها.
      </p>

      <h2>١٠. تغييرات هذه السياسة</h2>
      <p>
        قد نحدّث سياسة الخصوصية هذه دوريًا. سنُعلمك بالتغييرات الجوهرية عبر البريد الإلكتروني أو إشعار بارز على المنصة. استمرارك
        في استخدام PathPulse بعد التغييرات يعني قبول السياسة المحدّثة.
      </p>

      <h2>١١. اتصل بنا</h2>
      <p>إذا كانت لديك أسئلة أو مخاوف بشأن سياسة الخصوصية أو ممارسات البيانات:</p>
      <ul>
        <li>
          البريد الإلكتروني:{" "}
          <a className="termsLink" href="mailto:privacy@pathpulseapp.com" dir="ltr">
            privacy@pathpulseapp.com
          </a>
        </li>
        <li>العنوان: المقر الرئيسي لـ PathPulse، القاهرة، مصر</li>
        <li>
          مسؤول حماية البيانات:{" "}
          <a className="termsLink" href="mailto:dpo@pathpulseapp.com" dir="ltr">
            dpo@pathpulseapp.com
          </a>
        </li>
      </ul>
    </>
  );
}

export default function PrivacyPolicy() {
  const { language, isRtl } = useOutletContext();
  const isArabic = language === "ar";

  const copy = useMemo(
    () => ({
      back: isArabic ? "رجوع" : "Back",
      title: isArabic ? "سياسة الخصوصية" : "Privacy Policy",
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
            <img className="termsIcon" src={privacyIcon} alt="" width={44} height={44} />
            <h1 className="termsTitle">{copy.title}</h1>
          </div>
          <p className="termsUpdated">{copy.updated}</p>

          <div className="termsProse">{isArabic ? <PrivacyBodyAr /> : <PrivacyBodyEn />}</div>
        </div>
      </article>
    </main>
  );
}
