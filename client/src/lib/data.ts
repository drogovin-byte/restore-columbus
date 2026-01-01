import { Battery, Activity, AlertCircle, Moon, TrendingUp, Thermometer, Sun, Flame, Droplet, Zap, Heart, Brain, Smile, Users } from "lucide-react";

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
    credits: 100,
    benefits: ["100 monthly credits", "Book anytime", "Pause anytime", "Access to all services"],
    isPopular: false,
    features: ["100 monthly credits", "Book anytime", "Pause anytime", "Access to all services"]
  },
  {
    name: "Elevate",
    price: 260,
    value: 540,
    credits: 200,
    benefits: ["200 monthly credits", "Book anytime", "Pause anytime", "Priority booking", "Exclusive member events"],
    isPopular: true,
    features: ["200 monthly credits", "Book anytime", "Pause anytime", "Priority booking", "Exclusive member events"]
  },
  {
    name: "Core",
    price: 300,
    value: 720,
    credits: 300,
    benefits: ["300 monthly credits", "Book anytime", "Pause anytime", "Priority booking", "Exclusive member events", "Complimentary consultations"],
    isPopular: false,
    features: ["300 monthly credits", "Book anytime", "Pause anytime", "Priority booking", "Exclusive member events", "Complimentary consultations"]
  }
];

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
    whoItsNotFor: ["Pregnant women", "People with uncontrolled high blood pressure", "Those with severe claustrophobia"],
    pricing: "Starting at $40 per session | Membership credits available",
    icon: Thermometer,
    image: "/images/service_07_Woman_wearing_protective_robe,.webp",
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
    image: "/images/service_08_Woman_with_her_hands_above_her.webp",
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
    image: "/images/service_09_Woman_relaxing_in_an_infrared_.webp",
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
    image: "/images/service_10_A_man_wearing_Normatec_compres.webp",
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
    image: "/images/service_11_Young_couple_relaxing_while_en.webp",
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
    image: "/images/service_12_Smiling_woman_receiving_a_NAD+.webp",
    category: "IV & IM Therapy",
    faqs: [
      {
        q: "What is NAD+?",
        a: "NAD+ is a coenzyme found in every cell. It's crucial for energy production, DNA repair, and cellular longevity. NAD+ levels decline 50% by age 50."
      },
      {
        q: "How is NAD+ IV different from oral NAD+ supplements?",
        a: "IV NAD+ bypasses the digestive system for 100% absorption and immediate effects. Oral supplements have poor bioavailability (only 1-5% absorption)."
      },
      {
        q: "When will I feel the effects?",
        a: "Many people feel increased clarity and energy during the infusion. Full benefits (improved sleep, mood, energy) develop over 3-7 days."
      }
    ]
  },
  {
    id: "im-shots",
    title: "Intramuscular Shots",
    shortDesc: "Quick, targeted nutrient injections for rapid absorption.",
    fullDesc: "IM shots deliver vitamins and nutrients directly into muscle tissue for faster absorption than oral supplements. Perfect for busy people seeking quick wellness boosts.",
    whatToExpect: "A quick injection (similar to a vaccine) into the arm or leg. Takes less than 5 minutes. Minimal discomfort. You can get back to your day immediately.",
    benefits: ["Rapid nutrient absorption", "Quick energy boost", "Support immune function", "Improve metabolism", "Convenient and fast"],
    whoItsFor: ["Busy professionals", "Athletes needing quick recovery", "Anyone with poor oral absorption", "Those seeking quick energy", "People with nutrient deficiencies"],
    whoItsNotFor: ["People with needle phobia", "Those with certain bleeding disorders"],
    pricing: "Starting at $40 per shot | Membership credits available",
    icon: Heart,
    image: "/images/service_13_A_man_receiving_an_intramuscul.webp",
    category: "IV & IM Therapy",
    faqs: [
      {
        q: "What's the difference between IM and IV?",
        a: "IM shots are faster and more convenient (5 min vs 30-60 min). IV therapy delivers larger volumes and is better for comprehensive nutrient replacement."
      },
      {
        q: "Does it hurt?",
        a: "Minimal discomfort. The needle is small and the injection is quick. Most people compare it to a vaccine."
      },
      {
        q: "How often can I get IM shots?",
        a: "Weekly or bi-weekly is common for energy and wellness. Frequency depends on your goals and nutrient levels."
      }
    ]
  },
  {
    id: "nad-im",
    title: "NAD+ IM Shot Therapy",
    shortDesc: "Cellular energy in a single injection.",
    fullDesc: "NAD+ IM shots deliver this crucial coenzyme directly into muscle tissue. Faster than IV, more convenient, and perfect for those seeking cellular energy optimization.",
    whatToExpect: "A quick injection into the arm or leg. Takes less than 5 minutes. You'll feel energized and mentally sharp within 30-60 minutes.",
    benefits: ["Rapid cellular energy boost", "Enhanced mental clarity", "Improved mood and focus", "Quick anti-aging support", "Convenient and fast"],
    whoItsFor: ["Busy professionals", "Athletes and high performers", "Anyone over 30", "Those seeking quick cognitive boost", "Anyone interested in longevity"],
    whoItsNotFor: ["Pregnant women", "People with needle phobia"],
    pricing: "Starting at $75 per shot | Membership credits available",
    icon: Brain,
    image: "/images/service_14_NAD+_IM_Shot_vials.webp",
    category: "IV & IM Therapy",
    faqs: [
      {
        q: "How quickly does NAD+ IM work?",
        a: "Most people feel effects within 30-60 minutes. Peak effects occur 2-4 hours after injection."
      },
      {
        q: "How often should I get NAD+ IM shots?",
        a: "Weekly is ideal for anti-aging and cognitive enhancement. Bi-weekly for maintenance. Frequency depends on your goals."
      },
      {
        q: "Is NAD+ IM safe?",
        a: "Yes. NAD+ is a naturally occurring coenzyme. Side effects are rare and usually mild (slight arm soreness at injection site)."
      }
    ]
  },
  {
    id: "niagen-im",
    title: "Niagen (NR) IM Shots",
    shortDesc: "Nicotinamide riboside for cellular energy and longevity.",
    fullDesc: "Niagen (NR) is a precursor to NAD+. IM shots deliver this compound for cellular energy production and DNA repair support.",
    whatToExpect: "Quick injection into the arm or leg. Takes less than 5 minutes. Effects build over several hours.",
    benefits: ["Support cellular energy", "Promote longevity", "Enhance athletic performance", "Support metabolic health", "Convenient delivery"],
    whoItsFor: ["Athletes and fitness enthusiasts", "Anyone over 30", "Those seeking metabolic support", "People interested in longevity", "Anyone with low energy"],
    whoItsNotFor: ["Pregnant women", "People with needle phobia"],
    pricing: "Starting at $50 per shot | Membership credits available",
    icon: Zap,
    image: "/images/service_15_Nurse_administering_Niagen_NR_.webp",
    category: "IV & IM Therapy",
    faqs: [
      {
        q: "What is Niagen (NR)?",
        a: "Niagen is a form of vitamin B3 that converts to NAD+ in your body. It supports cellular energy and DNA repair."
      },
      {
        q: "How is Niagen IM different from NAD+ IM?",
        a: "Niagen IM is a precursor to NAD+, so effects build over time. NAD+ IM provides immediate NAD+ elevation. Both support cellular health."
      },
      {
        q: "When will I feel results?",
        a: "Energy and focus improvements typically appear within 2-4 hours. Full benefits develop over 3-7 days with consistent use."
      }
    ]
  },
  {
    id: "niagen-iv",
    title: "Niagen (NR) IV Drips",
    shortDesc: "Maximum cellular energy support through IV delivery.",
    fullDesc: "Niagen IV drips deliver nicotinamide riboside directly to your bloodstream for maximum absorption and cellular energy support.",
    whatToExpect: "Similar to standard IV therapy. Relax in a comfortable chair for 30-60 minutes while the drip infuses. Feel energized and rejuvenated.",
    benefits: ["Maximum cellular energy", "Enhanced longevity support", "Improved athletic recovery", "Better sleep quality", "Enhanced cognitive function"],
    whoItsFor: ["Athletes and high performers", "Anyone over 30", "Those seeking comprehensive anti-aging", "People with chronic fatigue", "Anyone interested in cellular health"],
    whoItsNotFor: ["People with kidney disease", "Those with certain heart conditions"],
    pricing: "Starting at $250 per drip | Membership credits available",
    icon: Droplet,
    image: "/images/service_16_Woman_receiving_Niagen_(NR)_tr.webp",
    category: "IV & IM Therapy",
    faqs: [
      {
        q: "How long does a Niagen IV take?",
        a: "Typically 30-60 minutes depending on the protocol and your individual response."
      },
      {
        q: "Can I combine Niagen IV with other therapies?",
        a: "Yes. Many people combine it with red light therapy or compression therapy for enhanced results."
      },
      {
        q: "How often should I get Niagen IV?",
        a: "Monthly for maintenance. Weekly for intensive anti-aging or athletic performance protocols."
      }
    ]
  },

  // Skin Health Services
  {
    id: "hydrafacial",
    title: "Hydrafacial™",
    shortDesc: "Hydradermabrasion and hydration for glowing, youthful skin.",
    fullDesc: "Hydrafacial is a non-invasive facial that uses vortex-fusion technology to cleanse, extract, and hydrate your skin. It's like a power wash for your face.",
    whatToExpect: "A 30-minute facial treatment. You'll feel gentle suction and hydration. No downtime. Skin feels immediately refreshed and glowing.",
    benefits: ["Deep cleansing and exfoliation", "Reduce fine lines and wrinkles", "Improve skin texture and tone", "Hydrate and plump skin", "Reduce pore appearance", "No downtime"],
    whoItsFor: ["Anyone seeking glowing skin", "People with acne or congestion", "Those with dull or tired skin", "Anyone over 30", "People before special events"],
    whoItsNotFor: ["Those with active skin infections", "People with severe rosacea (consult doctor)"],
    pricing: "Starting at $150 per facial | Membership credits available",
    icon: Smile,
    image: "/images/service_17_Relaxed_woman_receiving_a_Hydr.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "Is Hydrafacial safe for all skin types?",
        a: "Yes. Hydrafacial is safe and effective for all skin types, including sensitive skin."
      },
      {
        q: "How often should I get Hydrafacial?",
        a: "Monthly is ideal for best results. Some people do bi-weekly for intensive skin rejuvenation."
      },
      {
        q: "When will I see results?",
        a: "Your skin will look glowing immediately after treatment. Cumulative benefits (reduced fine lines, improved texture) appear after 3-4 treatments."
      }
    ]
  },
  {
    id: "neveskin-facial",
    title: "Neveskin™ Facial",
    shortDesc: "Advanced radiofrequency technology for skin tightening and rejuvenation.",
    fullDesc: "Neveskin uses radiofrequency energy to stimulate collagen production and tighten skin. It's non-invasive and requires no downtime.",
    whatToExpect: "A 30-45 minute treatment. You'll feel gentle warmth and slight vibration. Skin feels tighter and more lifted immediately.",
    benefits: ["Tighten and lift skin", "Reduce fine lines and wrinkles", "Improve skin elasticity", "Stimulate collagen production", "Improve skin texture", "No downtime"],
    whoItsFor: ["Anyone over 35", "People seeking skin tightening", "Those with loose or sagging skin", "Anyone wanting non-invasive facelift results", "People seeking anti-aging"],
    whoItsNotFor: ["Pregnant women", "People with metal implants in face", "Those with active skin infections"],
    pricing: "Starting at $200 per facial | Membership credits available",
    icon: Smile,
    image: "/images/service_18_Woman_receiving_Neveskin™_Faci.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "Is Neveskin painful?",
        a: "No. Most people describe it as warm and comfortable. No numbing required."
      },
      {
        q: "When will I see results?",
        a: "Immediate tightening effect. Collagen stimulation results appear over 2-4 weeks. Best results after 3-6 treatments."
      },
      {
        q: "How often should I get Neveskin?",
        a: "Monthly for optimal results. Maintenance treatments every 6-8 weeks after initial series."
      }
    ]
  },
  {
    id: "neveskin-shape",
    title: "Neveskin™ Shape",
    shortDesc: "Body contouring and skin tightening for arms, legs, and abdomen.",
    fullDesc: "Neveskin Shape uses radiofrequency technology on larger body areas to tighten skin and improve contours without surgery.",
    whatToExpect: "A 45-60 minute treatment. Gentle warmth and vibration. Skin feels tighter and more toned immediately.",
    benefits: ["Tighten loose skin", "Improve body contours", "Reduce cellulite appearance", "Non-invasive body sculpting", "No downtime"],
    whoItsFor: ["Anyone with loose skin", "People seeking non-surgical body tightening", "Those after weight loss", "Anyone wanting improved contours", "People seeking cellulite reduction"],
    whoItsNotFor: ["Pregnant women", "People with metal implants", "Those with active skin infections"],
    pricing: "Starting at $250 per treatment | Membership credits available",
    icon: Heart,
    image: "/images/service_19_Woman_receiving_Neveskin™_Shap.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "Can Neveskin Shape replace liposuction?",
        a: "Neveskin Shape is best for skin tightening and mild contouring. For significant fat removal, liposuction may be more effective. Consult our team."
      },
      {
        q: "How many treatments do I need?",
        a: "Most people see results after 4-6 treatments. Maintenance treatments every 2-3 months."
      },
      {
        q: "Is there downtime?",
        a: "No downtime. You can return to normal activities immediately."
      }
    ]
  },
  {
    id: "neveskin-tone",
    title: "Neveskin™ Tone",
    shortDesc: "Targeted radiofrequency for skin tightening and muscle toning.",
    fullDesc: "Neveskin Tone combines radiofrequency with microcurrent technology to tighten skin and enhance muscle definition.",
    whatToExpect: "A 30-45 minute treatment. Gentle warmth and slight electrical sensation. Skin feels tighter and more defined.",
    benefits: ["Tighten and tone skin", "Enhance muscle definition", "Reduce fine lines", "Improve skin elasticity", "Non-invasive muscle toning"],
    whoItsFor: ["Athletes seeking muscle definition", "Anyone over 30", "People wanting skin tightening", "Those seeking non-invasive toning", "Anyone interested in facial or body contouring"],
    whoItsNotFor: ["Pregnant women", "People with pacemakers", "Those with metal implants"],
    pricing: "Starting at $200 per treatment | Membership credits available",
    icon: Smile,
    image: "/images/service_20_Person_receiving_Neveskin™_Ton.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "What's the difference between Neveskin Facial, Shape, and Tone?",
        a: "Facial focuses on face rejuvenation. Shape targets body contouring. Tone combines skin tightening with muscle definition enhancement."
      },
      {
        q: "How quickly will I see results?",
        a: "Immediate tightening effect. Cumulative results appear after 3-4 treatments over 2-4 weeks."
      },
      {
        q: "Can I combine treatments?",
        a: "Yes. Many people combine Neveskin Tone with red light therapy or IV therapy for enhanced results."
      }
    ]
  },
  {
    id: "marini-peels",
    title: "Marini® Advanced Peels",
    shortDesc: "Professional chemical peels for deep skin renewal.",
    fullDesc: "Marini Advanced Peels use professional-grade acids to exfoliate and renew skin. Customized for your skin type and concerns.",
    whatToExpect: "A 30-45 minute treatment. You'll feel tingling and warmth. Skin may be slightly red afterward (normal). Minimal downtime.",
    benefits: ["Deep exfoliation and renewal", "Reduce acne and breakouts", "Improve skin texture", "Reduce hyperpigmentation", "Stimulate collagen", "Reveal fresh, glowing skin"],
    whoItsFor: ["Anyone with acne or breakouts", "People with sun damage", "Those with uneven skin tone", "Anyone seeking skin renewal", "People over 30"],
    whoItsNotFor: ["Those with active skin infections", "People with severe rosacea", "Those on certain medications (consult doctor)"],
    pricing: "Starting at $120 per peel | Membership credits available",
    icon: Smile,
    image: "/images/service_21_Woman_receiving_the_Marini®_Ad.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "Will my skin peel after a Marini peel?",
        a: "Some light peeling is normal and expected. It typically lasts 2-3 days. This is part of the skin renewal process."
      },
      {
        q: "Can I wear makeup after?",
        a: "Wait 24 hours before applying makeup. Use gentle, non-irritating products for the first few days."
      },
      {
        q: "How often can I get Marini peels?",
        a: "Monthly is ideal for best results. Some people do every 2-3 weeks for intensive skin renewal."
      }
    ]
  },
  {
    id: "hydropeptide-oxygen",
    title: "HydroPeptide Oxygen Facial",
    shortDesc: "Oxygen infusion for instant skin rejuvenation.",
    fullDesc: "HydroPeptide Oxygen Facials use pressurized oxygen to infuse serums deep into skin. Results are immediate and dramatic.",
    whatToExpect: "A 30-minute facial. You'll feel gentle pressure and warmth. Skin looks visibly plumper and more radiant immediately.",
    benefits: ["Instant hydration and plumping", "Reduce fine lines temporarily", "Improve skin radiance", "Boost circulation", "Perfect before events"],
    whoItsFor: ["Anyone seeking instant glow", "People before special events", "Those with dull skin", "Anyone wanting hydration boost", "People over 30"],
    whoItsNotFor: ["Those with active acne", "People with severe rosacea"],
    pricing: "Starting at $140 per facial | Membership credits available",
    icon: Smile,
    image: "/images/service_22_Woman_receiving_a_HydroPeptide.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "How long do results last?",
        a: "Results last 3-7 days. Regular treatments (monthly) provide cumulative, longer-lasting benefits."
      },
      {
        q: "Is it safe before events?",
        a: "Perfect before events. No downtime. Skin looks radiant immediately."
      },
      {
        q: "Can I combine with other treatments?",
        a: "Yes. Many people combine with Hydrafacial or red light therapy for enhanced results."
      }
    ]
  },
  {
    id: "marini-enzyme",
    title: "Marini Proteolytic Enzyme Facial",
    shortDesc: "Gentle enzymatic exfoliation for sensitive skin.",
    fullDesc: "Marini Proteolytic Enzyme Facials use natural enzymes to gently exfoliate without harsh chemicals. Perfect for sensitive skin.",
    whatToExpect: "A 30-45 minute facial. Gentle and soothing. No stinging or irritation. Skin feels soft and renewed.",
    benefits: ["Gentle exfoliation", "Remove dead skin cells", "Improve skin texture", "Reduce sensitivity", "Suitable for sensitive skin"],
    whoItsFor: ["People with sensitive skin", "Those with rosacea", "Anyone seeking gentle exfoliation", "People with reactive skin", "Anyone avoiding harsh chemicals"],
    whoItsNotFor: ["Those with active skin infections", "People with severe allergies"],
    pricing: "Starting at $125 per facial | Membership credits available",
    icon: Smile,
    image: "/images/service_23_woman_receiving_a_Marini_Prote.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "Is this safe for sensitive skin?",
        a: "Yes. Enzymatic exfoliation is gentler than chemical peels. Perfect for reactive or sensitive skin."
      },
      {
        q: "Will my skin be red after?",
        a: "Minimal redness. Most people have no downtime. Skin may be slightly pink for 1-2 hours."
      },
      {
        q: "How often can I get this?",
        a: "Monthly is ideal. Can be done every 2 weeks for intensive renewal."
      }
    ]
  },
  {
    id: "dermaflash-extract",
    title: "DERMAFLASH DERMAPORE+ Extract and Fuse",
    shortDesc: "Advanced sonic dermaplaning with extraction and infusion.",
    fullDesc: "DERMAFLASH technology combines sonic dermaplaning, extraction, and serum infusion for professional-grade facial results.",
    whatToExpect: "A 30-45 minute treatment. Gentle vibration and suction. Skin feels smooth, clean, and infused with serums.",
    benefits: ["Remove facial hair and peach fuzz", "Deep pore extraction", "Infuse serums deeply", "Improve skin texture", "Brighten complexion"],
    whoItsFor: ["Anyone with facial hair", "People with congested pores", "Those seeking smooth skin", "Anyone over 25", "People wanting professional results"],
    whoItsNotFor: ["Those with active acne", "People with severe rosacea", "Those with open wounds"],
    pricing: "Starting at $130 per treatment | Membership credits available",
    icon: Smile,
    image: "/images/service_24_DERMAPORE_Extract_and_Fuse.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "Does it remove facial hair permanently?",
        a: "No, it removes fine facial hair (peach fuzz) temporarily. Hair grows back in 2-3 weeks. Regular treatments keep skin smooth."
      },
      {
        q: "Is it painful?",
        a: "No. Most people find it relaxing. The sensation is similar to a gentle massage."
      },
      {
        q: "How often should I get this?",
        a: "Monthly for best results. Every 3-4 weeks for continuous smooth skin."
      }
    ]
  },
  {
    id: "marini-vitamin-c",
    title: "Marini C-ESTA Vitamin C & Antioxidant Facial",
    shortDesc: "Powerful antioxidant protection and brightening.",
    fullDesc: "Marini C-ESTA combines vitamin C with antioxidants to brighten, protect, and rejuvenate skin.",
    whatToExpect: "A 30-45 minute facial. You'll feel gentle warmth. Skin looks noticeably brighter and more radiant.",
    benefits: ["Brighten dull skin", "Reduce hyperpigmentation", "Antioxidant protection", "Improve skin radiance", "Support collagen production"],
    whoItsFor: ["Anyone with dull skin", "People with sun damage", "Those with hyperpigmentation", "Anyone seeking brightening", "People over 30"],
    whoItsNotFor: ["Those with vitamin C sensitivity", "People with active skin infections"],
    pricing: "Starting at $135 per facial | Membership credits available",
    icon: Smile,
    image: "/images/service_25_Marini_C-ESTA_Vitamin_C_&_Anti.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "Is vitamin C safe for all skin types?",
        a: "Yes, but some people are sensitive. We'll patch test first. Our formulation is gentle and effective."
      },
      {
        q: "When will I see brightening results?",
        a: "Immediate brightening effect. Cumulative results (reduced hyperpigmentation) appear after 3-4 treatments."
      },
      {
        q: "Can I use vitamin C at home?",
        a: "Yes. We recommend professional treatments monthly with home maintenance products."
      }
    ]
  },
  {
    id: "hydropeptide-hydroglow",
    title: "HydroPeptide HydroGlow Skin Brightening Facial",
    shortDesc: "Luminous brightening for radiant, glowing skin.",
    fullDesc: "HydroPeptide HydroGlow uses proprietary brightening technology to reveal luminous, glowing skin.",
    whatToExpect: "A 30-45 minute facial. Gentle and hydrating. Skin looks visibly brighter and more glowing.",
    benefits: ["Brighten and illuminate skin", "Reduce dullness", "Improve skin radiance", "Hydrate deeply", "Perfect glow for any occasion"],
    whoItsFor: ["Anyone with dull skin", "People seeking glow", "Those before special events", "Anyone over 25", "People wanting radiant skin"],
    whoItsNotFor: ["Those with active skin infections", "People with severe allergies"],
    pricing: "Starting at $140 per facial | Membership credits available",
    icon: Smile,
    image: "/images/service_26_Hydropeptide_HydroGlow_Skin_Br.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "How long does the glow last?",
        a: "Results last 3-7 days. Regular monthly treatments provide cumulative, longer-lasting radiance."
      },
      {
        q: "Is this good before events?",
        a: "Perfect. Get it 1-2 days before for maximum glow. No downtime."
      },
      {
        q: "Can I combine with other facials?",
        a: "Yes. Many people alternate between different facials for comprehensive skin care."
      }
    ]
  },
  {
    id: "marini-luminate",
    title: "Marini Luminate® Facial",
    shortDesc: "Advanced light-based facial for skin renewal and rejuvenation.",
    fullDesc: "Marini Luminate combines light technology with professional serums for comprehensive skin renewal.",
    whatToExpect: "A 30-45 minute facial. Gentle light pulses and hydrating serums. Skin feels renewed and looks brighter.",
    benefits: ["Stimulate collagen production", "Improve skin texture", "Reduce fine lines", "Brighten complexion", "Improve skin tone"],
    whoItsFor: ["Anyone over 30", "People seeking anti-aging", "Those with dull or tired skin", "Anyone wanting skin renewal", "People with uneven tone"],
    whoItsNotFor: ["Pregnant women", "Those on certain medications", "People with active skin infections"],
    pricing: "Starting at $150 per facial | Membership credits available",
    icon: Smile,
    image: "/images/service_27_A_woman_receiving_a_Marini_Lum.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "How does light technology work?",
        a: "Light stimulates collagen production and cellular renewal. It's non-invasive and safe for all skin types."
      },
      {
        q: "When will I see results?",
        a: "Immediate brightening. Collagen stimulation results appear over 2-4 weeks. Best results after 4-6 treatments."
      },
      {
        q: "How often should I get this?",
        a: "Monthly for optimal results. Every 6-8 weeks for maintenance."
      }
    ]
  },
  {
    id: "marini-glycolic",
    title: "Marini Glycolic Resurfacing Peels",
    shortDesc: "Glycolic acid peels for smooth, refined skin.",
    fullDesc: "Marini Glycolic Peels use glycolic acid to exfoliate and renew skin. Customized strength for your skin type.",
    whatToExpect: "A 30-45 minute peel. You'll feel tingling. Skin may be slightly red (normal). Minimal downtime.",
    benefits: ["Smooth and refine skin", "Reduce fine lines", "Improve texture", "Brighten complexion", "Reduce acne and breakouts"],
    whoItsFor: ["Anyone with rough texture", "People with fine lines", "Those with acne", "Anyone seeking skin renewal", "People over 25"],
    whoItsNotFor: ["Those with active skin infections", "People with severe rosacea", "Those on certain medications"],
    pricing: "Starting at $120 per peel | Membership credits available",
    icon: Smile,
    image: "/images/service_28_woman_receiving_a_Marini_Resur.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "What's the difference between glycolic and other peels?",
        a: "Glycolic acid is gentler than stronger acids. Perfect for regular maintenance and those new to peels."
      },
      {
        q: "Will my skin peel?",
        a: "Light peeling is normal. Typically lasts 2-3 days. This is the skin renewal process."
      },
      {
        q: "How often can I get glycolic peels?",
        a: "Every 2-4 weeks for best results. Monthly maintenance is ideal."
      }
    ]
  },
  {
    id: "hydropeptide-custom",
    title: "HydroPeptide Custom Facial",
    shortDesc: "Personalized facial tailored to your unique skin needs.",
    fullDesc: "HydroPeptide Custom Facials are designed specifically for your skin type, concerns, and goals.",
    whatToExpect: "A 45-60 minute customized facial. We'll assess your skin and create a personalized treatment plan.",
    benefits: ["Customized to your needs", "Address specific concerns", "Optimal results for your skin", "Professional expertise", "Personalized skincare plan"],
    whoItsFor: ["Anyone with specific skin concerns", "People wanting personalized care", "Those with combination skin", "Anyone seeking optimal results", "People with multiple concerns"],
    whoItsNotFor: ["Those with active skin infections"],
    pricing: "Starting at $160 per facial | Membership credits available",
    icon: Smile,
    image: "/images/service_29_HydroPeptide_Custom_Facial_+_S.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "How do you customize the facial?",
        a: "We assess your skin, discuss your concerns and goals, then create a customized treatment combining techniques and products."
      },
      {
        q: "Can I get the same facial each time?",
        a: "Yes. Once we develop your ideal protocol, we can repeat it. We also adjust based on seasonal changes and skin evolution."
      },
      {
        q: "How often should I get custom facials?",
        a: "Monthly is ideal. Every 3-4 weeks for intensive treatment."
      }
    ]
  },
  {
    id: "dermaflash-luxe",
    title: "DERMAFLASH LUXE+ Sonic Dermaplaning",
    shortDesc: "Premium sonic dermaplaning for ultra-smooth skin.",
    fullDesc: "DERMAFLASH LUXE+ is the premium version of dermaplaning. Advanced technology for superior results.",
    whatToExpect: "A 30-45 minute treatment. Gentle vibration. Skin feels incredibly smooth and looks radiant.",
    benefits: ["Remove facial hair and peach fuzz", "Ultra-smooth skin texture", "Enhanced product absorption", "Brighten complexion", "Professional results"],
    whoItsFor: ["Anyone with facial hair", "People seeking ultra-smooth skin", "Those before special events", "Anyone over 20", "People wanting premium results"],
    whoItsNotFor: ["Those with active acne", "People with severe rosacea", "Those with open wounds"],
    pricing: "Starting at $145 per treatment | Membership credits available",
    icon: Smile,
    image: "/images/service_30_DERMAFLASH_LUXE+_Sonic_Dermapl.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "What's the difference between regular and LUXE+ dermaplaning?",
        a: "LUXE+ uses advanced technology for more precise results and enhanced skin smoothness. Premium experience and superior outcomes."
      },
      {
        q: "How often should I get this?",
        a: "Monthly for best results. Every 3-4 weeks for continuous ultra-smooth skin."
      },
      {
        q: "Can men get dermaplaning?",
        a: "Yes. Many men get dermaplaning for smooth, clean skin and enhanced product absorption."
      }
    ]
  },
  {
    id: "hydrafacial-keravive",
    title: "Hydrafacial Keravive Scalp Treatment",
    shortDesc: "Advanced scalp treatment for healthy hair and scalp.",
    fullDesc: "Hydrafacial Keravive uses vortex-fusion technology on the scalp to cleanse, extract, and nourish for healthier hair.",
    whatToExpect: "A 30-minute scalp treatment. Gentle and relaxing. Scalp feels clean and nourished.",
    benefits: ["Cleanse scalp deeply", "Reduce dandruff and flaking", "Nourish hair follicles", "Improve scalp health", "Promote hair growth"],
    whoItsFor: ["Anyone with scalp issues", "People with dandruff", "Those seeking healthier hair", "Anyone with oily or dry scalp", "People with hair loss concerns"],
    whoItsNotFor: ["Those with active scalp infections", "People with severe psoriasis"],
    pricing: "Starting at $120 per treatment | Membership credits available",
    icon: Smile,
    image: "/images/service_31_Hydrafacial_Keravive_Full_Scal.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "Will this help with hair loss?",
        a: "It promotes scalp health and can support hair growth. For significant hair loss, consult our medical team about additional options."
      },
      {
        q: "How often should I get this?",
        a: "Monthly for best scalp health. Every 6-8 weeks for maintenance."
      },
      {
        q: "Can I wash my hair after?",
        a: "Wait 24 hours before washing. Use gentle products for the first few days."
      }
    ]
  },
  {
    id: "hydropeptide-moisture",
    title: "HydroPeptide Moisture Infusion Ultra-Hydrating Facial",
    shortDesc: "Deep hydration for plump, dewy skin.",
    fullDesc: "HydroPeptide Moisture Infusion delivers intense hydration deep into skin for plump, dewy, youthful appearance.",
    whatToExpect: "A 30-45 minute facial. Hydrating and nourishing. Skin feels plump and looks dewy.",
    benefits: ["Intense hydration", "Plump fine lines", "Improve skin texture", "Dewy, glowing appearance", "Support skin barrier"],
    whoItsFor: ["Anyone with dry skin", "People with dehydrated skin", "Those seeking plump skin", "Anyone with fine lines", "People before events"],
    whoItsNotFor: ["Those with active skin infections"],
    pricing: "Starting at $140 per facial | Membership credits available",
    icon: Smile,
    image: "/images/service_32_HydroPeptide_Moisture_Infusion.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "How long does the hydration last?",
        a: "Results last 3-7 days. Regular monthly treatments provide cumulative, longer-lasting hydration."
      },
      {
        q: "Is this good for very dry skin?",
        a: "Yes. This is ideal for dry, dehydrated skin. We may recommend additional home care products."
      },
      {
        q: "Can I combine with other treatments?",
        a: "Yes. Many people combine with red light therapy or IV hydration for enhanced results."
      }
    ]
  },
  {
    id: "marini-retinol",
    title: "Marini Retinol Plus Facial",
    shortDesc: "Advanced retinol treatment for anti-aging and skin renewal.",
    fullDesc: "Marini Retinol Plus uses professional-grade retinol to stimulate collagen, reduce fine lines, and renew skin.",
    whatToExpect: "A 30-45 minute facial. You may feel slight tingling. Skin may be slightly red (normal). Minimal downtime.",
    benefits: ["Stimulate collagen production", "Reduce fine lines and wrinkles", "Improve skin texture", "Brighten complexion", "Anti-aging powerhouse"],
    whoItsFor: ["Anyone over 30", "People seeking anti-aging", "Those with fine lines", "Anyone wanting skin renewal", "People with sun damage"],
    whoItsNotFor: ["Pregnant women", "Those with retinol sensitivity", "People with active skin infections"],
    pricing: "Starting at $150 per facial | Membership credits available",
    icon: Smile,
    image: "/images/service_33_Marini_Retinol_Plus_Facial_at_.webp",
    category: "Skin Health",
    faqs: [
      {
        q: "Is professional retinol better than over-the-counter?",
        a: "Yes. Professional-grade retinol is more potent and effective. Results are faster and more dramatic."
      },
      {
        q: "Will my skin be sensitive after?",
        a: "Slight sensitivity is normal. Use gentle products and sunscreen. Sensitivity decreases with regular treatments."
      },
      {
        q: "How often can I get retinol facials?",
        a: "Every 2-4 weeks for best results. Start with monthly if new to retinol."
      }
    ]
  },

  // Medical Services
  {
    id: "mhbot",
    title: "Mild Hyperbaric Oxygen Therapy (mHbOT)",
    shortDesc: "Increase oxygen flow to accelerate healing and recovery.",
    fullDesc: "Mild hyperbaric oxygen therapy increases oxygen pressure to enhance oxygen delivery to tissues. Accelerates healing, reduces inflammation, and improves cognitive function.",
    whatToExpect: "You'll enter a pressurized chamber for 60-90 minutes. It's comfortable and relaxing. Many people nap during sessions.",
    benefits: ["Accelerate wound healing", "Reduce inflammation", "Improve cognitive function", "Enhance athletic recovery", "Support overall wellness"],
    whoItsFor: ["Athletes and weekend warriors", "People with chronic wounds", "Those recovering from surgery", "Anyone seeking cognitive enhancement", "People with chronic conditions"],
    whoItsNotFor: ["Those with uncontrolled fever", "People with claustrophobia (we can help)"],
    pricing: "Starting at $80 per session | Membership credits available",
    icon: Zap,
    image: "/images/service_34_Smiling_woman_sitting_inside_a.webp",
    category: "Medical Services",
    faqs: [
      {
        q: "Is mHbOT safe?",
        a: "Yes. Mild hyperbaric oxygen therapy is FDA-approved and widely used. Side effects are rare and usually mild."
      },
      {
        q: "How often should I do mHbOT?",
        a: "For acute conditions, 5-10 sessions. For chronic conditions or performance, 1-2 times per week. Consult our medical team."
      },
      {
        q: "When will I feel results?",
        a: "Some people feel energized immediately. Cumulative benefits appear over 3-5 sessions."
      }
    ]
  },
  {
    id: "weight-loss",
    title: "Medicated Weight Loss",
    shortDesc: "Science-backed weight loss support with medical supervision.",
    fullDesc: "Our medicated weight loss program combines prescription medications (GLP-1 agonists), lifestyle coaching, and monitoring for sustainable weight loss.",
    whatToExpect: "Initial consultation with our medical team. Personalized protocol. Regular check-ins and adjustments. Comprehensive support.",
    benefits: ["Sustainable weight loss", "Improved metabolic health", "Reduced appetite", "Medical supervision", "Lifestyle support"],
    whoItsFor: ["Anyone seeking weight loss", "People with metabolic issues", "Those with previous diet failures", "Anyone wanting medical support", "People seeking sustainable results"],
    whoItsNotFor: ["Pregnant or breastfeeding women", "Those with certain medical conditions (consult doctor)"],
    pricing: "Starting at $200/month | Includes consultations and monitoring",
    icon: TrendingUp,
    image: "/images/service_35_Smiling_woman_in_athletic_atti.webp",
    category: "Medical Services",
    faqs: [
      {
        q: "What medications do you use?",
        a: "We use FDA-approved GLP-1 agonists and other evidence-based medications. All prescribed by our medical doctors."
      },
      {
        q: "How much weight can I lose?",
        a: "Results vary. Most people lose 5-15% of body weight. Combined with lifestyle changes, results are more dramatic."
      },
      {
        q: "Is this safe long-term?",
        a: "Yes. With medical supervision and lifestyle support, medicated weight loss is safe and sustainable."
      }
    ]
  },
  {
    id: "trt",
    title: "Testosterone Replacement Therapy (TRT)",
    shortDesc: "Optimize testosterone levels for energy, strength, and vitality.",
    fullDesc: "TRT is a medically-supervised hormone replacement therapy for men with low testosterone. Restores energy, strength, libido, and overall vitality.",
    whatToExpect: "Initial consultation and blood work. Personalized protocol. Regular injections or topical application. Ongoing monitoring.",
    benefits: ["Increase energy and strength", "Improve libido and sexual function", "Build muscle mass", "Improve mood", "Support overall vitality"],
    whoItsFor: ["Men with low testosterone", "Those experiencing fatigue or low libido", "Men seeking performance optimization", "Anyone over 40", "Those wanting to optimize health"],
    whoItsNotFor: ["Women", "Those with certain cancers", "People with uncontrolled heart disease"],
    pricing: "Starting at $250/month | Includes consultations, medication, and monitoring",
    icon: TrendingUp,
    image: "/images/service_36_Colorful_packaging_of_Restore_.webp",
    category: "Medical Services",
    faqs: [
      {
        q: "Is TRT safe?",
        a: "Yes, when prescribed and monitored by qualified medical doctors. We conduct regular blood work and adjust dosages as needed."
      },
      {
        q: "How long until I feel results?",
        a: "Most men feel increased energy within 2-3 weeks. Full benefits (strength, muscle gain) appear over 8-12 weeks."
      },
      {
        q: "Is TRT permanent?",
        a: "TRT is ongoing. Testosterone levels return to baseline if you stop. We'll discuss long-term plans during consultation."
      }
    ]
  },
  {
    id: "biomarker",
    title: "Biomarker Assessments",
    shortDesc: "Comprehensive blood testing to understand your health at the cellular level.",
    fullDesc: "Biomarker assessments include comprehensive blood work analyzing 50+ markers. Understand your health, identify deficiencies, and create personalized protocols.",
    whatToExpect: "Quick blood draw. Comprehensive analysis. Detailed report. Consultation with our medical team to interpret results and create action plan.",
    benefits: ["Understand your health", "Identify deficiencies", "Personalized protocols", "Track progress over time", "Preventive health insights"],
    whoItsFor: ["Anyone over 30", "People seeking health optimization", "Those with health concerns", "Athletes and high performers", "Anyone wanting preventive care"],
    whoItsNotFor: ["None - everyone can benefit"],
    pricing: "Starting at $200 | Includes blood work and consultation",
    icon: Heart,
    image: "/images/service_02_.webp",
    category: "Medical Services",
    faqs: [
      {
        q: "What markers do you test?",
        a: "We test 50+ markers including hormones, metabolic markers, inflammation, cardiovascular health, and more. Customizable based on your goals."
      },
      {
        q: "How often should I get tested?",
        a: "Annually for general health. Quarterly if optimizing performance or managing conditions."
      },
      {
        q: "How long until I get results?",
        a: "Results typically available within 5-7 business days. We'll schedule a consultation to review and create action plan."
      }
    ]
  }
];

// Comparison Content
export const comparisons = [
  {
    id: "cryo-vs-coldplunge",
    slug: "cryo-vs-coldplunge",
    title: "Cryotherapy vs Cold Plunge",
    description: "Which cold therapy is right for you?",
    excerpt: "Which cold therapy is right for you?",
    comparison: {
      cryotherapy: {
        pros: ["Extreme cold (-200°F to -300°F)", "Rapid results (2-3 min)", "No water immersion", "Whole body exposure", "Professional equipment"],
        cons: ["More expensive", "Requires facility visit", "Intense sensation"]
      },
      coldplunge: {
        pros: ["Can do at home", "Lower cost", "Familiar sensation", "Customizable temperature"],
        cons: ["Slower results", "Water immersion", "Requires discipline", "Less extreme cold"]
      }
    },
    recommendation: "For fastest results and athletic recovery, cryotherapy wins. For home convenience, cold plunges are effective but require consistency.",
    image: "/images/service_07_Woman_wearing_protective_robe,.webp"
  },
  {
    id: "iv-vs-supplements",
    slug: "iv-vs-supplements",
    title: "IV Therapy vs Oral Supplements",
    description: "Why IV therapy is 5-10x more effective",
    excerpt: "Why IV therapy is 5-10x more effective",
    comparison: {
      iv: {
        pros: ["100% absorption", "Immediate results", "Bypass digestive issues", "Customizable formulas", "Professional administration"],
        cons: ["More expensive", "Requires facility visit", "Needle insertion"]
      },
      oral: {
        pros: ["Convenient", "Lower cost", "No needles", "Easy to do at home"],
        cons: ["Only 10-20% absorption", "Slow results", "Digestive issues", "Less effective"]
      }
    },
    recommendation: "For rapid results and maximum absorption, IV therapy is superior. Oral supplements work but are less effective.",
    image: "/images/service_11_Young_couple_relaxing_while_en.webp"
  },
  {
    id: "redlight-vs-sauna",
    slug: "redlight-vs-sauna",
    title: "Red Light Therapy vs Infrared Sauna",
    description: "Both are powerful - here's the difference",
    excerpt: "Both are powerful - here's the difference",
    comparison: {
      redlight: {
        pros: ["Cellular energy boost", "Targeted treatment", "Quick sessions (15-20 min)", "No sweating", "Skin benefits"],
        cons: ["Less detoxification", "Shorter sessions"]
      },
      sauna: {
        pros: ["Deep detoxification", "Longer relaxation (30-45 min)", "Cardiovascular benefits", "Muscle relaxation"],
        cons: ["More time commitment", "Sweating", "Less cellular energy boost"]
      }
    },
    recommendation: "Use red light for energy and skin. Use sauna for detox and relaxation. Many people do both for comprehensive benefits.",
    image: "/images/service_08_Woman_with_her_hands_above_her.webp"
  },
  {
    id: "nad-worth-it",
    slug: "nad-worth-it",
    title: "Is NAD+ IV Therapy Worth It?",
    description: "Understanding the investment in cellular longevity",
    excerpt: "Understanding the investment in cellular longevity",
    comparison: {
      benefits: {
        pros: ["Rapid cellular energy", "Anti-aging support", "Cognitive enhancement", "Athletic performance", "Addiction recovery support"],
        cons: ["Higher cost", "Requires multiple sessions", "Effects build over time"]
      },
      alternatives: {
        pros: ["Lower cost", "Convenient", "Accessible"],
        cons: ["Slower results", "Lower absorption", "Less dramatic effects"]
      }
    },
    recommendation: "NAD+ IV is worth it if you're serious about longevity, performance, or cognitive enhancement. Start with 4-6 sessions to assess benefits.",
    image: "/images/service_12_Smiling_woman_receiving_a_NAD+.webp"
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
    image: "/images/cryotherapy-session.jpg",
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
  }
];
