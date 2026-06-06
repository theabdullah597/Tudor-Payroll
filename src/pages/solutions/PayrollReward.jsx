import React from 'react';
import { Link } from 'react-router-dom';
import accountingImg from '../../assets/accounting.jpg';
import financeImg from '../../assets/finance.jpg';
import { 
  RefreshCw, 
  Lock, 
  BarChart3, 
  Gift, 
  Scale, 
  Sliders, 
  TrendingUp, 
  CheckCircle2,
  ShieldCheck,
  Zap,
  HelpCircle
} from 'lucide-react';

export default function PayrollReward() {
  return (
    <div className="flex flex-col selection:bg-secondary selection:text-on-secondary">
      {/* Hero Section */}
      <header className="bg-primary text-on-primary relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-7 space-y-stack-lg max-w-2xl">
              <p className="text-xs font-semibold text-accent mb-stack-md uppercase tracking-widest">Payroll &amp; Reward</p>
              <h1 className="font-heading text-display-lg-mobile md:text-display-lg text-on-primary leading-tight font-bold text-white">
                Precision Pay. <br/><span className="italic text-accent font-normal">Powerful Recognition.</span>
              </h1>
              <p className="text-body-lg text-tertiary-fixed-dim max-w-xl leading-relaxed">
                At Tudor Payroll Limited, we know that paying your people accurately and on time isn’t just a task—it’s the foundation of trust. Our payroll and reward services ensure your workforce is supported with efficient, compliant, and competitive pay solutions that suit your business.
              </p>
              <p className="text-body-md text-tertiary-fixed-dim/80 max-w-xl leading-relaxed">
                Whether you need full payroll outsourcing or prefer a flexible software solution, we provide end-to-end support tailored to your unique operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/contact" 
                  className="bg-secondary text-on-secondary px-8 py-3.5 rounded-full font-heading text-sm font-bold uppercase tracking-wider hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-lg shadow-secondary/20 text-center"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
            {/* Split layout: tablet showing finance dashboard */}
            <div className="hidden lg:block lg:col-span-5 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/15 blur-3xl rounded-full"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
                <img 
                  src={accountingImg} 
                  alt="Financial analytics showing payroll accuracy rates on a tablet" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* The Results Bar */}
      <section className="border-b border-outline-variant bg-surface-container-lowest w-full">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">The Results</p>
          <blockquote className="font-heading text-lg md:text-xl font-bold text-primary-container leading-relaxed">
            “Empowering over <span className="italic text-accent font-normal">95k+ customers</span> with HR and payroll services”
          </blockquote>
        </div>
      </section>

      {/* Get Payroll Right Section */}
      <section className="py-section-gap bg-background w-full">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-[32px] font-bold text-primary mb-4">
              Get Payroll <span className="italic text-accent font-normal">Right, Every Time</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              We combine cutting-edge technology with expert support to deliver payroll services that are fast, reliable, and built for your sector. From basic salary processing to complex reward structures, we help you stay compliant, accurate, and ahead of schedule.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-12">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-surface-variant shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary">
                <RefreshCw className="h-6 w-6" />
              </div>
              <h3 className="text-body-lg font-bold text-primary mb-3">Automated Accuracy</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">Eliminate manual errors with intelligent data validation and automated tax calculations updated in real-time.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-surface-variant shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-body-lg font-bold text-primary mb-3">Bank-Level Security</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">Your sensitive payroll data is protected by enterprise-grade encryption and strict access controls.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-surface-variant shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-body-lg font-bold text-primary mb-3">Clear Reporting</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">Generate comprehensive, easy-to-understand reports that provide total visibility into your labour costs.</p>
            </div>
          </div>

          {/* Added visual representation of accuracy calculation desk */}
          <div className="w-full h-[320px] rounded-2xl overflow-hidden border border-outline-variant/30 shadow-md">
            <img 
              src={financeImg} 
              alt="Close-up of business calculator, ledger sheets, and financial plans" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section (Bento Grid) */}
      <section className="py-section-gap bg-surface-container-low w-full border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="font-heading text-display-lg-mobile md:text-3xl font-bold text-primary mb-12 text-center">
            Why Choose Tudor Payroll for <span className="italic text-accent font-normal">Payroll &amp; Reward?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            {/* Large Card: Reward & Recognition */}
            <div className="md:col-span-2 md:row-span-2 bg-primary text-on-primary rounded-2xl p-8 relative overflow-hidden flex flex-col justify-end min-h-[400px] shadow-sm">
              <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center mb-6 text-white">
                  <Gift className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-headline-md font-bold mb-4">Reward &amp; Recognition</h3>
                <p className="text-body-md text-on-primary/80 leading-relaxed">
                  Enhance employee satisfaction with reward schemes, bonuses, and tailored benefits programmes. Go beyond basic pay. Integrate flexible benefits, bonuses, and recognition programmes directly into the payroll flow to boost employee retention and satisfaction.
                </p>
              </div>
            </div>
            
            {/* HMRC Compliance */}
            <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex-shrink-0 flex items-center justify-center text-secondary">
                <Scale className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-body-lg font-bold text-primary mb-2">HMRC &amp; Legal Compliance</h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  Stay up to date with changing legislation and payroll rules, without the stress. We handle RTI submissions, pension auto-enrolment, and legislative updates automatically, ensuring you remain fully compliant.
                </p>
              </div>
            </div>
            
            {/* Flexible Delivery */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant shadow-sm">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 text-secondary">
                <Sliders className="h-5 w-5" />
              </div>
              <h3 className="text-body-lg font-bold text-primary mb-2">Flexible Payroll Delivery</h3>
              <p className="text-body-md text-on-surface-variant text-sm leading-relaxed">
                Choose the model that works for you—from in-house SaaS platforms to fully managed payroll services. Adaptable workflows for weekly, bi-weekly, or monthly pay runs.
              </p>
            </div>
            
            {/* Reliable Payments */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant shadow-sm">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 text-secondary">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-body-lg font-bold text-primary mb-2">Reliable, On-Time Payments</h3>
              <p className="text-body-md text-on-surface-variant text-sm leading-relaxed">
                We make sure your staff are paid correctly, on time, every time—boosting trust, satisfaction, and retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scalable Payroll Section */}
      <section className="py-section-gap bg-background w-full">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 border border-outline-variant/60 shadow-sm grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                Scalable Payroll for <span className="italic text-accent font-normal">Growing Businesses</span>
              </h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed mb-6">
                Whether you’re a small business or managing large-scale operations, our payroll and reward solutions scale with your needs. Let us handle the complexity—so you can focus on your people and performance.
              </p>
              <p className="text-body-md text-on-surface font-semibold">
                Empower your team with a payroll partner that understands what matters most.
              </p>
            </div>
            <div className="bg-primary-container rounded-2xl p-8 text-center relative overflow-hidden text-on-primary">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl pointer-events-none"></div>
              <h4 className="font-heading text-lg font-bold text-white mb-3">Tailored Solutions for Complex Needs</h4>
              <p className="text-sm text-tertiary-fixed-dim mb-6">
                Speak to our team today and discover how we can support your payroll needs—accurately, compliantly, and with care.
              </p>
              <Link 
                to="/contact" 
                className="bg-secondary text-on-secondary px-8 py-3.5 rounded-full font-heading text-xs font-bold uppercase tracking-wider hover:bg-secondary-container hover:text-on-secondary-container transition-colors inline-block"
              >
                Speak to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
