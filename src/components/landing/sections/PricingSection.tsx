import Link from "next/link";
import { Button } from "../../ui/button";
import { Check, ArrowRight } from "lucide-react";

export function PricingSection() {
  const pricingTiers = [
    {
      name: "ABN Registration",
      description: "Perfect for sole traders and new businesses",
      price: 165,
      features: [
        "ABN application & lodgement",
        "GST registration (if required)",
        "Business name availability check",
        "ATO correspondence handling",
        "Email support",
        "1-2 business days",
      ],
    },
    {
      name: "Company Setup",
      description: "Most popular for growing businesses",
      price: 899,
      features: [
        "Complete ASIC registration",
        "Company constitution",
        "Share certificates",
        "Director & shareholder resolutions",
        "Initial ASIC annual review",
        "Priority support",
        "2-3 business days",
      ],
      popular: true,
    },
    {
      name: "SMSF Setup",
      description: "Comprehensive super fund establishment",
      price: 1299,
      features: [
        "Trust deed preparation",
        "ABN & TFN applications",
        "Bank account setup assistance",
        "Initial compliance guidance",
        "ATO & ASIC registrations",
        "Dedicated account manager",
        "3-5 business days",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Fixed prices, no hidden fees. All prices include GST. Pay once, no ongoing subscriptions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-8 ${
                tier.popular
                  ? "bg-blue-600 text-white border-2 border-blue-600 shadow-xl"
                  : "bg-white border-2 border-slate-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-500 text-white text-sm rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-slate-900 mb-2 ${tier.popular ? "text-white" : ""}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-6 ${tier.popular ? "text-blue-100" : "text-slate-600"}`}>
                  {tier.description}
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className={`text-4xl font-bold ${tier.popular ? "text-white" : "text-slate-900"}`}>
                    ${tier.price}
                  </span>
                  <span className={`text-sm ${tier.popular ? "text-blue-100" : "text-slate-500"}`}>
                    inc. GST
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${tier.popular ? "text-blue-200" : "text-green-600"}`} />
                    <span className={`text-sm ${tier.popular ? "text-blue-50" : "text-slate-700"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.popular ? "secondary" : "default"}
                className={`w-full ${tier.popular ? "bg-white text-blue-600 hover:bg-blue-50" : ""}`}
                asChild
              >
                <Link href="/onboarding">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Pricing Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-medium text-slate-900 mb-2">No Hidden Fees</h3>
            <p className="text-sm text-slate-600">
              The price you see is the price you pay. No surprises at checkout.
            </p>
          </div>

          <div className="text-center p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-medium text-slate-900 mb-2">Money-Back Guarantee</h3>
            <p className="text-sm text-slate-600">
              If we can&apos;t complete your registration, we&apos;ll refund you 100%.
            </p>
          </div>

          <div className="text-center p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <h3 className="font-medium text-slate-900 mb-2">Add-Ons Available</h3>
            <p className="text-sm text-slate-600">
              Customize your package with optional services like registered office address.
            </p>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Need a custom quote for multiple registrations?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 underline">
              Contact us for volume pricing
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
