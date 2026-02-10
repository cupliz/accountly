import Link from "next/link";
import { Button } from "../../ui/button";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span>Trusted by 10,000+ Australian businesses</span>
            </div>

            <h1 className="text-slate-900 mb-6">
              Business Registration Made Simple
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Expert accounting services for Australian businesses. Get your ABN, company, SMSF, or trust setup completed quickly and correctly.
            </p>

            {/* Key Benefits */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">Completed in 1-3 business days</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">Certified accountants &amp; tax specialists</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">100% ASIC &amp; ATO compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">Fixed pricing, no hidden fees</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/onboarding">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#process">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  See How It Works
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-3">Trusted by leading brands</p>
              <div className="flex items-center gap-6 opacity-60">
                <div className="text-slate-400 font-medium">CANVA</div>
                <div className="text-slate-400 font-medium">ATLASSIAN</div>
                <div className="text-slate-400 font-medium">AFTERPAY</div>
                <div className="text-slate-400 font-medium">SEEK</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual/Stats */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-4xl font-bold text-green-600 mb-2">10k+</div>
                  <div className="text-sm text-slate-600">Businesses Served</div>
                </div>
                <div className="text-center p-6 bg-indigo-50 rounded-xl">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">99%</div>
                  <div className="text-sm text-slate-600">Success Rate</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="text-4xl font-bold text-purple-600 mb-2">24h</div>
                  <div className="text-sm text-slate-600">Avg Response</div>
                </div>
              </div>

              {/* Featured Review */}
              <div className="mt-6 p-6 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-700 mb-3">
                  &ldquo;Fast, professional service. Had my company registered within 48 hours. Highly recommend!&rdquo;
                </p>
                <p className="text-sm text-slate-500">&mdash; Sarah M., Sydney</p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12">
              <div className="text-sm font-medium">&#10003; ASIC Registered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
