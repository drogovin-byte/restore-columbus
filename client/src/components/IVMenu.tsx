import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ivMenu } from "@/lib/data";
import { Zap, Heart, Shield, Sparkles, Brain, Flame, Droplet, Pill, Syringe, Dumbbell, Leaf, AlertCircle, Moon, Wind, Zap as ZapIcon } from "lucide-react";

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

// Benefit color mapping for nutrients
const benefitColorMap: Record<string, { bg: string; badge: string; border: string; icon: React.ReactNode }> = {
  "PERFORMANCE": { bg: "bg-gradient-to-br from-orange-50 to-amber-50", badge: "bg-orange-100 text-orange-700", border: "border-l-4 border-orange-400", icon: <Dumbbell className="w-4 h-4" /> },
  "METABOLISM": { bg: "bg-gradient-to-br from-yellow-50 to-amber-50", badge: "bg-yellow-100 text-yellow-700", border: "border-l-4 border-yellow-400", icon: <Flame className="w-4 h-4" /> },
  "MOOD": { bg: "bg-gradient-to-br from-purple-50 to-pink-50", badge: "bg-purple-100 text-purple-700", border: "border-l-4 border-purple-400", icon: <Sparkles className="w-4 h-4" /> },
  "ENERGY": { bg: "bg-gradient-to-br from-amber-50 to-orange-50", badge: "bg-amber-100 text-amber-700", border: "border-l-4 border-amber-400", icon: <Zap className="w-4 h-4" /> },
  "ENERGY, STRESS RELIEVER": { bg: "bg-gradient-to-br from-cyan-50 to-blue-50", badge: "bg-cyan-100 text-cyan-700", border: "border-l-4 border-cyan-400", icon: <Wind className="w-4 h-4" /> },
  "CELLULAR HEALTH": { bg: "bg-gradient-to-br from-green-50 to-emerald-50", badge: "bg-green-100 text-green-700", border: "border-l-4 border-green-400", icon: <Leaf className="w-4 h-4" /> },
  "FAT BURNER": { bg: "bg-gradient-to-br from-red-50 to-orange-50", badge: "bg-red-100 text-red-700", border: "border-l-4 border-red-400", icon: <Flame className="w-4 h-4" /> },
  "TISSUE HEALTH": { bg: "bg-gradient-to-br from-teal-50 to-cyan-50", badge: "bg-teal-100 text-teal-700", border: "border-l-4 border-teal-400", icon: <Heart className="w-4 h-4" /> },
  "RELAXATION": { bg: "bg-gradient-to-br from-indigo-50 to-purple-50", badge: "bg-indigo-100 text-indigo-700", border: "border-l-4 border-indigo-400", icon: <Moon className="w-4 h-4" /> },
  "IMPROVES RESILIENCE": { bg: "bg-gradient-to-br from-emerald-50 to-green-50", badge: "bg-emerald-100 text-emerald-700", border: "border-l-4 border-emerald-400", icon: <Shield className="w-4 h-4" /> },
  "BONE HEALTH": { bg: "bg-gradient-to-br from-slate-50 to-gray-50", badge: "bg-slate-100 text-slate-700", border: "border-l-4 border-slate-400", icon: <Dumbbell className="w-4 h-4" /> },
  "ANTI-NAUSEA": { bg: "bg-gradient-to-br from-pink-50 to-rose-50", badge: "bg-pink-100 text-pink-700", border: "border-l-4 border-pink-400", icon: <AlertCircle className="w-4 h-4" /> },
  "WEIGHT MANAGEMENT": { bg: "bg-gradient-to-br from-blue-50 to-cyan-50", badge: "bg-blue-100 text-blue-700", border: "border-l-4 border-blue-400", icon: <Droplet className="w-4 h-4" /> },
  "RECHARGE": { bg: "bg-gradient-to-br from-teal-50 to-cyan-50", badge: "bg-teal-100 text-teal-700", border: "border-l-4 border-teal-400", icon: <Zap className="w-4 h-4" /> },
  "HYDRATION": { bg: "bg-gradient-to-br from-cyan-50 to-blue-50", badge: "bg-cyan-100 text-cyan-700", border: "border-l-4 border-cyan-400", icon: <Droplet className="w-4 h-4" /> },
  "IMMUNE SUPPORT": { bg: "bg-gradient-to-br from-emerald-50 to-green-50", badge: "bg-emerald-100 text-emerald-700", border: "border-l-4 border-emerald-400", icon: <Shield className="w-4 h-4" /> },
  "ENERGY & MOOD": { bg: "bg-gradient-to-br from-amber-50 to-purple-50", badge: "bg-amber-100 text-amber-700", border: "border-l-4 border-amber-400", icon: <Zap className="w-4 h-4" /> },
  "ENERGY & METABOLISM": { bg: "bg-gradient-to-br from-amber-50 to-yellow-50", badge: "bg-amber-100 text-amber-700", border: "border-l-4 border-amber-400", icon: <Zap className="w-4 h-4" /> },
};

export default function IVMenu() {
  const [selectedTab, setSelectedTab] = useState("drips");

  const getNutrientColors = (benefit: string) => {
    return benefitColorMap[benefit] || benefitColorMap["ENERGY"];
  };

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
              {ivMenu.nutrients.signature.map((nutrient: any, idx: number) => {
                const colors = getNutrientColors(nutrient.benefit);
                return (
                  <Card
                    key={idx}
                    className={`p-5 border-0 ${colors.bg} ${colors.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="space-y-3">
                      {/* Header with Icon */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 text-lg mb-2">
                            {nutrient.name}
                          </h4>
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold text-xs uppercase ${colors.badge}`}>
                            {colors.icon}
                            {nutrient.benefit}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-700 leading-relaxed pt-2">
                        {nutrient.description}
                      </p>

                      {/* Pricing */}
                      <div className="pt-3 border-t border-slate-300">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-slate-600 font-medium">Member</p>
                            <p className="font-bold text-slate-900">${nutrient.memberPrice}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-slate-600 font-medium">Retail</p>
                            <p className="font-bold text-slate-900">${nutrient.retailPrice}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
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
              {ivMenu.nutrients.premium.map((nutrient: any, idx: number) => {
                const colors = getNutrientColors(nutrient.benefit);
                return (
                  <Card
                    key={idx}
                    className={`p-5 border-0 ${colors.bg} ${colors.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="space-y-3">
                      {/* Header with Icon */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 text-lg mb-2">
                            {nutrient.name}
                          </h4>
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold text-xs uppercase ${colors.badge}`}>
                            {colors.icon}
                            {nutrient.benefit}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-700 leading-relaxed pt-2">
                        {nutrient.description}
                      </p>

                      {/* Pricing */}
                      <div className="pt-3 border-t border-slate-300">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-slate-600 font-medium">Member</p>
                            <p className="font-bold text-slate-900">${nutrient.memberPrice}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-slate-600 font-medium">Retail</p>
                            <p className="font-bold text-slate-900">${nutrient.retailPrice}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
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
              {ivMenu.imShots.signature.map((shot: any, idx: number) => {
                const colors = getNutrientColors(shot.benefit);
                return (
                  <Card
                    key={idx}
                    className={`p-5 border-0 ${colors.bg} ${colors.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="space-y-3">
                      {/* Header with Icon */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 text-lg mb-2">
                            {shot.name}
                          </h4>
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold text-xs uppercase ${colors.badge}`}>
                            {colors.icon}
                            {shot.benefit}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-700 leading-relaxed pt-2">
                        {shot.description}
                      </p>

                      {/* Pricing */}
                      <div className="pt-3 border-t border-slate-300">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-slate-600 font-medium">Member</p>
                            <p className="font-bold text-slate-900">${shot.memberPrice}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-slate-600 font-medium">Retail</p>
                            <p className="font-bold text-slate-900">${shot.retailPrice}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
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
              {ivMenu.imShots.premium.map((combo: any, idx: number) => {
                const colors = getNutrientColors(combo.benefit);
                return (
                  <Card
                    key={idx}
                    className={`p-5 border-0 ${colors.bg} ${colors.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="space-y-3">
                      {/* Header with Icon */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 text-lg mb-2">
                            {combo.name}
                          </h4>
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold text-xs uppercase ${colors.badge}`}>
                            {colors.icon}
                            {combo.benefit}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-700 leading-relaxed pt-2">
                        {combo.description}
                      </p>

                      {/* Pricing */}
                      <div className="pt-3 border-t border-slate-300">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-slate-600 font-medium">Member</p>
                            <p className="font-bold text-slate-900">${combo.memberPrice}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-slate-600 font-medium">Retail</p>
                            <p className="font-bold text-slate-900">${combo.retailPrice}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
