import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Link } from "wouter";

interface QuizQuestion {
  id: string;
  question: string;
  answers: {
    text: string;
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
        therapies: ["cryotherapy", "compression", "red-light"]
      },
      {
        text: "Energy & Vitality",
        therapies: ["iv-therapy", "nad-plus", "infrared-sauna"]
      },
      {
        text: "Stress Relief & Sleep",
        therapies: ["infrared-sauna", "red-light", "compression"]
      },
      {
        text: "Skin Health & Beauty",
        therapies: ["red-light", "infrared-sauna", "cryotherapy"]
      }
    ]
  },
  {
    id: "frequency",
    question: "How often do you want to do therapy?",
    answers: [
      {
        text: "Weekly (consistent routine)",
        therapies: ["compression", "red-light", "infrared-sauna"]
      },
      {
        text: "2-3 times per week (serious results)",
        therapies: ["cryotherapy", "iv-therapy", "compression"]
      },
      {
        text: "Monthly (occasional boost)",
        therapies: ["nad-plus", "iv-therapy", "cryotherapy"]
      },
      {
        text: "As needed (flexible)",
        therapies: ["red-light", "infrared-sauna", "compression"]
      }
    ]
  },
  {
    id: "preference",
    question: "What type of experience appeals to you?",
    answers: [
      {
        text: "Quick & intense (under 5 min)",
        therapies: ["cryotherapy", "red-light"]
      },
      {
        text: "Relaxing & immersive (20-45 min)",
        therapies: ["infrared-sauna", "compression", "iv-therapy"]
      },
      {
        text: "Cellular rejuvenation (advanced)",
        therapies: ["nad-plus", "iv-therapy"]
      },
      {
        text: "Combination approach (multiple)",
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
    // Count frequency of each therapy
    const therapyCount: Record<string, number> = {};
    selectedAnswers.forEach(therapy => {
      therapyCount[therapy] = (therapyCount[therapy] || 0) + 1;
    });

    // Sort by frequency and get top 3
    return Object.entries(therapyCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([therapy]) => therapy);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
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

        <div className="bg-secondary/30 rounded-lg p-8 text-center space-y-6">
          <div>
            <h3 className="font-heading font-bold text-2xl text-primary mb-2">Ready to Get Started?</h3>
            <p className="text-muted-foreground">
              Book your first session and experience the difference these therapies can make.
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
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="font-heading font-bold text-2xl text-primary">
            {question.question}
          </h2>
          <span className="text-sm font-medium text-muted-foreground">
            {currentQuestion + 1} of {quizQuestions.length}
          </span>
        </div>
        <div className="w-full bg-border rounded-full h-2 overflow-hidden">
          <div 
            className="bg-accent h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Answer Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.answers.map((answer, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(answer.therapies)}
            className="group"
          >
            <Card className="border-2 border-border hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer h-full bg-card hover:bg-secondary/50">
              <CardContent className="p-6 flex items-center justify-between h-full">
                <span className="font-medium text-foreground text-left group-hover:text-primary transition-colors">
                  {answer.text}
                </span>
                <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4" />
              </CardContent>
            </Card>
          </button>
        ))}
      </div>
    </div>
  );
}
