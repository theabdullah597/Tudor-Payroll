import React from 'react';
import { FileText } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="py-section-gap bg-background selection:bg-secondary/30 selection:text-primary">
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
        <header className="mb-12 text-center">
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-6">
            <FileText className="h-8 w-8" />
          </div>
          <h1 className="font-heading text-display-lg-mobile md:text-display-lg font-bold text-primary mb-4 leading-tight">
            Terms and Conditions
          </h1>
          <p className="text-body-lg text-on-surface-variant">
            Last Updated: January 1, 2025
          </p>
        </header>

        <div className="prose prose-slate prose-lg max-w-none text-on-surface space-y-6 text-body-md text-on-surface-variant leading-relaxed">
          <p>
            Welcome to the Tudor Payroll Limited website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Tudor Payroll Limited’s relationship with you in relation to this website.
          </p>

          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-4">1. Use of Website Content</h2>
          <p>
            The content of the pages of this website is for your general information and use only. It is subject to change without notice. Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose.
          </p>

          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-4">2. Intellectual Property</h2>
          <p>
            This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, logo, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions. All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
          </p>

          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-4">3. Governing Law</h2>
          <p>
            Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland, and Wales.
          </p>

          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-4">4. Liability Limitation</h2>
          <p>
            Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
          </p>

          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-4">5. Contact Information</h2>
          <p>
            For any questions or concerns regarding these Terms and Conditions, please contact us at <a href="mailto:Sales@tudorpayroll.co.uk" className="text-secondary hover:underline">Sales@tudorpayroll.co.uk</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
