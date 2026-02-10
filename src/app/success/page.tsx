"use client";

import { useOnboarding } from "@/context/OnboardingContext";
import { SuccessScreen } from "@/components/onboarding/SuccessScreen";

export default function SuccessPage() {
  const { serviceDetails, selectedAddOns } = useOnboarding();

  return (
    <SuccessScreen
      serviceDetails={serviceDetails}
      selectedAddOns={selectedAddOns}
    />
  );
}
