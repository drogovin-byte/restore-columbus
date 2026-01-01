import { MapPin, Phone, Clock, Calendar, Star, ShieldCheck, Zap, Heart, Activity, Droplet, Thermometer, Wind, Sun, Syringe, Sparkles, Microscope, Scale, Battery, Moon, Brain, Flame } from "lucide-react";

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

export const needStates = [
  {
    id: "energy",
    title: "Boost Energy",
    description: "Fight fatigue and power through your day with renewed vitality.",
    icon: Battery,
    services: ["iv-drip", "cryotherapy", "red-light", "nad-iv"]
  },
  {
    id: "recovery",
    title: "Speed Recovery",
    description: "Bounce back faster from workouts, injuries, or surgery.",
    icon: Activity,
    services: ["cryotherapy", "compression", "infrared-sauna", "mhbot"]
  },
  {
    id: "immunity",
    title: "Strengthen Immunity",
    description: "Fortify your body's defenses against illness and stress.",
    icon: ShieldCheck,
    services: ["iv-drip", "infrared-sauna", "biomarkers"]
  },
  {
    id: "beauty",
    title: "Enhance Beauty",
    description: "Glow from the inside out with skin and anti-aging therapies.",
    icon: Sparkles,
    services: ["hydrafacial", "red-light", "cryoskin-facial", "iv-drip"]
  },
  {
    id: "cognition",
    title: "Sharpen Focus",
    description: "Clear brain fog and improve mental clarity and performance.",
    icon: Brain,
    services: ["mhbot", "nad-iv", "cryotherapy"]
  },
  {
    id: "weight-loss",
    title: "Manage Weight",
    description: "Support your metabolism and body composition goals.",
    icon: Scale,
    services: ["glp1", "cryoskin-slimming", "infrared-sauna"]
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
    fullDesc: "Submerge your entire body in sub-zero temperatures for up to 3 minutes. This extreme cold triggers your body's natural healing mechanisms.",
    benefits: ["Boost mood, energy and sleep", "Relieve pain, swelling and stress", "Promote healing and athletic recovery"],
    icon: Thermometer,
    image: "/images/cryotherapy-official.webp",
    category: "Core Therapies"
  },
  {
    id: "red-light",
    title: "Red Light Therapy",
    shortDesc: "Power up your mitochondria with low levels of red or near-infrared light.",
    fullDesc: "Power up your mitochondria with low levels of red or near-infrared light. This therapy stimulates cellular energy production (ATP).",
    benefits: ["Optimize sleep", "Relieve pain and inflammation", "Improve mood and energy"],
    icon: Sun,
    image: "/images/red-light-official.webp",
    category: "Core Therapies"
  },
  {
    id: "infrared-sauna",
    title: "Infrared Sauna",
    shortDesc: "Sweat it out for 30-45 minutes through light waves and relaxing heat.",
    fullDesc: "Sweat it out for 30-45 minutes through light waves and relaxing heat. Unlike traditional saunas, infrared heats the body directly.",
    benefits: ["Promote healing and energy", "Improve circulation and heart health", "Detoxify and relieve inflammation"],
    icon: Flame,
    image: "/images/sauna-official.jpg",
    category: "Core Therapies"
  },
  {
    id: "compression",
    title: "Compression",
    shortDesc: "Experience relaxing, controlled pressure to the arms, legs and hips.",
    fullDesc: "Experience relaxing, controlled pressure to the arms, legs and hips. This dynamic air compression increases circulation and flushes lymphatic fluid.",
    benefits: ["Improve circulation", "Reduce muscle aches and pain", "Improve flexibility and mobility"],
    icon: Activity,
    image: "/images/compression-official.webp",
    category: "Core Therapies"
  },

  // Cellular Level (IV & IM)
  {
    id: "iv-drip",
    title: "IV Drip Therapy",
    shortDesc: "Experience the highest quality nutrients delivered directly to your bloodstream.",
    fullDesc: "Experience the highest quality nutrients delivered directly to your bloodstream for 100% absorption.",
    benefits: ["Hydrate and cleanse", "Replenish your vitality", "Maximize performance and focus"],
    icon: Droplet,
    image: "/images/iv-drip-official.webp",
    category: "IV & IM Therapy"
  },
  {
    id: "nad-iv",
    title: "NAD+ IV Therapy",
    shortDesc: "Jumpstart your cellular repair and protect your unique genetic makeup.",
    fullDesc: "Jumpstart your cellular repair and protect your unique genetic makeup with this powerful coenzyme.",
    benefits: ["Boost focus, energy and cellular health", "Improve heart health, strength and endurance", "Accelerate the healing of muscles and tissues"],
    icon: Zap,
    image: "/images/iv-drip-official.webp", // Reusing IV image
    category: "IV & IM Therapy"
  },
  {
    id: "im-shot",
    title: "IM Shot",
    shortDesc: "Boost wellness from within with a quick, 5-min Intramuscular Shot.",
    fullDesc: "Boost wellness from within with a quick, 5-min Intramuscular Shot. Perfect for those on the go.",
    benefits: ["Hydrate and cleanse", "Replenish vital nutrients", "Maximize performance and focus"],
    icon: Syringe,
    image: "/images/iv-drip-official.webp", // Contextual fallback
    category: "IV & IM Therapy"
  },

  // Skin Health
  {
    id: "hydrafacial",
    title: "Hydrafacial",
    shortDesc: "Cleanse, hydrate and replenish skin with nourishing antioxidant peptides.",
    fullDesc: "Cleanse, hydrate and replenish skin with nourishing antioxidant peptides.",
    benefits: ["Increase skin firmness and glow", "Reduce the appearance of discoloration and wrinkles", "Removed clogged pores and blemishes"],
    icon: Sparkles,
    image: "/images/hero-wellness-columbus.jpg", // Fallback
    category: "Skin Health"
  },
  {
    id: "cryoskin-facial",
    title: "Neveskin Facial",
    shortDesc: "Help reduce the signs of aging and tighten and tone the skin with cold therapy.",
    fullDesc: "Help reduce the signs of aging and tighten and tone the skin with cold therapy.",
    benefits: ["Reduced signs of aging", "Tightened and firmer skin", "Increased blood flow and oxygen to the skin"],
    icon: Sparkles,
    image: "/images/hero-wellness-columbus.jpg", // Fallback
    category: "Skin Health"
  },
  {
    id: "cryoskin-slimming",
    title: "Neveskin Shape & Tone",
    shortDesc: "Alternating hot and cold massage to help shape the body.",
    fullDesc: "Experience alternating hot and cold massage to help shape the body and reduce the appearance of skin dimpling.",
    benefits: ["Reduced appearance of skin dimpling", "Improved tightness of skin", "Enhanced shaping and toning for specific areas"],
    icon: Activity,
    image: "/images/hero-wellness-columbus.jpg", // Fallback
    category: "Body Contouring"
  },

  // Medical Services
  {
    id: "mhbot",
    title: "Mild Hyperbaric Oxygen Therapy",
    shortDesc: "Experience enhanced oxygenation to help gain a cognitive edge.",
    fullDesc: "Experience enhanced oxygenation to help gain a cognitive edge and enhance your body’s healing.",
    benefits: ["Optimized sleep", "Repaired muscles", "Increased cognitive clarity", "Decreased athletic recovery time"],
    icon: Wind,
    image: "/images/mhbot-official.jpg",
    category: "Medical Services"
  },
  {
    id: "biomarkers",
    title: "Biomarker Assessments",
    shortDesc: "Discover deficiencies and genetic markers that need attention.",
    fullDesc: "Discover deficiencies and/or genetic markers that may indicate inefficiencies or faults that need attention.",
    benefits: ["Decreased symptoms from imbalances", "Enhanced immunity with antioxidants", "Improved nourishment", "Optimized overall well-being"],
    icon: Microscope,
    image: "/images/hero-wellness-columbus.jpg", // Fallback
    category: "Medical Services"
  },

  // Weight Loss
  {
    id: "glp1",
    title: "GLP1-Plans",
    shortDesc: "Experience safe, medicated weight loss with a customized treatment plan.",
    fullDesc: "Experience safe, medicated weight loss with a customized treatment plan.",
    benefits: ["Better regulate appetite", "Increased feelings of fullness", "Lose weight and retain muscle"],
    icon: Scale,
    image: "/images/hero-wellness-columbus.jpg", // Fallback
    category: "Weight Loss"
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
