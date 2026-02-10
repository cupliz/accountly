import { ServiceDetails } from '@/context/OnboardingContext';
import { FormField, Input, Select } from '../../ui/FormField';
import { Button } from '../../ui/button';
import { Card, CardHeader, CardContent } from '../../ui/card';
import { Building2, FileText, Users, Landmark } from 'lucide-react';

interface DetailsStepProps {
  serviceDetails: ServiceDetails;
  setServiceDetails: (details: ServiceDetails) => void;
  onNext: () => void;
  currentStep: number;
}

const SERVICES = [
  {
    id: 'abn-registration',
    name: 'ABN Registration',
    description: 'Register for an Australian Business Number',
    icon: FileText,
    price: 165,
  },
  {
    id: 'company-setup',
    name: 'Company Setup',
    description: 'Complete ASIC company registration',
    icon: Building2,
    price: 899,
  },
  {
    id: 'smsf-setup',
    name: 'SMSF Setup',
    description: 'Self-Managed Super Fund establishment',
    icon: Landmark,
    price: 1299,
  },
  {
    id: 'trust-registration',
    name: 'Trust Registration',
    description: 'Family or discretionary trust setup',
    icon: Users,
    price: 799,
  },
];

const STATES = [
  { value: 'NSW', label: 'New South Wales' },
  { value: 'VIC', label: 'Victoria' },
  { value: 'QLD', label: 'Queensland' },
  { value: 'WA', label: 'Western Australia' },
  { value: 'SA', label: 'South Australia' },
  { value: 'TAS', label: 'Tasmania' },
  { value: 'ACT', label: 'Australian Capital Territory' },
  { value: 'NT', label: 'Northern Territory' },
];

const ENTITY_TYPES = [
  { value: 'sole-trader', label: 'Sole Trader' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'company', label: 'Company' },
  { value: 'trust', label: 'Trust' },
];

export function DetailsStep({ serviceDetails, setServiceDetails, onNext }: DetailsStepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const updateField = (field: keyof ServiceDetails, value: string) => {
    setServiceDetails({ ...serviceDetails, [field]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Service Selection */}
      <Card>
        <CardHeader>
          <h2 className="text-slate-900">Select Your Service</h2>
          <p className="text-sm text-slate-600 mt-1">Choose the service you'd like to get started with</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              const isSelected = serviceDetails.serviceType === service.id;
              
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => updateField('serviceType', service.id)}
                  className={`
                    relative p-4 rounded-lg border-2 text-left transition-all
                    ${isSelected
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                    }
                  `}
                >
                  {isSelected && (
                    <div className="absolute top-3 right-3">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                  <Icon className={`w-6 h-6 mb-3 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                  <h3 className={`font-medium mb-1 ${isSelected ? 'text-blue-900' : 'text-slate-900'}`}>
                    {service.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">{service.description}</p>
                  <p className={`text-sm ${isSelected ? 'text-blue-600' : 'text-slate-900'}`}>
                    From ${service.price} <span className="text-xs text-slate-500">inc. GST</span>
                  </p>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Business Details */}
      <Card>
        <CardHeader>
          <h2 className="text-slate-900">Business Details</h2>
          <p className="text-sm text-slate-600 mt-1">Tell us about your business</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <FormField
                label="Business or Entity Name"
                name="businessName"
                required
                helpText="Enter your proposed or registered business name"
              >
                <Input
                  id="businessName"
                  type="text"
                  value={serviceDetails.businessName}
                  onChange={(e) => updateField('businessName', e.target.value)}
                  placeholder="e.g., Smith & Co Consulting"
                  required
                />
              </FormField>
            </div>

            {serviceDetails.serviceType === 'company-setup' && (
              <div className="md:col-span-2">
                <FormField
                  label="Entity Type"
                  name="entityType"
                  required
                >
                  <Select
                    id="entityType"
                    value={serviceDetails.entityType || ''}
                    onChange={(e) => updateField('entityType', e.target.value)}
                    required
                  >
                    <option value="">Select entity type</option>
                    {ENTITY_TYPES.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </Select>
                </FormField>
              </div>
            )}

            <div className="md:col-span-2">
              <FormField
                label="State or Territory"
                name="stateTerritory"
                required
              >
                <Select
                  id="stateTerritory"
                  value={serviceDetails.stateTerritory || ''}
                  onChange={(e) => updateField('stateTerritory', e.target.value)}
                  required
                >
                  {STATES.map((state) => (
                    <option key={state.value} value={state.value}>
                      {state.label}
                    </option>
                  ))}
                </Select>
              </FormField>
            </div>

            {serviceDetails.serviceType !== 'abn-registration' && (
              <div className="md:col-span-2">
                <FormField
                  label="Existing ABN (if applicable)"
                  name="abn"
                  helpText="Leave blank if you don't have an ABN yet"
                >
                  <Input
                    id="abn"
                    type="text"
                    value={serviceDetails.abn || ''}
                    onChange={(e) => updateField('abn', e.target.value)}
                    placeholder="12 345 678 901"
                    pattern="[0-9\s]*"
                  />
                </FormField>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <h2 className="text-slate-900">Contact Information</h2>
          <p className="text-sm text-slate-600 mt-1">How can we reach you?</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <FormField
                label="Full Name"
                name="contactName"
                required
              >
                <Input
                  id="contactName"
                  type="text"
                  value={serviceDetails.contactName}
                  onChange={(e) => updateField('contactName', e.target.value)}
                  placeholder="John Smith"
                  required
                />
              </FormField>
            </div>

            <FormField
              label="Email Address"
              name="email"
              required
            >
              <Input
                id="email"
                type="email"
                value={serviceDetails.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="john@example.com"
                required
              />
            </FormField>

            <FormField
              label="Phone Number"
              name="phone"
              required
            >
              <Input
                id="phone"
                type="tel"
                value={serviceDetails.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="0400 000 000"
                required
              />
            </FormField>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-end pt-4">
        <Button type="submit" size="lg">
          Continue to Add-ons
          <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </form>
  );
}
