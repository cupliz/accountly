import { Shield, Award, Users, Clock, FileCheck, HeadphonesIcon } from 'lucide-react';

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Award,
      title: '15+ Years Expertise',
      description: 'Certified practising accountants and tax specialists with deep knowledge of Australian business law.',
    },
    {
      icon: Shield,
      title: '100% Compliant',
      description: 'All services meet ASIC and ATO requirements. We stay current with regulatory changes.',
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most registrations completed within 1-3 business days. No unnecessary delays.',
    },
    {
      icon: FileCheck,
      title: 'Complete Documentation',
      description: 'Receive all certificates, constitutional documents, and compliance guides.',
    },
    {
      icon: Users,
      title: '10,000+ Businesses',
      description: 'Trusted by startups to established enterprises across Australia.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Ongoing Support',
      description: 'Dedicated support team available for questions before and after registration.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">
            Why Choose Accountly?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional, reliable, and experienced. We make business registration simple and stress-free.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-slate-900 mb-3">{reason.title}</h3>
                <p className="text-slate-600">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-white rounded-xl border border-slate-200 p-8">
          <div className="text-center mb-8">
            <h3 className="text-slate-900 mb-2">Certified & Registered</h3>
            <p className="text-slate-600">
              Fully qualified and accredited with Australian regulatory bodies
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-900">CPA Australia</div>
                <div className="text-xs text-slate-500">Certified Member</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-lg">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-900">Tax Practitioners Board</div>
                <div className="text-xs text-slate-500">Registered Agent</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-lg">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-900">ASIC</div>
                <div className="text-xs text-slate-500">Registered Agent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
