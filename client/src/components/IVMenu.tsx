import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ivMenu } from "@/lib/data";
import { Zap, Heart, Shield, Sparkles, Brain, Flame, Droplet, Pill, Syringe } from "lucide-react";

// Color mapping for each drip category
const dripColorMap: Record<string, { bg: string; header: string; border: string; icon: React.ReactNode; textColor: string }> = {
  "ENERGY": { 
    bg: "bg-gradient-to-br from-amber-50 to-orange-50", 
    header: "bg-gradient-to-r from-amber-500 to-orange-500",
    border: "border-l-4 border-amber-500",
    icon: <Zap className="w-6 h-6" />,
    textColor: "text-amber-700"
  },
  "RECOVERY": { 
    bg: "bg-gradient-to-br from-teal-50 to-cyan-50", 
    header: "bg-gradient-to-r from-teal-500 to-cyan-500",
    border: "border-l-4 border-teal-500",
    icon: <Heart className="w-6 h-6" />,
    textColor: "text-teal-700"
  },
  "IMMUNITY": { 
    bg: "bg-gradient-to-br from-emerald-50 to-green-50", 
    header: "bg-gradient-to-r from-emerald-500 to-green-500",
    border: "border-l-4 border-emerald-500",
    icon: <Shield className="w-6 h-6" />,
    textColor: "text-emerald-700"
  },
  "SKIN HEALTH": { 
    bg: "bg-gradient-to-br from-pink-50 to-rose-50", 
    header: "bg-gradient-to-r from-pink-500 to-rose-500",
    border: "border-l-4 border-pink-500",
    icon: <Sparkles className="w-6 h-6" />,
    textColor: "text-pink-700"
  },
  "BRAIN HEALTH": { 
    bg: "bg-gradient-to-br from-purple-50 to-indigo-50", 
    header: "bg-gradient-to-r from-purple-500 to-indigo-500",
    border: "border-l-4 border-purple-500",
    icon: <Brain className="w-6 h-6" />,
    textColor: "text-purple-700"
  },
  "ATHLETIC PERFORMANCE": { 
    bg: "bg-gradient-to-br from-red-50 to-orange-50", 
    header: "bg-gradient-to-r from-red-500 to-orange-500",
    border: "border-l-4 border-red-500",
    icon: <Flame className="w-6 h-6" />,
    textColor: "text-red-700"
  },
  "WEIGHT MANAGEMENT": { 
    bg: "bg-gradient-to-br from-blue-50 to-cyan-50", 
    header: "bg-gradient-to-r from-blue-500 to-cyan-500",
    border: "border-l-4 border-blue-500",
    icon: <Droplet className="w-6 h-6" />,
    textColor: "text-blue-700"
  },
};

const nutrientColorMap = {
  signature: {
    bg: "bg-gradient-to-br from-slate-50 to-gray-50",
    border: "border-l-4 border-slate-400",
    header: "text-slate-700",
    badge: "bg-slate-100 text-slate-700"
  },
  premium: {
    bg: "bg-gradient-to-br from-amber-50 to-yellow-50",
    border: "border-l-4 border-amber-500",
    header: "text-amber-700",
    badge: "bg-amber-100 text-amber-700"
  }
};

const imShotColorMap = {
  signature: {
    bg: "bg-gradient-to-br from-indigo-50 to-blue-50",
    border: "border-l-4 border-indigo-400",
    header: "text-indigo-700",
    badge: "bg-indigo-100 text-indigo-700"
  },
  premium: {
    bg: "bg-gradient-to-br from-violet-50 to-purple-50",
    border: "border-l-4 border-violet-500",
    header: "text-violet-700",
    badge: "bg-violet-100 text-violet-700"
  }
};

export default function IVMenu() {
  const [selectedTab, setSelectedTab] = useState("drips");

  return (
    <div className="w-full space-y-8">
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-100 p-1 rounded-lg">
          <TabsTrigger value="drips" className="text-base data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm">
            IV Drips
          </TabsTrigger>
          <TabsTrigger value="nutrients" className="text-base data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm">
            Add-On Nutrients
          </TabsTrigger>
          <TabsTrigger value="imshots" className="text-base data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm">
            IM Shots
          </TabsTrigger>
        </TabsList>

        {/* IV Drips Tab */}
        <TabsContent value="drips" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {ivMenu.drips.map((drip) => {
              const colors = dripColorMap[drip.category] || dripColorMap["ENERGY"];
              return (
                <Card
                  key={drip.id}
                  className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 ${colors.bg}`}
                >
                  {/* Colored Header */}
                  <div className={`${colors.header} p-4 text-white flex items-center gap-3`}>
                    {colors.icon}
                    <div>
                      <h3 className="text-xl font-bold">{drip.name}</h3>
                      <p className="text-sm font-semibold opacity-90 uppercase tracking-wide">
                        {drip.category}
                      </p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-slate-700 leading-relaxed">
                      {drip.description}
                    </p>

                    {/* Ingredients Section */}
                    <div className="pt-4 border-t border-slate-200">
                      <p className="text-xs font-semibold text-slate-600 uppercase mb-3 flex items-center gap-2">
                        <span className="inline-block w-1 h-1 bg-slate-400 rounded-full"></span>
                        Ingredients
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {drip.ingredients.map((ingredient, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1.5 ${colors.textColor} text-xs rounded-full font-medium bg-white border border-slate-200 hover:bg-slate-50 transition-colors`}
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing Section */}
                    <div className="pt-4 border-t border-slate-200">
                      <p className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="inline-block w-1 h-1 bg-slate-400 rounded-full"></span>
                        Pricing
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-lg p-3 border border-slate-200">
                          <p className="text-xs text-slate-600 font-medium mb-1">Member</p>
                          <p className={`text-lg font-bold ${colors.textColor}`}>${drip.memberPrice}</p>
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-slate-200">
                          <p className="text-xs text-slate-600 font-medium mb-1">Retail</p>
                          <p className="text-lg font-bold text-slate-900">${drip.retailPrice}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Nutrients Tab */}
        <TabsContent value="nutrients" className="space-y-8">
          {/* Signature Nutrients */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Pill className="w-6 h-6 text-slate-600" />
              <h3 className="text-2xl font-bold text-slate-900">Signature Nutrients</h3>
            </div>
            <p className="text-slate-600 ml-9">Add to any IV drip for enhanced benefits</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ivMenu.nutrients.signature.map((nutrient: any, idx: number) => (
                <Card
                  key={idx}
                  className={`p-4 border-0 ${nutrientColorMap.signature.bg} ${nutrientColorMap.signature.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">
                        {nutrient.name}
                      </h4>
                      <p className={`text-xs font-semibold ${nutrientColorMap.signature.badge} inline-block px-2 py-1 rounded mt-1 uppercase`}>
                        {nutrient.benefit}
                      </p>
                    </div>
                    <p className="text-sm text-slate-700">
                      {nutrient.description}
                    </p>
                    <div className="pt-3 border-t border-slate-300">
                      <p className="text-xs text-slate-600">
                        <span className="font-bold text-slate-900">${nutrient.memberPrice}</span> member / <span className="font-bold text-slate-900">${nutrient.retailPrice}</span> retail
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Premium Nutrients */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-6 h-6 text-amber-600" />
              <h3 className="text-2xl font-bold text-slate-900">Premium Nutrients</h3>
            </div>
            <p className="text-slate-600 ml-9">Advanced add-ons for maximum impact</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ivMenu.nutrients.premium.map((nutrient: any, idx: number) => (
                <Card
                  key={idx}
                  className={`p-4 border-0 ${nutrientColorMap.premium.bg} ${nutrientColorMap.premium.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">
                        {nutrient.name}
                      </h4>
                      <p className={`text-xs font-semibold ${nutrientColorMap.premium.badge} inline-block px-2 py-1 rounded mt-1 uppercase`}>
                        {nutrient.benefit}
                      </p>
                    </div>
                    <p className="text-sm text-slate-700">
                      {nutrient.description}
                    </p>
                    <div className="pt-3 border-t border-amber-300">
                      <p className="text-xs text-slate-600">
                        <span className="font-bold text-slate-900">${nutrient.memberPrice}</span> member / <span className="font-bold text-slate-900">${nutrient.retailPrice}</span> retail
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* IM Shots Tab */}
        <TabsContent value="imshots" className="space-y-8">
          {/* Signature IM Shots */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Syringe className="w-6 h-6 text-indigo-600" />
              <h3 className="text-2xl font-bold text-slate-900">Signature IM Shots</h3>
            </div>
            <p className="text-slate-600 ml-9">Quick intramuscular injections for targeted benefits</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ivMenu.imShots.signature.map((shot: any, idx: number) => (
                <Card
                  key={idx}
                  className={`p-4 border-0 ${imShotColorMap.signature.bg} ${imShotColorMap.signature.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">
                        {shot.name}
                      </h4>
                      <p className={`text-xs font-semibold ${imShotColorMap.signature.badge} inline-block px-2 py-1 rounded mt-1 uppercase`}>
                        {shot.benefit}
                      </p>
                    </div>
                    <p className="text-sm text-slate-700">
                      {shot.description}
                    </p>
                    <div className="pt-3 border-t border-indigo-300">
                      <p className="text-xs text-slate-600">
                        <span className="font-bold text-slate-900">${shot.memberPrice}</span> member / <span className="font-bold text-slate-900">${shot.retailPrice}</span> retail
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Premium IM Combinations */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-6 h-6 text-violet-600" />
              <h3 className="text-2xl font-bold text-slate-900">Premium IM Combinations</h3>
            </div>
            <p className="text-slate-600 ml-9">Powerful nutrient combinations for enhanced results</p>
            <div className="grid md:grid-cols-2 gap-4">
              {ivMenu.imShots.premium.map((combo: any, idx: number) => (
                <Card
                  key={idx}
                  className={`p-4 border-0 ${imShotColorMap.premium.bg} ${imShotColorMap.premium.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">
                        {combo.name}
                      </h4>
                      <p className={`text-xs font-semibold ${imShotColorMap.premium.badge} inline-block px-2 py-1 rounded mt-1 uppercase`}>
                        {combo.benefit}
                      </p>
                    </div>
                    <p className="text-sm text-slate-700">
                      {combo.description}
                    </p>
                    <div className="pt-3 border-t border-violet-300">
                      <p className="text-xs text-slate-600">
                        <span className="font-bold text-slate-900">${combo.memberPrice}</span> member / <span className="font-bold text-slate-900">${combo.retailPrice}</span> retail
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
