"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useOnboarding } from "@/context/OnboardingContext";
import { Navbar } from "@/components/Navbar";
import { Stepper } from "@/components/onboarding/Stepper";
import { OrderSummary } from "@/components/onboarding/OrderSummary";
import { DetailsStep } from "@/components/onboarding/steps/DetailsStep";
import { AddOnsStep } from "@/components/onboarding/steps/AddOnsStep";
import { ReviewStep } from "@/components/onboarding/steps/ReviewStep";
import { PaymentStep } from "@/components/onboarding/steps/PaymentStep";

export default function OnboardingPage() {
  const router = useRouter();
  const { serviceDetails, setServiceDetails, selectedAddOns, setSelectedAddOns } =
    useOnboarding();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  const steps = [
    { id: 0, label: "Service Details", component: DetailsStep },
    { id: 1, label: "Add-ons", component: AddOnsStep },
    { id: 2, label: "Review", component: ReviewStep },
    { id: 3, label: "Payment", component: PaymentStep },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleComplete = () => {
    router.push("/success");
  };

  const stepProps = {
    serviceDetails,
    setServiceDetails,
    selectedAddOns,
    setSelectedAddOns,
    onNext: handleNext,
    onBack: handleBack,
    onComplete: handleComplete,
    currentStep,
    totalSteps: steps.length,
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Mobile Summary Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsSummaryOpen(!isSummaryOpen)}
            className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition-colors"
          >
            <span className="font-medium text-slate-900">Order Summary</span>
            <svg
              className={`w-5 h-5 text-slate-400 transition-transform ${isSummaryOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isSummaryOpen && (
            <div className="mt-4">
              <OrderSummary
                serviceDetails={serviceDetails}
                selectedAddOns={selectedAddOns}
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            {/* Stepper */}
            <div className="mb-8">
              <Stepper steps={steps} currentStep={currentStep} />
            </div>

            {/* Step Content */}
            {currentStep === 0 && <DetailsStep {...stepProps} />}
            {currentStep === 1 && <AddOnsStep {...stepProps} />}
            {currentStep === 2 && <ReviewStep {...stepProps} />}
            {currentStep === 3 && <PaymentStep {...stepProps} />}
          </div>

          {/* Right Column - Order Summary (Desktop Only) */}
          <div className="hidden lg:block">
            <div className="sticky top-8">
              <OrderSummary
                serviceDetails={serviceDetails}
                selectedAddOns={selectedAddOns}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-slate-500">
            <p>
              &copy; 2026 Accountly. Australian Business Number: 12 345 678 901
            </p>
            <p className="mt-2">
              All prices include GST. Secure checkout powered by Stripe.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
