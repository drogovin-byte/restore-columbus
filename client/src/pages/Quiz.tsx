import Layout from "@/components/Layout";
import TherapyQuiz from "@/components/TherapyQuiz";

export default function Quiz() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-3xl text-center space-y-6">
          <h1 className="font-heading font-bold text-4xl md:text-5xl">
            Find Your Perfect Therapy
          </h1>
          <p className="text-lg text-white/80">
            Answer a few quick questions and we'll recommend the therapies that are right for your wellness goals.
          </p>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-3xl">
          <TherapyQuiz />
        </div>
      </section>

      {/* Why Take the Quiz */}
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-3xl">
          <h2 className="font-heading font-bold text-3xl text-primary text-center mb-12">
            Why Take Our Quiz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="text-4xl">🎯</div>
              <h3 className="font-bold text-lg text-primary">Personalized</h3>
              <p className="text-muted-foreground">Get recommendations tailored to your specific wellness goals and lifestyle.</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl">⚡</div>
              <h3 className="font-bold text-lg text-primary">Quick & Easy</h3>
              <p className="text-muted-foreground">Just 3 simple questions to discover your ideal therapy combination.</p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl">✨</div>
              <h3 className="font-bold text-lg text-primary">Science-Backed</h3>
              <p className="text-muted-foreground">Our recommendations are based on proven therapy combinations for different goals.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
