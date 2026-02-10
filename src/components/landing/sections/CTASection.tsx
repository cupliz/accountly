import Link from "next/link";
import { Button } from "../../ui/button";
import { ArrowRight, Shield } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white mb-6">
          Ready to Register Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join 10,000+ Australian businesses who trust Accountly for their registration and compliance needs. Get started in minutes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50"
            asChild
          >
            <Link href="/onboarding">
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white/10"
            asChild
          >
            <a href="tel:1300123456">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 1300 123 456
            </a>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <Shield className="w-6 h-6 text-white flex-shrink-0" />
            <div className="text-left">
              <div className="text-sm font-medium text-white">ASIC Registered</div>
              <div className="text-xs text-blue-100">Certified Agent</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <div className="text-left">
              <div className="text-sm font-medium text-white">Secure Payment</div>
              <div className="text-xs text-blue-100">256-bit SSL</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div className="text-left">
              <div className="text-sm font-medium text-white">Money Back</div>
              <div className="text-xs text-blue-100">100% Guarantee</div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mt-8 text-sm text-blue-100">
          No credit card required to start. Pay securely once you&apos;re ready to proceed.
        </p>
      </div>
    </section>
  );
}
