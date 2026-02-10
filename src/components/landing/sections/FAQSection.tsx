"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does the registration process take?',
      answer: 'Most registrations are completed within 1-3 business days. ABN registrations typically take 1-2 days, while company setups take 2-3 days. SMSF and trust setups may take 3-5 days due to additional documentation requirements. We will keep you updated throughout the process.',
    },
    {
      question: 'What documents do I need to provide?',
      answer: 'Requirements vary by service type. Generally, you will need proof of identity (driver license or passport), proof of address, and business details. Our online form will guide you through exactly what is needed for your specific situation.',
    },
    {
      question: 'Are all government fees included in the price?',
      answer: 'Yes, our prices include all standard government lodgement fees for ASIC and ATO. The price you see is the total price you pay, including GST. There are no hidden fees or surprise charges.',
    },
    {
      question: 'What happens after I complete my order?',
      answer: 'You will receive an immediate confirmation email. Our team will review your information within 24 hours and may contact you if additional details are needed. We will then prepare and lodge all documents, keeping you updated via email and your client portal.',
    },
    {
      question: 'Can I track the progress of my registration?',
      answer: 'Yes! You will receive login details to our client portal where you can track your registration status in real-time, upload additional documents if needed, and communicate with your dedicated account manager.',
    },
    {
      question: 'What if my application is rejected?',
      answer: 'In the rare case that an application is rejected due to factors outside our control, we will work with you to resolve any issues at no additional cost. If the registration ultimately cannot be completed, we offer a 100% money-back guarantee.',
    },
    {
      question: 'Do you provide ongoing accounting services?',
      answer: 'Yes! While we specialize in business registration, we also offer ongoing bookkeeping, tax planning, and compliance services. After your registration is complete, we can discuss a tailored accounting package for your business.',
    },
    {
      question: 'Is my information secure?',
      answer: 'Absolutely. We use bank-level 256-bit SSL encryption for all data transmission and storage. Our payment processing is handled by Stripe, which is PCI DSS Level 1 certified. We never store your credit card details.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about our business registration services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-medium text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center p-8 bg-white rounded-xl border border-slate-200">
          <h3 className="text-slate-900 mb-2">Still Have Questions?</h3>
          <p className="text-slate-600 mb-6">
            Our team is here to help. Get in touch and we'll answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:1300123456"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>1300 123 456</span>
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="mailto:hello@accountly.com.au"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>hello@accountly.com.au</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}