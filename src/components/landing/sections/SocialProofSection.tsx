export function SocialProofSection() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder, Design Studio',
      location: 'Sydney, NSW',
      rating: 5,
      text: 'Incredibly fast and professional service. Had my company registered in under 48 hours. The team was helpful and answered all my questions.',
      avatar: 'SM',
    },
    {
      name: 'James Chen',
      role: 'Director, Tech Startup',
      location: 'Melbourne, VIC',
      rating: 5,
      text: 'Best decision for our startup. They handled all the ASIC paperwork and made the whole process stress-free. Highly recommend!',
      avatar: 'JC',
    },
    {
      name: 'Emma Thompson',
      role: 'Business Owner',
      location: 'Brisbane, QLD',
      rating: 5,
      text: 'After trying to do it myself, I wish I had used Accountly from the start. Worth every dollar for the peace of mind and expertise.',
      avatar: 'ET',
    },
  ];

  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '10,000+', label: 'Businesses Served' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '24h', label: 'Average Response' },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">
            Trusted by Australian Businesses
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of satisfied clients who chose Accountly for their business registration
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-700 mb-6">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-medium">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-medium text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                  <div className="text-xs text-slate-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-white rounded-xl border border-slate-200 p-8">
          <div className="text-center mb-8">
            <h3 className="text-slate-900 mb-2">As Featured In</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            <div className="text-slate-400 font-medium text-xl">Australian Financial Review</div>
            <div className="text-slate-400 font-medium text-xl">SmartCompany</div>
            <div className="text-slate-400 font-medium text-xl">BRW</div>
            <div className="text-slate-400 font-medium text-xl">StartupDaily</div>
          </div>
        </div>
      </div>
    </section>
  );
}