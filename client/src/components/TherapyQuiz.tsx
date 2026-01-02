import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, RotateCcw, Mail, Check, Zap, Activity, Moon, Sparkles, Calendar, Timer, Clock, Flame } from "lucide-react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface QuizQuestion {
  id: string;
  question: string;
  answers: {
    text: string;
    description: string;
    icon: React.ReactNode;
    gradient: string;
    therapies: string[];
  }[];
}

interface TherapyRecommendation {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  duration: string;
  icon: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: "goal",
    question: "What's your primary wellness goal?",
    answers: [
      {
        text: "Recovery & Performance",
        description: "Combat chronic exhaustion and reclaim your energy",
        icon: <Activity className="w-8 h-8" />,
        gradient: "from-blue-500 to-cyan-400",
        therapies: ["cryotherapy", "compression", "red-light"]
      },
      {
        text: "Energy & Vitality",
        description: "Recover faster and perform at your peak",
        icon: <Zap className="w-8 h-8" />,
        gradient: "from-amber-500 to-orange-400",
        therapies: ["iv-therapy", "nad-plus", "infrared-sauna"]
      },
      {
        text: "Stress Relief & Sleep",
        description: "Reduce chronic pain without relying on medications",
        icon: <Moon className="w-8 h-8" />,
        gradient: "from-purple-500 to-indigo-400",
        therapies: ["infrared-sauna", "red-light", "compression"]
      },
      {
        text: "Skin Health & Beauty",
        description: "Rejuvenate your skin and enhance your natural glow",
        icon: <Sparkles className="w-8 h-8" />,
        gradient: "from-pink-500 to-rose-400",
        therapies: ["red-light", "infrared-sauna", "cryotherapy"]
      }
    ]
  },
  {
    id: "frequency",
    question: "How often do you want to do therapy?",
    answers: [
      {
        text: "Weekly",
        description: "Build a consistent wellness routine",
        icon: <Calendar className="w-8 h-8" />,
        gradient: "from-emerald-500 to-teal-400",
        therapies: ["compression", "red-light", "infrared-sauna"]
      },
      {
        text: "2-3 Times Per Week",
        description: "Serious results for dedicated wellness seekers",
        icon: <Flame className="w-8 h-8" />,
        gradient: "from-red-500 to-orange-400",
        therapies: ["cryotherapy", "iv-therapy", "compression"]
      },
      {
        text: "Monthly",
        description: "Occasional boost when you need it most",
        icon: <Clock className="w-8 h-8" />,
        gradient: "from-sky-500 to-blue-400",
        therapies: ["nad-plus", "iv-therapy", "cryotherapy"]
      },
      {
        text: "As Needed",
        description: "Flexible approach based on your schedule",
        icon: <Timer className="w-8 h-8" />,
        gradient: "from-violet-500 to-purple-400",
        therapies: ["red-light", "infrared-sauna", "compression"]
      }
    ]
  },
  {
    id: "preference",
    question: "What type of experience appeals to you?",
    answers: [
      {
        text: "Quick & Intense",
        description: "Under 5 minutes of powerful therapy",
        icon: <Zap className="w-8 h-8" />,
        gradient: "from-yellow-500 to-amber-400",
        therapies: ["cryotherapy", "red-light"]
      },
      {
        text: "Relaxing & Immersive",
        description: "20-45 minutes of deep restoration",
        icon: <Moon className="w-8 h-8" />,
        gradient: "from-indigo-500 to-blue-400",
        therapies: ["infrared-sauna", "compression", "iv-therapy"]
      },
      {
        text: "Cellular Rejuvenation",
        description: "Advanced therapy for optimal results",
        icon: <Sparkles className="w-8 h-8" />,
        gradient: "from-fuchsia-500 to-pink-400",
        therapies: ["nad-plus", "iv-therapy"]
      },
      {
        text: "Combination Approach",
        description: "Multiple therapies for comprehensive wellness",
        icon: <Activity className="w-8 h-8" />,
        gradient: "from-cyan-500 to-teal-400",
        therapies: ["cryotherapy", "red-light", "infrared-sauna"]
      }
    ]
  }
];

const therapyRecommendations: Record<string, TherapyRecommendation> = {
  "cryotherapy": {
    id: "cryotherapy",
    name: "Cryotherapy",
    description: "Submerge your body in sub-zero temperatures for 3 minutes",
    benefits: ["Reduces inflammation", "Boosts mood", "Speeds recovery", "Enhances performance"],
    duration: "3 minutes",
    icon: "❄️"
  },
  "compression": {
    id: "compression",
    name: "Compression Therapy",
    description: "30-minute compression session that flushes metabolic waste",
    benefits: ["Accelerates recovery", "Reduces soreness", "Improves circulation", "Enhances endurance"],
    duration: "30 minutes",
    icon: "💪"
  },
  "red-light": {
    id: "red-light",
    name: "Red Light Therapy",
    description: "15-20 minute light therapy session that boosts cellular energy",
    benefits: ["Promotes healing", "Improves skin", "Boosts energy", "Reduces inflammation"],
    duration: "15-20 minutes",
    icon: "🔴"
  },
  "infrared-sauna": {
    id: "infrared-sauna",
    name: "Infrared Sauna",
    description: "30-45 minute detox session that increases core body temperature",
    benefits: ["Deep detoxification", "Stress relief", "Better sleep", "Muscle recovery"],
    duration: "30-45 minutes",
    icon: "🔥"
  },
  "iv-therapy": {
    id: "iv-therapy",
    name: "IV Therapy",
    description: "30-45 minute IV infusion delivering nutrients directly to bloodstream",
    benefits: ["Instant hydration", "Energy boost", "Immune support", "Nutrient optimization"],
    duration: "30-45 minutes",
    icon: "💉"
  },
  "nad-plus": {
    id: "nad-plus",
    name: "NAD+ IV Therapy",
    description: "Advanced cellular rejuvenation therapy that restores cellular energy",
    benefits: ["Cellular repair", "Anti-aging", "Energy restoration", "Longevity support"],
    duration: "45-60 minutes",
    icon: "✨"
  }
};

export default function TherapyQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  // Staggered animation for cards
  useEffect(() => {
    setVisibleCards([]);
    const question = quizQuestions[currentQuestion];
    question.answers.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, idx]);
      }, idx * 150);
    });
  }, [currentQuestion]);

  const handleAnswer = (therapies: string[]) => {
    const newAnswers = [...selectedAnswers, ...therapies];
    setSelectedAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getRecommendedTherapies = () => {
    const therapyCount: Record<string, number> = {};
    selectedAnswers.forEach(therapy => {
      therapyCount[therapy] = (therapyCount[therapy] || 0) + 1;
    });

    return Object.entries(therapyCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([therapy]) => therapy);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setEmail("");
    setEmailSubmitted(false);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubmittingEmail(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      setEmailSubmitted(true);
      toast.success("Thanks! Check your email for exclusive wellness tips.");
    } catch (error) {
      toast.error("Failed to submit email. Please try again.");
    } finally {
      setIsSubmittingEmail(false);
    }
  };

  if (showResults) {
    const recommendedTherapyIds = getRecommendedTherapies();
    const recommendations = recommendedTherapyIds.map(id => therapyRecommendations[id]);

    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
            Your Personalized Therapy Plan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Based on your wellness goals, we recommend these therapies to help you achieve your best results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((therapy) => (
            <Card key={therapy.id} className="border-none shadow-md bg-card hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="text-5xl">{therapy.icon}</div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-primary mb-2">{therapy.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{therapy.description}</p>
                  <div className="text-xs font-medium text-accent mb-3">⏱️ {therapy.duration}</div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-primary uppercase">Key Benefits:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {therapy.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!emailSubmitted ? (
          <div className="bg-secondary/30 rounded-lg p-8 space-y-6">
            <div className="text-center">
              <h3 className="font-heading font-bold text-2xl text-white mb-2">Get Exclusive Wellness Tips</h3>
              <p className="text-white/90 mb-6">
                Subscribe to our newsletter for personalized recovery strategies, exclusive offers, and wellness insights tailored to your goals.
              </p>
            </div>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-full px-6 py-3 border-border focus:border-accent"
                  disabled={isSubmittingEmail}
                />
                <Button
                  type="submit"
                  disabled={isSubmittingEmail}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full px-8 whitespace-nowrap"
                >
                  {isSubmittingEmail ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
              <p className="text-xs text-white/70 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
            <div className="border-t border-border pt-6 mt-6">
              <p className="text-center text-white/90 mb-4">Or book your first session now:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8">
                  <Link href="https://www.restore.com/book-now">Book Your First Session</Link>
                </Button>
                <Button 
                  onClick={resetQuiz}
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-full px-8"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retake Quiz
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-accent/10 rounded-lg p-8 text-center space-y-6 border-2 border-accent">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                <Check className="w-8 h-8 text-accent" />
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl text-primary mb-2">You're All Set!</h3>
              <p className="text-muted-foreground">
                Check your email for exclusive wellness tips and personalized recovery strategies based on your quiz results.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8">
                <Link href="https://www.restore.com/book-now">Book Your First Session</Link>
              </Button>
              <Button 
                onClick={resetQuiz}
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-full px-8"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Retake Quiz
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-muted-foreground">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <span className="text-sm font-medium text-accent">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="w-full bg-border rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-accent to-primary h-full transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary text-center pt-4">
          {question.question}
        </h2>
      </div>

      {/* Enhanced Answer Options */}
      <div className="grid grid-cols-1 gap-4">
        {question.answers.map((answer, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(answer.therapies)}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`group w-full text-left transition-all duration-500 ease-out ${
              visibleCards.includes(idx)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${idx * 50}ms` }}
          >
            <div 
              className={`
                relative overflow-hidden rounded-2xl border-2 transition-all duration-300
                ${hoveredCard === idx 
                  ? 'border-transparent shadow-xl scale-[1.02]' 
                  : 'border-border shadow-md hover:shadow-lg'
                }
              `}
            >
              {/* Gradient Background on Hover */}
              <div 
                className={`
                  absolute inset-0 bg-gradient-to-r ${answer.gradient} opacity-0 transition-opacity duration-300
                  ${hoveredCard === idx ? 'opacity-100' : 'group-hover:opacity-10'}
                `}
              />
              
              {/* Card Content */}
              <div className={`
                relative p-6 flex items-center gap-5 transition-colors duration-300
                ${hoveredCard === idx ? 'bg-transparent' : 'bg-card'}
              `}>
                {/* Icon Container */}
                <div 
                  className={`
                    shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300
                    ${hoveredCard === idx 
                      ? 'bg-white/20 text-white' 
                      : `bg-gradient-to-br ${answer.gradient} text-white`
                    }
                  `}
                >
                  {answer.icon}
                </div>
                
                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3 
                    className={`
                      font-heading font-bold text-lg md:text-xl transition-colors duration-300
                      ${hoveredCard === idx ? 'text-white' : 'text-primary'}
                    `}
                  >
                    {answer.text}
                  </h3>
                  <p 
                    className={`
                      text-sm mt-1 transition-colors duration-300
                      ${hoveredCard === idx ? 'text-white/90' : 'text-muted-foreground'}
                    `}
                  >
                    {answer.description}
                  </p>
                </div>
                
                {/* Arrow */}
                <div 
                  className={`
                    shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                    ${hoveredCard === idx 
                      ? 'bg-white/20 text-white translate-x-1' 
                      : 'bg-secondary text-muted-foreground group-hover:bg-accent group-hover:text-white'
                    }
                  `}
                >
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Book Session CTA */}
      <div className="pt-4 text-center">
        <a 
          href="https://www.restore.com/book-now"
          className="inline-flex items-center gap-2 text-accent hover:text-primary font-medium transition-colors"
        >
          Skip quiz and book your session
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
