import { Button } from '../../ui/button';
import { Card, CardHeader, CardContent } from '../../ui/card';
import { MapPin, Calculator, MessageSquare, Search, Check } from 'lucide-react';

interface AddOnsStepProps {
  selectedAddOns: string[];
  setSelectedAddOns: (addOns: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const AVAILABLE_ADDONS = [
  {
    id: 'registered-office',
    name: 'Registered Office Address',
    description: 'Professional business address for ASIC records and official correspondence',
    price: 199,
    duration: '12 months',
    icon: MapPin,
    features: [
      'Sydney CBD business address',
      'Mail forwarding service',
      'Professional image',
      'ASIC compliance',
    ],
    recommended: true,
  },
  {
    id: 'bookkeeping-setup',
    name: 'Bookkeeping Software Setup',
    description: 'Get your accounting software configured correctly from day one',
    price: 249,
    icon: Calculator,
    features: [
      'Xero or MYOB setup',
      'Chart of accounts',
      'Bank feed connection',
      'Initial training session',
    ],
    recommended: true,
  },
  {
    id: 'tax-planning',
    name: 'Initial Tax Planning Consultation',
    description: 'Strategic tax advice tailored to your business structure',
    price: 350,
    duration: '60 minutes',
    icon: MessageSquare,
    features: [
      'Senior accountant consultation',
      'Tax-effective strategies',
      'Deduction guidance',
      'Written summary',
    ],
  },
  {
    id: 'trademark-search',
    name: 'Trademark Search',
    description: 'Comprehensive search to protect your business name',
    price: 175,
    icon: Search,
    features: [
      'IP Australia database search',
      'Common law search',
      'Detailed report',
      'Registration advice',
    ],
  },
];

export function AddOnsStep({ selectedAddOns, setSelectedAddOns, onNext, onBack }: AddOnsStepProps) {
  const toggleAddOn = (addonId: string) => {
    if (selectedAddOns.includes(addonId)) {
      setSelectedAddOns(selectedAddOns.filter(id => id !== addonId));
    } else {
      setSelectedAddOns([...selectedAddOns, addonId]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <h2 className="text-slate-900">Enhance Your Package</h2>
          <p className="text-sm text-slate-600 mt-1">
            Select optional add-ons to get the most out of your service
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {AVAILABLE_ADDONS.map((addon) => {
              const isSelected = selectedAddOns.includes(addon.id);
              const Icon = addon.icon;

              return (
                <button
                  key={addon.id}
                  type="button"
                  onClick={() => toggleAddOn(addon.id)}
                  className={`
                    w-full p-6 rounded-lg border-2 text-left transition-all
                    ${isSelected
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`
                      w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0
                      ${isSelected ? 'bg-blue-600' : 'bg-slate-100'}
                    `}>
                      <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-slate-600'}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className={`font-medium ${isSelected ? 'text-blue-900' : 'text-slate-900'}`}>
                              {addon.name}
                            </h3>
                            {addon.recommended && (
                              <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                                Recommended
                              </span>
                            )}
                          </div>
                          {addon.duration && (
                            <p className="text-sm text-slate-500">{addon.duration}</p>
                          )}
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className={`font-medium ${isSelected ? 'text-blue-900' : 'text-slate-900'}`}>
                            ${addon.price}
                          </p>
                          <p className="text-xs text-slate-500">inc. GST</p>
                        </div>
                      </div>

                      <p className="text-sm text-slate-600 mb-3">{addon.description}</p>

                      {/* Features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {addon.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                            <span className="text-sm text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Checkbox */}
                    <div className="flex-shrink-0">
                      <div className={`
                        w-6 h-6 rounded border-2 flex items-center justify-center
                        ${isSelected
                          ? 'bg-blue-600 border-blue-600'
                          : 'bg-white border-slate-300'
                        }
                      `}>
                        {isSelected && (
                          <Check className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Skip Option */}
          <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <p className="text-sm text-slate-600">
              Not sure? You can always add these services later. We'll send you recommendations based on your business type.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4">
        <Button type="button" variant="outline" size="lg" onClick={onBack}>
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Button>
        <Button type="submit" size="lg">
          Continue to Review
          <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </form>
  );
}
