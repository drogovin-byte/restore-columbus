import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { memberships } from "@/lib/data";

export default function Memberships() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="container space-y-4 text-center">
          <p className="text-sm font-semibold text-gray-600 tracking-wide">RESTORE MEMBERSHIPS</p>
          <h1 className="text-5xl font-bold tracking-tight text-[#1B5E7F]">
            Membership Pricing Options
          </h1>
          <p className="mx-auto max-w-3xl text-base text-gray-700 leading-relaxed">
            A Membership at Restore Hyper Wellness Columbus, OH provides monthly Core Therapies credits you can use for Cryotherapy, Infrared Sauna, Compression, Red Light Therapy and IV Drip Therapy. Our Memberships are the best way to achieve the consistency and frequency you need to reach your goals and unlock exclusive access to Members-Only events along with 30% off Specialty Services. Plus, you can use your credits at any Restore location nationwide!*
          </p>
        </div>
      </div>

      {/* Memberships Grid */}
      <div className="container py-20">
        <div className="grid gap-8 lg:grid-cols-3 relative pb-8">
          {memberships.map((membership, index) => {
            const isPopular = membership.isPopular;
            
            // Color scheme matching Restore reference image
            let cardBg = "";
            let cardGradient = "";
            
            if (index === 0) {
              // Level Up - Light Teal
              cardBg = "bg-[#5DADE2]";
              cardGradient = "from-[#5DADE2] to-[#5DADE2]";
            } else if (index === 1) {
              // Elevate - Dark Teal (Most Popular)
              cardBg = "bg-[#1B5E7F]";
              cardGradient = "from-[#1B5E7F] to-[#1B5E7F]";
            } else {
              // Core - Medium Teal
              cardBg = "bg-[#2E8B9E]";
              cardGradient = "from-[#2E8B9E] to-[#2E8B9E]";
            }

            return (
              <div key={index} className="relative">
                {isPopular && (
                  <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-[#5DADE2] rounded-full w-28 h-28 flex items-center justify-center border-4 border-white shadow-xl">
                      <div className="text-center">
                        <div className="text-xs font-bold text-white leading-tight">BEST</div>
                        <div className="text-xs font-bold text-white leading-tight">VALUE</div>
                      </div>
                    </div>
                  </div>
                )}
                
                <Card
                  className={`flex flex-col overflow-hidden transition-all duration-300 h-full border-0 rounded-3xl shadow-xl ${
                    isPopular ? "lg:scale-105 lg:shadow-2xl" : ""
                  } ${cardBg}`}
                >
                  <div className="space-y-0 p-0 flex-1 flex flex-col">
                    {/* Header with Title and Pricing */}
                    <div className={`space-y-6 px-8 text-center ${isPopular ? 'pt-24 pb-8' : 'pt-8 pb-8'}`}>
                      <h3 className="text-4xl font-bold text-white tracking-wide">{membership.name}</h3>
                      
                      {/* Pricing Section */}
                      <div className="space-y-3">
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-6xl font-bold text-white">${membership.price}</span>
                          <span className="text-xl text-white/90">/month</span>
                        </div>
                        <div className="space-y-1 text-base">
                          <p className="text-white/90">
                            A ${membership.value} value!
                          </p>
                          <p className="text-white font-semibold">
                            You save ${membership.savings}!
                          </p>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-b border-white/30"></div>

                      {/* Credits Section */}
                      <div className="space-y-2">
                        <div className="text-7xl font-bold text-white">{membership.credits}</div>
                        <p className="text-xl text-white/90">Credits / Month</p>
                        <p className="text-base text-white/80">
                          ${membership.perTherapy.toFixed(2)} per Therapy
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="border-b border-white/30"></div>
                    </div>

                    {/* Benefits Section */}
                    <div className="space-y-4 px-8 py-8 flex-1 flex flex-col text-center">
                      <div className="space-y-3 flex-1">
                        {membership.benefits.slice(0, 4).map((benefit, i) => (
                          <p key={i} className="text-white/95 text-base leading-relaxed">
                            {benefit}
                          </p>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <a
                        href="https://www.restore.com/book-now"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full mt-6"
                      >
                        <Button
                          className="w-full font-bold text-base py-6 rounded-lg bg-white hover:bg-gray-100 text-[#1B5E7F] transition-all duration-200 shadow-md hover:shadow-lg"
                          size="lg"
                        >
                          Get Started
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20">
        <div className="container max-w-2xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-[#1B5E7F]">Membership FAQs</h2>
            <p className="text-gray-600">Common questions about our membership plans</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2 bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-[#1B5E7F]">Can I pause my membership?</h3>
              <p className="text-gray-700">
                Yes! You can pause your membership anytime without penalty. Perfect if you need a break.
              </p>
            </div>

            <div className="space-y-2 bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-[#1B5E7F]">Do credits roll over each month?</h3>
              <p className="text-gray-700">
                Credits are monthly and don't roll over. However, you can pause your membership if you need flexibility.
              </p>
            </div>

            <div className="space-y-2 bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-[#1B5E7F]">Can I use my credits at any location?</h3>
              <p className="text-gray-700">
                Absolutely! Your credits work at any Restore location nationwide, giving you maximum flexibility.
              </p>
            </div>

            <div className="space-y-2 bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-[#1B5E7F]">What if I want to upgrade or downgrade?</h3>
              <p className="text-gray-700">
                You can change your membership tier anytime. Changes take effect on your next billing cycle.
              </p>
            </div>

            <div className="space-y-2 bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-[#1B5E7F]">Are there any cancellation fees?</h3>
              <p className="text-gray-700">
                No cancellation fees. You can cancel your membership anytime with no penalties or questions asked.
              </p>
            </div>

            <div className="space-y-2 bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-[#1B5E7F]">Do specialty services require extra credits?</h3>
              <p className="text-gray-700">
                Some specialty services (like HydraFacial or advanced TRT consultations) may require additional credits or payment, but members get 30% off all specialty services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container py-20">
        <div className="rounded-2xl bg-gradient-to-r from-[#1B5E7F] to-[#2E8B9E] p-12 text-center space-y-6 shadow-xl">
          <h2 className="text-3xl font-bold text-white">Ready to Transform Your Wellness?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Join thousands of Columbus residents who've made Restore part of their wellness routine.
          </p>
          <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-[#1B5E7F] font-semibold">
              Book Your First Session
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
