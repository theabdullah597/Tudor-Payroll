import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/footer-logo.png';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary text-on-primary border-t border-primary-container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link to="/" onClick={handleScrollToTop} className="flex items-center gap-3">
            <img src={logo} alt="Tudor Logo" className="h-8 w-auto rounded object-contain brightness-95" />
            <span className="font-heading text-headline-md font-bold text-on-primary tracking-tight">Tudor</span>
          </Link>
          <p className="text-on-primary-container text-sm">
            Payroll, HR &amp; Workforce Solutions
          </p>
          <p className="text-on-primary-container text-xs leading-relaxed max-w-xs">
            Intelligent payroll infrastructure designed for modern enterprises that demand accuracy, compliance, and total control.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-label-sm text-secondary-fixed uppercase tracking-wider">Quick Links</h4>
          <nav className="flex flex-col gap-2.5">
            <Link to="/" onClick={handleScrollToTop} className="text-on-primary-container hover:text-on-primary text-body-md transition-colors">Home</Link>
            <Link to="/about" onClick={handleScrollToTop} className="text-on-primary-container hover:text-on-primary text-body-md transition-colors">About Us</Link>
            <Link to="/insights" onClick={handleScrollToTop} className="text-on-primary-container hover:text-on-primary text-body-md transition-colors">Insights</Link>
            <Link to="/contact" onClick={handleScrollToTop} className="text-on-primary-container hover:text-on-primary text-body-md transition-colors">Contact Us</Link>
          </nav>
        </div>

        {/* Solutions Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-label-sm text-secondary-fixed uppercase tracking-wider">Solutions</h4>
          <nav className="flex flex-col gap-2.5">
            <Link to="/solutions/workforce-management" onClick={handleScrollToTop} className="text-on-primary-container hover:text-on-primary text-body-md transition-colors">Workforce Management</Link>
            <Link to="/solutions/payroll-reward" onClick={handleScrollToTop} className="text-on-primary-container hover:text-on-primary text-body-md transition-colors">Payroll &amp; Reward</Link>
            <Link to="/solutions/core-hr" onClick={handleScrollToTop} className="text-on-primary-container hover:text-on-primary text-body-md transition-colors">Core HR</Link>
            <Link to="/solutions/staffing-recruitment" onClick={handleScrollToTop} className="text-on-primary-container hover:text-on-primary text-body-md transition-colors">Staffing &amp; Recruitment</Link>
            <Link to="/solutions/talent-careers" onClick={handleScrollToTop} className="text-on-primary-container hover:text-on-primary text-body-md transition-colors">Talent &amp; Careers</Link>
          </nav>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-label-sm text-secondary-fixed uppercase tracking-wider">Get in Touch</h4>
          <div className="flex flex-col gap-3 text-sm text-on-primary-container">
            <a href="mailto:Sales@tudorpayroll.co.uk" className="flex items-center gap-2 hover:text-on-primary transition-colors">
              <Mail className="h-4 w-4 text-secondary-fixed-dim" />
              <span>Sales@tudorpayroll.co.uk</span>
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-secondary-fixed-dim shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                82 King Street,<br />
                Manchester,<br />
                Greater Manchester,<br />
                England, M2 4WQ
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Banner */}
      <div className="border-t border-primary-container bg-primary-container/20">
        <div className="px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-on-primary-container text-center md:text-left">
            Copyright © 2026 Tudor Payroll Limited. All rights reserved. Registered in England &amp; Wales.
          </p>
          <div className="flex gap-4 text-xs text-on-primary-container">
            <Link to="/privacy-policy" onClick={handleScrollToTop} className="hover:text-on-primary transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-conditions" onClick={handleScrollToTop} className="hover:text-on-primary transition-colors">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
