
const schemes = [
  {
    "id": 1,
    "name": {
      "en": "Mahatma Jyotiba Phule Jan Arogya Yojana",
      "hi": "Mahatma Jyotiba Phule Jan Arogya Yojana",
      "mr": "Mahatma Jyotiba Phule Jan Arogya Yojana"
    },
    "eligibility": {
      "en": "Families living below poverty line or low income in Maharashtra",
      "hi": "Families living below poverty line or low income in Maharashtra",
      "mr": "Families living below poverty line or low income in Maharashtra"
    },
    "benefits": {
      "en": "Free health insurance and covers major hospital expenses",
      "hi": "Free health insurance and covers major hospital expenses",
      "mr": "Free health insurance and covers major hospital expenses"
    },
    "documents_required": [
      "Aadhaar",
      "Ration Card",
      "Income Certificate"
    ],
    "link": "https://www.jeevandayee.gov.in",
    "criteria": {
      "state": "Maharashtra",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 2,
    "name": {
      "en": "Shiv Bhojan Yojana",
      "hi": "Shiv Bhojan Yojana",
      "mr": "Shiv Bhojan Yojana"
    },
    "eligibility": {
      "en": "All citizens needing affordable food",
      "hi": "All citizens needing affordable food",
      "mr": "All citizens needing affordable food"
    },
    "benefits": {
      "en": "Healthy and affordable meals at just Rs. 10",
      "hi": "Healthy and affordable meals at just Rs. 10",
      "mr": "Healthy and affordable meals at just Rs. 10"
    },
    "documents_required": [
      "Aadhaar"
    ],
    "link": "https://mahafood.gov.in",
    "criteria": {
      "state": "Maharashtra",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 3,
    "name": {
      "en": "Sanjay Gandhi Niradhar Anudan Yojana",
      "hi": "Sanjay Gandhi Niradhar Anudan Yojana",
      "mr": "Sanjay Gandhi Niradhar Anudan Yojana"
    },
    "eligibility": {
      "en": "Old aged, disabled, or destitute people with low income",
      "hi": "Old aged, disabled, or destitute people with low income",
      "mr": "Old aged, disabled, or destitute people with low income"
    },
    "benefits": {
      "en": "Monthly pension of Rs. 1500 for survival support",
      "hi": "Monthly pension of Rs. 1500 for survival support",
      "mr": "Monthly pension of Rs. 1500 for survival support"
    },
    "documents_required": [
      "Aadhaar",
      "Age Proof",
      "Income Certificate",
      "Disability Certificate"
    ],
    "link": "https://sjsa.maharashtra.gov.in",
    "criteria": {
      "state": "Maharashtra",
      "minAge": 60,
      "maxAge": 120,
      "income": [
        "low"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 4,
    "name": {
      "en": "Shravanbal Seva Rajya Nivruttivetan Yojana",
      "hi": "Shravanbal Seva Rajya Nivruttivetan Yojana",
      "mr": "Shravanbal Seva Rajya Nivruttivetan Yojana"
    },
    "eligibility": {
      "en": "Senior citizens above 65 years from low-income families",
      "hi": "Senior citizens above 65 years from low-income families",
      "mr": "Senior citizens above 65 years from low-income families"
    },
    "benefits": {
      "en": "Financial assistance of Rs. 1000 per month for the elderly",
      "hi": "Financial assistance of Rs. 1000 per month for the elderly",
      "mr": "Financial assistance of Rs. 1000 per month for the elderly"
    },
    "documents_required": [
      "Aadhaar",
      "Age Proof",
      "Income Certificate"
    ],
    "link": "https://sjsa.maharashtra.gov.in",
    "criteria": {
      "state": "Maharashtra",
      "minAge": 60,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 5,
    "name": {
      "en": "Namo Shetkari Maha Samman Nidhi",
      "hi": "Namo Shetkari Maha Samman Nidhi",
      "mr": "Namo Shetkari Maha Samman Nidhi"
    },
    "eligibility": {
      "en": "Farmers registered under PM-KISAN in Maharashtra",
      "hi": "Farmers registered under PM-KISAN in Maharashtra",
      "mr": "Farmers registered under PM-KISAN in Maharashtra"
    },
    "benefits": {
      "en": "Rs. 6000 per year direct financial support to farmers",
      "hi": "Rs. 6000 per year direct financial support to farmers",
      "mr": "Rs. 6000 per year direct financial support to farmers"
    },
    "documents_required": [
      "Aadhaar",
      "Land Records",
      "Bank Passbook"
    ],
    "link": "https://agri.maharashtra.gov.in",
    "criteria": {
      "state": "Maharashtra",
      "minAge": 60,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer"
      ]
    }
  },
  {
    "id": 6,
    "name": {
      "en": "Lek Ladki Yojana",
      "hi": "Lek Ladki Yojana",
      "mr": "Lek Ladki Yojana"
    },
    "eligibility": {
      "en": "Girls born in low income / BPL families",
      "hi": "Girls born in low income / BPL families",
      "mr": "Girls born in low income / BPL families"
    },
    "benefits": {
      "en": "Financial support up to Rs. 1,00,000 for girl child from birth to age 18",
      "hi": "Financial support up to Rs. 1,00,000 for girl child from birth to age 18",
      "mr": "Financial support up to Rs. 1,00,000 for girl child from birth to age 18"
    },
    "documents_required": [
      "Birth Certificate",
      "Aadhaar",
      "Ration Card",
      "Bank Account"
    ],
    "link": "https://womenchild.maharashtra.gov.in",
    "criteria": {
      "state": "Maharashtra",
      "minAge": 1,
      "maxAge": 30,
      "income": [
        "low"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 7,
    "name": {
      "en": "Ramai Awas Yojana",
      "hi": "Ramai Awas Yojana",
      "mr": "Ramai Awas Yojana"
    },
    "eligibility": {
      "en": "Low income families needing a house (SC/ST category focus)",
      "hi": "Low income families needing a house (SC/ST category focus)",
      "mr": "Low income families needing a house (SC/ST category focus)"
    },
    "benefits": {
      "en": "Financial aid to build a permanent brick house",
      "hi": "Financial aid to build a permanent brick house",
      "mr": "Financial aid to build a permanent brick house"
    },
    "documents_required": [
      "Aadhaar",
      "Caste Certificate",
      "Income Certificate",
      "Land Proof"
    ],
    "link": "https://sjsa.maharashtra.gov.in",
    "criteria": {
      "state": "Maharashtra",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 8,
    "name": {
      "en": "Dr. Panjabrao Deshmukh Hostel Maintenance Allowance",
      "hi": "Dr. Panjabrao Deshmukh Hostel Maintenance Allowance",
      "mr": "Dr. Panjabrao Deshmukh Hostel Maintenance Allowance"
    },
    "eligibility": {
      "en": "Children of registered farmers pursuing higher education",
      "hi": "Children of registered farmers pursuing higher education",
      "mr": "Children of registered farmers pursuing higher education"
    },
    "benefits": {
      "en": "Covers hostel and living expenses for students",
      "hi": "Covers hostel and living expenses for students",
      "mr": "Covers hostel and living expenses for students"
    },
    "documents_required": [
      "Aadhaar",
      "Admission Proof",
      "Farmer Certificate",
      "Income Certificate"
    ],
    "link": "https://mahadbt.maharashtra.gov.in",
    "criteria": {
      "state": "Maharashtra",
      "minAge": 1,
      "maxAge": 30,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer"
      ]
    }
  },
  {
    "id": 9,
    "name": {
      "en": "Bal Sangopan Yojana",
      "hi": "Bal Sangopan Yojana",
      "mr": "Bal Sangopan Yojana"
    },
    "eligibility": {
      "en": "Guardians taking care of orphaned children",
      "hi": "Guardians taking care of orphaned children",
      "mr": "Guardians taking care of orphaned children"
    },
    "benefits": {
      "en": "Rs. 1100 per month for taking care of orphaned or vulnerable children",
      "hi": "Rs. 1100 per month for taking care of orphaned or vulnerable children",
      "mr": "Rs. 1100 per month for taking care of orphaned or vulnerable children"
    },
    "documents_required": [
      "Aadhaar",
      "Child Birth Certificate",
      "Guardian Proof"
    ],
    "link": "https://womenchild.maharashtra.gov.in",
    "criteria": {
      "state": "Maharashtra",
      "minAge": 1,
      "maxAge": 30,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 10,
    "name": {
      "en": "Vithalrao Vikhe Patil Krishi Sanjeevani Yojana",
      "hi": "Vithalrao Vikhe Patil Krishi Sanjeevani Yojana",
      "mr": "Vithalrao Vikhe Patil Krishi Sanjeevani Yojana"
    },
    "eligibility": {
      "en": "Farmers facing drought or crop distress",
      "hi": "Farmers facing drought or crop distress",
      "mr": "Farmers facing drought or crop distress"
    },
    "benefits": {
      "en": "Support and training mechanisms to stop crop failures",
      "hi": "Support and training mechanisms to stop crop failures",
      "mr": "Support and training mechanisms to stop crop failures"
    },
    "documents_required": [
      "Aadhaar",
      "Land Records",
      "Crop Loss Proof"
    ],
    "link": "https://agri.maharashtra.gov.in",
    "criteria": {
      "state": "Maharashtra",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer"
      ]
    }
  },
  {
    "id": 11,
    "name": {
      "en": "Gruha Lakshmi Scheme",
      "hi": "Gruha Lakshmi Scheme",
      "mr": "Gruha Lakshmi Scheme"
    },
    "eligibility": {
      "en": "Women head of BPL/APL families in Karnataka",
      "hi": "Women head of BPL/APL families in Karnataka",
      "mr": "Women head of BPL/APL families in Karnataka"
    },
    "benefits": {
      "en": "Rs. 2000 per month deposited to female head of the family",
      "hi": "Rs. 2000 per month deposited to female head of the family",
      "mr": "Rs. 2000 per month deposited to female head of the family"
    },
    "documents_required": [
      "Aadhaar",
      "Ration Card",
      "Bank Passbook"
    ],
    "link": "https://sevasindhu.karnataka.gov.in",
    "criteria": {
      "state": "Karnataka",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 12,
    "name": {
      "en": "Annabhagya Yojana",
      "hi": "Annabhagya Yojana",
      "mr": "Annabhagya Yojana"
    },
    "eligibility": {
      "en": "BPL and Antyodaya card holders",
      "hi": "BPL and Antyodaya card holders",
      "mr": "BPL and Antyodaya card holders"
    },
    "benefits": {
      "en": "Free 10 kg rice per person every month",
      "hi": "Free 10 kg rice per person every month",
      "mr": "Free 10 kg rice per person every month"
    },
    "documents_required": [
      "Aadhaar",
      "Ration Card"
    ],
    "link": "https://ahara.kar.nic.in",
    "criteria": {
      "state": "Karnataka",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 13,
    "name": {
      "en": "Karnataka Raitha Siri Yojana",
      "hi": "Karnataka Raitha Siri Yojana",
      "mr": "Karnataka Raitha Siri Yojana"
    },
    "eligibility": {
      "en": "Farmers growing millets like ragi and jowar",
      "hi": "Farmers growing millets like ragi and jowar",
      "mr": "Farmers growing millets like ragi and jowar"
    },
    "benefits": {
      "en": "Rs. 10000 per hectare for growing minor millets",
      "hi": "Rs. 10000 per hectare for growing minor millets",
      "mr": "Rs. 10000 per hectare for growing minor millets"
    },
    "documents_required": [
      "Aadhaar",
      "Land Records",
      "Crop Certificate"
    ],
    "link": "https://raitamitra.karnataka.gov.in",
    "criteria": {
      "state": "Karnataka",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer"
      ]
    }
  },
  {
    "id": 14,
    "name": {
      "en": "Vidyasiri Scholarship",
      "hi": "Vidyasiri Scholarship",
      "mr": "Vidyasiri Scholarship"
    },
    "eligibility": {
      "en": "Students from backward classes attending college",
      "hi": "Students from backward classes attending college",
      "mr": "Students from backward classes attending college"
    },
    "benefits": {
      "en": "Free hostel accommodation and scholarship amount",
      "hi": "Free hostel accommodation and scholarship amount",
      "mr": "Free hostel accommodation and scholarship amount"
    },
    "documents_required": [
      "Aadhaar",
      "Income Certificate",
      "Caste Certificate",
      "Marks Card"
    ],
    "link": "https://ssp.karnataka.gov.in",
    "criteria": {
      "state": "Karnataka",
      "minAge": 1,
      "maxAge": 30,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Student"
      ]
    }
  },
  {
    "id": 15,
    "name": {
      "en": "Yuva Nidhi Scheme",
      "hi": "Yuva Nidhi Scheme",
      "mr": "Yuva Nidhi Scheme"
    },
    "eligibility": {
      "en": "Unemployed youth who graduated in the current year",
      "hi": "Unemployed youth who graduated in the current year",
      "mr": "Unemployed youth who graduated in the current year"
    },
    "benefits": {
      "en": "Unemployment allowance of Rs. 3000 for graduates",
      "hi": "Unemployment allowance of Rs. 3000 for graduates",
      "mr": "Unemployment allowance of Rs. 3000 for graduates"
    },
    "documents_required": [
      "Aadhaar",
      "Degree Certificate",
      "Bank Account"
    ],
    "link": "https://sevasindhu.karnataka.gov.in",
    "criteria": {
      "state": "Karnataka",
      "minAge": 1,
      "maxAge": 30,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Unemployed"
      ]
    }
  },
  {
    "id": 16,
    "name": {
      "en": "Mathrushree Scheme",
      "hi": "Mathrushree Scheme",
      "mr": "Mathrushree Scheme"
    },
    "eligibility": {
      "en": "Pregnant women belonging to BPL families",
      "hi": "Pregnant women belonging to BPL families",
      "mr": "Pregnant women belonging to BPL families"
    },
    "benefits": {
      "en": "Rs. 6000 financial aid for pregnant women",
      "hi": "Rs. 6000 financial aid for pregnant women",
      "mr": "Rs. 6000 financial aid for pregnant women"
    },
    "documents_required": [
      "Aadhaar",
      "BPL Card",
      "Pregnancy Registration Card"
    ],
    "link": "https://karnataka.gov.in",
    "criteria": {
      "state": "Karnataka",
      "minAge": 60,
      "maxAge": 120,
      "income": [
        "low"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 17,
    "name": {
      "en": "Sandhya Suraksha Yojana",
      "hi": "Sandhya Suraksha Yojana",
      "mr": "Sandhya Suraksha Yojana"
    },
    "eligibility": {
      "en": "Senior citizens above 65 years with low income",
      "hi": "Senior citizens above 65 years with low income",
      "mr": "Senior citizens above 65 years with low income"
    },
    "benefits": {
      "en": "Monthly pension of Rs. 1000 for elderly people",
      "hi": "Monthly pension of Rs. 1000 for elderly people",
      "mr": "Monthly pension of Rs. 1000 for elderly people"
    },
    "documents_required": [
      "Aadhaar",
      "Age Proof",
      "Income Certificate"
    ],
    "link": "https://karnataka.gov.in",
    "criteria": {
      "state": "Karnataka",
      "minAge": 60,
      "maxAge": 120,
      "income": [
        "low"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 18,
    "name": {
      "en": "Shakti Scheme",
      "hi": "Shakti Scheme",
      "mr": "Shakti Scheme"
    },
    "eligibility": {
      "en": "All women domiciled in Karnataka",
      "hi": "All women domiciled in Karnataka",
      "mr": "All women domiciled in Karnataka"
    },
    "benefits": {
      "en": "Free travel in non-premium state buses",
      "hi": "Free travel in non-premium state buses",
      "mr": "Free travel in non-premium state buses"
    },
    "documents_required": [
      "Aadhaar or State ID card"
    ],
    "link": "https://sevasindhu.karnataka.gov.in",
    "criteria": {
      "state": "Karnataka",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 19,
    "name": {
      "en": "Ganga Kalyana Scheme",
      "hi": "Ganga Kalyana Scheme",
      "mr": "Ganga Kalyana Scheme"
    },
    "eligibility": {
      "en": "Small and marginal farmers from SC/ST category",
      "hi": "Small and marginal farmers from SC/ST category",
      "mr": "Small and marginal farmers from SC/ST category"
    },
    "benefits": {
      "en": "Free borewell drilling and pump sets installed for irrigation",
      "hi": "Free borewell drilling and pump sets installed for irrigation",
      "mr": "Free borewell drilling and pump sets installed for irrigation"
    },
    "documents_required": [
      "Aadhaar",
      "Caste Certificate",
      "Land Records"
    ],
    "link": "https://karnataka.gov.in",
    "criteria": {
      "state": "Karnataka",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer"
      ]
    }
  },
  {
    "id": 20,
    "name": {
      "en": "Arivu Education Loan Scheme",
      "hi": "Arivu Education Loan Scheme",
      "mr": "Arivu Education Loan Scheme"
    },
    "eligibility": {
      "en": "Minority community students aiming for professional courses",
      "hi": "Minority community students aiming for professional courses",
      "mr": "Minority community students aiming for professional courses"
    },
    "benefits": {
      "en": "Low interest education loans up to Rs. 1 Lakh",
      "hi": "Low interest education loans up to Rs. 1 Lakh",
      "mr": "Low interest education loans up to Rs. 1 Lakh"
    },
    "documents_required": [
      "Aadhaar",
      "Income/Caste Proof",
      "Admission Letter"
    ],
    "link": "https://kmdc.karnataka.gov.in",
    "criteria": {
      "state": "Karnataka",
      "minAge": 1,
      "maxAge": 30,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Student"
      ]
    }
  },
  {
    "id": 21,
    "name": {
      "en": "Mukhyamantri Parivar Samridhi Yojana",
      "hi": "Mukhyamantri Parivar Samridhi Yojana",
      "mr": "Mukhyamantri Parivar Samridhi Yojana"
    },
    "eligibility": {
      "en": "Families with income less than Rs. 1.8 Lakh per year",
      "hi": "Families with income less than Rs. 1.8 Lakh per year",
      "mr": "Families with income less than Rs. 1.8 Lakh per year"
    },
    "benefits": {
      "en": "Rs. 6000 per year for health, life insurance and pension",
      "hi": "Rs. 6000 per year for health, life insurance and pension",
      "mr": "Rs. 6000 per year for health, life insurance and pension"
    },
    "documents_required": [
      "Aadhaar",
      "Parivar Pehchan Patra (Family ID)"
    ],
    "link": "https://saralharyana.gov.in",
    "criteria": {
      "state": "Haryana",
      "minAge": 60,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 22,
    "name": {
      "en": "Saksham Yuva Yojana",
      "hi": "Saksham Yuva Yojana",
      "mr": "Saksham Yuva Yojana"
    },
    "eligibility": {
      "en": "Educated unemployed youth of Haryana",
      "hi": "Educated unemployed youth of Haryana",
      "mr": "Educated unemployed youth of Haryana"
    },
    "benefits": {
      "en": "Rs. 3000 monthly allowance plus 100 hours of paid work",
      "hi": "Rs. 3000 monthly allowance plus 100 hours of paid work",
      "mr": "Rs. 3000 monthly allowance plus 100 hours of paid work"
    },
    "documents_required": [
      "Aadhaar",
      "Education Certificates",
      "Family ID"
    ],
    "link": "https://hreyahs.gov.in",
    "criteria": {
      "state": "Haryana",
      "minAge": 1,
      "maxAge": 30,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Unemployed"
      ]
    }
  },
  {
    "id": 23,
    "name": {
      "en": "Bhavantar Bharpayee Yojana",
      "hi": "Bhavantar Bharpayee Yojana",
      "mr": "Bhavantar Bharpayee Yojana"
    },
    "eligibility": {
      "en": "Farmers growing vegetables and fruits in Haryana",
      "hi": "Farmers growing vegetables and fruits in Haryana",
      "mr": "Farmers growing vegetables and fruits in Haryana"
    },
    "benefits": {
      "en": "Compensation to farmers if crops sell below fixed base price",
      "hi": "Compensation to farmers if crops sell below fixed base price",
      "mr": "Compensation to farmers if crops sell below fixed base price"
    },
    "documents_required": [
      "Aadhaar",
      "Land Records",
      "Meri Fasal Mera Byora Registration"
    ],
    "link": "https://fasal.haryana.gov.in",
    "criteria": {
      "state": "Haryana",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer"
      ]
    }
  },
  {
    "id": 24,
    "name": {
      "en": "Chiranjeevi Yojana",
      "hi": "Chiranjeevi Yojana",
      "mr": "Chiranjeevi Yojana"
    },
    "eligibility": {
      "en": "Pregnant women in rural and BPL category",
      "hi": "Pregnant women in rural and BPL category",
      "mr": "Pregnant women in rural and BPL category"
    },
    "benefits": {
      "en": "Free delivery and medical care for pregnant women",
      "hi": "Free delivery and medical care for pregnant women",
      "mr": "Free delivery and medical care for pregnant women"
    },
    "documents_required": [
      "Aadhaar",
      "BPL Card",
      "Maternal Health Card"
    ],
    "link": "https://haryanahealth.nic.in",
    "criteria": {
      "state": "Haryana",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 25,
    "name": {
      "en": "Mera Pani Meri Virasat",
      "hi": "Mera Pani Meri Virasat",
      "mr": "Mera Pani Meri Virasat"
    },
    "eligibility": {
      "en": "Farmers willing to save water by changing crops",
      "hi": "Farmers willing to save water by changing crops",
      "mr": "Farmers willing to save water by changing crops"
    },
    "benefits": {
      "en": "Rs. 7000 per acre for shifting from paddy to alternative crops",
      "hi": "Rs. 7000 per acre for shifting from paddy to alternative crops",
      "mr": "Rs. 7000 per acre for shifting from paddy to alternative crops"
    },
    "documents_required": [
      "Aadhaar",
      "Land Records",
      "Crop Details"
    ],
    "link": "https://agriharyana.gov.in",
    "criteria": {
      "state": "Haryana",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer"
      ]
    }
  },
  {
    "id": 26,
    "name": {
      "en": "Old Age Samman Allowance",
      "hi": "Old Age Samman Allowance",
      "mr": "Old Age Samman Allowance"
    },
    "eligibility": {
      "en": "Citizens aged 60+ living in Haryana with low income",
      "hi": "Citizens aged 60+ living in Haryana with low income",
      "mr": "Citizens aged 60+ living in Haryana with low income"
    },
    "benefits": {
      "en": "Monthly pension of Rs. 3000 for elderly citizens",
      "hi": "Monthly pension of Rs. 3000 for elderly citizens",
      "mr": "Monthly pension of Rs. 3000 for elderly citizens"
    },
    "documents_required": [
      "Aadhaar",
      "Age Proof",
      "Family ID"
    ],
    "link": "https://socialjusticehry.gov.in",
    "criteria": {
      "state": "Haryana",
      "minAge": 60,
      "maxAge": 120,
      "income": [
        "low"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 27,
    "name": {
      "en": "Pashu Kisan Credit Card",
      "hi": "Pashu Kisan Credit Card",
      "mr": "Pashu Kisan Credit Card"
    },
    "eligibility": {
      "en": "Farmers possessing cows, buffaloes, sheep, or goats",
      "hi": "Farmers possessing cows, buffaloes, sheep, or goats",
      "mr": "Farmers possessing cows, buffaloes, sheep, or goats"
    },
    "benefits": {
      "en": "Loans up to Rs. 1.6 Lakh without guarantee for livestock",
      "hi": "Loans up to Rs. 1.6 Lakh without guarantee for livestock",
      "mr": "Loans up to Rs. 1.6 Lakh without guarantee for livestock"
    },
    "documents_required": [
      "Aadhaar",
      "Animal Health Certificate",
      "Bank Details"
    ],
    "link": "https://pashudhanharyana.gov.in",
    "criteria": {
      "state": "Haryana",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer"
      ]
    }
  },
  {
    "id": 28,
    "name": {
      "en": "Dr. Ambedkar Medhavi Chhattar Yojana",
      "hi": "Dr. Ambedkar Medhavi Chhattar Yojana",
      "mr": "Dr. Ambedkar Medhavi Chhattar Yojana"
    },
    "eligibility": {
      "en": "SC/BC students who score above 70% in board exams",
      "hi": "SC/BC students who score above 70% in board exams",
      "mr": "SC/BC students who score above 70% in board exams"
    },
    "benefits": {
      "en": "Scholarship starting from Rs. 8000 for meritorious students",
      "hi": "Scholarship starting from Rs. 8000 for meritorious students",
      "mr": "Scholarship starting from Rs. 8000 for meritorious students"
    },
    "documents_required": [
      "Aadhaar",
      "Marksheets",
      "Caste Certificate",
      "Income Certificate"
    ],
    "link": "https://saralharyana.gov.in",
    "criteria": {
      "state": "Haryana",
      "minAge": 1,
      "maxAge": 30,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Student"
      ]
    }
  },
  {
    "id": 29,
    "name": {
      "en": "Kanyadaan Yojana",
      "hi": "Kanyadaan Yojana",
      "mr": "Kanyadaan Yojana"
    },
    "eligibility": {
      "en": "Low-income, SC/ST/BC families or widows",
      "hi": "Low-income, SC/ST/BC families or widows",
      "mr": "Low-income, SC/ST/BC families or widows"
    },
    "benefits": {
      "en": "Financial aid of Rs. 51,000 for daughter's marriage",
      "hi": "Financial aid of Rs. 51,000 for daughter's marriage",
      "mr": "Financial aid of Rs. 51,000 for daughter's marriage"
    },
    "documents_required": [
      "Aadhaar",
      "Marriage Invitation",
      "Income Certificate",
      "Age Proof of Bride"
    ],
    "link": "https://saralharyana.gov.in",
    "criteria": {
      "state": "Haryana",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 30,
    "name": {
      "en": "Haryana Matrushakti Udyamita Scheme",
      "hi": "Haryana Matrushakti Udyamita Scheme",
      "mr": "Haryana Matrushakti Udyamita Scheme"
    },
    "eligibility": {
      "en": "Women from families with income below Rs. 5 Lakh",
      "hi": "Women from families with income below Rs. 5 Lakh",
      "mr": "Women from families with income below Rs. 5 Lakh"
    },
    "benefits": {
      "en": "Soft loans up to Rs. 3 Lakhs to women entrepreneurs",
      "hi": "Soft loans up to Rs. 3 Lakhs to women entrepreneurs",
      "mr": "Soft loans up to Rs. 3 Lakhs to women entrepreneurs"
    },
    "documents_required": [
      "Aadhaar",
      "Family ID",
      "Business Plan",
      "Bank Account"
    ],
    "link": "https://wcdhry.gov.in",
    "criteria": {
      "state": "Haryana",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 31,
    "name": {
      "en": "Delhi Ladli Scheme",
      "hi": "Delhi Ladli Scheme",
      "mr": "Delhi Ladli Scheme"
    },
    "eligibility": {
      "en": "Girls born in Delhi hospitals to low-income families",
      "hi": "Girls born in Delhi hospitals to low-income families",
      "mr": "Girls born in Delhi hospitals to low-income families"
    },
    "benefits": {
      "en": "Financial support deposited in stages up to Rs. 100,000 for girls",
      "hi": "Financial support deposited in stages up to Rs. 100,000 for girls",
      "mr": "Financial support deposited in stages up to Rs. 100,000 for girls"
    },
    "documents_required": [
      "Child Birth Certificate",
      "Aadhaar",
      "Parents Income Proof"
    ],
    "link": "https://wcd.delhi.gov.in",
    "criteria": {
      "state": "Delhi",
      "minAge": 1,
      "maxAge": 30,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 32,
    "name": {
      "en": "Delhi Pension Scheme",
      "hi": "Delhi Pension Scheme",
      "mr": "Delhi Pension Scheme"
    },
    "eligibility": {
      "en": "Senior citizens, disabled, and widows in Delhi",
      "hi": "Senior citizens, disabled, and widows in Delhi",
      "mr": "Senior citizens, disabled, and widows in Delhi"
    },
    "benefits": {
      "en": "Monthly pension of Rs. 2500 for survival and medicines",
      "hi": "Monthly pension of Rs. 2500 for survival and medicines",
      "mr": "Monthly pension of Rs. 2500 for survival and medicines"
    },
    "documents_required": [
      "Aadhaar",
      "Age/Disability Proof",
      "Income Certificate"
    ],
    "link": "https://edistrict.delhigovt.nic.in",
    "criteria": {
      "state": "Delhi",
      "minAge": 60,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 33,
    "name": {
      "en": "Farishtey Dilli Ke",
      "hi": "Farishtey Dilli Ke",
      "mr": "Farishtey Dilli Ke"
    },
    "eligibility": {
      "en": "Anyone injured in an accident within Delhi borders",
      "hi": "Anyone injured in an accident within Delhi borders",
      "mr": "Anyone injured in an accident within Delhi borders"
    },
    "benefits": {
      "en": "100% free treatment for road accident victims in any hospital",
      "hi": "100% free treatment for road accident victims in any hospital",
      "mr": "100% free treatment for road accident victims in any hospital"
    },
    "documents_required": [
      "Hospital Admission Record",
      "Police MLC"
    ],
    "link": "https://health.delhi.gov.in",
    "criteria": {
      "state": "Delhi",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 34,
    "name": {
      "en": "Mukhyamantri Tirth Yatra Yojana",
      "hi": "Mukhyamantri Tirth Yatra Yojana",
      "mr": "Mukhyamantri Tirth Yatra Yojana"
    },
    "eligibility": {
      "en": "Senior citizens of Delhi aged 60 and above",
      "hi": "Senior citizens of Delhi aged 60 and above",
      "mr": "Senior citizens of Delhi aged 60 and above"
    },
    "benefits": {
      "en": "Free pilgrimage travel, food, and stay along with an attendant",
      "hi": "Free pilgrimage travel, food, and stay along with an attendant",
      "mr": "Free pilgrimage travel, food, and stay along with an attendant"
    },
    "documents_required": [
      "Aadhaar",
      "Voter ID",
      "Medical Fitness Certificate"
    ],
    "link": "https://edistrict.delhigovt.nic.in",
    "criteria": {
      "state": "Delhi",
      "minAge": 60,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 35,
    "name": {
      "en": "Jai Bhim Mukhyamantri Pratibha Vikas Yojana",
      "hi": "Jai Bhim Mukhyamantri Pratibha Vikas Yojana",
      "mr": "Jai Bhim Mukhyamantri Pratibha Vikas Yojana"
    },
    "eligibility": {
      "en": "SC/ST/OBC students with family income less than Rs. 8 Lakh",
      "hi": "SC/ST/OBC students with family income less than Rs. 8 Lakh",
      "mr": "SC/ST/OBC students with family income less than Rs. 8 Lakh"
    },
    "benefits": {
      "en": "Free coaching for competitive exams like UPSC, NEET, JEE",
      "hi": "Free coaching for competitive exams like UPSC, NEET, JEE",
      "mr": "Free coaching for competitive exams like UPSC, NEET, JEE"
    },
    "documents_required": [
      "Aadhaar",
      "Caste Certificate",
      "Income Certificate",
      "10th/12th Marksheets"
    ],
    "link": "https://scstwelfare.delhigovt.nic.in",
    "criteria": {
      "state": "Delhi",
      "minAge": 1,
      "maxAge": 30,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Student"
      ]
    }
  },
  {
    "id": 36,
    "name": {
      "en": "Electric Vehicle Subsidy",
      "hi": "Electric Vehicle Subsidy",
      "mr": "Electric Vehicle Subsidy"
    },
    "eligibility": {
      "en": "Delhi residents buying new electric vehicles",
      "hi": "Delhi residents buying new electric vehicles",
      "mr": "Delhi residents buying new electric vehicles"
    },
    "benefits": {
      "en": "Cashback up to Rs. 30,000 on purchasing electric 2-wheelers",
      "hi": "Cashback up to Rs. 30,000 on purchasing electric 2-wheelers",
      "mr": "Cashback up to Rs. 30,000 on purchasing electric 2-wheelers"
    },
    "documents_required": [
      "Aadhaar",
      "Vehicle Registration (RC)",
      "Bank Account"
    ],
    "link": "https://ev.delhi.gov.in",
    "criteria": {
      "state": "Delhi",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 37,
    "name": {
      "en": "Mukhyamantri Vidyarthi Pratibha Yojana",
      "hi": "Mukhyamantri Vidyarthi Pratibha Yojana",
      "mr": "Mukhyamantri Vidyarthi Pratibha Yojana"
    },
    "eligibility": {
      "en": "SC/ST/OBC students scoring above 60% in 9th to 12th grade",
      "hi": "SC/ST/OBC students scoring above 60% in 9th to 12th grade",
      "mr": "SC/ST/OBC students scoring above 60% in 9th to 12th grade"
    },
    "benefits": {
      "en": "Rs. 5000 to Rs. 10000 cash prize for top scoring students",
      "hi": "Rs. 5000 to Rs. 10000 cash prize for top scoring students",
      "mr": "Rs. 5000 to Rs. 10000 cash prize for top scoring students"
    },
    "documents_required": [
      "Aadhaar",
      "School ID",
      "Bank Passbook",
      "Caste Certificate"
    ],
    "link": "https://edistrict.delhigovt.nic.in",
    "criteria": {
      "state": "Delhi",
      "minAge": 60,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Student"
      ]
    }
  },
  {
    "id": 38,
    "name": {
      "en": "Delhi Widow Pension Scheme",
      "hi": "Delhi Widow Pension Scheme",
      "mr": "Delhi Widow Pension Scheme"
    },
    "eligibility": {
      "en": "Widows aged 18 to 60 years living in Delhi",
      "hi": "Widows aged 18 to 60 years living in Delhi",
      "mr": "Widows aged 18 to 60 years living in Delhi"
    },
    "benefits": {
      "en": "Financial aid of Rs. 2500 per month for widows",
      "hi": "Financial aid of Rs. 2500 per month for widows",
      "mr": "Financial aid of Rs. 2500 per month for widows"
    },
    "documents_required": [
      "Aadhaar",
      "Husband's Death Certificate",
      "Income Certificate"
    ],
    "link": "https://edistrict.delhigovt.nic.in",
    "criteria": {
      "state": "Delhi",
      "minAge": 60,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 39,
    "name": {
      "en": "Aam Aadmi Mohalla Clinic",
      "hi": "Aam Aadmi Mohalla Clinic",
      "mr": "Aam Aadmi Mohalla Clinic"
    },
    "eligibility": {
      "en": "Any citizen visiting the clinic",
      "hi": "Any citizen visiting the clinic",
      "mr": "Any citizen visiting the clinic"
    },
    "benefits": {
      "en": "Free doctor consultation, 200+ tests, and free medicines",
      "hi": "Free doctor consultation, 200+ tests, and free medicines",
      "mr": "Free doctor consultation, 200+ tests, and free medicines"
    },
    "documents_required": [
      "Valid ID Proof (Aadhaar or Voter ID)"
    ],
    "link": "https://health.delhi.gov.in",
    "criteria": {
      "state": "Delhi",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 40,
    "name": {
      "en": "Delhi Free Wifi Scheme",
      "hi": "Delhi Free Wifi Scheme",
      "mr": "Delhi Free Wifi Scheme"
    },
    "eligibility": {
      "en": "Any citizen possessing a valid mobile number",
      "hi": "Any citizen possessing a valid mobile number",
      "mr": "Any citizen possessing a valid mobile number"
    },
    "benefits": {
      "en": "15 GB high-speed internet data free per month",
      "hi": "15 GB high-speed internet data free per month",
      "mr": "15 GB high-speed internet data free per month"
    },
    "documents_required": [
      "Mobile Number for OTP"
    ],
    "link": "https://delhi.gov.in",
    "criteria": {
      "state": "Delhi",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 41,
    "name": {
      "en": "Kanya Sumangala Yojana",
      "hi": "Kanya Sumangala Yojana",
      "mr": "Kanya Sumangala Yojana"
    },
    "eligibility": {
      "en": "Families with maximum 2 girls and income under Rs. 3 Lakh",
      "hi": "Families with maximum 2 girls and income under Rs. 3 Lakh",
      "mr": "Families with maximum 2 girls and income under Rs. 3 Lakh"
    },
    "benefits": {
      "en": "Rs. 15,000 paid in 6 stages to support girl child education",
      "hi": "Rs. 15,000 paid in 6 stages to support girl child education",
      "mr": "Rs. 15,000 paid in 6 stages to support girl child education"
    },
    "documents_required": [
      "Aadhaar",
      "Income Certificate",
      "Girl's Birth Certificate"
    ],
    "link": "https://mksy.up.gov.in",
    "criteria": {
      "state": "Uttar Pradesh",
      "minAge": 1,
      "maxAge": 30,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 42,
    "name": {
      "en": "UP Scholarship Scheme",
      "hi": "UP Scholarship Scheme",
      "mr": "UP Scholarship Scheme"
    },
    "eligibility": {
      "en": "Students studying in 9th to college level from UP",
      "hi": "Students studying in 9th to college level from UP",
      "mr": "Students studying in 9th to college level from UP"
    },
    "benefits": {
      "en": "Fee reimbursement and direct scholarship for poor students",
      "hi": "Fee reimbursement and direct scholarship for poor students",
      "mr": "Fee reimbursement and direct scholarship for poor students"
    },
    "documents_required": [
      "Aadhaar",
      "Marksheets",
      "Income Certificate",
      "Caste Certificate"
    ],
    "link": "https://scholarship.up.gov.in",
    "criteria": {
      "state": "Uttar Pradesh",
      "minAge": 1,
      "maxAge": 30,
      "income": [
        "low"
      ],
      "occupation": [
        "Student"
      ]
    }
  },
  {
    "id": 43,
    "name": {
      "en": "Mukhyamantri Krishak Durghatna Kalyan Yojana",
      "hi": "Mukhyamantri Krishak Durghatna Kalyan Yojana",
      "mr": "Mukhyamantri Krishak Durghatna Kalyan Yojana"
    },
    "eligibility": {
      "en": "Farmers and tenant farmers facing accidental death or injury",
      "hi": "Farmers and tenant farmers facing accidental death or injury",
      "mr": "Farmers and tenant farmers facing accidental death or injury"
    },
    "benefits": {
      "en": "Up to Rs. 5 Lakh compensation for farmers' death or disability",
      "hi": "Up to Rs. 5 Lakh compensation for farmers' death or disability",
      "mr": "Up to Rs. 5 Lakh compensation for farmers' death or disability"
    },
    "documents_required": [
      "Aadhaar",
      "Death/Disability Certificate",
      "Land Records (Khatauni)"
    ],
    "link": "https://upagripardarshi.gov.in",
    "criteria": {
      "state": "Uttar Pradesh",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer"
      ]
    }
  },
  {
    "id": 44,
    "name": {
      "en": "UP Pension Scheme",
      "hi": "UP Pension Scheme",
      "mr": "UP Pension Scheme"
    },
    "eligibility": {
      "en": "Destitute and poor citizens of UP",
      "hi": "Destitute and poor citizens of UP",
      "mr": "Destitute and poor citizens of UP"
    },
    "benefits": {
      "en": "Monthly pension of Rs. 1000 for elders, widows, and disabled",
      "hi": "Monthly pension of Rs. 1000 for elders, widows, and disabled",
      "mr": "Monthly pension of Rs. 1000 for elders, widows, and disabled"
    },
    "documents_required": [
      "Aadhaar",
      "Income Certificate",
      "Bank Passbook",
      "Age Proof"
    ],
    "link": "https://sspy-up.gov.in",
    "criteria": {
      "state": "Uttar Pradesh",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 45,
    "name": {
      "en": "Bhagya Laxmi Yojana",
      "hi": "Bhagya Laxmi Yojana",
      "mr": "Bhagya Laxmi Yojana"
    },
    "eligibility": {
      "en": "Below poverty line families having a girl child",
      "hi": "Below poverty line families having a girl child",
      "mr": "Below poverty line families having a girl child"
    },
    "benefits": {
      "en": "Rs. 50,000 bond given at girl's birth, matures at age 21",
      "hi": "Rs. 50,000 bond given at girl's birth, matures at age 21",
      "mr": "Rs. 50,000 bond given at girl's birth, matures at age 21"
    },
    "documents_required": [
      "Aadhaar",
      "BPL Ration Card",
      "Birth Certificate of Girl child"
    ],
    "link": "https://mahilakalyan.up.nic.in",
    "criteria": {
      "state": "Uttar Pradesh",
      "minAge": 1,
      "maxAge": 30,
      "income": [
        "low"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 46,
    "name": {
      "en": "Mati Kala Rozgar Yojana",
      "hi": "Mati Kala Rozgar Yojana",
      "mr": "Mati Kala Rozgar Yojana"
    },
    "eligibility": {
      "en": "Artisans and potters making clay products",
      "hi": "Artisans and potters making clay products",
      "mr": "Artisans and potters making clay products"
    },
    "benefits": {
      "en": "Interest-free loans up to Rs. 10 Lakh to traditional potters",
      "hi": "Interest-free loans up to Rs. 10 Lakh to traditional potters",
      "mr": "Interest-free loans up to Rs. 10 Lakh to traditional potters"
    },
    "documents_required": [
      "Aadhaar",
      "Artisan ID Card",
      "Bank details"
    ],
    "link": "https://diupmsme.upsdc.gov.in",
    "criteria": {
      "state": "Uttar Pradesh",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 47,
    "name": {
      "en": "Kisan Asan Kist Yojana",
      "hi": "Kisan Asan Kist Yojana",
      "mr": "Kisan Asan Kist Yojana"
    },
    "eligibility": {
      "en": "Tubewell owners and rural domestic consumers",
      "hi": "Tubewell owners and rural domestic consumers",
      "mr": "Tubewell owners and rural domestic consumers"
    },
    "benefits": {
      "en": "Waiver of surcharge on unpaid rural electricity bills via installments",
      "hi": "Waiver of surcharge on unpaid rural electricity bills via installments",
      "mr": "Waiver of surcharge on unpaid rural electricity bills via installments"
    },
    "documents_required": [
      "Aadhaar",
      "Electricity Bill",
      "Bank Passbook"
    ],
    "link": "https://uppcl.org",
    "criteria": {
      "state": "Uttar Pradesh",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 48,
    "name": {
      "en": "Vishwakarama Shram Samman Yojana",
      "hi": "Vishwakarama Shram Samman Yojana",
      "mr": "Vishwakarama Shram Samman Yojana"
    },
    "eligibility": {
      "en": "Tailors, carpenters, weavers, and barbers aged 18+",
      "hi": "Tailors, carpenters, weavers, and barbers aged 18+",
      "mr": "Tailors, carpenters, weavers, and barbers aged 18+"
    },
    "benefits": {
      "en": "Free training and toolkits provided to traditional workers",
      "hi": "Free training and toolkits provided to traditional workers",
      "mr": "Free training and toolkits provided to traditional workers"
    },
    "documents_required": [
      "Aadhaar",
      "Caste Proof",
      "Skill Certificate (if any)"
    ],
    "link": "https://diupmsme.upsdc.gov.in",
    "criteria": {
      "state": "Uttar Pradesh",
      "minAge": 1,
      "maxAge": 120,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Farmer",
        "Student",
        "Business",
        "Employee",
        "Unemployed",
        "Housewife",
        "Other"
      ]
    }
  },
  {
    "id": 49,
    "name": {
      "en": "Mukhyamantri Abhyudaya Yojana",
      "hi": "Mukhyamantri Abhyudaya Yojana",
      "mr": "Mukhyamantri Abhyudaya Yojana"
    },
    "eligibility": {
      "en": "Meritorious students from economically weak backgrounds",
      "hi": "Meritorious students from economically weak backgrounds",
      "mr": "Meritorious students from economically weak backgrounds"
    },
    "benefits": {
      "en": "Free highly professional coaching for IAS, IPS, and JEE",
      "hi": "Free highly professional coaching for IAS, IPS, and JEE",
      "mr": "Free highly professional coaching for IAS, IPS, and JEE"
    },
    "documents_required": [
      "Aadhaar",
      "Income Proof",
      "Educational Certificates"
    ],
    "link": "https://abhyuday.up.gov.in",
    "criteria": {
      "state": "Uttar Pradesh",
      "minAge": 1,
      "maxAge": 30,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Student"
      ]
    }
  },
  {
    "id": 50,
    "name": {
      "en": "UP Berojgari Bhatta",
      "hi": "UP Berojgari Bhatta",
      "mr": "UP Berojgari Bhatta"
    },
    "eligibility": {
      "en": "Educated unemployed youth registered in employment exchange",
      "hi": "Educated unemployed youth registered in employment exchange",
      "mr": "Educated unemployed youth registered in employment exchange"
    },
    "benefits": {
      "en": "Rs. 1000 to Rs. 1500 monthly unemployment allowance",
      "hi": "Rs. 1000 to Rs. 1500 monthly unemployment allowance",
      "mr": "Rs. 1000 to Rs. 1500 monthly unemployment allowance"
    },
    "documents_required": [
      "Aadhaar",
      "Employment Exchange ID",
      "Educational Degrees"
    ],
    "link": "https://sewayojan.up.nic.in",
    "criteria": {
      "state": "Uttar Pradesh",
      "minAge": 1,
      "maxAge": 30,
      "income": [
        "low",
        "medium",
        "high"
      ],
      "occupation": [
        "Unemployed"
      ]
    }
  }
];

export function getMatchScore(scheme, profile) {
    // 10000% STRICT SCORING LOGIC
    if (!profile) return 0;
    
    // Strict match: State
    if (scheme.criteria.state !== profile.state) return 0;

    // Strict match: Age
    const userAge = parseInt(profile.age, 10) || 0;
    if (userAge < scheme.criteria.minAge || userAge > scheme.criteria.maxAge) return 0;

    // Strict match: Income
    if (profile.income && !scheme.criteria.income.includes(profile.income)) return 0;

    // Strict match: Occupation
    if (profile.occupation && profile.occupation !== "Other" && !scheme.criteria.occupation.includes(profile.occupation)) {
        return 0;
    }

    // ALL Criteria matched PERFECTLY.
    return 100;
}

export default schemes;
