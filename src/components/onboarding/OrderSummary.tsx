import { ServiceDetails } from '@/context/OnboardingContext';

interface OrderSummaryProps {
  serviceDetails: ServiceDetails;
  selectedAddOns: string[];
}

const SERVICE_PRICES: Record<string, { name: string; price: number; inclusions: string[] }> = {
  'abn-registration': {
    name: 'ABN Registration',
    price: 165,
    inclusions: ['ABN application & lodgement', 'GST registration (if required)', 'Business name check'],
  },
  'company-setup': {
    name: 'Company Setup',
    price: 899,
    inclusions: ['ASIC registration', 'Company constitution', 'Share certificates', 'Initial ASIC annual review'],
  },
  'smsf-setup': {
    name: 'SMSF Setup',
    price: 1299,
    inclusions: ['Trust deed preparation', 'ABN & TFN application', 'Bank account setup assistance', 'Initial compliance guidance'],
  },
  'trust-registration': {
    name: 'Trust Registration',
    price: 799,
    inclusions: ['Trust deed drafting', 'TFN application', 'Trustee appointment', 'Initial tax guidance'],
  },
};

const AVAILABLE_ADDONS: Record<string, { name: string; price: number; description: string }> = {
  'registered-office': {
    name: 'Registered Office Address (12 months)',
    price: 199,
    description: 'Professional business address for ASIC records',
  },
  'bookkeeping-setup': {
    name: 'Bookkeeping Software Setup',
    price: 249,
    description: 'Xero or MYOB setup with chart of accounts',
  },
  'tax-planning': {
    name: 'Initial Tax Planning Consultation',
    price: 350,
    description: '60-minute consultation with senior accountant',
  },
  'trademark-search': {
    name: 'Trademark Search',
    price: 175,
    description: 'Comprehensive trademark availability search',
  },
};

export function OrderSummary({ serviceDetails, selectedAddOns }: OrderSummaryProps) {
  const serviceConfig = SERVICE_PRICES[serviceDetails.serviceType];
  const basePrice = serviceConfig.price;
  
  const addOnsTotal = selectedAddOns.reduce((total, addonId) => {
    return total + (AVAILABLE_ADDONS[addonId]?.price || 0);
  }, 0);

  const subtotal = basePrice + addOnsTotal;
  const gst = subtotal * 0.1;
  const total = subtotal + gst;

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-200">
        <h3 className="text-slate-900">Order Summary</h3>
      </div>

      {/* Service */}
      <div className="px-6 py-4 border-b border-slate-200">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="font-medium text-slate-900">{serviceConfig.name}</p>
            <p className="text-sm text-slate-500 mt-1">Base service</p>
          </div>
          <p className="font-medium text-slate-900">${basePrice.toFixed(2)}</p>
        </div>
        
        {/* Inclusions */}
        <div className="mt-3 bg-slate-50 rounded-md px-3 py-2">
          <p className="text-xs text-slate-600 mb-1.5">Includes:</p>
          <ul className="space-y-1">
            {serviceConfig.inclusions.map((inclusion, index) => (
              <li key={index} className="text-xs text-slate-600 flex items-start">
                <svg className="w-3 h-3 text-green-600 mr-1.5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {inclusion}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Add-ons */}
      {selectedAddOns.length > 0 && (
        <div className="px-6 py-4 border-b border-slate-200">
          <p className="text-sm text-slate-600 mb-3">Add-ons</p>
          <div className="space-y-2">
            {selectedAddOns.map((addonId) => {
              const addon = AVAILABLE_ADDONS[addonId];
              return (
                <div key={addonId} className="flex items-start justify-between">
                  <p className="text-sm text-slate-900">{addon.name}</p>
                  <p className="text-sm font-medium text-slate-900 ml-2">${addon.price.toFixed(2)}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Pricing Breakdown */}
      <div className="px-6 py-4 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-600">Subtotal</span>
          <span className="text-slate-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-600">GST (10%)</span>
          <span className="text-slate-900">${gst.toFixed(2)}</span>
        </div>
        <div className="pt-2 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-900">Total</span>
            <span className="text-slate-900">${total.toFixed(2)}</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">Includes GST</p>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="px-6 py-4 bg-slate-50 rounded-b-lg border-t border-slate-200">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <div>
            <p className="text-sm text-slate-900">Secure Payment</p>
            <p className="text-xs text-slate-600 mt-0.5">256-bit SSL encryption. PCI DSS compliant.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
