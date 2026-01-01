import { MapPin, Phone, Clock, Calendar, Star, ShieldCheck, Zap, Heart, Activity, Droplet, Thermometer, Wind, Sun, Syringe, Sparkles, Microscope, Scale, Battery, Moon, Brain, Flame, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";

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
    image: "/images/hero-wellness-columbus.jpg"
  },
  {
    id: "dublin",
    name: "Restore Hyper Wellness - Dublin",
    address: "6780 Longshore St",
    city: "Dublin",
    state: "OH",
    zip: "43017",
    phone: "614-553-7207",
    hours: "Mon-Fri: 10am-7pm | Sat: 9am-5pm | Sun: 11am-4pm",
    mapUrl: "https://goo.gl/maps/dublin",
    image: "/images/cryotherapy-session.jpg"
  },
  {
    id: "upper-arlington",
    name: "Restore Hyper Wellness - Upper Arlington",
    address: "3094 Kingsdale Center",
    city: "Upper Arlington",
    state: "OH",
    zip: "43221",
    phone: "614-745-0966",
    hours: "Mon-Fri: 10am-7pm | Sat: 9am-5pm | Sun: 11am-4pm",
    mapUrl: "https://goo.gl/maps/ua",
    image: "/images/iv-drip-lounge.jpg"
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
  }
];

export const memberships = [
  {
    name: "Level Up",
    price: 170,
    value: 336,
    credits: 8,
    perTherapy: 21.25,
    features: [
      "8 Credits / Month",
      "Use for Core Therapies or IV Drips",
      "1 Credit = 1 Core Therapy",
      "4 Credits = 1 IV Drip (Signature/High Dose)",
      "30% Off Specialty Services",
      "Rollover Credits (100 days)"
    ],
    bestFor: "Maintenance"
  },
  {
    name: "Elevate",
    price: 260,
    value: 588,
    credits: 14,
    perTherapy: 18.57,
    features: [
      "14 Credits / Month",
      "Use for Core Therapies or IV Drips",
      "1 Credit = 1 Core Therapy",
      "4 Credits = 1 IV Drip (Signature/High Dose)",
      "30% Off Specialty Services",
      "Rollover Credits (100 days)"
    ],
    bestFor: "Best Value",
    isPopular: true
  },
  {
    name: "Core",
    price: 300,
    value: 1302,
    credits: 31,
    perTherapy: 9.68,
    features: [
      "Daily Access (31 Credits)",
      "Use for Core Therapies Only",
      "1 Credit = 1 Core Therapy",
      "30% Off Specialty Services",
      "Credits expire monthly"
    ],
    bestFor: "Daily Users"
  }
];

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
    whoItsNotFor: ["Pregnant women", "People with uncontrolled high blood pressure", "Those with severe claustrophobia"],
    pricing: "Starting at $40 per session | Membership credits available",
    icon: Thermometer,
    image: "/images/cryotherapy-official.webp",
    category: "Core Therapies",
    faqs: [
      {
        q: "Is cryotherapy safe?",
        a: "Yes. Whole-body cryotherapy is FDA-cleared and widely used by professional athletes. Sessions are brief (2-3 min) to prevent tissue damage. Our staff monitors you throughout."
      },
      {
        q: "How often should I do cryotherapy?",
        a: "For athletic recovery, 2-3 times per week is ideal. For general wellness, 1-2 times per week. Start with 1-2 sessions to assess tolerance."
      },
      {
        q: "When will I feel results?",
        a: "Most people feel energized immediately. Anti-inflammatory benefits build over 3-5 sessions. Recovery improvements are noticeable within 1-2 weeks of consistent use."
      }
    ]
  },
  {
    id: "red-light",
    title: "Red Light Therapy",
    shortDesc: "Power up your mitochondria with low levels of red or near-infrared light.",
    fullDesc: "Red light therapy (also called photobiomodulation) uses specific wavelengths of red and near-infrared light to stimulate mitochondrial function and ATP production at the cellular level.",
    whatToExpect: "You'll stand in front of a light panel for 15-20 minutes. It's warm, relaxing, and completely non-invasive. No heat, no pain, no side effects.",
    benefits: ["Increase energy and reduce fatigue", "Improve skin health and collagen", "Reduce pain and inflammation", "Enhance athletic recovery", "Improve mood and cognitive function"],
    whoItsFor: ["Anyone with chronic fatigue", "People with joint or muscle pain", "Those seeking skin rejuvenation", "Athletes and fitness enthusiasts", "People with mood disorders"],
    whoItsNotFor: ["Those on light-sensitive medications (consult your doctor)", "People with untreated thyroid conditions"],
    pricing: "Starting at $35 per session | Membership credits available",
    icon: Sun,
    image: "/images/red-light-official.webp",
    category: "Core Therapies",
    faqs: [
      {
        q: "How does red light therapy work?",
        a: "Red light penetrates the skin and stimulates mitochondria (your cells' powerhouses) to produce more ATP (energy). This triggers healing and regeneration throughout your body."
      },
      {
        q: "How long until I see results?",
        a: "Some people feel more energized after the first session. Skin improvements typically appear within 2-4 weeks. Pain relief often builds over 5-10 sessions."
      },
      {
        q: "Is it safe for all skin types?",
        a: "Yes. Red light therapy is safe for all skin types and doesn't cause burns or damage. It's actually used to treat sun damage."
      }
    ]
  },
  {
    id: "infrared-sauna",
    title: "Infrared Sauna",
    shortDesc: "Sweat it out for 30-45 minutes through light waves and relaxing heat.",
    fullDesc: "Infrared saunas use light waves to heat your body directly (not the air). This allows deeper penetration and lower temperatures than traditional saunas, making the experience more comfortable and therapeutic.",
    whatToExpect: "You'll sit in a private sauna cabin for 30-45 minutes. It starts cool and gradually warms. You'll sweat, relax, and feel deeply rejuvenated.",
    benefits: ["Detoxify and improve circulation", "Reduce muscle tension and pain", "Support cardiovascular health", "Improve skin health", "Promote relaxation and stress relief"],
    whoItsFor: ["Anyone seeking detoxification", "People with muscle tension or arthritis", "Those with poor circulation", "Athletes and fitness enthusiasts", "Anyone stressed or sleep-deprived"],
    whoItsNotFor: ["Pregnant women", "People with uncontrolled hypertension", "Those with acute fever or infection"],
    pricing: "Starting at $45 per session | Membership credits available",
    icon: Flame,
    image: "/images/sauna-official.jpg",
    category: "Core Therapies",
    faqs: [
      {
        q: "How is infrared sauna different from traditional sauna?",
        a: "Infrared saunas heat your body directly with light waves, not hot air. This allows lower temperatures (130-150°F vs 180-220°F) while achieving deeper therapeutic effects."
      },
      {
        q: "How much will I sweat?",
        a: "You'll sweat significantly, but the lower temperature makes it more comfortable. Most people sweat more in an infrared sauna than a traditional one due to the deeper heat penetration."
      },
      {
        q: "How often should I use it?",
        a: "2-4 times per week is ideal for detoxification and health benefits. Daily use is safe but not necessary. Start with 1-2 times per week."
      }
    ]
  },
  {
    id: "compression",
    title: "Compression Therapy",
    shortDesc: "Experience relaxing, controlled pressure to the arms, legs and hips.",
    fullDesc: "Compression therapy uses dynamic air compression to apply controlled pressure to your limbs. This increases circulation, flushes metabolic waste, and accelerates recovery.",
    whatToExpect: "You'll wear compression sleeves or leg wraps for 30-45 minutes. The device inflates and deflates in a wave-like pattern. It's relaxing and you can read or work during the session.",
    benefits: ["Improve circulation and blood flow", "Reduce muscle soreness and fatigue", "Accelerate athletic recovery", "Reduce swelling and inflammation", "Improve flexibility and mobility"],
    whoItsFor: ["Athletes and weekend warriors", "People with poor circulation", "Those recovering from injury", "Anyone with muscle soreness", "People with swelling or edema"],
    whoItsNotFor: ["People with DVT or blood clots", "Those with severe varicose veins (consult doctor)"],
    pricing: "Starting at $40 per session | Membership credits available",
    icon: Activity,
    image: "/images/compression-official.webp",
    category: "Core Therapies",
    faqs: [
      {
        q: "When should I do compression therapy?",
        a: "Best done within 2-4 hours after intense exercise. Can also be used before workouts to warm up and improve blood flow."
      },
      {
        q: "How many sessions do I need?",
        a: "For acute recovery, 1-2 sessions post-workout. For chronic conditions, 2-3 times per week. Results improve with consistency."
      },
      {
        q: "Is it uncomfortable?",
        a: "No. The sensation is similar to a massage. Most people find it relaxing and often fall asleep during sessions."
      }
    ]
  },

  // IV & IM Therapy
  {
    id: "iv-drip",
    title: "IV Therapy",
    shortDesc: "Experience the highest quality nutrients delivered directly to your bloodstream.",
    fullDesc: "IV therapy delivers vitamins, minerals, and amino acids directly into your bloodstream, bypassing the digestive system for 100% absorption. This is the fastest way to replenish your body.",
    whatToExpect: "A nurse will insert an IV line (quick and relatively painless). You'll relax in a comfortable chair for 30-60 minutes while the drip infuses. Most people feel energized immediately.",
    benefits: ["Instant hydration and energy", "Boost immune function", "Improve athletic recovery", "Enhance mental clarity", "Support overall wellness"],
    whoItsFor: ["Anyone with fatigue or low energy", "Athletes and fitness enthusiasts", "People with poor nutrient absorption", "Those recovering from illness", "Anyone seeking wellness optimization"],
    whoItsNotFor: ["People with kidney disease", "Those with certain heart conditions (consult doctor)", "People with IV phobia (we can help)"],
    pricing: "Starting at $150 per drip | Membership credits available",
    icon: Droplet,
    image: "/images/iv-drip-official.webp",
    category: "IV & IM Therapy",
    faqs: [
      {
        q: "How is IV therapy different from taking vitamins orally?",
        a: "Oral vitamins are only 10-20% absorbed by your digestive system. IV therapy delivers 100% of nutrients directly to your bloodstream, making it 5-10x more effective."
      },
      {
        q: "Is IV therapy safe?",
        a: "Yes. All our IVs are administered by licensed nurses using sterile, medical-grade equipment. Serious complications are extremely rare."
      },
      {
        q: "How often should I get IV therapy?",
        a: "For maintenance, once monthly is ideal. For athletic recovery or illness, 1-2 times per week. Frequency depends on your goals and current health status."
      }
    ]
  },
  {
    id: "nad-iv",
    title: "NAD+ IV Therapy",
    shortDesc: "Jumpstart your cellular repair and protect your unique genetic makeup.",
    fullDesc: "NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme essential for cellular energy production and DNA repair. NAD+ levels decline with age. IV therapy restores them rapidly.",
    whatToExpect: "Similar to standard IV therapy. The infusion takes 30-60 minutes. You may feel energized, focused, and rejuvenated during and after the session.",
    benefits: ["Boost energy and mental clarity", "Support cellular repair and longevity", "Improve athletic performance", "Reduce inflammation", "Support addiction recovery"],
    whoItsFor: ["Anyone over 30 seeking anti-aging", "Athletes and high performers", "People with chronic fatigue", "Those seeking cognitive enhancement", "Anyone interested in longevity"],
    whoItsNotFor: ["Pregnant women", "People with certain cancers (consult doctor)"],
    pricing: "Starting at $300 per drip | Membership credits available",
    icon: Zap,
    image: "/images/iv-drip-official.webp",
    category: "IV & IM Therapy",
    faqs: [
      {
        q: "Why is NAD+ important?",
        a: "NAD+ is critical for energy production, DNA repair, and cellular communication. Low NAD+ is linked to aging, fatigue, and disease. Restoring it supports longevity and performance."
      },
      {
        q: "How long do the effects last?",
        a: "Most people feel effects for 2-4 weeks. Many do monthly infusions to maintain optimal levels. Some do quarterly for maintenance."
      },
      {
        q: "Is NAD+ therapy worth it?",
        a: "If you're over 30, fatigued, or serious about longevity, yes. NAD+ is one of the most researched anti-aging interventions. Results are often noticeable and measurable."
      }
    ]
  },
  {
    id: "im-shot",
    title: "IM Shots",
    shortDesc: "Boost wellness from within with a quick, 5-min Intramuscular Shot.",
    fullDesc: "Intramuscular (IM) shots deliver concentrated nutrients directly into muscle tissue for rapid absorption. Perfect for those on the go who want quick results.",
    whatToExpect: "A quick injection into the muscle (usually the arm or glute). Takes 30 seconds. Minimal discomfort. You're done in 5 minutes.",
    benefits: ["Quick energy boost", "Rapid nutrient delivery", "Support metabolism", "Enhance athletic performance", "Convenient and affordable"],
    whoItsFor: ["Busy professionals", "Athletes between workouts", "Anyone seeking quick energy", "People who prefer injections over IVs"],
    whoItsNotFor: ["People with needle phobia", "Those with certain bleeding disorders"],
    pricing: "Starting at $30 per shot | Often included in membership",
    icon: Syringe,
    image: "/images/iv-drip-official.webp",
    category: "IV & IM Therapy",
    faqs: [
      {
        q: "Does the shot hurt?",
        a: "Minimal discomfort. Most people compare it to a quick pinch. The needle is small and the injection is fast."
      },
      {
        q: "What's in the IM shots?",
        a: "Common options include B12 (energy), Lipo (metabolism), Glutathione (antioxidant), and NAD+ (cellular health). We customize based on your goals."
      },
      {
        q: "How often can I get IM shots?",
        a: "Weekly is safe and common. Many people do 1-2 per week for energy and performance. Daily is not recommended."
      }
    ]
  },

  // Skin Health
  {
    id: "hydrafacial",
    title: "Hydrafacial",
    shortDesc: "Cleanse, hydrate and replenish skin with nourishing antioxidant peptides.",
    fullDesc: "Hydrafacial is a non-invasive skin resurfacing treatment that uses vortex-fusion technology to cleanse, extract, and hydrate your skin in one session.",
    whatToExpect: "A relaxing 30-45 minute facial. No pain, no downtime. Your skin will look glowing immediately after.",
    benefits: ["Clearer, brighter skin", "Reduced fine lines and wrinkles", "Improved skin texture", "Minimized pores", "Hydrated, glowing complexion"],
    whoItsFor: ["Anyone with dull or congested skin", "People with fine lines or wrinkles", "Those seeking skin rejuvenation", "Anyone wanting a quick glow"],
    whoItsNotFor: ["People with active severe acne (consult esthetician)", "Those with certain skin conditions"],
    pricing: "Starting at $150 per session",
    icon: Sparkles,
    image: "/images/hero-wellness-columbus.jpg",
    category: "Skin Health",
    faqs: [
      {
        q: "How often should I get Hydrafacials?",
        a: "Monthly is ideal for best results. Some people do every 2-3 weeks for special events. Maintenance is every 4-6 weeks."
      },
      {
        q: "Is there downtime?",
        a: "No downtime. Your skin may be slightly pink for 30 minutes. You can return to normal activities immediately."
      },
      {
        q: "Will it help with acne?",
        a: "Yes, for mild to moderate acne. The extraction and hydration help clear congestion. For severe acne, consult our esthetician first."
      }
    ]
  },
  {
    id: "neveskin",
    title: "Neveskin (Facial & Body Contouring)",
    shortDesc: "Help reduce the signs of aging and tighten and tone the skin with cold therapy.",
    fullDesc: "Neveskin combines radiofrequency and cryotherapy for skin tightening, body contouring, and cellulite reduction. It's non-invasive with no downtime.",
    whatToExpect: "A 30-45 minute treatment. You'll feel gentle warmth and cooling sensations. Completely painless. Results improve over 2-4 weeks.",
    benefits: ["Tighter, firmer skin", "Reduced cellulite appearance", "Body contouring without surgery", "Improved skin texture", "Anti-aging benefits"],
    whoItsFor: ["Anyone seeking skin tightening", "People with cellulite concerns", "Those wanting body contouring", "Anyone over 35 seeking anti-aging"],
    whoItsNotFor: ["Pregnant women", "People with certain implants (consult first)"],
    pricing: "Starting at $200 per session",
    icon: Activity,
    image: "/images/hero-wellness-columbus.jpg",
    category: "Body Contouring",
    faqs: [
      {
        q: "How many sessions do I need?",
        a: "Most people see results after 4-6 sessions. A package of 6-8 sessions is recommended for optimal results."
      },
      {
        q: "Is there downtime?",
        a: "No downtime. You can return to normal activities immediately. Avoid intense exercise for 24 hours."
      },
      {
        q: "How long do results last?",
        a: "Results typically last 6-12 months. Maintenance sessions every 3-4 months help sustain results."
      }
    ]
  },

  // Medical Services
  {
    id: "mhbot",
    title: "Mild Hyperbaric Oxygen Therapy (mHbOT)",
    shortDesc: "Experience enhanced oxygenation to help gain a cognitive edge.",
    fullDesc: "Mild hyperbaric oxygen therapy exposes your body to 95% oxygen at 1.3-1.75 atmospheres of pressure. This increases oxygen saturation in your blood and tissues.",
    whatToExpect: "You'll sit in a comfortable chamber for 60 minutes. It's pressurized gradually. Most people relax, read, or sleep during the session.",
    benefits: ["Improve cognitive clarity and focus", "Accelerate athletic recovery", "Enhance wound healing", "Reduce inflammation", "Improve sleep quality"],
    whoItsFor: ["Athletes and high performers", "People with brain fog", "Anyone seeking cognitive enhancement", "Those recovering from injury", "People with chronic fatigue"],
    whoItsNotFor: ["People with uncontrolled fever", "Those with certain lung conditions (consult doctor)"],
    pricing: "Starting at $100 per session",
    icon: Wind,
    image: "/images/mhbot-official.jpg",
    category: "Medical Services",
    faqs: [
      {
        q: "Is mHbOT safe?",
        a: "Yes. Mild hyperbaric therapy is FDA-cleared and used in hospitals. Side effects are minimal and usually just ear pressure (like flying)."
      },
      {
        q: "How often should I do mHbOT?",
        a: "For athletic recovery, 2-3 times per week. For cognitive enhancement, 1-2 times per week. Results build over 10-20 sessions."
      },
      {
        q: "When will I feel results?",
        a: "Some people feel more alert immediately. Cognitive and recovery benefits typically appear within 5-10 sessions."
      }
    ]
  },
  {
    id: "biomarkers",
    title: "Biomarker Assessments",
    shortDesc: "Discover deficiencies and genetic markers that need attention.",
    fullDesc: "Comprehensive blood work that measures key health markers: vitamins, minerals, hormones, inflammation, metabolic health, and more. Personalized insights guide your wellness plan.",
    whatToExpect: "A quick blood draw. Results in 3-5 business days. Detailed report with personalized recommendations from our medical team.",
    benefits: ["Identify nutrient deficiencies", "Detect early health issues", "Optimize hormone levels", "Guide personalized treatment plans", "Track progress over time"],
    whoItsFor: ["Anyone seeking preventive health", "People with unexplained fatigue", "Athletes optimizing performance", "Anyone over 30 seeking baseline health data"],
    whoItsNotFor: ["No major contraindications"],
    pricing: "Starting at $200 per assessment",
    icon: Microscope,
    image: "/images/hero-wellness-columbus.jpg",
    category: "Medical Services",
    faqs: [
      {
        q: "What biomarkers are tested?",
        a: "We test 50+ markers including vitamins, minerals, hormones, inflammation, metabolic health, immune function, and more. Custom panels available."
      },
      {
        q: "How often should I test?",
        a: "Baseline testing is recommended for everyone. Follow-up testing every 3-6 months helps track progress and guide treatment adjustments."
      },
      {
        q: "Will my insurance cover it?",
        a: "Some plans do. We can verify coverage. Many people find the insights worth the cost even without insurance coverage."
      }
    ]
  },

  // Weight Loss & Hormones
  {
    id: "glp1",
    title: "GLP-1 Weight Loss Plans",
    shortDesc: "Experience safe, medicated weight loss with a customized treatment plan.",
    fullDesc: "GLP-1 medications (like Ozempic, Wegovy) combined with clinical guidance help regulate appetite, increase fullness, and support sustainable weight loss.",
    whatToExpect: "Initial consultation with our medical team. Weekly injections. Regular check-ins and dosage adjustments. Personalized nutrition and lifestyle guidance.",
    benefits: ["Regulate appetite naturally", "Increase feelings of fullness", "Lose fat while preserving muscle", "Improve metabolic health", "Sustainable, long-term results"],
    whoItsFor: ["Anyone with BMI over 25", "People with weight loss resistance", "Those with metabolic dysfunction", "Anyone seeking sustainable weight loss"],
    whoItsNotFor: ["Pregnant women", "People with personal/family history of thyroid cancer", "Those with certain GI conditions (consult doctor)"],
    pricing: "Starting at $400/month | Includes medical supervision",
    icon: Scale,
    image: "/images/hero-wellness-columbus.jpg",
    category: "Weight Loss",
    faqs: [
      {
        q: "How much weight can I lose?",
        a: "Average weight loss is 5-15% of body weight over 6 months. Combined with diet and exercise, results can be even better."
      },
      {
        q: "Are there side effects?",
        a: "Common side effects are mild: nausea, constipation, reduced appetite. Most resolve within 1-2 weeks. Serious side effects are rare."
      },
      {
        q: "Is this just another fad diet?",
        a: "No. GLP-1 therapy addresses the biological mechanisms of appetite and weight regulation. It's backed by extensive clinical research and FDA-approved."
      }
    ]
  },
  {
    id: "trt",
    title: "Testosterone Replacement Therapy (TRT)",
    shortDesc: "Optimize testosterone levels and reclaim your vitality.",
    fullDesc: "TRT is medical treatment for low testosterone (hypogonadism). We provide comprehensive testing, personalized dosing, and ongoing monitoring to optimize your hormone levels safely.",
    whatToExpect: "Initial bloodwork and consultation. Personalized treatment plan. Weekly or bi-weekly injections or topical applications. Regular monitoring and adjustments.",
    benefits: ["Increased energy and libido", "Improved muscle mass and strength", "Better mood and cognitive function", "Enhanced athletic performance", "Improved overall vitality"],
    whoItsFor: ["Men with low testosterone symptoms", "Those with confirmed low T levels", "Men seeking performance optimization", "Anyone experiencing age-related decline"],
    whoItsNotFor: ["Men with prostate cancer", "Those with untreated sleep apnea", "Men seeking to become pregnant (consult doctor)"],
    pricing: "Starting at $300/month | Includes medical supervision and monitoring",
    icon: TrendingUp,
    image: "/images/iv-drip-lounge.jpg",
    category: "Hormones",
    faqs: [
      {
        q: "How do I know if I have low testosterone?",
        a: "Symptoms include fatigue, low libido, muscle loss, mood changes, and brain fog. Bloodwork confirms diagnosis. We offer free consultations."
      },
      {
        q: "Is TRT safe?",
        a: "When properly monitored, yes. We conduct regular bloodwork, monitor prostate health, and adjust dosing to keep you in optimal ranges."
      },
      {
        q: "What if I stop TRT?",
        a: "Your testosterone will return to baseline within 1-3 months. We discuss long-term plans during your initial consultation."
      }
    ]
  }
];

// Comparison Content
export const comparisons = [
  {
    id: "cryo-vs-cold-plunge",
    title: "Cryotherapy vs Cold Plunge: Which is Better?",
    slug: "cryotherapy-vs-cold-plunge",
    excerpt: "Both use extreme cold for recovery, but they're very different experiences. Here's how they compare.",
    content: `
## The Difference

**Cryotherapy** uses a chamber with extreme cold (-200°F to -300°F) for 2-3 minutes. Your whole body is exposed to dry cold.

**Cold Plunge** involves immersing your body in ice water (50-60°F) for 1-3 minutes. It's wet, intense, and requires more willpower.

## Effectiveness

Both work, but differently:
- **Cryotherapy** is more tolerable and consistent. Dry cold is easier to handle than wet cold.
- **Cold Plunge** may trigger stronger parasympathetic activation (relaxation response) due to the shock.

## Recovery Benefits

- **Cryotherapy**: Better for inflammation, muscle soreness, and general recovery. Easier to do consistently.
- **Cold Plunge**: Better for nervous system training and mental toughness. More intense but less frequent.

## Cost & Convenience

- **Cryotherapy**: $40-60 per session. Takes 3 minutes plus setup.
- **Cold Plunge**: $30-50 per session. Takes 1-3 minutes but requires more mental preparation.

## Our Recommendation

For most people: **Cryotherapy**. It's more effective, more comfortable, and easier to stick with. Cold plunge is great if you're seeking the mental challenge or nervous system adaptation.

Many athletes do both: cryotherapy for recovery, cold plunge for nervous system training.
    `
  },
  {
    id: "iv-vs-supplements",
    title: "IV Therapy vs Oral Supplements: Why IV Wins",
    slug: "iv-therapy-vs-supplements",
    excerpt: "You take vitamins daily, but are they actually working? Here's the science.",
    content: `
## Absorption Rates

**Oral Supplements**: 10-20% absorption rate. Your digestive system breaks down most nutrients.

**IV Therapy**: 100% absorption. Nutrients bypass digestion and go straight into your bloodstream.

## Why the Difference?

Your digestive system is designed to break things down. Many nutrients are damaged or lost in this process. IV therapy delivers intact, bioavailable nutrients directly to your cells.

## Cost Comparison

- **Oral Supplements**: $20-50/month. Low absorption means you're wasting money.
- **IV Therapy**: $150-300 per session. Higher cost, but 5-10x more effective.

Real cost per absorbed nutrient: IV is often cheaper.

## When to Use Each

**Oral Supplements**: Maintenance, daily micronutrient support, convenience.

**IV Therapy**: Recovery, acute deficiency, performance optimization, when results matter.

## The Bottom Line

If you're serious about results, IV therapy is the move. Oral supplements are fine for general health, but if you're an athlete, entrepreneur, or dealing with fatigue, IV therapy is worth the investment.

Many of our clients do both: daily oral supplements for maintenance + monthly IV therapy for optimization.
    `
  },
  {
    id: "red-light-vs-sauna",
    title: "Red Light Therapy vs Infrared Sauna: Which Should You Choose?",
    slug: "red-light-vs-infrared-sauna",
    excerpt: "Both use light and heat, but they work differently. Here's what you need to know.",
    content: `
## How They Work

**Red Light Therapy**: Uses specific wavelengths (600-1000nm) to stimulate mitochondria and increase ATP production. Cellular-level energy boost.

**Infrared Sauna**: Uses light waves to heat your body directly. Promotes sweating, circulation, and detoxification.

## Primary Benefits

**Red Light**: Energy, cellular repair, skin health, pain reduction, cognitive function.

**Infrared Sauna**: Detoxification, circulation, stress relief, muscle relaxation, cardiovascular health.

## Time Commitment

**Red Light**: 15-20 minutes per session.

**Infrared Sauna**: 30-45 minutes per session.

## Cost

**Red Light**: $35-50 per session.

**Infrared Sauna**: $45-60 per session.

## Our Recommendation

**Choose Red Light if**: You want energy, cognitive enhancement, or skin improvement. You're short on time.

**Choose Infrared Sauna if**: You want detoxification, stress relief, or deep relaxation. You have 30-45 minutes.

**Best approach**: Do both. They complement each other. Red light in the morning for energy, sauna in the evening for recovery and relaxation.
    `
  },
  {
    id: "nad-worth-it",
    title: "Is NAD+ IV Therapy Worth It? A Honest Assessment",
    slug: "is-nad-iv-therapy-worth-it",
    excerpt: "NAD+ is trending in biohacking circles. But is it actually worth the money?",
    content: `
## What NAD+ Does

NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme that:
- Powers cellular energy production
- Supports DNA repair
- Regulates circadian rhythm
- Activates longevity genes (sirtuins)

NAD+ levels decline ~50% from age 20 to 50. This contributes to aging, fatigue, and disease.

## The Science

Hundreds of peer-reviewed studies show NAD+ is critical for health and longevity. Restoring NAD+ levels has been shown to:
- Improve energy and cognitive function
- Support muscle health and athletic performance
- Reduce inflammation
- Improve sleep quality
- Support cardiovascular health

## Cost vs Benefit

**Cost**: $300-500 per infusion. Most people do monthly = $3,600-6,000/year.

**Benefits**: Measurable improvements in energy, focus, athletic performance, and recovery.

## Who Should Do It?

**Definitely Worth It**:
- Athletes and high performers
- Anyone over 40 seeking anti-aging
- People with chronic fatigue
- Anyone serious about longevity

**Maybe Worth It**:
- People over 30 with good baseline health
- Anyone curious about optimization

**Skip It**:
- People under 30 with no health issues
- Those on tight budgets (try other therapies first)

## Our Honest Take

If you're serious about performance, longevity, or dealing with fatigue, NAD+ is worth trying. Start with 2-3 infusions monthly for 3 months. If you feel significantly better, continue. If not, reallocate to other therapies.

Many clients combine NAD+ with other therapies (cryotherapy, red light, sauna) for synergistic effects.
    `
  }
];

export const blogPosts = [
  {
    slug: "columbus-marathon-recovery",
    title: "The Ultimate Recovery Guide for the Columbus Marathon 2026",
    excerpt: "Whether you're tackling the full 26.2 or the half, your recovery strategy is just as important as your training. Here's how to bounce back fast.",
    date: "Oct 12, 2025",
    image: "/images/columbus-community-wellness.jpg",
    category: "Athletic Recovery"
  },
  {
    slug: "buckeye-season-wellness",
    title: "Surviving & Thriving During Buckeye Football Season",
    excerpt: "Don't let the tailgate hangover ruin your week. Discover our wellness playbook for staying energized through every game day.",
    date: "Sep 01, 2025",
    image: "/images/hero-wellness-columbus.jpg",
    category: "Lifestyle"
  },
  {
    slug: "columbus-winter-wellness",
    title: "Beating the Columbus Winter Blues: A Science-Backed Guide",
    excerpt: "Combat SAD and low energy during the grey Ohio winter with Red Light Therapy, Vitamin D, and more.",
    date: "Jan 05, 2026",
    image: "/images/red-light-official.webp",
    category: "Seasonal Health"
  }
];

export const testimonials = [
  {
    name: "Sarah M.",
    location: "Columbus, OH",
    text: "I trained for the Columbus Marathon and the cryotherapy at the Easton location saved my legs! The staff is so knowledgeable and friendly.",
    rating: 5
  },
  {
    name: "Mike D.",
    location: "Upper Arlington, OH",
    text: "The IV drips are a game changer. I come in every month for an energy boost. Love the local ownership vibe.",
    rating: 5
  },
  {
    name: "Jessica T.",
    location: "Powell, OH",
    text: "Beautiful studio at Polaris. It feels like a high-end spa but with medical grade treatments. Highly recommend the Red Light Therapy.",
    rating: 5
  }
];
