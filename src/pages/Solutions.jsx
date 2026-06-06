import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  CreditCard, 
  Users, 
  UserPlus, 
  GraduationCap, 
  ArrowRight 
} from 'lucide-react';

export default function Solutions() {
  const list = [
    {
      title: 'Workforce Management',
      desc: 'Optimize scheduling, track time and attendance accurately, and manage labor costs with intelligent forecasting tools.',
      path: '/solutions/workforce-management',
      icon: Clock
    },
    {
      title: 'Payroll & Reward',
      desc: 'Flawless payroll execution, HMRC compliance, and comprehensive benefits administration to motivate your team.',
      path: '/solutions/payroll-reward',
      icon: CreditCard
    },
    {
      title: 'Core HR',
      desc: 'Centralize employee data, automate HR workflows, and ensure compliance with a secure, unified database.',
      path: '/solutions/core-hr',
      icon: Users
    },
    {
      title: 'Staffing & Recruitment',
      desc: 'Attract, assess, and hire top talent efficiently with custom recruitment pipelines and ATS software integrations.',
      path: '/solutions/staffing-recruitment',
      icon: UserPlus
    },
    {
      title: 'Talent & Careers',
      desc: 'Unlock hidden potential, map skills, and establish career development frameworks to improve employee retention.',
      path: '/solutions/talent-careers',
      icon: GraduationCap
    }
  ];

  return (
    <div className="flex flex-col gap-section-gap pb-section-gap selection:bg-secondary selection:text-on-secondary">
      {/* Hero */}
      <section className="bg-primary text-on-primary relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
          <span className="text-xs font-semibold text-secondary-container uppercase tracking-widest mb-4 block">Our Offerings</span>
          <h1 className="font-heading text-display-lg-mobile md:text-display-lg font-bold leading-tight max-w-4xl mx-auto mb-6">
            Intelligent Infrastructure for <span className="italic text-accent font-normal">Your Workforce</span>
          </h1>
          <p className="text-body-lg text-on-primary-container max-w-2xl mx-auto">
            From hiring to payroll processing and career development, explore Tudor's integrated, compliance-first modules designed to help your enterprise grow.
          </p>
        </div>
      </section>

      {/* Grid List */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {list.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title} 
                className="bg-surface rounded-xl border border-outline-variant p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow hover:border-secondary/30"
              >
                <div className="w-12 h-12 bg-primary-container text-on-primary rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-headline-md font-bold text-primary-container mb-3">{item.title}</h3>
                <p className="text-body-md text-on-surface-variant flex-grow mb-6 leading-relaxed">
                  {item.desc}
                </p>
                <Link 
                  to={item.path} 
                  className="font-semibold text-xs uppercase tracking-wider text-secondary hover:text-primary-container flex items-center gap-1.5 mt-auto w-fit transition-colors"
                >
                  Explore Solution <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <div className="bg-primary-container rounded-3xl p-12 text-center relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading text-headline-md font-bold mb-4 text-white">
              Need a <span className="italic text-accent font-normal">Custom Integrated Package</span>?
            </h2>
            <p className="text-body-lg text-tertiary-fixed-dim mb-8">
              We specialize in designing custom payroll and workforce solutions for organizations with complex shift patterns or payroll rules.
            </p>
            <Link 
              to="/contact" 
              className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-heading text-body-md font-semibold hover:bg-secondary-container hover:text-on-secondary-container transition-colors inline-block"
            >
              Contact Our Solutions Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
