// ─────────────────────────────────────────────
//  schemes.js  –  Government scheme data (multilingual)
// ─────────────────────────────────────────────

const schemes = [
  {
    id: 1,
    icon: "🌾",
    color: "#10b981",
    name: {
      en: "PM Kisan Samman Nidhi",
      hi: "पीएम किसान सम्मान निधि",
      mr: "पीएम किसान सन्मान निधी",
    },
    eligibility: {
      en: "Farmers with cultivable land. Age: 18+. Income: Low or Medium.",
      hi: "खेती योग्य भूमि वाले किसान। उम्र: 18+। आय: कम या मध्यम।",
      mr: "शेती करण्यायोग्य जमीन असलेले शेतकरी. वय: 18+. उत्पन्न: कमी किंवा मध्यम.",
    },
    benefits: {
      en: "₹6,000 per year in 3 installments directly to bank account.",
      hi: "प्रति वर्ष ₹6,000 तीन किश्तों में सीधे बैंक खाते में।",
      mr: "दरवर्षी ₹6,000 तीन हप्त्यांमध्ये थेट बँक खात्यात.",
    },
    documents: {
      en: ["Aadhaar Card", "Land Records", "Bank Passbook", "Mobile Number"],
      hi: ["आधार कार्ड", "भूमि रिकॉर्ड", "बैंक पासबुक", "मोबाइल नंबर"],
      mr: ["आधार कार्ड", "जमीन नोंदी", "बँक पासबुक", "मोबाइल नंबर"],
    },
    criteria: {
      occupation: ["farmer"],
      income: ["low", "medium"],
      minAge: 18,
      maxAge: 120,
    },
  },
  {
    id: 2,
    icon: "🎓",
    color: "#6366f1",
    name: {
      en: "National Scholarship Portal",
      hi: "राष्ट्रीय छात्रवृत्ति पोर्टल",
      mr: "राष्ट्रीय शिष्यवृत्ती पोर्टल",
    },
    eligibility: {
      en: "Students aged 10–35. Income: Low. Enrolled in recognized institution.",
      hi: "10–35 वर्ष के छात्र। आय: कम। मान्यता प्राप्त संस्थान में नामांकित।",
      mr: "10–35 वर्षे वयाचे विद्यार्थी. उत्पन्न: कमी. मान्यताप्राप्त संस्थेत प्रवेश.",
    },
    benefits: {
      en: "Up to ₹75,000 scholarship per year. Covers tuition and living expenses.",
      hi: "प्रति वर्ष ₹75,000 तक छात्रवृत्ति। ट्यूशन और रहने का खर्च कवर।",
      mr: "दरवर्षी ₹75,000 पर्यंत शिष्यवृत्ती. शिक्षण आणि राहण्याचा खर्च कव्हर.",
    },
    documents: {
      en: ["Aadhaar Card", "Income Certificate", "Marksheet", "Admission Letter", "Bank Account"],
      hi: ["आधार कार्ड", "आय प्रमाणपत्र", "मार्कशीट", "प्रवेश पत्र", "बैंक खाता"],
      mr: ["आधार कार्ड", "उत्पन्न दाखला", "गुणपत्रिका", "प्रवेश पत्र", "बँक खाते"],
    },
    criteria: {
      occupation: ["student"],
      income: ["low"],
      minAge: 10,
      maxAge: 35,
    },
  },
  {
    id: 3,
    icon: "🏠",
    color: "#f59e0b",
    name: {
      en: "PM Awas Yojana",
      hi: "पीएम आवास योजना",
      mr: "पीएम आवास योजना",
    },
    eligibility: {
      en: "Families without pucca house. Income: Low or Medium. Age: 21+.",
      hi: "पक्के मकान के बिना परिवार। आय: कम या मध्यम। उम्र: 21+।",
      mr: "पक्के घर नसलेले कुटुंब. उत्पन्न: कमी किंवा मध्यम. वय: 21+.",
    },
    benefits: {
      en: "₹1.2–2.5 Lakh subsidy for house construction or purchase.",
      hi: "घर निर्माण या खरीद के लिए ₹1.2–2.5 लाख की सब्सिडी।",
      mr: "घर बांधण्यासाठी किंवा खरेदीसाठी ₹1.2–2.5 लाख अनुदान.",
    },
    documents: {
      en: ["Aadhaar Card", "Income Certificate", "Land/Plot Document", "Bank Account", "Caste Certificate (if applicable)"],
      hi: ["आधार कार्ड", "आय प्रमाणपत्र", "भूमि दस्तावेज़", "बैंक खाता", "जाति प्रमाणपत्र (यदि लागू हो)"],
      mr: ["आधार कार्ड", "उत्पन्न दाखला", "जमीन कागदपत्रे", "बँक खाते", "जात प्रमाणपत्र (लागू असल्यास)"],
    },
    criteria: {
      occupation: ["farmer", "self-employed", "unemployed", "private employee"],
      income: ["low", "medium"],
      minAge: 21,
      maxAge: 120,
    },
  },
  {
    id: 4,
    icon: "💊",
    color: "#ec4899",
    name: {
      en: "Ayushman Bharat Yojana",
      hi: "आयुष्मान भारत योजना",
      mr: "आयुष्मान भारत योजना",
    },
    eligibility: {
      en: "BPL families. Income: Low. All ages covered.",
      hi: "बीपीएल परिवार। आय: कम। सभी उम्र शामिल।",
      mr: "BPL कुटुंबे. उत्पन्न: कमी. सर्व वयोगट.",
    },
    benefits: {
      en: "Free health coverage up to ₹5 Lakh per family per year at empanelled hospitals.",
      hi: "सूचीबद्ध अस्पतालों में प्रति वर्ष प्रति परिवार ₹5 लाख तक मुफ्त स्वास्थ्य सेवा।",
      mr: "सूचीबद्ध रुग्णालयांमध्ये दरवर्षी प्रति कुटुंब ₹5 लाख पर्यंत मोफत आरोग्यसेवा.",
    },
    documents: {
      en: ["Aadhaar Card", "Ration Card", "Income Proof", "Family Composition Certificate"],
      hi: ["आधार कार्ड", "राशन कार्ड", "आय प्रमाण", "परिवार संरचना प्रमाणपत्र"],
      mr: ["आधार कार्ड", "रेशन कार्ड", "उत्पन्नाचा पुरावा", "कुटुंब रचना प्रमाणपत्र"],
    },
    criteria: {
      occupation: ["farmer", "unemployed", "self-employed", "private employee", "student"],
      income: ["low"],
      minAge: 0,
      maxAge: 120,
    },
  },
  {
    id: 5,
    icon: "⚡",
    color: "#3b82f6",
    name: {
      en: "PM Ujjwala Yojana",
      hi: "पीएम उज्ज्वला योजना",
      mr: "पीएम उज्ज्वला योजना",
    },
    eligibility: {
      en: "Women from BPL households. Income: Low. Age: 18+.",
      hi: "BPL परिवारों की महिलाएं। आय: कम। उम्र: 18+।",
      mr: "BPL कुटुंबातील महिला. उत्पन्न: कमी. वय: 18+.",
    },
    benefits: {
      en: "Free LPG connection with first cylinder and stove at no cost.",
      hi: "पहले सिलेंडर और चूल्हे के साथ मुफ्त एलपीजी कनेक्शन।",
      mr: "पहिला सिलेंडर आणि शेगडीसह मोफत LPG कनेक्शन.",
    },
    documents: {
      en: ["Aadhaar Card", "BPL Ration Card", "Bank Account", "Address Proof"],
      hi: ["आधार कार्ड", "BPL राशन कार्ड", "बैंक खाता", "पता प्रमाण"],
      mr: ["आधार कार्ड", "BPL रेशन कार्ड", "बँक खाते", "पत्त्याचा पुरावा"],
    },
    criteria: {
      occupation: ["farmer", "unemployed", "self-employed"],
      income: ["low"],
      minAge: 18,
      maxAge: 120,
    },
  },
  {
    id: 6,
    icon: "💼",
    color: "#8b5cf6",
    name: {
      en: "PM Mudra Yojana",
      hi: "पीएम मुद्रा योजना",
      mr: "पीएम मुद्रा योजना",
    },
    eligibility: {
      en: "Self-employed / small business owners. Income: Low or Medium. Age: 18+.",
      hi: "स्व-रोजगार / छोटे व्यवसाय मालिक। आय: कम या मध्यम। उम्र: 18+।",
      mr: "स्वयंरोजगार / लहान व्यवसाय मालक. उत्पन्न: कमी किंवा मध्यम. वय: 18+.",
    },
    benefits: {
      en: "Collateral-free loans up to ₹10 Lakh for business at low interest rates.",
      hi: "कम ब्याज दरों पर व्यवसाय के लिए ₹10 लाख तक बिना गारंटी ऋण।",
      mr: "कमी व्याजदरात व्यवसायासाठी ₹10 लाख पर्यंत तारण-मुक्त कर्ज.",
    },
    documents: {
      en: ["Aadhaar Card", "PAN Card", "Business Proof", "Bank Statements", "Passport Photo"],
      hi: ["आधार कार्ड", "पैन कार्ड", "व्यवसाय प्रमाण", "बैंक विवरण", "पासपोर्ट फोटो"],
      mr: ["आधार कार्ड", "PAN कार्ड", "व्यवसायाचा पुरावा", "बँक स्टेटमेंट", "पासपोर्ट फोटो"],
    },
    criteria: {
      occupation: ["self-employed"],
      income: ["low", "medium"],
      minAge: 18,
      maxAge: 120,
    },
  },
  {
    id: 7,
    icon: "👴",
    color: "#14b8a6",
    name: {
      en: "Indira Gandhi National Old Age Pension",
      hi: "इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन",
      mr: "इंदिरा गांधी राष्ट्रीय वृद्धापकाळ निवृत्ती वेतन",
    },
    eligibility: {
      en: "Senior citizens aged 60+. Income: Low. From BPL household.",
      hi: "60+ वर्ष के वरिष्ठ नागरिक। आय: कम। BPL परिवार से।",
      mr: "60+ वर्षे वयाचे वृद्ध नागरिक. उत्पन्न: कमी. BPL कुटुंबातील.",
    },
    benefits: {
      en: "Monthly pension of ₹200–₹500 directly to bank account.",
      hi: "बैंक खाते में सीधे ₹200–₹500 मासिक पेंशन।",
      mr: "बँक खात्यात थेट ₹200–₹500 मासिक निवृत्ती वेतन.",
    },
    documents: {
      en: ["Aadhaar Card", "Age Proof", "Income Certificate", "BPL Card", "Bank Passbook"],
      hi: ["आधार कार्ड", "आयु प्रमाण", "आय प्रमाणपत्र", "BPL कार्ड", "बैंक पासबुक"],
      mr: ["आधार कार्ड", "वयाचा पुरावा", "उत्पन्न दाखला", "BPL कार्ड", "बँक पासबुक"],
    },
    criteria: {
      occupation: ["farmer", "unemployed", "self-employed", "private employee"],
      income: ["low"],
      minAge: 60,
      maxAge: 120,
    },
  },
  {
    id: 8,
    icon: "🌊",
    color: "#0ea5e9",
    name: {
      en: "Jal Jeevan Mission",
      hi: "जल जीवन मिशन",
      mr: "जल जीवन मिशन",
    },
    eligibility: {
      en: "Rural households without tap water. Income: Low or Medium. All ages.",
      hi: "नल जल कनेक्शन के बिना ग्रामीण परिवार। आय: कम या मध्यम।",
      mr: "नळ पाणी कनेक्शन नसलेले ग्रामीण कुटुंब. उत्पन्न: कमी किंवा मध्यम.",
    },
    benefits: {
      en: "Free tap water connection to every household. 55 litres/day assured supply.",
      hi: "हर घर में मुफ्त नल जल कनेक्शन। 55 लीटर/दिन आपूर्ति।",
      mr: "प्रत्येक घरात मोफत नळ पाणी कनेक्शन. 55 लिटर/दिन पुरवठा.",
    },
    documents: {
      en: ["Aadhaar Card", "Ration Card", "Address Proof", "Application Form"],
      hi: ["आधार कार्ड", "राशन कार्ड", "पता प्रमाण", "आवेदन पत्र"],
      mr: ["आधार कार्ड", "रेशन कार्ड", "पत्त्याचा पुरावा", "अर्ज"],
    },
    criteria: {
      occupation: ["farmer", "unemployed", "self-employed", "private employee", "student"],
      income: ["low", "medium"],
      minAge: 18,
      maxAge: 120,
    },
  },
];

// ── Match scoring logic ──────────────────────
// Returns 0–100 based on 3 criteria (age, income, occupation)
export function getMatchScore(scheme, profile) {
  let score = 0;
  const { age, income, occupation } = profile;

  // Age match (33 pts)
  const numAge = parseInt(age, 10);
  if (!isNaN(numAge) && numAge >= scheme.criteria.minAge && numAge <= scheme.criteria.maxAge) {
    score += 33;
  }

  // Income match (33 pts)
  if (scheme.criteria.income.includes(income)) {
    score += 33;
  }

  // Occupation match (34 pts)
  const occ = occupation?.toLowerCase() || "";
  const matches = scheme.criteria.occupation.some(o => occ.includes(o));
  if (matches) score += 34;

  return score;
}

export default schemes;
