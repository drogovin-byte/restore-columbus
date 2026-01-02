import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, X, Eye } from "lucide-react";
import { Link } from "wouter";

interface ServiceQuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: string;
    title: string;
    shortDesc: string;
    fullDesc?: string;
    pricing: string;
    benefits?: string[];
    whoItsFor?: string[];
    category?: string;
  };
  colorSet?: {
    bg: string;
    gradient: string;
  };
  IconComponent?: React.ElementType;
  isPremium?: boolean;
  premiumPricing?: {
    dosages: { label: string; member: string; retail: string }[];
    sessionTime?: string;
  };
}

export default function ServiceQuickViewModal({
  isOpen,
  onClose,
  service,
  colorSet,
  IconComponent,
  isPremium = false,
  premiumPricing,
}: ServiceQuickViewModalProps) {
  const defaultGradient = "from-teal-500 to-cyan-500";
  const gradient = colorSet?.gradient || defaultGradient;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0 border-0">
        {/* Header with gradient */}
        <div className={`relative p-6 bg-gradient-to-r ${gradient} text-white`}>
          <div className="flex items-start gap-4">
            {IconComponent && (
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-7 h-7" />
              </div>
            )}
            <div className="flex-1">
              <DialogHeader className="text-left space-y-1">
                <div className="flex items-center gap-2">
                  <DialogTitle className="text-2xl font-bold text-white">
                    {service.title}
                  </DialogTitle>
                  {isPremium && (
                    <span className="px-2 py-0.5 bg-white/20 text-white text-xs font-bold rounded-full">
                      Premium
                    </span>
                  )}
                </div>
                <DialogDescription className="text-white/90 text-sm">
                  {service.category && (
                    <span className="inline-block px-2 py-0.5 bg-white/20 rounded-full text-xs mr-2">
                      {service.category}
                    </span>
                  )}
                  Quick overview
                </DialogDescription>
              </DialogHeader>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <p className="text-slate-700 leading-relaxed">
              {service.fullDesc || service.shortDesc}
            </p>
          </div>

          {/* Pricing Section */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-5 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">$</span>
              </span>
              Pricing
            </h4>
            
            {isPremium && premiumPricing ? (
              <div className="space-y-3">
                {premiumPricing.sessionTime && (
                  <p className="text-sm text-slate-600 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {premiumPricing.sessionTime}
                  </p>
                )}
                <div className="grid grid-cols-2 gap-3">
                  {premiumPricing.dosages.map((dosage, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg border border-slate-200">
                      <p className="text-xs text-slate-500 mb-1">{dosage.label}</p>
                      <p className="text-sm font-bold text-slate-900">
                        {dosage.member} <span className="text-xs font-normal text-slate-500">member</span>
                      </p>
                      <p className="text-xs text-slate-400">{dosage.retail} retail</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-slate-900">{service.pricing}</p>
                  {!isPremium && (
                    <p className="text-xs text-slate-500 mt-1">1 credit per session for members</p>
                  )}
                </div>
                {!isPremium && (
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                    Included in Membership
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Benefits */}
          {service.benefits && service.benefits.length > 0 && (
            <div>
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-500" />
                Key Benefits
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.benefits.slice(0, 6).map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Who It's For */}
          {service.whoItsFor && service.whoItsFor.length > 0 && (
            <div>
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                Ideal For
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.whoItsFor.slice(0, 4).map((who, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-100"
                  >
                    {who}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
            <Button
              asChild
              className={`flex-1 bg-gradient-to-r ${gradient} hover:opacity-90 text-white font-semibold h-12 rounded-lg transition-all`}
            >
              <Link href="/book">Book Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex-1 border-slate-300 text-slate-700 font-semibold h-12 rounded-lg hover:bg-slate-50"
            >
              <Link href={`/service/${service.id}`}>
                <Eye className="w-4 h-4 mr-2" />
                Full Details
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// QuickView trigger button component for reuse
export function QuickViewButton({
  onClick,
  className = "",
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 ${className}`}
      title="Quick View"
    >
      <Eye className="w-4 h-4 text-slate-700" />
    </button>
  );
}
