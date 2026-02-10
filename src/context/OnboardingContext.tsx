"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export interface ServiceDetails {
  serviceType: string;
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  abn?: string;
  entityType?: string;
  stateTerritory?: string;
}

export interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface OnboardingContextValue {
  serviceDetails: ServiceDetails;
  setServiceDetails: React.Dispatch<React.SetStateAction<ServiceDetails>>;
  selectedAddOns: string[];
  setSelectedAddOns: React.Dispatch<React.SetStateAction<string[]>>;
}

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [serviceDetails, setServiceDetails] = useState<ServiceDetails>({
    serviceType: "abn-registration",
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    stateTerritory: "NSW",
  });
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  return (
    <OnboardingContext.Provider
      value={{
        serviceDetails,
        setServiceDetails,
        selectedAddOns,
        setSelectedAddOns,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
}
