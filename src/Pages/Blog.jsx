import { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import "./home.css";
import "./Blog.css";
import MotionSection from "../Components/MotionSection";
import featuredPhoto from "../Assets/blogpageimg.jpg";
import iconTrendCard from "../Assets/first, third, sixth card.png";
import iconCompassCard from "../Assets/second, fifth card.png";
import iconBulbCard from "../Assets/fourth card.png";

const CARD_ICONS = {
  trend: iconTrendCard,
  compass: iconCompassCard,
  bulb: iconBulbCard,
};

function IconUser(props) {
  return (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconCalendar(props) {
  return (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function IconClock(props) {
  return (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

const FEATURED = {
  titleEn: "The Future of Career Guidance: Why Your Career is a Living Organism",
  titleAr: "مستقبل التوجيه المهني: لماذا مسارك المهني كائن حي",
  excerptEn:
    "Traditional career advice treats you like a statistic. We believe your career is a living, breathing ecosystem that grows and evolves. Here's why that changes everything.",
  excerptAr:
    "التوجيه المهني التقليدي يعاملك كرقم إحصائي. نؤمن أن مسارك المهني منظومة حية تتنفّس، تنمو وتتطوّر. إليك لماذا يغيّر ذلك كل شيء.",
  authorEn: "Sarah Ahmed",
  authorAr: "سارة أحمد",
  dateEn: "March 8, 2026",
  dateAr: "٨ مارس ٢٠٢٦",
  readEn: "8 min read",
  readAr: "٨ دقائق قراءة",
};

const ARTICLES_INITIAL = [
  {
    key: "a1",
    icon: "trend",
    catEn: "Career Tips",
    catAr: "نصائح مهنية",
    titleEn: "5 Signs Your Career Vitality Score is Dropping (And How to Fix It)",
    titleAr: "٥ علامات على انخفاض درجة حيوية مسارك المهني (وكيف تعالجها)",
    excerptEn:
      "Learn to recognize the warning signs that your career health is declining and discover actionable steps to revitalize your professional pulse.",
    excerptAr:
      "تعرّف على مؤشرات تراجع صحة مسارك المهني وخطوات عملية لإعادة النبض إلى مسارك المهني.",
    authorEn: "Mohamed Hassan",
    authorAr: "محمد حسن",
    dateEn: "March 25, 2026",
    dateAr: "٢٥ مارس ٢٠٢٦",
    readEn: "6 min read",
    readAr: "٦ دقائق قراءة",
  },
  {
    key: "a2",
    icon: "compass",
    catEn: "Product Guides",
    catAr: "أدلة المنتج",
    titleEn: "How to Use Pathfinder: A Complete Guide to Career Discovery",
    titleAr: "كيف تستخدم Pathfinder: دليل كامل لاكتشاف مسارك المهني",
    excerptEn:
      "Navigate our interactive Pathfinder tool with this comprehensive walkthrough. Discover your true calling in just 15 minutes.",
    excerptAr:
      "جولة شاملة في أداة Pathfinder التفاعلية. اكتشف توجّهك الحقيقي في ١٥ دقيقة.",
    authorEn: "Layla Ibrahim",
    authorAr: "ليلى إبراهيم",
    dateEn: "March 22, 2026",
    dateAr: "٢٢ مارس ٢٠٢٦",
    readEn: "10 min read",
    readAr: "١٠ دقائق قراءة",
  },
  {
    key: "a3",
    icon: "trend",
    catEn: "Market Trends",
    catAr: "اتجاهات السوق",
    titleEn: "Top 10 Skills Trending in Egypt's Job Market Right Now",
    titleAr: "أعلى ١٠ مهارات رائجة في سوق العمل المصري الآن",
    excerptEn:
      "FutureRadar reveals the hottest skills employers are looking for in 2026. Is your skill set aligned with market demand?",
    excerptAr:
      "يكشف FutureRadar عن أهم المهارات التي يبحث عنها أصحاب العمل في ٢٠٢٦. هل مهاراتك متوافقة مع السوق؟",
    authorEn: "Ahmed Khaled",
    authorAr: "أحمد خالد",
    dateEn: "March 20, 2026",
    dateAr: "٢٠ مارس ٢٠٢٦",
    readEn: "5 min read",
    readAr: "٥ دقائق قراءة",
  },
  {
    key: "a4",
    icon: "bulb",
    catEn: "Career Tips",
    catAr: "نصائح مهنية",
    titleEn: "Building a Portfolio That Actually Gets You Hired",
    titleAr: "بناء أرشيف يقنع صاحب العمل فعلاً",
    excerptEn:
      "Project ideas mean nothing without execution. Learn how to use Ideafit to create portfolio projects that showcase your potential.",
    excerptAr:
      "الأفكار بلا تنفيذ لا قيمة لها. تعلّم استخدام Ideafit لبناء مشاريع أرشيف تبرز إمكاناتك.",
    authorEn: "Nour Mansour",
    authorAr: "نور منصور",
    dateEn: "March 18, 2026",
    dateAr: "١٨ مارس ٢٠٢٦",
    readEn: "7 min read",
    readAr: "٧ دقائق قراءة",
  },
  {
    key: "a5",
    icon: "compass",
    catEn: "Education",
    catAr: "التعليم",
    titleEn: "University Selection: Beyond Rankings and Tuition",
    titleAr: "اختيار الجامعة: ما بعد التصنيف والرسوم",
    excerptEn:
      "EduMatch considers factors you never thought about. Here's how to choose a university that truly fits your career pulse.",
    excerptAr:
      "يراعي EduMatch معايير قد لا تخطر ببالك. إليك كيف تختار جامعة تناسب نبض مسارك المهني.",
    authorEn: "Yasmin Fouad",
    authorAr: "ياسمين فؤاد",
    dateEn: "March 15, 2026",
    dateAr: "١٥ مارس ٢٠٢٦",
    readEn: "9 min read",
    readAr: "٩ دقائق قراءة",
  },
  {
    key: "a6",
    icon: "trend",
    catEn: "Career Insights",
    catAr: "رؤى مهنية",
    titleEn: "The Science Behind Career Vitality: Why It Matters",
    titleAr: "العلم وراء حيوية المسار المهني: لماذا يهم",
    excerptEn:
      "Dive deep into the research and methodology behind our vitality scoring system and why it's more accurate than traditional metrics.",
    excerptAr:
      "تعمّق في البحث والمنهجية وراء نظام قياس الحيوية ولماذا هو أدق من المقاييس التقليدية.",
    authorEn: "Dr. Karim Mostafa",
    authorAr: "د. كريم مصطفى",
    dateEn: "March 12, 2026",
    dateAr: "١٢ مارس ٢٠٢٦",
    readEn: "12 min read",
    readAr: "١٢ دقيقة قراءة",
  },
];

const ARTICLES_MORE = [
  {
    key: "a7",
    icon: "bulb",
    catEn: "Career Tips",
    catAr: "نصائح مهنية",
    titleEn: "Micro-Habits That Compound for Students",
    titleAr: "عادات صغيرة تتراكم للطلاب",
    excerptEn: "Weekly reflection, one outreach message, and one portfolio touch-up—small moves that add up.",
    excerptAr: "تأمل أسبوعي، رسالة تواصل واحدة، وتحسين بسيط للأرشيف—خطوات صغيرة بأثر كبير.",
    authorEn: "PathPulse Team",
    authorAr: "فريق PathPulse",
    dateEn: "March 5, 2026",
    dateAr: "٥ مارس ٢٠٢٦",
    readEn: "4 min read",
    readAr: "٤ دقائق قراءة",
  },
  {
    key: "a8",
    icon: "compass",
    catEn: "Product Guides",
    catAr: "أدلة المنتج",
    titleEn: "FocusPal: Deep Work Blocks That Stick",
    titleAr: "FocusPal: جلسات تركيز عميق تثبت",
    excerptEn: "How to stack sessions, pick durations, and review streaks without burning out.",
    excerptAr: "كيف تتراكب الجلسات وتختار المدد وتتابع السلاسل دون إرهاق.",
    authorEn: "Sarah Ahmed",
    authorAr: "سارة أحمد",
    dateEn: "Feb 28, 2026",
    dateAr: "٢٨ فبراير ٢٠٢٦",
    readEn: "5 min read",
    readAr: "٥ دقائق قراءة",
  },
  {
    key: "a9",
    icon: "trend",
    catEn: "Market Trends",
    catAr: "اتجاهات السوق",
    titleEn: "Internship Windows: When to Apply in Egypt",
    titleAr: "نوافذ التدريب: متى تتقدم في مصر",
    excerptEn: "Seasonal patterns from FutureRadar so you never miss a posting wave.",
    excerptAr: "أنماط موسمية من FutureRadar حتى لا تفوّت موجة التقديم.",
    authorEn: "Ahmed Khaled",
    authorAr: "أحمد خالد",
    dateEn: "Feb 20, 2026",
    dateAr: "٢٠ فبراير ٢٠٢٦",
    readEn: "6 min read",
    readAr: "٦ دقائق قراءة",
  },
];

export default function Blog() {
  const { language, isRtl } = useOutletContext();
  const isArabic = language === "ar";
  const [moreLoaded, setMoreLoaded] = useState(false);

  const visibleArticles = moreLoaded ? [...ARTICLES_INITIAL, ...ARTICLES_MORE] : ARTICLES_INITIAL;

  const copy = useMemo(
    () => ({
      heroTitle: isArabic ? "مدونة النبض" : "The Pulse blog",
      heroSub: isArabic
        ? "رؤى مهنية، تحديثات المنتج، وقصص نجاح من مجتمع PathPulse."
        : "Career insights, product updates, and success stories from the PathPulse community.",
      featured: isArabic ? "مقال مميز" : "Featured post",
      readMore: isArabic ? "اقرأ المزيد" : "Read more",
      latest: isArabic ? "أحدث المقالات" : "Latest articles",
      read: isArabic ? "اقرأ" : "Read",
      loadMore: isArabic ? "تحميل المزيد" : "Load more articles",
      loadEnd: isArabic ? "هذا كل شيء للآن" : "You're all caught up",
      newsletterTitle: isArabic ? "لا يفوتك جديد" : "Never miss a beat",
      newsletterLead: isArabic
        ? "اشترك لتصلك أهم المقالات والتحديثات إلى بريدك."
        : "Get our best articles and product updates in your inbox.",
      placeholder: isArabic ? "بريدك الإلكتروني" : "Your email",
      subscribe: isArabic ? "اشترك" : "Subscribe",
    }),
    [isArabic]
  );

  function handleNewsletter(e) {
    e.preventDefault();
  }

  function handleLoadMore() {
    if (moreLoaded) return;
    setMoreLoaded(true);
  }

  return (
    <main className="homeMain" aria-label={isArabic ? "المدونة" : "Blog"}>
      <section className="blogPage">
        <div className="blogInner">
          <header className="blogHero">
            <h1 className="blogHeroTitle">{copy.heroTitle}</h1>
            <p className="blogHeroSub">{copy.heroSub}</p>
          </header>

          <article className="blogFeatured" id="featured">
            <div className="blogFeaturedText">
              <p className="blogFeaturedKicker">{copy.featured}</p>
              <h2 className="blogFeaturedTitle">{isArabic ? FEATURED.titleAr : FEATURED.titleEn}</h2>
              <p className="blogFeaturedExcerpt">{isArabic ? FEATURED.excerptAr : FEATURED.excerptEn}</p>
              <div className="blogMetaRow">
                <span className="blogMetaItem">
                  <IconUser className="blogMetaIcon" />
                  {isArabic ? FEATURED.authorAr : FEATURED.authorEn}
                </span>
                <span className="blogMetaItem">
                  <IconCalendar className="blogMetaIcon" />
                  {isArabic ? FEATURED.dateAr : FEATURED.dateEn}
                </span>
                <span className="blogMetaItem">
                  <IconClock className="blogMetaIcon" />
                  {isArabic ? FEATURED.readAr : FEATURED.readEn}
                </span>
              </div>
              <a className="blogReadLink" href="#featured">
                {copy.readMore}
                <span aria-hidden>{isRtl ? "←" : "→"}</span>
              </a>
            </div>
            <div className="blogFeaturedImgWrap">
              <img className="blogFeaturedImg" src={featuredPhoto} alt="" loading="lazy" />
            </div>
          </article>

          <h2 className="blogSectionTitle">{copy.latest}</h2>
          <div className="blogGrid">
            {visibleArticles.map((post, index) => {
              const iconSrc = CARD_ICONS[post.icon] ?? iconTrendCard;
              return (
                <MotionSection key={post.key} preset="up" amount={0.1} rtl={isRtl} delay={Math.min(index, 8) * 0.04}>
                  <article className="blogCard">
                    <div className="blogCardIconWrap">
                      <img className="blogCardIconImg" src={iconSrc} alt="" width={56} height={56} />
                    </div>
                    <p className="blogCardCat">{isArabic ? post.catAr : post.catEn}</p>
                    <h3 className="blogCardTitle">{isArabic ? post.titleAr : post.titleEn}</h3>
                    <p className="blogCardExcerpt">{isArabic ? post.excerptAr : post.excerptEn}</p>
                    <div className="blogCardFooter">
                      <div className="blogCardMetaCol">
                        <div className="blogCardMetaLine">
                          <span className="blogCardMetaChunk">
                            <IconUser className="blogCardFooterIcon" />
                            {isArabic ? post.authorAr : post.authorEn}
                          </span>
                          <span className="blogCardMetaSep" aria-hidden>
                            |
                          </span>
                          <span className="blogCardMetaChunk">
                            <IconClock className="blogCardFooterIcon" />
                            {isArabic ? post.readAr : post.readEn}
                          </span>
                        </div>
                        <div className="blogCardDateRow">
                          <IconCalendar className="blogCardFooterIcon" />
                          {isArabic ? post.dateAr : post.dateEn}
                        </div>
                      </div>
                      <a className="blogCardRead" href={`#${post.key}`}>
                        {copy.read}
                        <span aria-hidden>{isRtl ? "←" : "→"}</span>
                      </a>
                    </div>
                  </article>
                </MotionSection>
              );
            })}
          </div>

          <div className="blogLoadMoreWrap">
            <button type="button" className="blogLoadMore" onClick={handleLoadMore} disabled={moreLoaded}>
              {moreLoaded ? copy.loadEnd : copy.loadMore}
            </button>
          </div>

          <div className="blogNewsletter">
            <h2 className="blogNewsletterTitle">{copy.newsletterTitle}</h2>
            <p className="blogNewsletterLead">{copy.newsletterLead}</p>
            <form className="blogNewsletterForm" onSubmit={handleNewsletter} noValidate>
              <input className="blogNewsletterInput" type="email" name="email" autoComplete="email" placeholder={copy.placeholder} aria-label={copy.placeholder} />
              <button type="submit" className="blogNewsletterBtn">
                {copy.subscribe}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
