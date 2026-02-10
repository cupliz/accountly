import { ServiceDetails } from '@/context/OnboardingContext';
import { Button } from '../../ui/button';
import { Card, CardHeader, CardContent } from '../../ui/card';
import { Check, Edit2 } from 'lucide-react';

interface ReviewStepProps {
  serviceDetails: ServiceDetails;
  selectedAddOns: string[];
  onNext: () => void;
  onBack: () => void;
}

const SERVICE_NAMES: Record<string, string> = {
  'abn-registration': 'ABN Registration',
  'company-setup': 'Company Setup',
  'smsf-setup': 'SMSF Setup',
  'trust-registration': 'Trust Registration',
};

const ADDON_NAMES: Record<string, string> = {
  'registered-office': 'Registered Office Address (12 months)',
  'bookkeeping-setup': 'Bookkeeping Software Setup',
  'tax-planning': 'Initial Tax Planning Consultation (60 minutes)',
  'trademark-search': 'Trademark Search',
};

const STATE_NAMES: Record<string, string> = {
  'NSW': 'New South Wales',
  'VIC': 'Victoria',
  'QLD': 'Queensland',
  'WA': 'Western Australia',
  'SA': 'South Australia',
  'TAS': 'Tasmania',
  'ACT': 'Australian Capital Territory',
  'NT': 'Northern Territory',
};

export function ReviewStep({ serviceDetails, selectedAddOns, onNext, onBack }: ReviewStepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Service Details Review */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-slate-900">Review Your Details</h2>
              <p className="text-sm text-slate-600 mt-1">
                Please review your information before proceeding to payment
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Selected Service */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm text-slate-900">Selected Service</h3>
              <button
                type="button"
                onClick={onBack}
                className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <Edit2 className="w-4 h-4" />
                Edit
              </button>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="font-medium text-slate-900">{SERVICE_NAMES[serviceDetails.serviceType]}</p>
            </div>
          </div>

          {/* Business Details */}
          <div>
            <h3 className="text-sm text-slate-900 mb-3">Business Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-xs text-slate-600 mb-1">Business Name</p>
                <p className="text-sm font-medium text-slate-900">{serviceDetails.businessName}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-xs text-slate-600 mb-1">State/Territory</p>
                <p className="text-sm font-medium text-slate-900">
                  {STATE_NAMES[serviceDetails.stateTerritory || 'NSW']}
                </p>
              </div>
              {serviceDetails.entityType && (
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-xs text-slate-600 mb-1">Entity Type</p>
                  <p className="text-sm font-medium text-slate-900 capitalize">
                    {serviceDetails.entityType.replace('-', ' ')}
                  </p>
                </div>
              )}
              {serviceDetails.abn && (
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="text-xs text-slate-600 mb-1">Existing ABN</p>
                  <p className="text-sm font-medium text-slate-900">{serviceDetails.abn}</p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-sm text-slate-900 mb-3">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-xs text-slate-600 mb-1">Full Name</p>
                <p className="text-sm font-medium text-slate-900">{serviceDetails.contactName}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-xs text-slate-600 mb-1">Email</p>
                <p className="text-sm font-medium text-slate-900">{serviceDetails.email}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-xs text-slate-600 mb-1">Phone</p>
                <p className="text-sm font-medium text-slate-900">{serviceDetails.phone}</p>
              </div>
            </div>
          </div>

          {/* Add-ons */}
          {selectedAddOns.length > 0 && (
            <div>
              <h3 className="text-sm text-slate-900 mb-3">Selected Add-ons</h3>
              <div className="space-y-2">
                {selectedAddOns.map((addonId) => (
                  <div key={addonId} className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-slate-900">{ADDON_NAMES[addonId]}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Terms and Conditions */}
      <Card>
        <CardContent className="py-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                required
                className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 mt-0.5"
              />
              <label htmlFor="terms" className="text-sm text-slate-700 flex-1">
                I agree to the{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                  Privacy Policy
                </a>
              </label>
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="accuracy"
                required
                className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 mt-0.5"
              />
              <label htmlFor="accuracy" className="text-sm text-slate-700 flex-1">
                I confirm that all information provided is accurate and complete
              </label>
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="marketing"
                className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 mt-0.5"
              />
              <label htmlFor="marketing" className="text-sm text-slate-700 flex-1">
                I'd like to receive updates and tips about my business (optional)
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What Happens Next */}
      <Card>
        <CardHeader>
          <h3 className="text-slate-900">What Happens Next?</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-sm">
                1
              </div>
              <div>
                <p className="font-medium text-slate-900">Secure Payment</p>
                <p className="text-sm text-slate-600">
                  Complete your payment via our secure Stripe checkout
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-sm">
                2
              </div>
              <div>
                <p className="font-medium text-slate-900">Document Preparation</p>
                <p className="text-sm text-slate-600">
                  Our team will prepare and lodge your documents (1-2 business days)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-sm">
                3
              </div>
              <div>
                <p className="font-medium text-slate-900">Receive Your Documents</p>
                <p className="text-sm text-slate-600">
                  Get your completed registration and compliance documents
                </p>
              </div>
            </div>
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
          Proceed to Payment
          <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </form>
  );
}
