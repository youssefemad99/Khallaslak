/**
 * KHALLASLAK (خلّصلك) — Home Page & Services Logic (Phase 2)
 * All sections from Section 03 of Product & Design Brief:
 * 1. Header (Seal + Name + Language toggle + Share experience)
 * 2. Hero (Headline + Supporting line + Large search + Quick chips)
 * 3. Categories (Identity · Travel · Vehicles · Family & civil · Work · Tax)
 * 4. Popular procedures (Name, Cost range, Duration, Status, Last-verified)
 * 5. How it works (Three steps)
 * 6. Why trust us (Independence, Sourcing, Real-world feedback)
 * 7. Footer (Section 06 Legal disclaimer & links)
 *
 * Mandatory Honesty Rule:
 * All fees, durations, offices, and documents are strictly flagged needsVerification: true
 * and show "قيد المراجعة" (Under review). Zero invented numbers or figures.
 */

// 6 Categories (Section 03, Item 3)
const categoriesData = [
  {
    id: "identity",
    icon: "🪪",
    titleAr: "الهوية والأحوال الشخصية",
    titleEn: "Identity Documents",
    descAr: "بطاقات الرقم القومي، شهادات الميلاد، وإثبات الشخصية",
    descEn: "National ID cards, birth records, and identity documents"
  },
  {
    id: "travel",
    icon: "🛂",
    titleAr: "السفر والجوازات",
    titleEn: "Travel & Passports",
    descAr: "استخراج وتجديد جوازات السفر وتصاريح السفر الرسمية",
    descEn: "Passport issuance, renewals, and official travel permits"
  },
  {
    id: "vehicles",
    icon: "🚗",
    titleAr: "المرور والمركبات",
    titleEn: "Vehicles & Traffic",
    descAr: "رخص القيادة الخاصة والمهنية ورخص تسيير السيارات",
    descEn: "Driving licences, vehicle registration, and traffic tests"
  },
  {
    id: "family",
    icon: "💍",
    titleAr: "الأسرة والأحوال المدنية",
    titleEn: "Family & Civil Status",
    descAr: "وثائق وقيد الزواج والطلاق وسجلات الأحوال المدنية",
    descEn: "Marriage certificates, divorce records, and civil registry"
  },
  {
    id: "work",
    icon: "⚖️",
    titleAr: "العمل والتوظيف",
    titleEn: "Work & Employment",
    descAr: "صحيفة الحالة الجنائية (الفيش) وشهادات التجنيد ومسوغات التعيين",
    descEn: "Criminal records, military service certificates, work papers"
  },
  {
    id: "tax",
    icon: "✒️",
    titleAr: "التوثيق والضرائب",
    titleEn: "Notary & Tax",
    descAr: "توكيلات الشهر العقاري، العقود الرسمية، والإقرارات",
    descEn: "Powers of attorney, notary contracts, and official filings"
  }
];

// Starter Set — 10 Procedures (Section 08 Starter set)
const servicesData = [
  {
    id: "national-id-lost",
    category: "identity",
    icon: "🪪",
    titleAr: "بطاقة الرقم القومي — بدل فاقد",
    titleEn: "National ID — replacement (lost)",
    descAr: "إجراءات استخراج بدل فاقد لبطاقة الرقم القومي في حالة الضياع أو السرقة.",
    descEn: "Procedures to replace a lost or stolen Egyptian National ID card.",
    keywordsAr: ["بطاقة", "بدل فاقد", "رقم قومي", "ضياع", "سرقة", "سجل مدني", "بطاقه"],
    keywordsEn: ["national id", "lost id", "replacement", "civil registry"],
    needsVerification: true
  },
  {
    id: "national-id-renew",
    category: "identity",
    icon: "🪪",
    titleAr: "بطاقة الرقم القومي — تجديد",
    titleEn: "National ID — renewal",
    descAr: "تجديد بطاقة الرقم القومي المنتهية أو تحديث البيانات الشخصية والمهنية.",
    descEn: "Renewal of expired National ID card or updating personal and job status.",
    keywordsAr: ["تجديد بطاقة", "رقم قومي", "منتهية", "تحديث بيانات", "سجل مدني"],
    keywordsEn: ["national id renewal", "id card", "expire", "update"],
    needsVerification: true
  },
  {
    id: "passport-issue-renew",
    category: "travel",
    icon: "🛂",
    titleAr: "جواز السفر — إصدار أو تجديد",
    titleEn: "Passport — issue / renew",
    descAr: "استخراج جواز سفر مميكن لأول مرة أو تجديد الجواز المنتهي وتصوير الاستمارة.",
    descEn: "Issuing a first-time automated passport or renewing an expired one.",
    keywordsAr: ["جواز سفر", "جواز", "سفر", "هجرة", "باسبور", "تصريح"],
    keywordsEn: ["passport", "travel", "immigration", "renew passport"],
    needsVerification: true
  },
  {
    id: "driving-licence-renew",
    category: "vehicles",
    icon: "🚗",
    titleAr: "رخصة القيادة — تجديد",
    titleEn: "Driving licence — renew",
    descAr: "تجديد رخصة القيادة الخاصة والفحص الطبي واختبارات الكومبيوتر بالمرور.",
    descEn: "Renewal of private driving licence, medical checkup, and traffic tests.",
    keywordsAr: ["رخصة قيادة", "مرور", "سواقة", "تجديد رخصة", "فحص طبي", "رخصه"],
    keywordsEn: ["driving licence", "driver license", "traffic", "driving renewal"],
    needsVerification: true
  },
  {
    id: "vehicle-licence-renew",
    category: "vehicles",
    icon: "🚘",
    titleAr: "رخصة المركبة — تجديد",
    titleEn: "Vehicle licence — renew",
    descAr: "تجديد رخصة تسيير السيارات، الفحص الفني، براءة الذمة (المخالفات)، والضرائب.",
    descEn: "Vehicle registration renewal, technical inspection, and traffic fines.",
    keywordsAr: ["رخصة سيارة", "مركبة", "فحص فني", "تجديد رخصة", "مخالفات", "مرور"],
    keywordsEn: ["vehicle licence", "car registration", "inspection", "traffic"],
    needsVerification: true
  },
  {
    id: "birth-certificate",
    category: "identity",
    icon: "📜",
    titleAr: "شهادة الميلاد المميكنة",
    titleEn: "Birth certificate",
    descAr: "استخراج شهادة ميلاد مميكنة لأول مرة أو استخراج صور قيود ميلاد لاحقة.",
    descEn: "Automated birth certificate issuance and subsequent certified copies.",
    keywordsAr: ["شهادة ميلاد", "ميلاد", "سجل مدني", "كمبيوتر", "شهاده"],
    keywordsEn: ["birth certificate", "civil registry", "birth"],
    needsVerification: true
  },
  {
    id: "criminal-record",
    category: "work",
    icon: "⚖️",
    titleAr: "صحيفة الحالة الجنائية (الفيش)",
    titleEn: "Criminal record certificate",
    descAr: "استخراج صحيفة الحالة الجنائية المميكنة للوظائف والمعاملات الرسمية وتأشيرات السفر.",
    descEn: "Criminal background record (Feesh) for employment and official applications.",
    keywordsAr: ["فيش وتشبيه", "صحيفة جنائية", "فيش", "ادلة جنائية", "حالة جنائية"],
    keywordsEn: ["criminal record", "police clearance", "background check", "feesh"],
    needsVerification: true
  },
  {
    id: "power-of-attorney",
    category: "tax",
    icon: "✒️",
    titleAr: "التوكيلات بالشهر العقاري",
    titleEn: "Power of attorney",
    descAr: "توثيق التوكيل الرسمي العام والخاص بالشهر العقاري وتصديق المحررات.",
    descEn: "Notarisation of general or specific powers of attorney at notary offices.",
    keywordsAr: ["توكيل", "توكيلات", "شهر عقاري", "توثيق", "محامي", "عقد"],
    keywordsEn: ["power of attorney", "notary", "tawkeel", "notarisation"],
    needsVerification: true
  },
  {
    id: "marriage-certificate",
    category: "family",
    icon: "💍",
    titleAr: "قسيمة الزواج المميكنة",
    titleEn: "Marriage certificate",
    descAr: "استخراج صورة قيد زواج مميكنة وإثبات واقعات الأحوال المدنية.",
    descEn: "Official automated copy of marriage certificate from civil status.",
    keywordsAr: ["قسيمة زواج", "عقد زواج", "زواج", "أحوال مدنية", "قسيمه"],
    keywordsEn: ["marriage certificate", "marriage contract", "civil registry"],
    needsVerification: true
  },
  {
    id: "military-status",
    category: "work",
    icon: "🎖️",
    titleAr: "موقف التجنيد والمعاملة العسكرية",
    titleEn: "Military service status",
    descAr: "شهادة إنهاء الخدمة العسكرية أو الإعفاء النهائي والمؤقت وتصاريح السفر للتجنيد.",
    descEn: "Military service certificate, exemptions, and travel permits.",
    keywordsAr: ["تجنيد", "شهادة تجنيد", "إعفاء", "خدمة عسكرية", "تصريح سفر"],
    keywordsEn: ["military service", "conscription", "exemption", "travel permit"],
    needsVerification: true
  }
];

// Complete I18N Translations
const translations = {
  ar: {
    // Header
    brandTitle: "خلّصلك",
    brandKicker: "دليل المعاملات الحكومية",
    shareExpBtn: "شارك تجربتك",
    langToggleBtn: "English",
    langToggleAria: "التبديل إلى اللغة الإنجليزية",

    // Hero
    heroHeadline: "الورق الحكومي.. من غير لَفّة",
    heroSupporting: "دليل إرشادي مستقل يوضح لك الأوراق المطلوبة، الخطوات، وأبرز الأخطاء الشائعة قبل أن تغادر بيتك.",
    searchPlaceholder: "ابحث عن معاملة (مثال: بطاقة الرقم القومي، جواز السفر، رخصة...)",
    chipsLabel: "الأكثر بحثاً:",
    chipId: "بطاقة الرقم القومي",
    chipPassport: "جواز السفر",
    chipDriving: "رخصة القيادة",
    chipBirth: "شهادة الميلاد",

    // Categories Section (Section 03, Item 3)
    categoriesKicker: "تصنيفات المعاملات",
    categoriesHeading: "تصفح حسب قطاع المعاملة",
    allCategoriesBtn: "عرض كل التصنيفات",

    // Popular Procedures Section (Section 03, Item 4)
    proceduresKicker: "المعاملات الأكثر طلباً",
    proceduresHeading: "قائمة الإجراءات المتاحة",
    underReviewTag: "قيد المراجعة",
    metaCostLabel: "الرسوم:",
    metaDurationLabel: "المدة:",
    metaVerifiedLabel: "آخر مراجعة:",
    metaUnderReviewVal: "قيد المراجعة",
    cardCta: "عرض تفاصيل المعاملة ←",
    emptyTitle: "لم نعثر على معاملات مطابقة",
    emptyText: "جرّب البحث بكلمة مختلفة أو اختر تصنيفاً آخر من القائمة أعلاه.",
    emptyResetBtn: "عرض كل المعاملات",

    // How It Works (Section 03, Item 5)
    howKicker: "كيف يعمل خلّصلك؟",
    howHeading: "ثلاث خطوات فقط.. قبل أن تخرج",
    step1Title: "1. ابحث عن المعاملة",
    step1Desc: "اختر الإجراء واعرف المتطلبات والمستندات الرسمية قبل التوجه إلى المصلحة.",
    step2Title: "2. راجع أوراقك",
    step2Desc: "تأكد من تجهيز كل أصل وصورة بدقة وتجنب الرجوع بسبب ورقة ناقصة.",
    step3Title: "3. اذهب مرة واحدة",
    step3Desc: "وفر وقتك ومجهودك وأنجز مشوارك بثقة وهدوء من أول زيارة.",

    // Why Trust Us (Section 03, Item 6)
    trustKicker: "لماذا تثق بنا؟",
    trustHeading: "دليل مستقل.. الصدق والأمانة أولاً",
    trust1Title: "دليل مستقل تماماً",
    trust1Desc: "لسنا جهة حكومية ولا نمثل أي جهة رسمية؛ موقعنا مبني لمساعدة المواطنين على اجتياز الإجراءات بسهولة.",
    trust2Title: "لا نخمّن أي معلومة",
    trust2Desc: "لا نذكر رسماً أو مستنداً إلا بمصدر وتاريخ مراجعة واضح. المعاملات غير المؤكدة تظهر بوضوح أنها قيد المراجعة.",
    trust3Title: "تجارب وتصحيحات حقيقية",
    trust3Desc: "نعتمد على تحديثات مستمرة وملاحظات المواطنين لتنبيهك إلى أي تغييرات أو أخطاء شائعة في المكاتب.",

    // Modal
    modalStatusTag: "قيد المراجعة والتدقيق",
    modalNoticeTitle: "تنبيه الأمانة والدقة:",
    modalNoticeBody: "حرصاً على ألا يضيع وقتك أو مالك بسبب معلومة غير دقيقة، يقوم المشرفون حالياً بالتحقق من قائمة المستندات الرسمية، الرسوم المقررة، وأماكن التقديم الخاصة بهذه المعاملة قبل نشرها.",
    modalFeeLabel: "الرسوم المقررة",
    modalFeeVal: "قيد المراجعة (لا توجد أرقام تقديرية)",
    modalDurationLabel: "المدة المتوقعة",
    modalDurationVal: "قيد التدقيق والتحديث",
    modalDocsLabel: "المستندات المطلوبة",
    modalDocsVal: "جاري اعتماد القائمة الرسمية وتدقيق المتطلبات",
    modalWhereLabel: "مكان التقديم",
    modalWhereVal: "جاري حصر وتحديث المكاتب المعتمدة",
    modalMistakesTitle: "صندوق الأخطاء الشائعة:",
    modalMistakesBody: "قيد الرصد والتوثيق من واقع تجارب المواطنين (مثل عدد الصور، توقيتات العمل، وشهادات إثبات القيد).",
    modalCloseBtn: "إغلاق الورقة",

    // Footer
    disclaimerTitle: "تنويه قانوني واستقلالية تامة",
    disclaimerText: "معلومات استرشادية من مصادر منشورة وتجارب مستخدمين. نحن لسنا جهة حكومية، والجهة الرسمية هي المرجع النهائي. تأكد من المتطلبات والرسوم قبل الذهاب.",
    navDisclaimer: "إخلاء المسؤولية",
    navAbout: "عن خلّصلك",
    navReport: "أبلغ عن تصحيح",
    navContact: "تواصل معنا",
    copyrightText: "© 2026 خلّصلك · دليل إرشادي مستقل للمستندات والمعاملات الرسمية. جميع الحقوق محفوظة."
  },
  en: {
    // Header
    brandTitle: "Khallaslak",
    brandKicker: "Egyptian Paperwork Guide",
    shareExpBtn: "Share experience",
    langToggleBtn: "العربية",
    langToggleAria: "Switch to Arabic language",

    // Hero
    heroHeadline: "Egyptian paperwork, explained once, correctly.",
    heroSupporting: "An independent guide covering required papers, steps, and real pitfalls — before you leave home.",
    searchPlaceholder: "Search for a procedure (e.g. National ID, passport, licence...)",
    chipsLabel: "Popular:",
    chipId: "National ID",
    chipPassport: "Passport",
    chipDriving: "Driving Licence",
    chipBirth: "Birth Certificate",

    // Categories Section
    categoriesKicker: "Procedure Categories",
    categoriesHeading: "Browse by sector",
    allCategoriesBtn: "Show all categories",

    // Popular Procedures Section
    proceduresKicker: "Curated Procedures",
    proceduresHeading: "Available procedures",
    underReviewTag: "Under review",
    metaCostLabel: "Fee:",
    metaDurationLabel: "Time:",
    metaVerifiedLabel: "Checked:",
    metaUnderReviewVal: "Under review",
    cardCta: "View procedure details →",
    emptyTitle: "No matching procedures found",
    emptyText: "Try searching with different terms or select another category above.",
    emptyResetBtn: "Show all procedures",

    // How It Works
    howKicker: "How It Works",
    howHeading: "Three simple steps before you head out",
    step1Title: "1. Search procedure",
    step1Desc: "Find required documents and exact steps before heading to the office.",
    step2Title: "2. Check your papers",
    step2Desc: "Ensure every original and photocopy is ready so you are never sent back.",
    step3Title: "3. Go once",
    step3Desc: "Save your time, money, and hassle by finishing on your first visit.",

    // Why Trust Us
    trustKicker: "Why Trust Us",
    trustHeading: "Independent guide — accuracy over volume",
    trust1Title: "Completely Independent",
    trust1Desc: "We are not a government portal or official body; we are a community guide to make bureaucracy manageable.",
    trust2Title: "Zero Guesswork",
    trust2Desc: "We never invent fees or documents. Every procedure is sourced and dated; unverified items state 'Under review'.",
    trust3Title: "Real-world Updates",
    trust3Desc: "Continuously updated with user experiences and corrections to highlight practical pitfalls and office hours.",

    // Modal
    modalStatusTag: "Under Review & Verification",
    modalNoticeTitle: "Accuracy Guarantee Notice:",
    modalNoticeBody: "To ensure you never waste time or money from incorrect information, our editors are currently verifying the official fees, exact required documents, and office locations before publication.",
    modalFeeLabel: "Official Fees",
    modalFeeVal: "Under review (no guessed figures)",
    modalDurationLabel: "Estimated Time",
    modalDurationVal: "Under verification",
    modalDocsLabel: "Required Documents",
    modalDocsVal: "Pending official verification",
    modalWhereLabel: "Where to Go",
    modalWhereVal: "Locating designated offices",
    modalMistakesTitle: "Common Pitfalls Box:",
    modalMistakesBody: "Currently being compiled from real citizen experiences (extra photocopies, office hours, and specific stamps).",
    modalCloseBtn: "Close sheet",

    // Footer
    disclaimerTitle: "Legal Disclaimer & Independent Status",
    disclaimerText: "Guidance based on published sources and user experiences. We are not a government body — the official authority is the final reference. Please confirm requirements and fees before you go.",
    navDisclaimer: "Disclaimer",
    navAbout: "About Khallaslak",
    navReport: "Report a correction",
    navContact: "Contact",
    copyrightText: "© 2026 Khallaslak · An independent guide for paperwork procedures. All rights reserved."
  }
};

let currentLang = 'ar';
let selectedCategory = null; // null means 'all'

/**
 * Arabic normalization
 */
function normalizeArabic(text) {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, '') // Tashkeel
    .replace(/[أإآء]/g, 'ا')              // Alef variants
    .replace(/ة/g, 'ه')                    // Teh marbuta
    .replace(/ى/g, 'ي')                    // Alef maksura
    .trim();
}

/**
 * Render Categories Grid (Section 03, Item 3)
 */
function renderCategoriesGrid() {
  const container = document.getElementById('categories-grid');
  if (!container) return;

  const isAr = currentLang === 'ar';
  container.innerHTML = '';

  categoriesData.forEach(cat => {
    const card = document.createElement('div');
    const isSelected = selectedCategory === cat.id;
    card.className = `sheet sheet-interactive category-card ${isSelected ? 'is-selected' : ''} reveal show`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    card.dataset.categoryId = cat.id;

    const title = isAr ? cat.titleAr : cat.titleEn;
    const desc = isAr ? cat.descAr : cat.descEn;

    card.innerHTML = `
      <div class="category-icon-wrap" aria-hidden="true">${cat.icon}</div>
      <div class="category-info">
        <h3 class="category-title">${title}</h3>
        <p class="category-desc">${desc}</p>
      </div>
    `;

    card.addEventListener('click', () => {
      toggleCategoryFilter(cat.id);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCategoryFilter(cat.id);
      }
    });

    container.appendChild(card);
  });
}

function toggleCategoryFilter(catId) {
  if (selectedCategory === catId) {
    selectedCategory = null;
  } else {
    selectedCategory = catId;
  }
  renderCategoriesGrid();
  renderServiceCards();

  // Scroll smoothly to procedures
  const procSection = document.getElementById('procedures-section');
  if (procSection) {
    procSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Render Procedures Cards (Section 03, Item 4)
 */
function renderServiceCards() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  const searchInput = document.getElementById('search-input');
  const query = searchInput ? searchInput.value.trim() : '';
  const normQuery = normalizeArabic(query);

  const isAr = currentLang === 'ar';
  const t = translations[currentLang];

  let visibleCount = 0;
  grid.innerHTML = '';

  servicesData.forEach((service) => {
    // Category filter check
    if (selectedCategory && service.category !== selectedCategory) {
      return;
    }

    // Search query check
    const title = isAr ? service.titleAr : service.titleEn;
    const desc = isAr ? service.descAr : service.descEn;
    const keywords = isAr ? service.keywordsAr.join(' ') : service.keywordsEn.join(' ');

    const normTarget = normalizeArabic(`${service.titleAr} ${service.titleEn} ${service.descAr} ${service.descEn} ${keywords}`);
    const matches = !normQuery || normTarget.includes(normQuery);

    if (matches) {
      visibleCount++;
      const card = document.createElement('article');
      card.className = 'sheet sheet-interactive service-card reveal show';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', title);
      card.dataset.serviceId = service.id;

      card.innerHTML = `
        <div class="card-top">
          <div class="card-icon-badge-row">
            <div class="service-icon-box" aria-hidden="true">${service.icon}</div>
            <span class="status-under-review">⏳ ${t.underReviewTag}</span>
          </div>
          <h3 class="service-title">${title}</h3>
          <p class="service-desc">${desc}</p>

          <!-- Section 03 Item 4 Metadata: Cost, Duration, Last-verified -->
          <div class="procedure-meta-strip">
            <div class="meta-pill">
              <span class="meta-pill-label">🏷️ ${t.metaCostLabel}</span>
              <span class="meta-pill-val">${t.metaUnderReviewVal}</span>
            </div>
            <div class="meta-pill">
              <span class="meta-pill-label">⏱️ ${t.metaDurationLabel}</span>
              <span class="meta-pill-val">${t.metaUnderReviewVal}</span>
            </div>
            <div class="meta-pill">
              <span class="meta-pill-label">📅 ${t.metaVerifiedLabel}</span>
              <span class="meta-pill-val">${t.metaUnderReviewVal}</span>
            </div>
          </div>
        </div>

        <div class="card-bottom">
          <span class="card-cta-link">${t.cardCta}</span>
        </div>
      `;

      // Click & keyboard handlers
      card.addEventListener('click', () => openProcedureModal(service));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProcedureModal(service);
        }
      });

      grid.appendChild(card);
    }
  });

  // Empty state handling
  const emptyState = document.getElementById('search-empty-state');
  if (emptyState) {
    emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
  }

  // Update filter reset visibility
  const resetBtn = document.getElementById('category-filter-reset');
  if (resetBtn) {
    resetBtn.style.display = selectedCategory ? 'inline-block' : 'none';
  }
}

/**
 * Filter handler for instant search input
 */
function initSearch() {
  const input = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  const emptyResetBtn = document.getElementById('empty-reset-btn');
  const catResetBtn = document.getElementById('category-filter-reset');

  if (!input) return;

  input.addEventListener('input', () => {
    if (clearBtn) {
      clearBtn.style.display = input.value ? 'block' : 'none';
    }
    renderServiceCards();
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.style.display = 'none';
      input.focus();
      renderServiceCards();
      resetChips();
    });
  }

  if (emptyResetBtn) {
    emptyResetBtn.addEventListener('click', () => {
      input.value = '';
      selectedCategory = null;
      if (clearBtn) clearBtn.style.display = 'none';
      renderCategoriesGrid();
      renderServiceCards();
      resetChips();
      input.focus();
    });
  }

  if (catResetBtn) {
    catResetBtn.addEventListener('click', () => {
      selectedCategory = null;
      renderCategoriesGrid();
      renderServiceCards();
    });
  }

  // Quick Chips
  document.querySelectorAll('.chip-btn').forEach(chip => {
    chip.addEventListener('click', () => {
      const term = chip.getAttribute('data-term');
      input.value = term;
      if (clearBtn) clearBtn.style.display = 'block';
      
      document.querySelectorAll('.chip-btn').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      renderServiceCards();

      const procSection = document.getElementById('procedures-section');
      if (procSection) {
        procSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function resetChips() {
  document.querySelectorAll('.chip-btn').forEach(c => c.classList.remove('active'));
}

/**
 * Procedure Modal (Section 05 Anatomy Preview + Honesty Rules)
 */
function openProcedureModal(service) {
  const modal = document.getElementById('procedure-modal');
  if (!modal) return;

  const isAr = currentLang === 'ar';
  const title = isAr ? service.titleAr : service.titleEn;
  const t = translations[currentLang];

  document.getElementById('modal-service-title').textContent = title;
  document.getElementById('modal-status-tag').textContent = `⏳ ${t.modalStatusTag}`;
  document.getElementById('modal-notice-title').textContent = t.modalNoticeTitle;
  document.getElementById('modal-notice-body').textContent = t.modalNoticeBody;

  document.getElementById('modal-fee-label').textContent = t.modalFeeLabel;
  document.getElementById('modal-fee-val').textContent = t.modalFeeVal;
  document.getElementById('modal-duration-label').textContent = t.modalDurationLabel;
  document.getElementById('modal-duration-val').textContent = t.modalDurationVal;
  document.getElementById('modal-docs-label').textContent = t.modalDocsLabel;
  document.getElementById('modal-docs-val').textContent = t.modalDocsVal;
  document.getElementById('modal-where-label').textContent = t.modalWhereLabel;
  document.getElementById('modal-where-val').textContent = t.modalWhereVal;
  
  const mistakesTitle = document.getElementById('modal-mistakes-title');
  const mistakesBody = document.getElementById('modal-mistakes-body');
  if (mistakesTitle) mistakesTitle.textContent = t.modalMistakesTitle;
  if (mistakesBody) mistakesBody.textContent = t.modalMistakesBody;

  document.getElementById('modal-close-action-btn').textContent = t.modalCloseBtn;

  modal.classList.add('is-active');
  document.body.classList.add('modal-open');
  modal.setAttribute('aria-hidden', 'false');

  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) closeBtn.focus();
}

function closeProcedureModal() {
  const modal = document.getElementById('procedure-modal');
  if (!modal) return;
  modal.classList.remove('is-active');
  document.body.classList.remove('modal-open');
  modal.setAttribute('aria-hidden', 'true');
}

function initModal() {
  const modal = document.getElementById('procedure-modal');
  if (!modal) return;

  const closeBtn = document.getElementById('modal-close-btn');
  const closeActionBtn = document.getElementById('modal-close-action-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeProcedureModal);
  if (closeActionBtn) closeActionBtn.addEventListener('click', closeProcedureModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProcedureModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeProcedureModal();
    }
  });
}

/**
 * Language switch
 */
function setLanguage(lang) {
  currentLang = lang;
  const isRtl = lang === 'ar';

  document.documentElement.lang = lang;
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('aria-label', translations[lang][key]);
    }
  });

  renderCategoriesGrid();
  renderServiceCards();

  try {
    localStorage.setItem('khallaslak_lang', lang);
  } catch (err) {}
}

function initLanguageToggle() {
  const toggleBtn = document.getElementById('lang-toggle-btn');
  if (!toggleBtn) return;

  try {
    const saved = localStorage.getItem('khallaslak_lang');
    if (saved === 'en' || saved === 'ar') {
      setLanguage(saved);
    } else {
      setLanguage('ar');
    }
  } catch (err) {
    setLanguage('ar');
  }

  toggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(nextLang);
  });
}

/**
 * Scroll reveal observer (Section 04 exact snippet)
 */
function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        e.target.style.transitionDelay = (i * 80) + 'ms';
        e.target.classList.add('show');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// Bootstrap
document.addEventListener('DOMContentLoaded', () => {
  renderCategoriesGrid();
  renderServiceCards();
  initSearch();
  initModal();
  initLanguageToggle();
  initScrollReveal();
});
