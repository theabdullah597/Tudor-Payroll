import React from 'react';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="py-section-gap bg-background selection:bg-secondary/30 selection:text-primary">
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
        <header className="mb-12 text-center">
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-6">
            <Shield className="h-8 w-8" />
          </div>
          <h1 className="font-heading text-display-lg-mobile md:text-display-lg font-bold text-primary mb-4 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-body-lg text-on-surface-variant">
            Last Updated: January 1, 2025
          </p>
        </header>

        <div className="prose prose-slate prose-lg max-w-none text-on-surface space-y-6 text-body-md text-on-surface-variant leading-relaxed">
          <p>
            At Tudor Payroll Limited, we are committed to safeguarding and preserving the privacy of our clients and website visitors. This Privacy Policy explains what happens to any personal data that you provide to us, or that we collect from you whilst you visit our site.
          </p>

          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-4">1. Information We Collect</h2>
          <p>
            In running and maintaining our website and providing our services, we may collect and process the following data about you:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Information about your use of our site including details of your visits such as pages viewed and the resources that you access.</li>
            <li>Information provided voluntarily by you. For example, when you register for information or complete a contact form.</li>
            <li>Information that you provide when you communicate with us by any means.</li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-4">2. Use of Your Information</h2>
          <p>
            We use the information that we collect from you to provide our services to you. In addition to this, we may use the information for one or more of the following purposes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide information to you that you request from us relating to our products or services.</li>
            <li>To provide information to you relating to other products that may be of interest to you.</li>
            <li>To inform you of any changes to our website, services, or goods and products.</li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-4">3. Storing Your Personal Data</h2>
          <p>
            Tudor Payroll Limited ensures full compliance with GDPR and relevant UK data privacy regulations. In operating our website, it may become necessary to transfer data that we collect from you to locations outside of the European Union or United Kingdom for processing and storing. By providing your personal data to us, you agree to this transfer, storing, or processing. We do our utmost to ensure that all reasonable steps are taken to make sure that your data is treated stored securely.
          </p>

          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-4">4. Disclosing Your Information</h2>
          <p>
            We will not disclose your personal information to any other party other than in accordance with this Privacy Policy and in the circumstances detailed below:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>In the event that we sell any or all of our business to the buyer.</li>
            <li>Where we are legally required by law to disclose your personal information.</li>
            <li>To further fraud protection and reduce the risk of fraud.</li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-primary mt-8 mb-4">5. Contacting Us</h2>
          <p>
            Please do not hesitate to contact us regarding any matter relating to this Privacy Policy at <a href="mailto:Sales@tudorpayroll.co.uk" className="text-secondary hover:underline">Sales@tudorpayroll.co.uk</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
