import { MapPin, Phone, Clock, Calendar, Star, ShieldCheck, Zap, Heart, Activity, Droplet, Thermometer, Wind, Sun } from "lucide-react";

export const locations = [
  {
    id: "easton",
    name: "Restore Hyper Wellness - Easton",
    address: "4000 Easton Station, Suite 100",
    city: "Columbus",
    state: "OH",
    zip: "43219",
    phone: "(614) 555-0101",
    hours: "Mon-Fri: 9am-7pm | Sat: 9am-5pm | Sun: 10am-4pm",
    mapUrl: "https://goo.gl/maps/placeholder1",
    image: "/images/hero-wellness-columbus.jpg"
  },
  {
    id: "upper-arlington",
    name: "Restore Hyper Wellness - Upper Arlington",
    address: "1234 W Lane Ave",
    city: "Upper Arlington",
    state: "OH",
    zip: "43221",
    phone: "(614) 555-0102",
    hours: "Mon-Fri: 9am-7pm | Sat: 9am-5pm | Sun: 10am-4pm",
    mapUrl: "https://goo.gl/maps/placeholder2",
    image: "/images/iv-drip-lounge.jpg"
  },
  {
    id: "polaris",
    name: "Restore Hyper Wellness - Polaris",
    address: "1500 Polaris Pkwy",
    city: "Columbus",
    state: "OH",
    zip: "43240",
    phone: "(614) 555-0103",
    hours: "Mon-Fri: 9am-7pm | Sat: 9am-5pm | Sun: 10am-4pm",
    mapUrl: "https://goo.gl/maps/placeholder3",
    image: "/images/cryotherapy-session.jpg"
  }
];

export const services = [
  {
    id: "cryotherapy",
    title: "Cryotherapy",
    shortDesc: "Submerge your body in sub-zero temps for 3 minutes to boost mood and reduce inflammation.",
    fullDesc: "Whole Body Cryotherapy exposes your body to sub-zero temperatures for up to 3 minutes. This extreme cold triggers your body's natural healing mechanisms.",
    benefits: ["Boost mood & energy", "Relieve pain & swelling", "Accelerate athletic recovery", "Burn calories"],
    icon: Thermometer,
    image: "/images/cryotherapy-session.jpg",
    category: "Core Therapies"
  },
  {
    id: "red-light",
    title: "Red Light Therapy",
    shortDesc: "Power up your cells with low levels of red or near-infrared light.",
    fullDesc: "Red Light Therapy (Photobiomodulation) uses specific wavelengths of light to stimulate mitochondria, the powerhouse of your cells, to produce more energy (ATP).",
    benefits: ["Optimize sleep", "Reduce inflammation", "Improve skin health", "Enhance cellular energy"],
    icon: Sun,
    image: "/images/red-light-therapy.jpg",
    category: "Core Therapies"
  },
  {
    id: "infrared-sauna",
    title: "Infrared Sauna",
    shortDesc: "Sweat out toxins and relax with deep penetrating infrared heat.",
    fullDesc: "Unlike traditional saunas, infrared saunas use light to create heat, warming your body directly without warming the air around you.",
    benefits: ["Detoxification", "Relaxation & stress relief", "Improved circulation", "Pain relief"],
    icon: Wind,
    image: "/images/hero-wellness-columbus.jpg", // Fallback image
    category: "Core Therapies"
  },
  {
    id: "iv-drip",
    title: "IV Drip Therapy",
    shortDesc: "100% absorption of essential vitamins, minerals, and hydration.",
    fullDesc: "IV Drip Therapy delivers nutrients directly into your bloodstream, bypassing the digestive system for maximum absorption and immediate effects.",
    benefits: ["Instant hydration", "Immune system boost", "Enhanced energy", "Hangover relief"],
    icon: Droplet,
    image: "/images/iv-drip-lounge.jpg",
    category: "Medical Services"
  },
  {
    id: "compression",
    title: "Compression",
    shortDesc: "Relaxing, controlled pressure massage to flush lymphatic fluid.",
    fullDesc: "Normatec compression boots use dynamic air compression to create a restorative massage that increases circulation and helps you recover faster.",
    benefits: ["Reduce muscle soreness", "Improve circulation", "Decrease swelling", "Speed up recovery"],
    icon: Activity,
    image: "/images/columbus-community-wellness.jpg", // Fallback
    category: "Core Therapies"
  },
  {
    id: "mild-hyperbaric",
    title: "mHbOT",
    shortDesc: "Mild Hyperbaric Oxygen Therapy for cognitive clarity and healing.",
    fullDesc: "Breathe concentrated oxygen in a pressurized environment to help your body absorb more oxygen into your blood plasma and tissue.",
    benefits: ["Cognitive clarity", "Accelerated healing", " optimized sleep", " increased energy"],
    icon: Zap,
    image: "/images/hero-wellness-columbus.jpg", // Fallback
    category: "Medical Services"
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
    image: "/images/red-light-therapy.jpg",
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
