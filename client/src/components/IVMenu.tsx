import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { ivMenu } from "@/lib/data";

export default function IVMenu() {
  const [selectedTab, setSelectedTab] = useState("drips");

  return (
    <div className="w-full space-y-8">
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="drips" className="text-base">
            IV Drips
          </TabsTrigger>
          <TabsTrigger value="nutrients" className="text-base">
            Add-On Nutrients
          </TabsTrigger>
          <TabsTrigger value="imshots" className="text-base">
            IM Shots
          </TabsTrigger>
        </TabsList>

        {/* IV Drips Tab */}
        <TabsContent value="drips" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {ivMenu.drips.map((drip) => (
              <Card
                key={drip.id}
                className="p-6 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      {drip.name}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                      {drip.category}
                    </p>
                  </div>

                  <p className="text-slate-700 leading-relaxed">
                    {drip.description}
                  </p>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs font-semibold text-slate-600 uppercase mb-3">
                      Ingredients
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {drip.ingredients.map((ingredient, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full font-medium"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm font-semibold text-slate-900 mb-2">
                      Pricing
                    </p>
                    <div className="space-y-1">
                      <p className="text-slate-700">
                        <span className="font-semibold">Member:</span> ${drip.memberPrice}
                      </p>
                      <p className="text-slate-700">
                        <span className="font-semibold">Retail:</span> ${drip.retailPrice}
                      </p>
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
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Signature Nutrients
              </h3>
              <p className="text-slate-600">
                Add to any IV drip for enhanced benefits
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ivMenu.nutrients.signature.map((nutrient: any, idx: number) => (
                <Card key={idx} className="p-4 border border-slate-200">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-slate-900">
                        {nutrient.name}
                      </h4>
                      <p className="text-xs font-semibold text-indigo-600 uppercase">
                        {nutrient.benefit}
                      </p>
                    </div>
                    <p className="text-sm text-slate-700">
                      {nutrient.description}
                    </p>
                    <div className="pt-3 border-t border-slate-200">
                      <p className="text-xs text-slate-600">
                        <span className="font-semibold">${nutrient.memberPrice}</span> member / <span className="font-semibold">${nutrient.retailPrice}</span> retail
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Premium Nutrients */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Premium Nutrients
              </h3>
              <p className="text-slate-600">
                Advanced add-ons for maximum impact
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ivMenu.nutrients.premium.map((nutrient: any, idx: number) => (
                <Card
                  key={idx}
                  className="p-4 border border-amber-200 bg-amber-50"
                >
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-slate-900">
                        {nutrient.name}
                      </h4>
                      <p className="text-xs font-semibold text-amber-700 uppercase">
                        {nutrient.benefit}
                      </p>
                    </div>
                    <p className="text-sm text-slate-700">
                      {nutrient.description}
                    </p>
                    <div className="pt-3 border-t border-amber-200">
                      <p className="text-xs text-slate-600">
                        <span className="font-semibold">${nutrient.memberPrice}</span> member / <span className="font-semibold">${nutrient.retailPrice}</span> retail
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
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Signature IM Shots
              </h3>
              <p className="text-slate-600">
                Quick intramuscular injections for targeted benefits
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ivMenu.imShots.signature.map((shot: any, idx: number) => (
                <Card key={idx} className="p-4 border border-slate-200">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-slate-900">
                        {shot.name}
                      </h4>
                      <p className="text-xs font-semibold text-indigo-600 uppercase">
                        {shot.benefit}
                      </p>
                    </div>
                    <p className="text-sm text-slate-700">
                      {shot.description}
                    </p>
                    <div className="pt-3 border-t border-slate-200">
                      <p className="text-xs text-slate-600">
                        <span className="font-semibold">${shot.memberPrice}</span> member / <span className="font-semibold">${shot.retailPrice}</span> retail
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Premium IM Combinations */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Premium IM Combinations
              </h3>
              <p className="text-slate-600">
                Powerful nutrient combinations for enhanced results
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {ivMenu.imShots.premium.map((combo: any, idx: number) => (
                <Card
                  key={idx}
                  className="p-4 border border-amber-200 bg-amber-50"
                >
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-slate-900">
                        {combo.name}
                      </h4>
                      <p className="text-xs font-semibold text-amber-700 uppercase">
                        {combo.benefit}
                      </p>
                    </div>
                    <p className="text-sm text-slate-700">
                      {combo.description}
                    </p>
                    <div className="pt-3 border-t border-amber-200">
                      <p className="text-xs text-slate-600">
                        <span className="font-semibold">${combo.memberPrice}</span> member / <span className="font-semibold">${combo.retailPrice}</span> retail
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
