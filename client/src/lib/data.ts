import { Battery, Activity, AlertCircle, Moon, TrendingUp, Zap, Heart, Brain, Smile } from "lucide-react";

export const locations = [
  {
    id: "easton",
    name: "Restore Hyper Wellness - Easton",
    address: "4158 Easton Gateway",
    city: "Columbus",
    state: "OH",
    zip: "43219",
    phone: "614-944-9041",
    hours: "Mon-Fri: 10am-7pm | Sat: 9am-5pm | Sun: 11am-4pm",
    mapUrl: "https://goo.gl/maps/easton",
    image: "/images/location-hero-studio.webp",
    averageRating: 4.9,
    totalReviews: 650,
    specialServices: ["Hyperbaric Oxygen Therapy", "Neveskin Shape, Tone, Facials", "Medical Weight Loss GLP-1", "Hydrafacial"],
    reviews: [
      { author: "Sarah M.", rating: 5, text: "Amazing experience! The staff is incredibly knowledgeable and the cryotherapy session left me feeling energized. Highly recommend Restore!", date: "2 weeks ago" },
      { author: "James T.", rating: 5, text: "Best recovery tool I've found. After my workouts, the compression therapy at Restore has made a huge difference in my performance.", date: "1 month ago" },
      { author: "Maria L.", rating: 5, text: "The IV therapy gave me the energy boost I desperately needed. Professional, clean, and welcoming environment.", date: "3 weeks ago" },
      { author: "David K.", rating: 4, text: "Great facility with knowledgeable staff. The red light therapy is fantastic. Will definitely be back.", date: "1 month ago" },
      { author: "Jessica R.", rating: 5, text: "Restore has become part of my weekly routine. The whole team is supportive and the results speak for themselves!", date: "2 weeks ago" },
      { author: "Michael P.", rating: 5, text: "Outstanding service. The cryotherapy and sauna combination has helped my recovery time significantly.", date: "3 weeks ago" }
    ]
  },
  {
    id: "dublin",
    name: "Restore Hyper Wellness - Dublin",
    address: "6780 Longshore St",
    city: "Dublin",
    state: "OH",
    zip: "43017",
    phone: "614-944-9041",
    hours: "Mon-Fri: 10am-7pm | Sat: 9am-5pm | Sun: 11am-4pm",
    mapUrl: "https://goo.gl/maps/dublin",
    specialServices: ["Hyperbaric Oxygen Therapy", "Neveskin Shape, Tone, Facials", "Medical Weight Loss GLP-1", "Hydrafacial"],
    image: "/images/location-hero-studio.webp",
    averageRating: 4.9,
    totalReviews: 271,
    reviews: [
      { author: "Emily W.", rating: 5, text: "The Dublin location is fantastic! Clean, modern facility with staff that truly cares about your wellness journey.", date: "1 week ago" },
      { author: "Robert G.", rating: 5, text: "I've tried multiple recovery methods, but nothing compares to Restore's combination of therapies. Worth every penny!", date: "2 weeks ago" },
      { author: "Amanda C.", rating: 5, text: "The infrared sauna sessions have completely changed my sleep quality. Highly recommend to anyone in Dublin!", date: "3 days ago" },
      { author: "Chris H.", rating: 5, text: "Professional, knowledgeable, and results-driven. This is the best wellness investment I've made.", date: "1 month ago" },
      { author: "Lisa N.", rating: 4, text: "Great experience overall. The team is friendly and the facilities are top-notch. Minor wait times during peak hours.", date: "2 weeks ago" },
      { author: "Tom B.", rating: 5, text: "Restore Dublin is my go-to for post-workout recovery. The compression therapy is incredible!", date: "1 week ago" }
    ]
  },
  {
    id: "upper-arlington",
    name: "Restore Hyper Wellness - Upper Arlington",
    address: "3094 Kingsdale Center",
    city: "Upper Arlington",
    state: "OH",
    zip: "43221",
    phone: "614-745-0966",
    hours: "Monday: Closed | Tues-Fri: 10am-6pm | Sat: 10am-5pm | Sun: 11am-4pm",
    mapUrl: "https://goo.gl/maps/ua",
    specialServices: ["Hyperbaric Oxygen Therapy", "Neveskin Shape, Tone, Facials", "Medical Weight Loss GLP-1"],
    image: "/images/location-hero-studio.webp",
    averageRating: 5.0,
    totalReviews: 79,
    reviews: [
      { author: "Nicole S.", rating: 5, text: "Upper Arlington location is perfect for my schedule. The IV therapy sessions have boosted my energy levels significantly!", date: "1 week ago" },
      { author: "Kevin M.", rating: 5, text: "Exceptional service and results. The staff goes above and beyond to make you feel welcome.", date: "2 weeks ago" },
      { author: "Rachel T.", rating: 5, text: "Finally found a wellness center that delivers on its promises. Restore is a game-changer!", date: "3 days ago" },
      { author: "Brandon L.", rating: 4, text: "Great facility with knowledgeable therapists. The cryotherapy is top-notch. Membership is worth it.", date: "1 month ago" },
      { author: "Sophie K.", rating: 5, text: "The red light therapy and sauna combination has transformed my skin and energy. Highly recommended!", date: "2 weeks ago" },
      { author: "Aaron J.", rating: 5, text: "Best investment in my health. The team at Upper Arlington is professional and results-focused.", date: "1 week ago" }
    ]
  }
];

// Problem-First Discovery Pages
export const problemStates = [
  {
    id: "fatigue-burnout",
    title: "Fatigue & Burnout",
    description: "Combat chronic exhaustion and reclaim your energy",
    icon: Battery,
    problem: "You're running on empty. Whether it's work stress, poor sleep, or lifestyle demands, you're exhausted and struggling to keep up.",
    solution: "Our energy-restoration therapies replenish cellular function and optimize your nervous system.",
    recommendedServices: ["iv-drip", "nad-iv", "red-light", "infrared-sauna"],
    image: "/images/hero-wellness-columbus.jpg"
  },
  {
    id: "athletic-recovery",
    title: "Athletic Recovery",
    description: "Recover faster and perform at your peak",
    icon: Activity,
    problem: "You train hard but recover slow. Soreness, inflammation, and fatigue are limiting your performance and progress.",
    solution: "Our recovery-focused therapies reduce inflammation, accelerate muscle repair, and optimize your training window.",
    recommendedServices: ["cryotherapy", "compression", "infrared-sauna", "mhbot"],
    image: "/images/cryotherapy-session.jpg"
  },
  {
    id: "pain-inflammation",
    title: "Pain & Inflammation",
    description: "Reduce chronic pain without relying on medications",
    icon: AlertCircle,
    problem: "Chronic pain or inflammation is affecting your quality of life. You want relief that doesn't come from a pill bottle.",
    solution: "Our anti-inflammatory therapies target the root cause of pain and promote natural healing.",
    recommendedServices: ["cryotherapy", "red-light", "infrared-sauna", "iv-drip"],
    image: "/images/red-light-official.webp"
  },
  {
    id: "stress-sleep",
    title: "Stress & Sleep",
    description: "Reduce stress and sleep deeper",
    icon: Moon,
    problem: "You're stressed, anxious, and your sleep quality is suffering. You wake up exhausted and the cycle continues.",
    solution: "Our nervous system-balancing therapies reduce cortisol, promote relaxation, and improve sleep architecture.",
    recommendedServices: ["infrared-sauna", "red-light", "cryotherapy", "nad-iv"],
    image: "/images/sauna-official.jpg"
  },
  {
    id: "mens-health",
    title: "Men's Health & Optimization",
    description: "Optimize testosterone, strength, and vitality",
    icon: TrendingUp,
    problem: "Your energy, libido, and muscle mass are declining. You want to optimize your hormones and feel like yourself again.",
    solution: "Our men's health protocols include TRT, performance optimization, and recovery-focused therapies.",
    recommendedServices: ["trt", "nad-iv", "cryotherapy", "compression"],
    image: "/images/iv-drip-lounge.jpg"
  },
  {
    id: "womens-wellness",
    title: "Women's Wellness & Vitality",
    description: "Optimize hormones, energy, and radiance",
    icon: Heart,
    problem: "Hormonal imbalances, low energy, and aging concerns are affecting your confidence and quality of life. You want to feel vibrant and like yourself again.",
    solution: "Our women's wellness protocols optimize hormonal balance, enhance energy, and support skin health and longevity.",
    recommendedServices: ["nad-iv", "red-light", "infrared-sauna", "iv-drip"],
    image: "/images/red-light-official.webp"
  }
];

export const memberships = [
  {
    id: "level-up",
    name: "Level Up",
    price: 170,
    value: 336,
    savings: 166,
    credits: 8,
    perTherapy: 21.25,
    benefits: [
      "8 monthly credits for Core Therapies",
      "1 Credit = 1 Core Therapy (Cryo, Sauna, Compression, Red Light)",
      "4 Credits = IV Drip with 2 Signature Nutrients",
      "30% off retail for Specialty Services",
      "Access to Members-Only events",
      "Use credits at any Restore location nationwide",
      "Book anytime, Pause anytime"
    ],
    isPopular: false,
    features: [
      "8 monthly credits",
      "Core Therapy access",
      "IV Drip redemption",
      "30% retail Specialty discount",
      "Members-Only events",
      "Nationwide access"
    ],
    description: "Perfect for getting started with consistent wellness"
  },
  {
    id: "elevate",
    name: "Elevate",
    price: 260,
    value: 588,
    savings: 328,
    credits: 14,
    perTherapy: 18.57,
    benefits: [
      "14 monthly credits for Core Therapies",
      "1 Credit = 1 Core Therapy (Cryo, Sauna, Compression, Red Light)",
      "4 Credits = IV Drip with 2 Signature Nutrients",
      "30% off retail for Specialty Services",
      "Access to Members-Only events",
      "Use credits at any Restore location nationwide",
      "Book anytime, Pause anytime"
    ],
    isPopular: true,
    features: [
      "14 monthly credits",
      "Core Therapy access",
      "IV Drip redemption",
      "30% retail Specialty discount",
      "Members-Only events",
      "Nationwide access"
    ],
    description: "Most popular - consistent wellness with flexibility"
  },
  {
    id: "core",
    name: "Core",
    price: 300,
    value: 1302,
    savings: 1002,
    credits: 31,
    perTherapy: 9.68,
    benefits: [
      "31 monthly credits for Core Therapies",
      "1 Credit = 1 Core Therapy (Cryo, Sauna, Compression, Red Light)",
      "Access to core modalities",
      "30% off retail for Specialty Services",
      "Access to Members-Only events",
      "Use credits at any Restore location nationwide",
      "Book anytime, Pause anytime",
      "Priority booking"
    ],
    isPopular: false,
    features: [
      "31 monthly credits",
      "Core Therapy access",
      "30% retail Specialty discount",
      "Members-Only events",
      "Nationwide access",
      "Priority booking"
    ],
    description: "Maximum benefits for serious wellness enthusiasts"
  }
];

// IV Menu Data
export const ivMenu = {
  drips: [
    { id: "wonder-juice", name: "Wonder Juice", category: "Energy", description: "A powerful blend to keep you focused and strong.", ingredients: ["Glutathione", "B12", "L-Carnitine", "Glutamine", "Vitamin C", "B Complex"], memberPrice: 161, retailPrice: 203 },
    { id: "recharge", name: "Recharge", category: "Recovery", description: "Revitalize from the inside out for a total body reset.", ingredients: ["Glutathione", "Proline", "Taurine", "Vitamin C"], memberPrice: 144, retailPrice: 181 },
    { id: "defender", name: "Defender", category: "Immunity", description: "Keeps your system resilient and ready for anything.", ingredients: ["Glutathione", "B12", "Taurine", "Lysine", "2x Vitamin C", "Zinc"], memberPrice: 210, retailPrice: 265 },
    { id: "amplified-beauty", name: "Amplified Beauty", category: "Skin Health", description: "Nourish your skin from within for a healthy, youthful glow.", ingredients: ["Glutathione", "Magnesium", "B12", "Biotin", "Lysine", "Glutamine", "Proline", "2x Vitamin C", "B Complex"], memberPrice: 276, retailPrice: 349 },
    { id: "fog-lifter", name: "Fog Lifter", category: "Brain Health", description: "Sharpens focus to keep your mind clear and energized.", ingredients: ["Glutathione", "B12", "Taurine", "B Complex"], memberPrice: 144, retailPrice: 181 },
    { id: "the-edge", name: "The Edge", category: "Athletic Performance", description: "Fuels endurance, reduces fatigue so you can train harder.", ingredients: ["Magnesium", "B12", "L-Carnitine", "Taurine", "Glutamine", "Proline"], memberPrice: 188, retailPrice: 237 },
    { id: "lose-it", name: "Lose It", category: "Weight Management", description: "Fire up your metabolism and convert stored energy into fuel.", ingredients: ["Magnesium", "B12", "L-Carnitine", "Proline", "B Complex"], memberPrice: 166, retailPrice: 209 },
    { id: "unstoppable", name: "Unstoppable", category: "Athletic Performance", description: "Get supercharged for peak performance clarity.", ingredients: ["B12", "2x Taurine", "L-Carnitine", "2x B Complex"], memberPrice: 188, retailPrice: 237 },
    { id: "new-myers", name: "New Myers", category: "Stress & Recovery", description: "Works to combat stress, fatigue and inflammation.", ingredients: ["Glutathione", "Magnesium", "Zinc", "2x Vitamin C", "B Complex"], memberPrice: 188, retailPrice: 237 },
    { id: "hangover", name: "Hangover", category: "Recovery", description: "Go from rough to refreshed in no time.", ingredients: ["Glutathione", "Magnesium", "Vitamin C", "Toradol", "B12", "Zofran", "B Complex"], memberPrice: 210, retailPrice: 265 },
    { id: "cold-flu", name: "Cold & Flu", category: "Immunity", description: "Fast-acting support when you need it most.", ingredients: ["Glutathione", "Vitamin D", "2x Vitamin C", "Toradol", "B12", "Zinc"], memberPrice: 210, retailPrice: 265 }
  ],
  nutrients: {
    signature: [
      { name: "Amino Blend", benefit: "Performance", description: "Supports the function of healthy joints and muscles.", memberPrice: 19, retailPrice: 24 },
      { name: "B5", benefit: "Metabolism", description: "Helps break down fats, proteins and carbs for energy.", memberPrice: 19, retailPrice: 24 },
      { name: "B6", benefit: "Mood", description: "Supports brain health and may help regulate mood.", memberPrice: 19, retailPrice: 24 },
      { name: "B12", benefit: "Energy", description: "Aids in energy production and red blood cell formation.", memberPrice: 19, retailPrice: 24 },
      { name: "B Complex", benefit: "Energy, Stress Reliever", description: "Increases energy and reduces stress.", memberPrice: 19, retailPrice: 24 },
      { name: "Biotin", benefit: "Metabolism", description: "Supports metabolic health and helps stabilize blood sugar.", memberPrice: 19, retailPrice: 24 },
      { name: "Vitamin C", benefit: "Cellular Health", description: "Reduces cellular damage caused by environmental stress.", memberPrice: 19, retailPrice: 24 },
      { name: "Vitamin D", benefit: "Bone Health", description: "Helps the body absorb and retain calcium.", memberPrice: 19, retailPrice: 24 },
      { name: "Glutamine", benefit: "Recovery", description: "Helps improve muscle recovery and fights fatigue.", memberPrice: 19, retailPrice: 24 },
      { name: "Glutathione", benefit: "Cellular Health", description: "A potent antioxidant that helps reduce cellular damage.", memberPrice: 19, retailPrice: 24 },
      { name: "L-Carnitine", benefit: "Fat Burner", description: "Helps support optimal body composition.", memberPrice: 19, retailPrice: 24 },
      { name: "Lysine", benefit: "Tissue Health", description: "Helps maintain healthy muscles and connective tissue.", memberPrice: 19, retailPrice: 24 },
      { name: "Magnesium Sulfate", benefit: "Relaxation", description: "Mineral that supports muscle and nerve health.", memberPrice: 19, retailPrice: 24 },
      { name: "NAC", benefit: "Improves Resilience", description: "Reduce cellular damage, stressors and free radicals.", memberPrice: 19, retailPrice: 24 },
      { name: "Proline", benefit: "Skin Health", description: "Essential for collagen production.", memberPrice: 19, retailPrice: 24 },
      { name: "Taurine", benefit: "Heart Health", description: "Amino acid that supports cardiovascular health.", memberPrice: 19, retailPrice: 24 },
      { name: "Toradol", benefit: "Anti-Inflammatory", description: "Relieves discomfort from headaches and migraines.", memberPrice: 19, retailPrice: 24 },
      { name: "Zinc", benefit: "Immune Support", description: "Boosts sleep quality, immunity and metabolic function.", memberPrice: 19, retailPrice: 24 },
      { name: "Zofran", benefit: "Anti-Nausea", description: "Reduces feelings of nausea and may prevent vomiting.", memberPrice: 19, retailPrice: 24 }
    ],
    premium: [
      { name: "ALA (Alpha-Lipoic Acid)", benefit: "Weight Management", description: "A potent antioxidant that may help manage weight.", memberPrice: 38, retailPrice: 48 },
      { name: "Trace Elements", benefit: "Recharge", description: "Helps recharge and maximize natural defenses (Zinc, Copper, Selenium & Manganese).", memberPrice: 38, retailPrice: 48 },
      { name: "Extra 500 mL Hydration", benefit: "Hydration", description: "Assists recent dehydration with additional support.", memberPrice: 38, retailPrice: 48 }
    ]
  },
  imShots: {
    signature: [
      { name: "Amino Blend", benefit: "Performance", description: "Supports the function of healthy joints and muscles.", memberPrice: 27, retailPrice: 42 },
      { name: "B12", benefit: "Energy", description: "Aids in energy production and red blood cell formation.", memberPrice: 27, retailPrice: 42 },
      { name: "B Complex", benefit: "Energy, Stress Reliever", description: "Increases energy and reduces stress.", memberPrice: 27, retailPrice: 42 },
      { name: "Biotin", benefit: "Metabolism", description: "Supports metabolic health and helps stabilize blood sugar.", memberPrice: 27, retailPrice: 42 },
      { name: "Vitamin D3", benefit: "Bone Health", description: "Helps the body absorb and retain calcium.", memberPrice: 27, retailPrice: 42 },
      { name: "L-Carnitine", benefit: "Fat Burner", description: "Helps support optimal body composition.", memberPrice: 27, retailPrice: 42 },
      { name: "Toradol", benefit: "Anti-Inflammatory", description: "Relieves discomfort from headaches and migraines.", memberPrice: 27, retailPrice: 42 },
      { name: "Zofran", benefit: "Anti-Nausea", description: "Reduces feelings of nausea and may prevent vomiting.", memberPrice: 27, retailPrice: 42 },
      { name: "CoQ10", benefit: "Heart Health", description: "Supports cardiovascular health and blood sugar regulation.", memberPrice: 27, retailPrice: 42 },
      { name: "Lipo", benefit: "Metabolism", description: "Helps boost the body's metabolic power.", memberPrice: 27, retailPrice: 42 },
      { name: "Tri-Immune Blend", benefit: "Immune Support", description: "Helps build resilience; supports the body's immune response.", memberPrice: 27, retailPrice: 42 }
    ],
    premium: [
      { name: "B12 + B Complex", benefit: "Energy & Mood", description: "Improves energy, mood and response to stress.", memberPrice: 35, retailPrice: 50 },
      { name: "Lipo + B12", benefit: "Energy & Metabolism", description: "Improves energy levels and supports metabolic health.", memberPrice: 35, retailPrice: 50 }
    ]
  }
};

// Services with UNIQUE images - NO DUPLICATES
export const services = [
  // Core Therapies
  {
    id: "cryotherapy",
    title: "Cryotherapy",
    shortDesc: "Submerge your body in sub-zero temps for 3 minutes to boost mood and reduce inflammation.",
    fullDesc: "Whole-body cryotherapy exposes your body to extreme cold (between -200°F and -300°F) for 2-3 minutes. This triggers a powerful healing response throughout your body.",
    whatToExpect: "You'll enter a specialized chamber wearing protective gear. The experience is invigorating, not painful. Most people feel energized immediately after.",
    benefits: ["Reduce inflammation and pain", "Boost mood and energy", "Speed athletic recovery", "Improve sleep quality", "Enhance immune function"],
    whoItsFor: ["Athletes and weekend warriors", "People with chronic pain", "Anyone recovering from injury", "Those seeking mood and energy boost"],
    whoItsNotFor: ["Pregnant women", "People with severe hypertension", "Those with cold sensitivity"],
    pricing: "Member $27 | Retail $42",
    icon: Zap,
    image: "/images/service_07_Woman_wearing_protective_robe,.webp",
    category: "Recovery",
    faqs: [
      {
        q: "Is it painful?",
        a: "No. The extreme cold is invigorating, not painful. Your body adapts quickly. Most people feel energized and refreshed."
      },
      {
        q: "How often should I do this?",
        a: "2-3 times per week for athletic recovery. 1-2 times per week for general wellness. Consistency matters more than frequency."
      },
      {
        q: "What should I wear?",
        a: "We provide protective gear (gloves, socks, headband). You wear minimal clothing inside the chamber."
      },
      {
        q: "When will I see results?",
        a: "Immediate: mood boost, energy increase. Short-term (1-2 weeks): reduced inflammation. Long-term (4+ weeks): improved recovery and sleep."
      }
    ]
  },
  {
    id: "infrared-sauna",
    title: "Infrared Sauna",
    shortDesc: "30-45 minute detox session that increases core body temperature for deep healing.",
    fullDesc: "Infrared sauna uses light waves to penetrate skin and increase core body temperature. Unlike traditional saunas, infrared saunas operate at lower temperatures (120-150°F) but deliver deeper therapeutic benefits.",
    whatToExpect: "You'll sit in a private sauna pod for 30-45 minutes. The experience is deeply relaxing. You'll sweat profusely and feel rejuvenated afterward.",
    benefits: ["Deep detoxification", "Improve cardiovascular health", "Reduce muscle soreness", "Boost immune function", "Promote relaxation and sleep", "Support skin health"],
    whoItsFor: ["Anyone seeking detox", "People with muscle soreness", "Those with stress or anxiety", "Anyone wanting better sleep", "Athletes in recovery"],
    whoItsNotFor: ["Pregnant women", "People with fever or acute illness", "Those with certain heart conditions"],
    pricing: "Member $27 | Retail $42",
    icon: Heart,
    image: "/images/service_09_Woman_relaxing_in_an_infrared_.webp",
    category: "Wellness",
    faqs: [
      {
        q: "How much will I sweat?",
        a: "Significantly more than traditional saunas. This is normal and beneficial. Bring a towel and stay hydrated."
      },
      {
        q: "Is it safe?",
        a: "Yes. Infrared saunas are very safe. We monitor temperature and provide emergency call buttons. Tell us about any health conditions."
      },
      {
        q: "How often should I use it?",
        a: "2-4 times per week for optimal detox benefits. Even once per week provides significant wellness benefits."
      },
      {
        q: "What's the difference from a regular sauna?",
        a: "Infrared penetrates deeper into tissue, operates at lower temps, and provides superior detox and recovery benefits."
      }
    ]
  },
  {
    id: "red-light",
    title: "Red Light Therapy",
    shortDesc: "15-20 minute light therapy session that boosts cellular energy and promotes healing.",
    fullDesc: "Red light therapy uses specific wavelengths of red and near-infrared light to stimulate mitochondrial function and ATP production at the cellular level.",
    whatToExpect: "You'll stand in front of a red light panel for 15-20 minutes. The experience is passive and relaxing. No heat, no discomfort.",
    benefits: ["Boost cellular energy (ATP)", "Reduce inflammation", "Improve skin health and collagen", "Enhance athletic recovery", "Support cognitive function", "Promote wound healing"],
    whoItsFor: ["Athletes seeking recovery", "Anyone with inflammation", "People wanting skin rejuvenation", "Those seeking cognitive boost", "Anyone with joint pain"],
    whoItsNotFor: ["People taking light-sensitive medications", "Those with certain eye conditions"],
    pricing: "Member $27 | Retail $42",
    icon: Zap,
    image: "/images/service_08_Woman_with_her_hands_above_her.webp",
    category: "Wellness",
    faqs: [
      {
        q: "Will it burn my skin?",
        a: "No. Red light therapy is safe and non-invasive. There's no heat or UV radiation. Completely safe for all skin types."
      },
      {
        q: "How often should I do this?",
        a: "3-5 times per week for athletic recovery. 2-3 times per week for general wellness and skin health."
      },
      {
        q: "When will I see skin results?",
        a: "Immediate glow after first session. Collagen production takes 4-6 weeks. Cumulative results improve over time."
      },
      {
        q: "Can I combine with other therapies?",
        a: "Absolutely. Red light pairs well with cryotherapy, sauna, and IV therapy for comprehensive wellness."
      }
    ]
  },
  {
    id: "compression",
    title: "Compression Therapy",
    shortDesc: "30-minute compression session that flushes metabolic waste and accelerates recovery.",
    fullDesc: "Compression therapy uses sequential air pressure to move blood and lymphatic fluid through your limbs, flushing metabolic waste and accelerating recovery.",
    whatToExpect: "You'll wear compression sleeves or boots. Air chambers inflate and deflate sequentially for 30 minutes. The sensation is like a massage. Very relaxing.",
    benefits: ["Accelerate athletic recovery", "Reduce muscle soreness", "Improve circulation", "Flush metabolic waste", "Reduce swelling", "Enhance performance"],
    whoItsFor: ["Athletes and active people", "Anyone with muscle soreness", "People with poor circulation", "Those recovering from injury", "Weekend warriors"],
    whoItsNotFor: ["People with blood clots", "Those with severe edema", "Pregnant women"],
    pricing: "Member $27 | Retail $42",
    icon: Heart,
    image: "/images/service_10_A_man_wearing_Normatec_compres.webp",
    category: "Recovery",
    faqs: [
      {
        q: "Is it uncomfortable?",
        a: "No. Most people find it very relaxing. The sensation is like a gentle massage. You can read or relax during the session."
      },
      {
        q: "How often should I use it?",
        a: "2-3 times per week after intense training. Once per week for general recovery and circulation benefits."
      },
      {
        q: "When will I feel better?",
        a: "Immediately after. You'll feel less sore and more mobile. Cumulative benefits improve with consistent use."
      },
      {
        q: "Can I use it before or after workouts?",
        a: "Both. Use after workouts for recovery. Use before for circulation and performance enhancement."
      }
    ]
  },
  {
    id: "iv-drip",
    title: "IV Therapy",
    shortDesc: "30-45 minute IV infusion delivering nutrients directly to your bloodstream.",
    fullDesc: "IV therapy delivers vitamins, minerals, and amino acids directly into your bloodstream, bypassing the digestive system for 100% absorption and immediate results.",
    whatToExpect: "A nurse will insert an IV catheter (quick, minimal discomfort). You'll relax in a comfortable chair for 30-45 minutes while nutrients infuse. Most people feel energized immediately.",
    benefits: ["100% nutrient absorption", "Immediate energy boost", "Enhanced immune function", "Improved hydration", "Faster recovery", "Better cognitive function"],
    whoItsFor: ["Anyone seeking energy boost", "Athletes in recovery", "People with nutrient deficiencies", "Those fighting illness", "Anyone wanting optimization"],
    whoItsNotFor: ["People with certain kidney conditions", "Those with needle phobia (though we can help)"],
    pricing: "Starting at Member $144 | Retail $181",
    icon: Heart,
    image: "/images/service_11_Young_couple_relaxing_while_en.webp",
    category: "Optimization",
    faqs: [
      {
        q: "Does the IV hurt?",
        a: "Minimal discomfort. Our nurses are experts. Most people say it's less uncomfortable than they expected."
      },
      {
        q: "What's in the IV?",
        a: "We offer signature blends (Energy, Immunity, Recovery) plus custom formulations. All ingredients are pharmaceutical-grade."
      },
      {
        q: "When will I feel results?",
        a: "Many people feel results within 30 minutes. Energy boost, mental clarity, and hydration improvements are common."
      },
      {
        q: "How often can I get IV therapy?",
        a: "Weekly is common for athletes. Monthly is standard for general wellness. We'll customize based on your goals."
      }
    ]
  },
  {
    id: "nad-iv",
    title: "NAD+ IV Therapy",
    shortDesc: "Advanced cellular rejuvenation therapy that restores cellular energy and supports longevity.",
    fullDesc: "NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme that declines with age. NAD+ IV therapy restores this critical molecule, supporting cellular energy, DNA repair, and longevity.",
    whatToExpect: "Similar to standard IV therapy but with a longer infusion time (60-90 minutes). You'll feel deeply relaxed. Many people report profound energy and mental clarity afterward.",
    benefits: ["Restore cellular energy", "Support DNA repair", "Enhance cognitive function", "Improve athletic performance", "Support addiction recovery", "Promote longevity"],
    whoItsFor: ["Anyone over 40", "Athletes seeking performance", "People with cognitive concerns", "Those seeking longevity", "Anyone in recovery"],
    whoItsNotFor: ["Pregnant women", "People with certain medical conditions"],
    pricing: "500 mg | $440 | $550 || 750 mg | $530 | $670 || 125 mg Add-On | $110 | $138 || 125 mg IM | $115 | $144",
    icon: Brain,
    image: "/images/service_12_Smiling_woman_receiving_a_NAD+.webp",
    category: "Longevity",
    faqs: [
      {
        q: "Is NAD+ therapy worth it?",
        a: "Yes, if you're serious about longevity and performance. Results compound over time. Most people do 4-6 sessions to assess benefits."
      },
      {
        q: "How long does it take?",
        a: "60-90 minutes per session. Longer than standard IV therapy but the benefits justify the time investment."
      },
      {
        q: "When will I feel results?",
        a: "Some people feel results during the infusion. Most notice significant energy and clarity within 24-48 hours."
      },
      {
        q: "How often should I do this?",
        a: "Weekly for intensive protocols. Monthly for maintenance. We'll recommend based on your goals and budget."
      }
    ]
  },
  {
    id: "niagen-nr-iv",
    title: "Niagen (NR) IV Drips",
    shortDesc: "Superior NAD+ precursor therapy with 75% faster infusion and fewer side effects than traditional NAD+.",
    fullDesc: "Niagen (NR) is a pharmaceutical-grade precursor to NAD+ that provides superior cellular energy and longevity benefits. Unlike traditional NAD+ therapy, Niagen (NR) is naturally present in the body, resulting in faster infusion times (30-45 minutes), fewer adverse effects, and more efficient NAD+ production at the cellular level.",
    whatToExpect: "A nurse will insert an IV catheter and take your vital signs. You'll relax in a comfortable chair for 30-45 minutes while the Niagen (NR) infuses. Many people enjoy reading, working, or listening to podcasts. After your session, you can enjoy a complimentary cleansing IV infusion to support recovery and immunity.",
    benefits: ["Improved cellular and metabolic health", "Enhanced cellular energy to combat fatigue", "Reduced oxidative stress for faster recovery", "Decreased inflammation for healthier aging", "Boosted cognitive function", "75% faster than traditional NAD+ therapy"],
    whoItsFor: ["Anyone seeking NAD+ benefits", "People wanting faster infusion times", "Those sensitive to NAD+ side effects", "Athletes seeking recovery", "Anyone over 40 seeking longevity"],
    whoItsNotFor: ["Pregnant women", "People with certain medical conditions"],
    pricing: "500 mg | $690 | $860 || 1000 mg | $1,380 | $1,720 || 125 mg Add-On | $173 | $215 || 125 mg IM | $205 | $245",
    icon: Zap,
    image: "/images/service_12_Smiling_woman_receiving_a_NAD+.webp",
    category: "Longevity",
    faqs: [
      {
        q: "How is Niagen (NR) different from NAD+?",
        a: "Niagen (NR) is a natural precursor to NAD+ that converts naturally in your cells. It provides 20% higher NAD+ levels at the 3-hour mark compared to baseline, with fewer adverse effects like headaches and nausea. The infusion is also 75% faster (30-45 minutes vs 60-90 minutes)."
      },
      {
        q: "Is Niagen (NR) safe?",
        a: "Yes. Niagen is a pharmaceutical-grade, patented form of nicotinamide riboside (NR). It's naturally present in foods and the body, making it well-tolerated with minimal side effects. All infusions are administered by licensed nurses."
      },
      {
        q: "What are the benefits of Niagen (NR)?",
        a: "Benefits include improved cellular energy, enhanced metabolism, reduced oxidative stress, decreased inflammation, boosted cognitive function, and support for athletic recovery and longevity. Results typically compound over multiple sessions."
      },
      {
        q: "How often should I do Niagen (NR) therapy?",
        a: "We recommend up to 4,000mg within 28 days for optimal results. This could be 1-4 sessions depending on your goals. Many clients do weekly sessions initially, then transition to monthly maintenance."
      },
      {
        q: "When will I feel results?",
        a: "Some people feel increased energy and mental clarity during or immediately after the infusion. Most notice significant improvements in energy, focus, and recovery within 24-48 hours. Benefits compound with consistent sessions."
      }
    ]
  },
  {
    id: "trt",
    title: "Testosterone Replacement Therapy (TRT)",
    shortDesc: "Medically-supervised hormone optimization for men seeking vitality and performance.",
    fullDesc: "TRT is a medically-supervised treatment that restores testosterone to optimal levels for men with deficiency. Our doctors customize protocols based on individual labs and goals.",
    whatToExpect: "Initial consultation with labs. Weekly or bi-weekly injections (self-administered at home). Regular monitoring and adjustments. Comprehensive support throughout.",
    benefits: ["Restore energy and vitality", "Improve muscle mass and strength", "Enhance libido and sexual function", "Improve mood and confidence", "Support cognitive function", "Increase athletic performance"],
    whoItsFor: ["Men with low testosterone", "Men over 40 seeking optimization", "Those with fatigue or low libido", "Athletes seeking performance", "Men wanting vitality"],
    whoItsNotFor: ["Men with prostate cancer", "Those with certain heart conditions", "Men not willing to commit to monitoring"],
    pricing: "Consultation + labs required | Ongoing monthly cost | Membership credits don't apply",
    icon: TrendingUp,
    image: "/images/service_13_A_man_receiving_an_intramuscul.webp",
    category: "Men's Health",
    faqs: [
      {
        q: "Is TRT safe?",
        a: "Yes, when medically supervised. We monitor labs regularly and adjust dosages. Our doctors have extensive TRT experience."
      },
      {
        q: "Will I need injections forever?",
        a: "Most likely. TRT is typically a long-term commitment. We'll discuss all options during consultation."
      },
      {
        q: "How long until I feel results?",
        a: "Energy and mood: 2-4 weeks. Muscle and strength: 8-12 weeks. Sexual function: 4-8 weeks. Results compound over time."
      },
      {
        q: "What about side effects?",
        a: "Minimal when properly dosed and monitored. We screen for and manage any potential issues proactively."
      }
    ]
  },
  {
    id: "im-shots",
    title: "IM Shots (Intramuscular Injections)",
    shortDesc: "Quick nutrient injections for targeted wellness benefits.",
    fullDesc: "IM shots deliver concentrated nutrients directly into muscle tissue for rapid absorption and targeted benefits. Popular options include B12, Vitamin D, Glutathione, and more.",
    whatToExpect: "Quick injection (30 seconds). Minimal discomfort. Immediate absorption. You're done in minutes.",
    benefits: ["Rapid nutrient delivery", "Energy boost (B12)", "Immune support (Vitamin D)", "Detoxification (Glutathione)", "Quick and convenient", "Affordable"],
    whoItsFor: ["Anyone seeking quick boost", "People with B12 deficiency", "Those wanting immune support", "Athletes seeking recovery", "Busy professionals"],
    whoItsNotFor: ["People with needle phobia", "Those with certain allergies"],
    pricing: "Starting at $30 per shot",
    icon: Zap,
    image: "/images/service_14_NAD+_IM_Shot_vials.webp",
    category: "Optimization",
    faqs: [
      {
        q: "Which shot should I get?",
        a: "B12 for energy, Vitamin D for immunity, Glutathione for detox. We'll recommend based on your goals."
      },
      {
        q: "How often can I get shots?",
        a: "Weekly is common for B12. Monthly for others. We'll customize based on your needs."
      },
      {
        q: "When will I feel results?",
        a: "B12: within hours to days. Others: 24-48 hours. Results compound with regular use."
      },
      {
        q: "Are they safe?",
        a: "Yes. All ingredients are pharmaceutical-grade. Minimal side effects when administered by trained professionals."
      }
    ]
  },
  // Skin Health Services
  {
    id: "hydrafacial",
    title: "HydraFacial",
    shortDesc: "Advanced hydrating facial that removes impurities and infuses serums for glowing skin.",
    fullDesc: "HydraFacial uses patented vortex-fusion technology to cleanse, extract, and hydrate skin with customized serums. Results are visible immediately.",
    whatToExpect: "30-45 minute facial. Gentle suction sensation. Skin feels incredibly smooth and hydrated. No downtime.",
    benefits: ["Remove clogged pores", "Reduce wrinkles and fine lines", "Improve skin firmness", "Hydrate deeply", "Brighten complexion", "Reduce hyperpigmentation"],
    whoItsFor: ["Anyone with dull skin", "People with clogged pores", "Those with fine lines", "Anyone seeking glow", "All skin types"],
    whoItsNotFor: ["Those with active acne", "People with severe rosacea"],
    pricing: "Member $150-$280 | Retail $190-$340",
    icon: Smile,
    image: "/images/service_17_Relaxed_woman_receiving_a_Hydr.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "Is it painful?",
        a: "No. Most people find it relaxing. The sensation is like a gentle massage with light suction."
      },
      {
        q: "When will I see results?",
        a: "Immediately. Skin looks brighter and feels smoother right after. Cumulative results improve with regular treatments."
      },
      {
        q: "How often should I get this?",
        a: "Monthly is ideal for best results. Every 4-6 weeks for maintenance."
      },
      {
        q: "Can I wear makeup after?",
        a: "Yes. No downtime. You can go back to work or social plans immediately."
      }
    ]
  },
  {
    id: "neveskin",
    title: "Neveskin Facial",
    shortDesc: "Advanced radiofrequency facial that tightens and rejuvenates skin.",
    fullDesc: "Neveskin uses radiofrequency technology to stimulate collagen production, tighten skin, and reduce signs of aging.",
    whatToExpect: "30-45 minute facial. Warm sensation. Skin feels tighter and looks more youthful immediately.",
    benefits: ["Reduce signs of aging", "Tighten and firm skin", "Increase blood flow", "Stimulate collagen", "Improve skin texture", "Non-invasive alternative to surgery"],
    whoItsFor: ["Anyone over 30", "People seeking anti-aging", "Those with loose skin", "Anyone wanting natural lift", "People avoiding surgery"],
    whoItsNotFor: ["Pregnant women", "Those with certain implants"],
    pricing: "Member $180 | Retail $220",
    icon: Smile,
    image: "/images/service_18_neveskin_facial.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "Is it painful?",
        a: "No. Warm sensation but not painful. Most people find it relaxing."
      },
      {
        q: "When will I see results?",
        a: "Immediate tightening. Collagen production takes 4-6 weeks. Best results after 3-6 treatments."
      },
      {
        q: "How often should I get this?",
        a: "Monthly for best results. Every 6-8 weeks for maintenance."
      },
      {
        q: "Is this like a facelift?",
        a: "It's a non-invasive alternative. Results are subtle but significant over time. No surgery, no downtime."
      }
    ]
  },
  {
    id: "neveskin-shape",
    title: "Neveskin Shape",
    shortDesc: "Body contouring treatment that reduces dimpling and improves skin texture.",
    fullDesc: "Neveskin Shape uses advanced radiofrequency to target cellulite and body dimpling, improving skin texture and appearance.",
    whatToExpect: "30-45 minute treatment. Warm sensation. Skin looks smoother immediately.",
    benefits: ["Reduce cellulite appearance", "Improve skin texture", "Tighten loose skin", "Enhance body contours", "Non-invasive body sculpting"],
    whoItsFor: ["Anyone with cellulite", "People seeking body contouring", "Those wanting skin tightening", "Anyone avoiding surgery"],
    whoItsNotFor: ["Pregnant women", "Those with certain implants"],
    pricing: "Member $280 | Retail $340",
    icon: Smile,
    image: "/images/service_19_neveskin_shape.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "Will this eliminate cellulite?",
        a: "It significantly reduces appearance. Most people see 50-70% improvement with consistent treatments."
      },
      {
        q: "How many treatments do I need?",
        a: "6-8 treatments recommended for best results. Maintenance treatments every 6-8 weeks."
      },
      {
        q: "Is there downtime?",
        a: "No. You can resume normal activities immediately."
      },
      {
        q: "Can I combine with other treatments?",
        a: "Yes. Many people combine with Neveskin Facial for comprehensive body and face rejuvenation."
      }
    ]
  },
  {
    id: "neveskin-tone",
    title: "Neveskin Tone",
    shortDesc: "Advanced body toning treatment for enhanced muscle definition and skin tightness.",
    fullDesc: "Neveskin Tone uses radiofrequency to enhance muscle tone, improve skin texture, and create a more sculpted appearance.",
    whatToExpect: "30-45 minute treatment. Warm sensation. Skin looks tighter and more toned.",
    benefits: ["Enhance muscle tone", "Improve skin texture", "Create sculpted appearance", "Tighten loose skin", "Non-invasive body sculpting"],
    whoItsFor: ["Athletes seeking definition", "People wanting body sculpting", "Those seeking skin tightening", "Anyone avoiding surgery"],
    whoItsNotFor: ["Pregnant women", "Those with certain implants"],
    pricing: "Member $280 | Retail $340",
    icon: Smile,
    image: "/images/service_20_neveskin_tone.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "Will this build muscle?",
        a: "It enhances existing muscle tone and appearance. Best results when combined with strength training."
      },
      {
        q: "How many treatments do I need?",
        a: "6-8 treatments for best results. Maintenance every 6-8 weeks."
      },
      {
        q: "When will I see results?",
        a: "Immediate tightening. Muscle enhancement visible after 3-4 treatments."
      },
      {
        q: "Can I do this before events?",
        a: "Yes. Schedule 1-2 weeks before for best appearance."
      }
    ]
  },
  {
    id: "mild-hyperbaric-oxygen",
    title: "Mild Hyperbaric Oxygen Therapy",
    shortDesc: "60-90 minute therapy session to support wound healing, inflammation, immunity and sleep.",
    fullDesc: "Mild Hyperbaric Oxygen Therapy (mHBOT) is a modern medical therapy that helps enhance total well-being. It's ideal for individuals looking to speed up recovery, enhance cognitive function and reduce inflammation.",
    whatToExpect: "A relaxing, non-invasive session where you breathe enhanced oxygen in a pressurized chamber. You can sit up and work or lie down and relax. Most clients report feeling more relaxed and rested immediately after.",
    benefits: ["Optimized sleep", "Repaired muscles", "Increased cognitive clarity", "Decreased athletic recovery time", "Increased energy"],
    whoItsFor: ["Athletes seeking faster recovery", "People with sleep issues", "Those recovering from injury or illness", "Anyone wanting cognitive enhancement", "Individuals seeking improved immunity"],
    whoItsNotFor: ["People with uncontrolled fever", "Those with severe claustrophobia", "Certain respiratory conditions"],
    pricing: "Member $75 | Retail $105",
    icon: Heart,
    image: "/images/service_34_Smiling_woman_sitting_inside_a.webp",
    category: "Recovery & Wellness",
    faqs: [
      {
        q: "How long do the effects last?",
        a: "Results vary by individual. Many clients report immediate benefits like relaxation and improved sleep. For optimal long-term results, we recommend 20-40 maintenance sessions."
      },
      {
        q: "How will I feel during the session?",
        a: "Most clients find it relaxing and comfortable. You may feel slight ear popping during pressurization, similar to an airplane. You can work, read, or rest."
      },
      {
        q: "What should I do to prepare?",
        a: "Arrive early to complete a medical waiver. You'll have your vitals checked and a TeleMed consultation with a medical professional. Wear comfortable clothing and avoid caffeine."
      },
      {
        q: "How often should I use it?",
        a: "We recommend 1-2 sessions daily with at least 4 hours between sessions. A minimum of 10 sessions is recommended to achieve results."
      }
    ]
  },
  {
    id: "biomarker-assessments",
    title: "Biomarker Assessments",
    shortDesc: "Discover deficiencies and genetic markers that may indicate inefficiencies needing attention.",
    fullDesc: "Biomarker Assessments help identify deficiencies and genetic markers that may indicate inefficiencies or faults in your health. This comprehensive testing provides actionable insights for personalized wellness optimization.",
    whatToExpect: "A simple blood draw and consultation. Results are analyzed by medical professionals who provide personalized recommendations based on your unique biomarker profile.",
    benefits: ["Decreased symptoms from imbalances, such as fatigue", "Enhanced immunity with antioxidants", "Improved nourishment", "Boosted energy", "Optimized overall well-being"],
    whoItsFor: ["Anyone seeking health optimization", "People with unexplained fatigue", "Those wanting preventative health insights", "Athletes seeking performance optimization", "Anyone over 40 seeking longevity"],
    whoItsNotFor: ["Those with needle phobia"],
    pricing: "Premium Service | Consultation required",
    icon: Brain,
    image: "/images/service_11_Young_couple_relaxing_while_en.webp",
    category: "Medical Services",
    faqs: [
      {
        q: "What biomarkers are tested?",
        a: "We test comprehensive panels including metabolic markers, immune function, nutrient levels, hormonal balance, and genetic markers relevant to your health goals."
      },
      {
        q: "How long until I get results?",
        a: "Results typically available within 3-5 business days. A medical professional will review and discuss personalized recommendations."
      },
      {
        q: "What happens after testing?",
        a: "You will receive a detailed report with personalized recommendations for therapies, supplements, and lifestyle changes to optimize your health."
      },
      {
        q: "How often should I test?",
        a: "Initial baseline testing recommended. Follow-up testing every 3-6 months to track progress and adjust protocols."
      }
    ]
  },
  {
    id: "glp1-weight-loss",
    title: "GLP-1 Weight Loss Programs",
    shortDesc: "Experience safe, medicated weight loss with a customized treatment plan.",
    fullDesc: "GLP-1 Weight Loss Programs provide medically-supervised, safe weight loss using FDA-approved medications. Our doctors customize treatment plans based on your unique health profile and weight loss goals.",
    whatToExpect: "Initial medical consultation and labs. Weekly or bi-weekly injections (self-administered at home). Regular monitoring and adjustments. Comprehensive nutritional and lifestyle support throughout.",
    benefits: ["Better regulate appetite", "Increased feelings of fullness", "Lose weight and retain muscle", "Sustainable long-term results", "Medically supervised safety", "Personalized treatment protocols"],
    whoItsFor: ["People seeking sustainable weight loss", "Those with metabolic challenges", "Individuals with obesity or overweight", "Anyone wanting medically-supervised support", "People seeking lasting lifestyle change"],
    whoItsNotFor: ["Pregnant or nursing women", "Those with certain medical conditions", "People unwilling to commit to lifestyle changes"],
    pricing: "Consultation + labs required | Ongoing monthly cost | Membership credits do not apply",
    icon: TrendingUp,
    image: "/images/service_35_Smiling_woman_in_athletic_atti.webp",
    category: "Weight Loss",
    faqs: [
      {
        q: "Is GLP-1 therapy safe?",
        a: "Yes, when medically supervised. We monitor labs regularly and adjust dosages. Our doctors have extensive GLP-1 experience and prioritize safety."
      },
      {
        q: "How much weight can I lose?",
        a: "Results vary by individual. Most people lose 10-15% of body weight over 6-12 months with consistent use and lifestyle changes."
      },
      {
        q: "What are the side effects?",
        a: "Common side effects are mild and temporary (nausea, reduced appetite). Most resolve within 1-2 weeks. We manage side effects proactively."
      },
      {
        q: "Will I regain weight after stopping?",
        a: "Long-term success requires commitment to lifestyle changes. We provide ongoing support and can adjust treatment protocols as needed."
      }
    ]
  }
];

// Comparison Content

// Comparison Content
export const comparisonGuides = [
  {
    id: "inflammation-recovery",
    slug: "inflammation-recovery",
    title: "Reduce Inflammation & Accelerate Recovery",
    description: "Which therapy is right for your recovery goals?",
    excerpt: "Combat inflammation and speed up recovery with the right therapy combination.",
    cardImage: "/images/service_10_A_man_wearing_Normatec_compres.webp",
    solutions: [
      {
        id: "cryotherapy",
        name: "Cryotherapy",
        description: "3 minutes of extreme cold exposure that triggers rapid anti-inflammatory response",
        link: "/service/cryotherapy"
      },
      {
        id: "redlight",
        name: "Red Light Therapy",
        description: "Stimulates cellular repair and reduces inflammation at the mitochondrial level",
        link: "/service/red-light-therapy"
      },
      {
        id: "iv-therapy",
        name: "IV Therapy",
        description: "Delivers anti-inflammatory compounds directly into your bloodstream",
        link: "/service/iv-therapy"
      }
    ],
    cta: "Reduce Inflammation & Accelerate Recovery",
    image: "/images/service_07_Woman_wearing_protective_robe,.webp"
  },
  {
    id: "sleep-detox",
    slug: "sleep-detox",
    title: "Sleep Better & Detoxify",
    description: "Which therapy helps you rest and cleanse?",
    excerpt: "Improve sleep quality and support your body's natural detoxification processes.",
    cardImage: "/images/service_09_Woman_relaxing_in_an_infrared_.webp",
    solutions: [
      {
        id: "infrared-sauna",
        name: "Infrared Sauna",
        description: "Deep heat triggers detoxification through sweat and promotes parasympathetic relaxation",
        link: "/service/infrared-sauna"
      },
      {
        id: "redlight",
        name: "Red Light Therapy",
        description: "Supports circadian rhythm and melatonin production for deeper sleep",
        link: "/service/red-light-therapy"
      }
    ],
    cta: "Sleep Better & Detoxify",
    image: "/images/service_08_Woman_with_her_hands_above_her.webp"
  },
  {
    id: "fatigue-brain-fog",
    slug: "fatigue-brain-fog",
    title: "Combat Fatigue & Brain Fog",
    description: "Restore energy and mental clarity",
    excerpt: "Boost energy and eliminate brain fog with proven cellular energy restoration.",
    cardImage: "/images/service_12_Smiling_woman_receiving_a_NAD+.webp",
    solutions: [
      {
        id: "nad-iv",
        name: "NAD+ IV Therapy",
        description: "Restores cellular energy at the mitochondrial level for rapid mental clarity and sustained energy",
        link: "/service/nad-iv-therapy"
      },
      {
        id: "niagen",
        name: "Niagen (NR)",
        description: "Natural NAD+ precursor for daily energy support and cognitive enhancement",
        link: "/service/niagen"
      }
    ],
    cta: "Restore Energy & Mental Clarity",
    image: "/images/service_12_Smiling_woman_receiving_a_NAD+.webp"
  },
  {
    id: "skin-health-anti-aging",
    slug: "skin-health-anti-aging",
    title: "Restore Skin Health & Vitality",
    description: "Which therapy supports your skin and anti-aging goals?",
    excerpt: "Enhance skin appearance and support cellular anti-aging from the inside out.",
    cardImage: "/images/service_08_Woman_with_her_hands_above_her.webp",
    solutions: [
      {
        id: "redlight",
        name: "Red Light Therapy",
        description: "Stimulates collagen production and cellular repair for glowing, youthful skin",
        link: "/service/red-light-therapy"
      },
      {
        id: "iv-therapy",
        name: "IV Therapy",
        description: "Delivers hydration and antioxidants that support skin health and radiance",
        link: "/service/iv-therapy"
      }
    ],
    cta: "Restore Skin Health & Vitality",
    image: "/images/service_06_Woman_receiving_red_light_therapy.webp"
  },
  {
    id: "athletic-performance",
    slug: "athletic-performance",
    title: "Enhance Performance & Recovery",
    description: "Which therapy optimizes your athletic potential?",
    excerpt: "Boost performance, accelerate recovery, and prevent injuries with targeted therapies.",
    cardImage: "/images/service_10_A_man_wearing_Normatec_compres.webp",
    solutions: [
      {
        id: "iv-therapy",
        name: "IV Therapy",
        description: "Delivers amino acids, electrolytes, and nutrients for rapid recovery and performance enhancement",
        link: "/service/iv-therapy"
      },
      {
        id: "cryotherapy",
        name: "Cryotherapy",
        description: "Reduces inflammation and muscle soreness, accelerating recovery between workouts",
        link: "/service/cryotherapy"
      }
    ],
    cta: "Enhance Performance & Recovery",
    image: "/images/service_03_Man_in_cryotherapy_chamber.webp"
  },
  {
    id: "stress-relief",
    slug: "stress-relief",
    title: "Melt Stress & Find Calm",
    description: "Which therapy helps you relax and recover?",
    excerpt: "Activate your parasympathetic nervous system and experience deep stress relief.",
    cardImage: "/images/service_09_Woman_relaxing_in_an_infrared_.webp",
    solutions: [
      {
        id: "infrared-sauna",
        name: "Infrared Sauna",
        description: "Deep heat relaxation that melts tension and activates your body's relaxation response",
        link: "/service/infrared-sauna"
      },
      {
        id: "hyperbaric",
        name: "Hyperbaric Oxygen Therapy",
        description: "Increases oxygen delivery to reduce stress hormones and promote deep relaxation",
        link: "/service/hyperbaric-oxygen"
      }
    ],
    cta: "Melt Stress & Find Calm",
    image: "/images/sauna-official.jpg"
  }
];

// Blog Posts
export const blogPosts = [
  {
    id: "columbus-marathon-recovery",
    slug: "columbus-marathon-recovery",
    title: "Columbus Marathon Recovery: The Science-Backed Approach",
    excerpt: "Running 26.2 miles tears down your body. Here's how to recover faster and stronger.",
    content: "The Columbus Marathon is one of Ohio's premier running events. Thousands of runners push their bodies to the limit each year. But here's the problem: most runners don't know how to recover properly. They rely on ice baths, stretching, and rest. While these help, they're not optimal. Science shows that a strategic combination of therapies can cut recovery time in half and reduce injury risk significantly.",
    date: "2025-12-15",
    author: "Dr. Sarah Chen",
    category: "Athletic Recovery",
    image: "/images/location-hero-studio.webp",
    tags: ["Marathon", "Recovery", "Columbus", "Athletic Performance"]
  },
  {
    id: "buckeye-season-wellness",
    slug: "buckeye-season-wellness",
    title: "Buckeye Season Wellness: Stay Energized Through Football Season",
    excerpt: "Game days, tailgates, and late nights take a toll. Here's how to stay healthy during Ohio State season.",
    content: "Buckeye season is electric. The energy, the games, the tailgates - it's what makes living in Columbus special. But all that excitement comes with a cost. Late nights, alcohol, poor sleep, and stress can leave you exhausted by mid-season. Whether you're a student, a fan, or just someone living in Columbus, here's how to maintain your energy and wellness through the entire Buckeye season.",
    date: "2025-11-01",
    author: "Dr. James Wilson",
    category: "Wellness",
    image: "/images/red-light-therapy.jpg",
    tags: ["Buckeyes", "Energy", "Wellness", "Columbus"]
  },
  {
    id: "columbus-winter-wellness",
    slug: "columbus-winter-wellness",
    title: "Columbus Winter Wellness: Combat Seasonal Fatigue and Depression",
    excerpt: "Ohio winters are long and dark. Science-backed strategies to maintain energy and mood.",
    content: "Columbus winters are no joke. From November through March, we experience shorter days, colder temperatures, and limited sunlight. This combination can trigger seasonal affective disorder (SAD), fatigue, and depression in many people. But there's good news: science-backed therapies can help you maintain energy, mood, and wellness throughout the winter months.",
    date: "2025-10-15",
    author: "Dr. Lisa Rodriguez",
    category: "Seasonal Wellness",
    image: "/images/sauna-official.jpg",
    tags: ["Winter", "Seasonal Affective Disorder", "Columbus", "Mental Health"]
  },
  {
    id: "guide-to-wellness-dublin",
    slug: "guide-to-wellness-dublin",
    title: "Your Guide to Wellness in Dublin: Bridge Park and Beyond",
    excerpt: "Discover the best wellness spots in Dublin, OH, from walking trails to advanced recovery.",
    content: "Dublin, Ohio has transformed into a premier wellness destination. With the development of Bridge Park, the expansion of the Scioto Mile, and a community focused on health, there's never been a better time to focus on your well-being in Dublin.\n\n## Start with Movement at Bridge Park\n\nThe pedestrian bridge connecting Historic Dublin to Bridge Park isn't just an architectural marvel—it's the perfect starting point for your wellness journey. A morning walk or run along the Scioto River provides fresh air, river views, and a connection to nature that lowers cortisol and boosts mood.\n\n## Fuel Your Body\n\nAfter your movement, Dublin offers incredible healthy dining options. From the fresh bowls at North Market Bridge Park to the farm-to-table options in Historic Dublin, you can fuel your body with nutrient-dense whole foods.\n\n## Optimize Your Recovery\n\nMovement and nutrition are the foundation, but recovery is the accelerator. That's where Restore Hyper Wellness comes in. Located just minutes from Bridge Park at 6780 Longshore St, our Dublin studio offers advanced recovery modalities used by professional athletes.\n\nOne of our most popular treatments for active Dublin residents is **Whole Body Cryotherapy**. In just 3 minutes, you can reduce inflammation, boost your mood, and accelerate muscle recovery.\n\n[Learn more about Cryotherapy in Dublin near Bridge Park](/cryotherapy-dublin)\n\n## The Dublin Wellness Community\n\nWhat makes Dublin special is the community. Whether you're joining a run club at Fleet Feet, taking a yoga class on the green, or recovering at Restore, you're surrounded by people who value health and longevity. Join us and elevate your wellness journey today.",
    date: "2026-01-02",
    author: "Restore Team",
    category: "Local Guide",
    image: "/images/location-hero-studio.webp",
    tags: ["Dublin", "Bridge Park", "Wellness Guide", "Local"]
  },
  {
    id: "why-upper-arlington-residents-choose-restore",
    slug: "why-upper-arlington-residents-choose-restore",
    title: "Why Upper Arlington Residents Choose Restore",
    excerpt: "Upper Arlington residents prioritize health and wellness. Discover why Upper Arlington's health-conscious community chooses Restore for science-backed recovery and longevity.",
    content: "Upper Arlington residents are serious about their health and wellness. Known for its tree-lined streets, excellent schools, and health-conscious community, Upper Arlington attracts people who prioritize longevity, fitness, and science-backed wellness. They invest in their health, their fitness, and their future. Restore Hyper Wellness embodies that same commitment to excellence and wellness.\n\n## Kingsdale Center: Your Neighborhood Wellness Hub\n\nNestled in the heart of Kingsdale Center, Restore is where Upper Arlington residents have always looked for premium services. Our location at 3094 Kingsdale Center puts world-class recovery within walking distance of your community. No need to venture downtown or across the city—your recovery destination is right here in Upper Arlington.\n\nConvenient. Accessible. Neighborhood-centered.\n\n## Upper Arlington Values: Science, Health, and Longevity\n\nUpper Arlington residents don't chase wellness trends—they invest in proven science. They understand that recovery isn't a luxury; it's a foundation for living well. Our medical-grade therapies align perfectly with the Upper Arlington philosophy:\n\n- Cryotherapy for athletes training at Scioto Country Club or local running clubs\n- Compression therapy for professionals managing demanding careers\n- IV therapy for busy parents optimizing energy and immunity\n- Red light therapy for those prioritizing skin health and cellular vitality\n- Infrared sauna for stress relief and detoxification in a peaceful setting\n- NAD+ IV therapy for those serious about cellular longevity\n\nUpper Arlington residents understand that investing in recovery today means enjoying life more fully tomorrow.\n\n## Built for Upper Arlington's Refined Lifestyle\n\nOur Upper Arlington location respects your schedule and your standards. We have designed our hours around Upper Arlington's rhythm—early morning sessions before work, lunch-hour resets, and afternoon appointments that fit seamlessly into your day. Our studio reflects the same attention to detail and quality you expect from every aspect of your life.\n\nHours: Tuesday-Friday 10am-6pm | Saturday 10am-5pm | Sunday 11am-4pm | Closed Mondays\n\nFirst-time visitors receive a complimentary consultation to ensure you find the perfect therapy for your goals.\n\n## A Community of Upper Arlington Wellness Leaders\n\nWhen you choose Restore Upper Arlington, you're joining a community of health-conscious neighbors who have made recovery non-negotiable. Our members include:\n\n- Local athletes training for marathons, triathlons, and competitive events\n- Executives and professionals managing high-stress careers\n- Parents modeling wellness for their families\n- Fitness enthusiasts accelerating recovery between workouts\n- Wellness pioneers exploring science-backed longevity therapies\n\nYou will recognize faces from your neighborhood. You will build relationships with our knowledgeable staff. You will become part of an Upper Arlington wellness community.\n\n## The Upper Arlington Advantage: Three Locations, One Membership\n\nWork in Easton? Have family in Dublin? With Restore's nationwide membership access, you can visit any of our three Columbus locations—or any Restore studio across the country. Your membership works everywhere, because your wellness journey doesn't stop at neighborhood boundaries.\n\n## Ready to Experience Upper Arlington's Premier Recovery Destination?\n\nVisit Restore Hyper Wellness - Upper Arlington at 3094 Kingsdale Center, Upper Arlington, OH 43221. Call 614-745-0966 to book your first session. First-time visitors receive a complimentary consultation.",
    date: "2026-01-04",
    author: "Restore Team",
    category: "Local Guide",
    image: "/images/upper-arlington-lifestyle.jpg",
    tags: ["Upper Arlington", "Kingsdale Center", "Wellness Guide", "Local", "Recovery"]
  },
  {
    id: "dublin-longevity-2026",
    slug: "dublin-longevity-2026",
    title: "2026: The Year of Longevity for Dublin Residents - Make This Your Turning Point",
    excerpt: "New Year resolutions fade by February. But longevity isn't a resolution—it's a commitment. Here's how Dublin residents are building a foundation for extraordinary health in 2026.",
    content: "January 1st arrives with the same promise every year: this is the year you'll get healthier, stronger, more energized. You'll hit the gym, eat better, sleep more. And by mid-February, most resolutions have faded into memory. But what if 2026 was different? What if instead of chasing a New Year resolution, you committed to something bigger: longevity—the science of living longer, stronger, and with more vitality than you thought possible?\n\nDublin residents are uniquely positioned to make 2026 their longevity turning point. Here's why, and how to start.\n\n## The Longevity Mindset: Beyond New Year Resolutions\n\nResolutions are short-term fixes. Longevity is a long-term investment.\n\nA resolution might be: I'll work out 5 days a week.\n\nLongevity is: I'm building a life where movement, recovery, and cellular health compound over decades.\n\nThe difference isn't just semantics—it's transformational. When you shift from resolution-thinking to longevity-thinking, you stop looking for quick fixes. Instead, you invest in systems that work for you year after year.\n\n## Why Dublin Is the Perfect Place to Start Your Longevity Journey\n\nDublin has something most communities don't: a culture of health and intentionality.\n\nBridge Park isn't just a development—it's a symbol of Dublin's commitment to creating spaces where people move, connect, and thrive. The Scioto Mile offers daily opportunities for outdoor activity. The community values wellness, fitness, and continuous improvement.\n\nYou're surrounded by people who care about their health. That community energy is powerful. It makes longevity feel less like a solo struggle and more like a shared commitment.\n\n## The Three Pillars of Longevity (And How to Build Them in 2026)\n\n### Pillar 1: Movement\n\nLongevity starts with movement. Not extreme training—consistent, joyful movement.\n\nDublin offers incredible options: morning runs along the Scioto Mile, yoga classes on the green, walking trails through Historic Dublin, cycling around Bridge Park. The key is consistency, not intensity.\n\n**Your 2026 commitment:** Find a movement practice you enjoy and do it 3-4 times per week. Not because you have to—because you want to.\n\n### Pillar 2: Recovery\n\nHere's what most people miss: recovery is where the magic happens.\n\nYou don't get stronger during your workout—you get stronger during recovery. You don't improve your health during your run—you improve it while your body repairs itself. Yet most people neglect recovery entirely.\n\nScience-backed recovery therapies accelerate this process. When you combine movement with strategic recovery, you compound your results.\n\nThat's why Restore Hyper Wellness exists. Located at 6780 Longshore St in Dublin, just minutes from Bridge Park, we offer therapies specifically designed for longevity:\n\n- **Cryotherapy** reduces inflammation, boosts mood, accelerates muscle recovery\n- **Infrared Sauna** detoxifies, improves cardiovascular health, enhances sleep quality\n- **Red Light Therapy** boosts cellular energy, improves skin health, supports recovery\n- **Compression Therapy** flushes metabolic waste, accelerates recovery, improves circulation\n- **NAD+ IV Therapy** restores cellular energy, supports longevity at the mitochondrial level\n- **IV Therapy** optimizes hydration, energy, and immunity\n\nThese aren't luxury treatments—they're tools for longevity.\n\n**Your 2026 commitment:** Add one recovery therapy to your routine. Start with cryotherapy or infrared sauna once per week. Track how you feel. Most people notice improvements in sleep, energy, and recovery within 2-3 weeks.\n\n### Pillar 3: Cellular Optimization\n\nLongevity isn't just about what you do—it's about optimizing what happens inside your cells.\n\nYour cells are aging. That's not pessimism—that's biology. But the rate at which they age is largely within your control. Factors like sleep, stress, nutrition, movement, and recovery all impact cellular aging.\n\nAdvanced therapies like NAD+ IV therapy directly support cellular energy production. Red light therapy boosts mitochondrial function. Infrared sauna triggers cellular repair mechanisms. Together, these create a foundation for cellular longevity.\n\n**Your 2026 commitment:** Explore one cellular optimization therapy. NAD+ IV therapy is particularly powerful for anyone serious about longevity. Many of our Dublin members do quarterly NAD+ sessions to maintain peak cellular function.\n\n## The Dublin Longevity Community\n\nHere's what makes this real: you won't be doing this alone.\n\nWhen you commit to longevity in 2026, you're joining a community of Dublin residents who have made the same choice. You'll see familiar faces at Bridge Park. You'll recognize neighbors at Restore. You'll be part of a movement of people building extraordinary health together.\n\nThat community energy compounds your results. It keeps you accountable. It makes longevity feel achievable—because you're surrounded by people achieving it.\n\n## Your 2026 Longevity Blueprint\n\nHere's how to make 2026 your turning point:\n\n**Month 1 (January):** Establish your movement practice. Pick one activity you enjoy and commit to 3-4 sessions per week.\n\n**Month 2 (February):** Add one recovery therapy. Try cryotherapy or infrared sauna. Notice how it impacts your sleep, energy, and recovery.\n\n**Month 3 (March):** Optimize your nutrition and sleep. These are the foundation. Everything else builds on them.\n\n**Month 4+ (April onward):** Explore advanced therapies like NAD+ IV. Build relationships with our team. Become part of the Dublin longevity community.\n\nThis isn't a resolution that fades by February. This is a system that compounds over 12 months, 12 years, and the rest of your life.\n\n## The Longevity Promise\n\nWhen you commit to longevity in 2026, you're not just committing to this year. You're committing to a version of yourself at 50, 60, 70, and beyond who has more energy, better health, and a deeper capacity to enjoy life.\n\nThat's not a New Year resolution. That's a legacy.\n\n## Ready to Experience Dublin's Premier Longevity Destination?\n\nVisit Restore Hyper Wellness - Dublin at 6780 Longshore St, Dublin, OH 43017. Call 614-944-9041 to book your complimentary consultation. Our team will help you design a longevity plan tailored to your goals.\n\nFirst-time visitors receive a complimentary session to experience the power of recovery therapy.\n\n**Make 2026 the year you stopped chasing resolutions and started building longevity.",
    date: "2026-01-06",
    author: "Restore Team",
    category: "Longevity",
    image: "/images/dublin-fitness-energy.jpg",
    tags: ["Dublin", "Longevity", "New Year", "Wellness", "2026", "Recovery", "Health"]
  },
  {
    id: "westerville-wellness-professionals-2026",
    slug: "westerville-wellness-professionals-2026",
    title: "Lunch-Hour Recovery: How Westerville Professionals Are Reclaiming Their Wellness",
    excerpt: "Between meetings, emails, and deadlines, wellness feels impossible. But what if recovery took just 30 minutes? Discover how Westerville professionals are transforming their health during lunch breaks.",
    content: "You know the feeling. It's 11:45 AM. You've been in back-to-back meetings since 8 AM. Your shoulders are tight. Your energy is crashing. You have 30 minutes before the next call. Most people grab a coffee and a sandwich. But Westerville professionals are doing something different—they're recovering.\n\nLocated at Easton, just minutes from Westerville's business district, Restore Hyper Wellness has become the lunch-hour destination for professionals who refuse to sacrifice wellness for productivity. In 30 minutes, you can reset your nervous system, boost your energy, and return to work sharper than you left.\n\n## The Westerville Professional's Dilemma\n\nWesterville attracts high-achieving professionals. Entrepreneurs. Executives. Business owners. People who care deeply about their careers—and increasingly, about their health.\n\nBut here's the problem: traditional wellness requires time. Gym sessions take an hour. Yoga classes are scheduled. Therapy appointments need to be booked weeks in advance.\n\nFor busy professionals, this creates a choice: prioritize work or prioritize wellness. Most choose work.\n\nBut what if wellness didn't require choosing? What if you could recover during your existing break time?\n\n## The 30-Minute Recovery Revolution\n\nThis is where Restore changes everything.\n\nCryotherapy: 3 minutes of extreme cold exposure that reduces inflammation, boosts mood, and accelerates recovery. You step out energized.\n\nInfrared Sauna: 30 minutes of deep heat that detoxifies, improves cardiovascular health, and melts stress. You leave relaxed and rejuvenated.\n\nCompression Therapy: 30 minutes of rhythmic compression that flushes metabolic waste and accelerates recovery. Perfect for professionals who sit all day.\n\nRed Light Therapy: 20 minutes of cellular energy boost. Improves focus, reduces brain fog, enhances mood.\n\nIV Therapy: 30-45 minutes of optimized hydration, energy, and immunity. The ultimate lunch-hour reset.\n\nEach therapy is designed to fit into your schedule—not the other way around.\n\n## Why Westerville Professionals Are Choosing Recovery\n\nWesterville's business community understands something fundamental: your health is your competitive advantage.\n\nYou can't perform at your best when you're exhausted, inflamed, and stressed. Recovery isn't a luxury—it's a business tool.\n\nWhen you add one recovery session to your weekly routine, you notice:\n\n- Better focus in afternoon meetings\n- Reduced stress and anxiety\n- Faster recovery from workouts\n- Improved sleep quality\n- More energy throughout the day\n- Better decision-making\n\nThese aren't small benefits. These are the differences between good performance and exceptional performance.\n\n## The Easton Advantage\n\nLocated at Easton, Restore is perfectly positioned for Westerville professionals. You're already at Easton for shopping, dining, or business meetings. Adding a 30-minute recovery session is seamless.\n\nWalk in. Recover. Walk out. Back to work.\n\nNo commute. No excuses. No friction.\n\nHours: Monday-Friday 10am-7pm | Saturday 10am-5pm | Sunday 11am-4pm\n\nFirst-time visitors receive a complimentary consultation to find the perfect 30-minute recovery therapy for your lifestyle.\n\n## The Westerville Wellness Community\n\nWhen you choose Restore, you're joining a community of Westerville professionals who have made recovery non-negotiable. You'll recognize colleagues from your industry. You'll build relationships with our team. You'll become part of a movement of professionals who refuse to sacrifice wellness for success.\n\nThat community energy is powerful. It keeps you accountable. It makes wellness feel achievable—because you're surrounded by people achieving it.\n\n## Your Lunch-Hour Recovery Blueprint\n\nStart small. Pick one therapy. Try it once per week during your lunch break.\n\nWeek 1: Experience your first recovery session. Notice how you feel.\n\nWeek 2-4: Repeat weekly. Track your energy, focus, and sleep quality.\n\nMonth 2+: Add a second session per week. Experiment with different therapies. Build your ideal recovery routine.\n\nWithin 30 days, most professionals notice significant improvements in energy, focus, and overall wellness.\n\n## Ready to Reclaim Your Lunch Hour?\n\nVisit Restore Hyper Wellness - Easton at 6780 Longshore St, Columbus, OH 43235 (Easton location). Call 614-944-9041 to book your complimentary consultation.\n\nFirst-time visitors receive a complimentary 30-minute session to experience the power of recovery during your lunch break.\n\nMake 2026 the year you stopped sacrificing wellness for productivity—and discovered you don't have to choose.",
    date: "2026-01-06",
    author: "Restore Team",
    category: "Local Guide",
    image: "/images/westerville-professional-wellness.jpg",
    tags: ["Westerville", "Professional Wellness", "Lunch Break", "Recovery", "Easton", "Productivity"]
  },
  {
    id: "new-albany-cellular-longevity-2026",
    slug: "new-albany-cellular-longevity-2026",
    title: "The New Albany Standard: Cellular Longevity for Discerning Professionals",
    excerpt: "New Albany residents demand excellence in everything—from architecture to healthcare. Discover how cutting-edge cellular optimization therapies are redefining longevity for the area's most health-conscious residents.",
    content: "New Albany represents a particular standard. Excellence in design. Precision in execution. Commitment to the finest details. The residents who choose New Albany don't settle for ordinary—in their homes, their careers, or their health.\n\nThey understand something that most people miss: longevity isn't about living longer. It's about living better. It's about maintaining peak performance, cognitive clarity, and vitality for decades to come.\n\nFor New Albany's most discerning residents, that means moving beyond traditional wellness into cellular optimization—science-backed therapies that work at the mitochondrial level to slow aging and enhance performance.\n\n## The New Albany Advantage: Access to Cutting-Edge Longevity Science\n\nNew Albany residents have always had access to the best. The best schools. The best architecture. The best healthcare. Now, they have access to the best longevity science.\n\nLocated at Easton, just minutes from New Albany, Restore Hyper Wellness offers therapies specifically designed for cellular optimization—the frontier of longevity science.\n\nThese aren't trendy wellness treatments. These are medical-grade therapies backed by peer-reviewed research and used by elite athletes, executives, and longevity pioneers worldwide.\n\n## The Four Pillars of Cellular Longevity\n\n### Pillar 1: Mitochondrial Energy (NAD+ IV Therapy)\n\nYour mitochondria are the power plants of your cells. As you age, mitochondrial function declines—leading to fatigue, cognitive decline, and accelerated aging.\n\nNAD+ is the critical coenzyme that powers mitochondrial energy production. NAD+ IV therapy directly restores cellular energy at the source.\n\nResults: Enhanced mental clarity, increased energy, improved athletic performance, and cellular-level anti-aging.\n\nNew Albany residents pursuing serious longevity typically do quarterly NAD+ sessions to maintain peak cellular function.\n\n### Pillar 2: Cellular Repair (Red Light Therapy)\n\nRed light penetrates to the mitochondrial level, stimulating cellular repair mechanisms and boosting energy production.\n\nUnlike other therapies, red light therapy works at the cellular level—triggering your body's own repair systems.\n\nResults: Improved skin health, enhanced recovery, better cognitive function, and cellular regeneration.\n\n### Pillar 3: Inflammation Management (Cryotherapy)\n\nChronic inflammation is the root cause of most age-related diseases. Cryotherapy triggers your body's anti-inflammatory response.\n\nThree minutes of extreme cold exposure activates your parasympathetic nervous system, reduces systemic inflammation, and enhances recovery.\n\nResults: Reduced inflammation markers, faster recovery, improved mood, and better sleep.\n\n### Pillar 4: Detoxification & Cardiovascular Health (Infrared Sauna)\n\nInfrared sauna triggers deep detoxification at the cellular level while improving cardiovascular function.\n\nUnlike traditional saunas, infrared penetrates tissue deeply, triggering sweat at lower temperatures and activating cellular repair mechanisms.\n\nResults: Enhanced detoxification, improved cardiovascular health, better sleep, and stress reduction.\n\n## The New Albany Longevity Protocol\n\nNew Albany residents serious about cellular longevity typically follow this protocol:\n\n**Monthly Foundation:**\n- 1x NAD+ IV therapy (cellular energy restoration)\n- 2x Infrared sauna sessions (detoxification & cardiovascular health)\n- 2x Cryotherapy sessions (inflammation management)\n- 2x Red light therapy sessions (cellular repair)\n\nThis protocol addresses all four pillars of cellular longevity, creating a comprehensive system for maintaining peak health and performance.\n\n**Quarterly Deep Optimization:**\n- Additional NAD+ IV therapy to maintain mitochondrial function\n- Advanced testing and personalized protocol adjustments\n\n## Why New Albany Residents Choose Cellular Optimization\n\nNew Albany attracts high-achieving professionals, entrepreneurs, and executives. These are people who understand the value of strategic investment.\n\nThey invest in their education. Their careers. Their homes. Their families.\n\nCellular optimization is simply the logical extension of that philosophy—investing in the cellular foundation that makes everything else possible.\n\nWhen your cells are optimized, everything improves:\n- Mental clarity and cognitive performance\n- Physical energy and athletic capability\n- Sleep quality and recovery\n- Skin health and appearance\n- Mood and emotional resilience\n- Long-term health and longevity\n\n## The Easton Location: Premium Wellness for New Albany\n\nLocated at Easton, Restore offers New Albany residents convenient access to world-class longevity therapies. Our studio reflects the same attention to detail and quality you expect from every aspect of your life.\n\nHours: Monday-Friday 10am-7pm | Saturday 10am-5pm | Sunday 11am-4pm\n\nFirst-time visitors receive a complimentary cellular optimization consultation to design a personalized longevity protocol.\n\n## Your Cellular Longevity Blueprint\n\n**Month 1:** Start with foundational therapies. Experience NAD+ IV therapy, infrared sauna, and cryotherapy. Establish baseline health markers.\n\n**Month 2-3:** Build your monthly protocol. Add red light therapy. Repeat your favorite therapies weekly. Notice improvements in energy, sleep, and mental clarity.\n\n**Month 4+:** Optimize and refine. Adjust your protocol based on results. Consider advanced testing. Become part of New Albany's cellular longevity community.\n\nMost New Albany residents notice significant improvements in energy, mental clarity, and overall vitality within 60 days.\n\n## Ready to Invest in Your Cellular Future?\n\nVisit Restore Hyper Wellness - Easton at 6780 Longshore St, Columbus, OH 43235. Call 614-944-9041 to book your complimentary cellular optimization consultation.\n\nOur team will help you design a personalized longevity protocol tailored to your goals and lifestyle.\n\nFirst-time visitors receive a complimentary session to experience the power of cellular optimization.\n\nMake 2026 the year you invested in your cellular foundation—and discovered what peak health truly feels like.",
    date: "2026-01-08",
    author: "Restore Team",
    category: "Longevity",
    image: "/images/new-albany-cellular-optimization.jpg",
    tags: ["New Albany", "Cellular Longevity", "NAD+ Therapy", "Premium Wellness", "Easton", "Anti-Aging"]
  },
  {
    id: "gahanna-family-wellness-2026",
    slug: "gahanna-family-wellness-2026",
    title: "Building Healthy Families: How Gahanna Residents Are Prioritizing Wellness for Everyone",
    excerpt: "Wellness isn't just for athletes or executives. Gahanna families are discovering how recovery therapies benefit everyone—from busy parents to active kids to aging grandparents. Learn how to build a healthier family in 2026.",
    content: "Gahanna is a family community. Parents juggling work and kids. Athletes training for the next season. Grandparents staying active and engaged. People of all ages and backgrounds committed to living well together.\n\nBut wellness in a family context looks different than individual wellness. You're not just optimizing yourself—you're building health for your entire household.\n\nThat's why Gahanna families are discovering Restore Hyper Wellness. Located at Easton, just minutes away, Restore offers therapies that benefit everyone—from stressed-out parents to young athletes to active seniors.\n\n## Wellness for Every Stage of Life\n\n### For Busy Parents\n\nParenting is demanding. Work deadlines. Kids' schedules. Household responsibilities. By the end of the day, you're exhausted.\n\nBut your kids need you present and energized. Your partner needs you engaged. Your work needs your best thinking.\n\nThat's where recovery comes in. A 30-minute infrared sauna session or compression therapy session gives you the reset you need to show up fully for your family.\n\nMany Gahanna parents do a weekly recovery session—not as a luxury, but as essential maintenance for being the best version of themselves.\n\n### For Young Athletes\n\nGahanna has a strong youth sports culture. Soccer. Basketball. Lacrosse. Swimming. Cross country. Kids pushing themselves hard.\n\nRecovery is where athletes get stronger. Yet most young athletes neglect recovery entirely, leading to overuse injuries and burnout.\n\nCryotherapy and compression therapy are game-changers for young athletes. They reduce inflammation, accelerate recovery, and help prevent injuries.\n\nMany Gahanna families add one recovery session per week during their child's competitive season—it's the difference between good performance and peak performance.\n\n### For Active Adults\n\nGahanna attracts active adults who run, cycle, hike, and train. People who care about fitness and health.\n\nBut activity without recovery is just accumulating damage. Strategic recovery accelerates results and prevents injury.\n\nRed light therapy, cryotherapy, and compression therapy are the tools that separate casual fitness enthusiasts from people who stay healthy and strong for decades.\n\n### For Aging Grandparents\n\nGrandparents want to be active and engaged with their grandchildren. But aging brings challenges—joint pain, reduced mobility, slower recovery.\n\nInfrared sauna improves circulation and reduces pain. Compression therapy enhances mobility. Red light therapy supports cellular health.\n\nMany Gahanna grandparents use recovery therapies to maintain the mobility and vitality they need to enjoy their grandchildren fully.\n\n## The Family Wellness Advantage\n\nWhen one family member starts using recovery therapies, others notice. They see the energy. The improved mood. The better sleep. The faster recovery from workouts.\n\nThen they want to experience it too.\n\nBefore long, the entire family is invested in recovery—each person using it for their own goals, but together creating a culture of wellness in the household.\n\nThis is powerful. Kids grow up understanding that wellness is normal. Parents model healthy habits. Grandparents stay active and engaged.\n\nYou're not just improving individual health—you're building a family culture of wellness.\n\n## Affordable Family Wellness\n\nOne concern families have: isn't this expensive?\n\nNot when you think about it strategically. A single recovery session costs less than a family dinner out. When you consider the benefits—better health, fewer injuries, improved mood, better sleep—it's one of the best investments you can make.\n\nMany Gahanna families start with one session per week and adjust based on their budget and goals.\n\n## The Gahanna Community Wellness Movement\n\nWhen you choose Restore, you're joining a community of Gahanna families who have made wellness a priority. You'll see neighbors at the studio. You'll hear stories of improved health and vitality. You'll become part of a movement of families building healthier lives together.\n\nThat community energy matters. It keeps you accountable. It makes wellness feel achievable—because you're surrounded by families achieving it.\n\n## Your Family Wellness Blueprint\n\n**Month 1:** Start with one family member. Let them experience recovery and share their results.\n\n**Month 2:** Add a second family member. Experiment with different therapies based on individual goals.\n\n**Month 3:** Build your family routine. Maybe it's one session per week per person. Maybe it's two. Find what works for your family.\n\n**Month 4+:** Refine and optimize. Notice improvements in family energy, mood, and overall health. Celebrate the wellness culture you're building.\n\nWithin 60 days, most families notice significant improvements in energy, sleep quality, and overall wellness.\n\n## Ready to Build a Healthier Family?\n\nVisit Restore Hyper Wellness - Easton at 6780 Longshore St, Columbus, OH 43235. Call 614-944-9041 to book your family's first session.\n\nOur team will help you find the right therapies for each family member's goals.\n\nFirst-time visitors receive a complimentary consultation to explore which therapies are right for your family.\n\nMake 2026 the year your family committed to wellness together—and discovered what it feels like to thrive as a unit.",
    date: "2026-01-10",
    author: "Restore Team",
    category: "Local Guide",
    image: "/images/gahanna-family-wellness.jpg",
    tags: ["Gahanna", "Family Wellness", "Youth Athletes", "Active Living", "Community Health", "Recovery"]
  },
];
