// البيانات باللغتين
const translations = {
  ar: {
    logo: "AI Hub Egypt",
    nav_home: "الرئيسية",
    nav_favorites: "المفضلة",
    nav_login: "تسجيل الدخول",
    lang_btn: "🇬🇧 English",
    hero_title: "منصة الذكاء الاصطناعي الأولى في مصر",
    hero_desc: "اكتشف أفضل أدوات الذكاء الاصطناعي في مكان واحد — كتابة، تصميم، فيديو، برمجة، دراسة، وسير ذاتية",
    search_placeholder: "🔍 ابحث عن أداة ...",
    explore: "استكشف",
    writing: "أدوات الكتابة",
    writing_desc: "كتابة، صياغة، ترجمة، تلخيص",
    design: "تصميم الصور",
    design_desc: "إنشاء وتعديل الصور بذكاء",
    video: "صناعة الفيديو",
    video_desc: "إنتاج وتحرير فيديوهات",
    code: "أدوات البرمجة",
    code_desc: "مساعدة في الأكواد والتطوير",
    study: "أدوات الدراسة",
    study_desc: "ملخصات وشروحات ذكية",
    cv: "السيرة الذاتية",
    cv_desc: "بناء CV احترافي بسهولة",
    footer: "جميع الحقوق محفوظة"
  },
  en: {
    logo: "AI Hub Egypt",
    nav_home: "Home",
    nav_favorites: "Favorites",
    nav_login: "Login",
    lang_btn: "🇸🇦 العربية",
    hero_title: "Egypt's First AI Platform",
    hero_desc: "Discover the best AI tools in one place — Writing, Design, Video, Coding, Study, and CV Building",
    search_placeholder: "🔍 Search for a tool...",
    explore: "Explore",
    writing: "Writing Tools",
    writing_desc: "Writing, editing, translation, summarization",
    design: "Image Design",
    design_desc: "Create and edit images with AI",
    video: "Video Creation",
    video_desc: "Produce and edit videos",
    code: "Coding Tools",
    code_desc: "Code assistance and development",
    study: "Study Tools",
    study_desc: "Summaries and smart explanations",
    cv: "CV Builder",
    cv_desc: "Build a professional CV easily",
    footer: "All Rights Reserved"
  }
};

// تغيير اللغة
function changeLanguage(lang) {
  const t = translations[lang];
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (t[key]) el.textContent = t[key];
  });
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("lang", lang);
}

// تحميل اللغة المخزنة
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "ar";
  changeLanguage(savedLang);
});