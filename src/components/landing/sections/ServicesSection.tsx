import Link from "next/link";
import { Button } from "../../ui/button";
import { Building2, FileText, Users, Landmark, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    id: "abn-registration",
    name: "ABN Registration",
    description: "Get your Australian Business Number registered quickly with GST setup if required.",
    price: 165,
    duration: "1-2 business days",
    icon: FileText,
    features: [
      "ABN application & lodgement",
      "GST registration included",
      "Business name check",
      "ATO correspondence",
    ],
  },
  {
    id: "company-setup",
    name: "Company Setup",
    description: "Complete ASIC company registration with all required documentation and compliance.",
    price: 899,
    duration: "2-3 business days",
    icon: Building2,
    features: [
      "ASIC registration",
      "Company constitution",
      "Share certificates",
      "Initial annual review",
    ],
    popular: true,
  },
  {
    id: "smsf-setup",
    name: "SMSF Setup",
    description: "Establish your Self-Managed Super Fund with compliant trust deed and registrations.",
    price: 1299,
    duration: "3-5 business days",
    icon: Landmark,
    features: [
      "Trust deed preparation",
      "ABN & TFN application",
      "Bank account assistance",
      "Compliance guidance",
    ],
  },
  {
    id: "trust-registration",
    name: "Trust Registration",
    description: "Set up family or discretionary trusts with proper legal structure and tax setup.",
    price: 799,
    duration: "3-4 business days",
    icon: Users,
    features: [
      "Trust deed drafting",
      "TFN application",
      "Trustee appointment",
      "Tax guidance",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional business registration services tailored for Australian businesses. All prices include GST.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="relative bg-white rounded-xl border-2 border-slate-200 p-8 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-8 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-slate-900 mb-2">{service.name}</h3>
                    <p className="text-sm text-slate-600 mb-3">{service.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-slate-900">${service.price}</span>
                      <span className="text-sm text-slate-500">inc. GST</span>
                    </div>
                    <div className="text-sm text-slate-500 mt-1">&#9201; {service.duration}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-sm text-slate-600 mb-3">What&apos;s included:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button
                  variant={service.popular ? "default" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link href={`/onboarding?service=${service.id}`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-slate-600">
            Not sure which service you need?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 underline">
              Contact our team
            </a>{" "}
            for a free consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
