import { ServiceDetails } from '@/context/OnboardingContext';
import { Card, CardHeader, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { CheckCircle2, Download, Mail, Calendar, FileText } from 'lucide-react';

interface SuccessScreenProps {
  serviceDetails: ServiceDetails;
  selectedAddOns: string[];
}

const SERVICE_NAMES: Record<string, string> = {
  'abn-registration': 'ABN Registration',
  'company-setup': 'Company Setup',
  'smsf-setup': 'SMSF Setup',
  'trust-registration': 'Trust Registration',
};

export function SuccessScreen({ serviceDetails }: SuccessScreenProps) {
  const orderNumber = `ACC-${Math.floor(Math.random() * 900000 + 100000)}`;
  const estimatedDate = new Date();
  estimatedDate.setDate(estimatedDate.getDate() + 3);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-slate-900">Accountly</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-slate-900 mb-2">Payment Successful!</h1>
          <p className="text-lg text-slate-600">
            Thank you, {serviceDetails.contactName}. Your order has been received.
          </p>
        </div>

        {/* Order Details */}
        <Card className="mb-6">
          <CardHeader>
            <h2 className="text-slate-900">Order Confirmation</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-600 mb-1">Order Number</p>
                <p className="font-medium text-slate-900">{orderNumber}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Service</p>
                <p className="font-medium text-slate-900">{SERVICE_NAMES[serviceDetails.serviceType]}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Business Name</p>
                <p className="font-medium text-slate-900">{serviceDetails.businessName}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Estimated Completion</p>
                <p className="font-medium text-slate-900">
                  {estimatedDate.toLocaleDateString('en-AU', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600 mb-2">Confirmation sent to:</p>
              <p className="font-medium text-slate-900">{serviceDetails.email}</p>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mb-6">
          <CardHeader>
            <h2 className="text-slate-900">What Happens Next?</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-medium text-slate-900 mb-1">Check Your Email</h3>
                  <p className="text-sm text-slate-600">
                    We've sent a confirmation email with your receipt and next steps. Please check your spam folder if you don't see it.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-medium text-slate-900 mb-1">Document Preparation</h3>
                  <p className="text-sm text-slate-600">
                    Our team will review your information and prepare the necessary documentation. You may receive a call or email if we need additional details.
                  </p>
                  <div className="mt-2 inline-flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="w-4 h-4" />
                    <span>Typically takes 1-2 business days</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Download className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-medium text-slate-900 mb-1">Receive Your Documents</h3>
                  <p className="text-sm text-slate-600">
                    Once completed, you'll receive your registration documents, certificates, and a comprehensive guide via email.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Client Portal CTA */}
        <Card className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="py-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-medium text-slate-900 mb-1">Access Your Client Portal</h3>
                <p className="text-sm text-slate-600">
                  Track your order status and upload additional documents
                </p>
              </div>
              <Button>
                Go to Portal
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Card>
            <CardContent className="py-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-slate-900 mb-1">Have Questions?</h3>
                  <p className="text-sm text-slate-600 mb-3">Our support team is here to help</p>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                    Contact Support →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="py-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-slate-900 mb-1">Download Receipt</h3>
                  <p className="text-sm text-slate-600 mb-3">Get a PDF copy for your records</p>
                  <button className="text-sm text-blue-600 hover:text-blue-700">
                    Download PDF →
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Services */}
        <Card>
          <CardHeader>
            <h3 className="text-slate-900">Recommended Next Steps</h3>
            <p className="text-sm text-slate-600 mt-1">Complete your business setup</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div>
                  <p className="font-medium text-slate-900">Business Bank Account Setup</p>
                  <p className="text-sm text-slate-600">We can help you choose and open the right account</p>
                </div>
                <Button variant="outline" size="sm">Learn More</Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div>
                  <p className="font-medium text-slate-900">Ongoing Bookkeeping Services</p>
                  <p className="text-sm text-slate-600">Monthly bookkeeping from $149/month</p>
                </div>
                <Button variant="outline" size="sm">Learn More</Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div>
                  <p className="font-medium text-slate-900">Tax Planning & Lodgement</p>
                  <p className="text-sm text-slate-600">Stay compliant with expert tax services</p>
                </div>
                <Button variant="outline" size="sm">Learn More</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-sm text-slate-500">
            Need immediate assistance? Call us on <a href="tel:1300123456" className="text-blue-600 hover:text-blue-700">1300 123 456</a>
          </p>
          <p className="text-sm text-slate-500 mt-2">
            © 2026 Accountly. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
