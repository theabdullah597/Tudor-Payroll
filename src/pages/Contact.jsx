import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showConfigHelp, setShowConfigHelp] = useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple Validation
    if (!formData.fullName || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields (Name, Email, Message).' });
      return;
    }

    setIsLoading(true);
    setStatus({ type: '', message: '' });

    // Load EmailJS credentials from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_tudor';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_tudor';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_tudor';

    if (serviceId === 'service_tudor' || templateId === 'template_tudor' || publicKey === 'public_tudor') {
      console.warn('Warning: EmailJS is using default/fallback credentials. If you have defined these in your .env file, please restart your development server (Ctrl+C and npm run dev) so Vite can reload the new environment variables.');
    }

    const templateParams = {
      from_name: formData.fullName,
      company_name: formData.company || 'N/A',
      reply_to: formData.email,
      phone_number: formData.phone || 'N/A',
      service_interest: formData.service || 'General Inquiry',
      message: formData.message
    };

    emailjs.init({
      publicKey: publicKey
    });

    emailjs.send(serviceId, templateId, templateParams, { publicKey })
      .then(() => {
        setStatus({ type: 'success', message: 'Your message has been sent successfully! Our payroll experts will get back to you shortly.' });
        setFormData({
          fullName: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('EmailJS Error details:', error);
        setStatus({
          type: 'error',
          message: `Failed to send message: ${error?.text || error?.message || 'Please check your console and verify environment credentials.'}`
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col selection:bg-secondary selection:text-on-secondary">
      {/* Hero Section */}
      <section className="w-full bg-surface pt-24 pb-16 px-margin-mobile md:px-margin-desktop border-b border-surface-container-high">
        <div className="max-w-container-max mx-auto text-center flex flex-col items-center justify-center">
          <span className="text-xs font-semibold text-secondary uppercase tracking-widest mb-3">Get in Touch</span>
          <h1 className="font-heading text-display-lg-mobile md:text-display-lg text-primary mb-4 font-bold">
            Contact Us
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Get in touch with our team of payroll experts. We're here to answer your questions and provide tailored solutions for your business.
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-6 md:p-10">
            <h2 className="font-heading text-headline-md font-bold text-primary mb-8">Send us a message</h2>

            {status.message && (
              <div className={`p-4 mb-6 rounded flex items-start gap-3 text-sm ${status.type === 'success'
                ? 'bg-green-50 text-green-800 border-l-4 border-green-500'
                : 'bg-red-50 text-red-800 border-l-4 border-red-500'
                }`}>
                {status.type === 'success' ? <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" /> : <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />}
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="fullName">Full Name *</label>
                  <input
                    className="w-full border border-outline-variant rounded bg-surface-container-lowest text-on-surface py-3 px-4 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    type="text"
                    required
                  />
                </div>
                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="company">Company Name</label>
                  <input
                    className="w-full border border-outline-variant rounded bg-surface-container-lowest text-on-surface py-3 px-4 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    type="text"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="email">Work Email *</label>
                  <input
                    className="w-full border border-outline-variant rounded bg-surface-container-lowest text-on-surface py-3 px-4 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    type="email"
                    required
                  />
                </div>
                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="phone">Phone Number</label>
                  <input
                    className="w-full border border-outline-variant rounded bg-surface-container-lowest text-on-surface py-3 px-4 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 (0) 123 456 789"
                    type="tel"
                  />
                </div>
              </div>

              {/* Service Interest */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="service">Service of Interest</label>
                <select
                  className="w-full border border-outline-variant rounded bg-surface-container-lowest text-on-surface py-3 px-4 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none cursor-pointer text-sm"
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select a service...</option>
                  <option value="managed">Fully Managed Payroll</option>
                  <option value="software">Payroll Software Integration</option>
                  <option value="consulting">Compliance Consulting</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="message">Your Message *</label>
                <textarea
                  className="w-full border border-outline-variant rounded bg-surface-container-lowest text-on-surface py-3 px-4 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none text-sm"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help your business?"
                  rows={5}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  className={`bg-secondary text-on-secondary font-heading text-xs font-bold uppercase tracking-wider py-4 px-8 rounded shadow-sm hover:bg-secondary-container hover:text-on-secondary-container transition-all w-full md:w-auto ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-primary text-on-primary rounded-xl p-8 shadow-md flex flex-col gap-8 h-full">
              <div>
                <h3 className="font-heading text-headline-md font-bold mb-2 text-white">Contact Information</h3>

              </div>
              <div className="flex flex-col gap-6 mt-4">
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary-container text-secondary-container p-3 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-primary-container uppercase tracking-wider mb-1">Email Us</p>
                    <a className="text-body-lg font-semibold text-on-primary hover:text-secondary-container transition-colors" href="mailto:Sales@tudorpayroll.co.uk">Sales@tudorpayroll.co.uk</a>
                  </div>
                </div>
                {/* Address Item */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary-container text-secondary-container p-3 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-primary-container uppercase tracking-wider mb-1">Head Office</p>
                    <p className="text-body-lg text-on-primary leading-relaxed font-semibold">
                      82 King Street,<br />
                      Manchester, Greater Manchester,<br />
                      England, M2 4WQ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Live Google Map */}
      <section className="w-full h-[500px] bg-surface-container-high relative border-t border-outline-variant/30 overflow-hidden">
        <iframe
          title="Google Map location of Tudor Payroll Limited"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.3216858142327!2d-2.2471924232607186!3d53.48065506411516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c271445b69%3A0x10a49398247d14b8!2s82%20King%20St%2C%20Manchester%20M2%204WQ!5e0!3m2!1sen!2suk!4v1717720000000!5m2!1sen!2suk"
          className="w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}