import type { Metadata } from "next";
import { OnboardingProvider } from "@/context/OnboardingContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accountly - Professional Business Registration Services",
  description:
    "Expert accounting services for Australian businesses. Get your ABN, company, SMSF, or trust setup completed quickly and correctly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <OnboardingProvider>{children}</OnboardingProvider>
      </body>
    </html>
  );
}
