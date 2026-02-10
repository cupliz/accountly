export function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Service',
      description: 'Select the business registration service you need. Our guided process will collect all required information.',
      duration: '5 minutes',
    },
    {
      number: '02',
      title: 'Provide Your Details',
      description: 'Complete our simple online form. We will guide you through each field with helpful tooltips and validation.',
      duration: '10 minutes',
    },
    {
      number: '03',
      title: 'Secure Payment',
      description: 'Pay securely via Stripe. All prices are fixed and include GST. No hidden fees or surprises.',
      duration: '2 minutes',
    },
    {
      number: '04',
      title: 'We Handle Everything',
      description: 'Our team prepares and lodges all documents with ASIC and ATO. Track progress in your client portal.',
      duration: '1-3 days',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A simple 4-step process to get your business registered and compliant
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-slate-200" style={{ width: 'calc(100% - 8rem)', marginLeft: '4rem' }}></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number Circle */}
                <div className="flex items-center justify-center mb-6">
                  <div className="relative w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-medium">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 mb-4">{step.description}</p>
                  <div className="inline-flex items-center gap-2 text-sm text-slate-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Most registrations completed in 1-3 business days</span>
          </div>
        </div>
      </div>
    </section>
  );
}