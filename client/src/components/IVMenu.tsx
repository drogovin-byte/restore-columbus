import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ivMenu } from "@/lib/data";
import { Zap, Heart, Shield, Sparkles, Brain, Flame, Droplet, Pill, Syringe } from "lucide-react";

// Restore.com Blue Color Palette
const RESTORE_COLORS = {
  darkTeal: "#0F6B7F",      // Dark teal for headers
  brightTeal: "#00A8A8",    // Bright teal for accents
  lightTeal: "#7DD3C0",     // Light teal for backgrounds
  navy: "#003D52",          // Navy for text
  mediumTeal: "#1B7A8F",    // Medium teal
};

// All cards use the same Restore blue palette
const cardColorMap = {
  header: `bg-gradient-to-r from-[${RESTORE_COLORS.brightTeal}] to-[${RESTORE_COLORS.mediumTeal}]`,
  bg: "bg-gradient-to-br from-cyan-50 to-teal-50",
  border: "border-l-4 border-cyan-500",
  textColor: "text-cyan-700",
  badgeBg: "bg-cyan-100 text-cyan-700",
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
            {ivMenu.drips.map((drip) => (
              <Card
                key={drip.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-cyan-50 to-teal-50"
              >
                {/* Colored Header */}
                <div className="bg-gradient-to-r from-cyan-500 to-teal-600 p-4 text-white flex items-center gap-3">
                  <Zap className="w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-bold">{drip.name}</h3>
                    <p className="text-sm font-semibold opacity-90 uppercase tracking-wide">
                      {drip.category}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4 border-l-4 border-cyan-500">
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
                          className="px-3 py-1.5 text-cyan-700 text-xs rounded-full font-medium bg-white border border-cyan-200 hover:bg-cyan-50 transition-colors"
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
                        <p className="text-lg font-bold text-cyan-700">${drip.memberPrice}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-slate-200">
                        <p className="text-xs text-slate-600 font-medium mb-1">Retail</p>
                        <p className="text-lg font-bold text-slate-900">${drip.retailPrice}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Nutrients Tab */}
        <TabsContent value="nutrients" className="space-y-8">
          {/* Signature Nutrients */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Pill className="w-6 h-6 text-cyan-600" />
              <h3 className="text-2xl font-bold text-slate-900">Signature Nutrients</h3>
            </div>
            <p className="text-slate-600 ml-9">Add to any IV drip for enhanced benefits</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ivMenu.nutrients.signature.map((nutrient: any, idx: number) => (
                <Card
                  key={idx}
                  className="p-5 border-0 bg-gradient-to-br from-cyan-50 to-teal-50 border-l-4 border-cyan-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    {/* Header with Icon */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">
                          {nutrient.name}
                        </h4>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold text-xs uppercase bg-cyan-100 text-cyan-700">
                          <Sparkles className="w-4 h-4" />
                          {nutrient.benefit}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-700 leading-relaxed pt-2">
                      {nutrient.description}
                    </p>

                    {/* Pricing */}
                    <div className="pt-3 border-t border-cyan-200">
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
              ))}
            </div>
          </div>

          {/* Premium Nutrients */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-6 h-6 text-cyan-600" />
              <h3 className="text-2xl font-bold text-slate-900">Premium Nutrients</h3>
            </div>
            <p className="text-slate-600 ml-9">Advanced add-ons for maximum impact</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ivMenu.nutrients.premium.map((nutrient: any, idx: number) => (
                <Card
                  key={idx}
                  className="p-5 border-0 bg-gradient-to-br from-cyan-50 to-teal-50 border-l-4 border-cyan-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    {/* Header with Icon */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">
                          {nutrient.name}
                        </h4>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold text-xs uppercase bg-cyan-100 text-cyan-700">
                          <Sparkles className="w-4 h-4" />
                          {nutrient.benefit}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-700 leading-relaxed pt-2">
                      {nutrient.description}
                    </p>

                    {/* Pricing */}
                    <div className="pt-3 border-t border-cyan-200">
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
              ))}
            </div>
          </div>
        </TabsContent>

        {/* IM Shots Tab */}
        <TabsContent value="imshots" className="space-y-8">
          {/* Signature IM Shots */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Syringe className="w-6 h-6 text-cyan-600" />
              <h3 className="text-2xl font-bold text-slate-900">Signature IM Shots</h3>
            </div>
            <p className="text-slate-600 ml-9">Quick intramuscular injections for targeted benefits</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ivMenu.imShots.signature.map((shot: any, idx: number) => (
                <Card
                  key={idx}
                  className="p-5 border-0 bg-gradient-to-br from-cyan-50 to-teal-50 border-l-4 border-cyan-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    {/* Header with Icon */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">
                          {shot.name}
                        </h4>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold text-xs uppercase bg-cyan-100 text-cyan-700">
                          <Sparkles className="w-4 h-4" />
                          {shot.benefit}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-700 leading-relaxed pt-2">
                      {shot.description}
                    </p>

                    {/* Pricing */}
                    <div className="pt-3 border-t border-cyan-200">
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
              ))}
            </div>
          </div>

          {/* Premium IM Combinations */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-6 h-6 text-cyan-600" />
              <h3 className="text-2xl font-bold text-slate-900">Premium IM Combinations</h3>
            </div>
            <p className="text-slate-600 ml-9">Powerful nutrient combinations for enhanced results</p>
            <div className="grid md:grid-cols-2 gap-4">
              {ivMenu.imShots.premium.map((combo: any, idx: number) => (
                <Card
                  key={idx}
                  className="p-5 border-0 bg-gradient-to-br from-cyan-50 to-teal-50 border-l-4 border-cyan-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    {/* Header with Icon */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">
                          {combo.name}
                        </h4>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold text-xs uppercase bg-cyan-100 text-cyan-700">
                          <Sparkles className="w-4 h-4" />
                          {combo.benefit}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-700 leading-relaxed pt-2">
                      {combo.description}
                    </p>

                    {/* Pricing */}
                    <div className="pt-3 border-t border-cyan-200">
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
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
