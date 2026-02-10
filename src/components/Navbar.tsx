import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-slate-900 font-semibold">
              Accountly
            </Link>
            <span className="ml-3 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
              Australian Specialists
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#services"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Services
            </a>
            <a
              href="/#why-us"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="/#pricing"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Pricing
            </a>
            <a
              href="/#faq"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              FAQ
            </a>
            <a
              href="tel:1300123456"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              1300 123 456
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="/onboarding">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/onboarding">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
