import React from 'react';
import { Link } from 'react-router-dom';
import collaborationImg from '../../assets/collaboration.jpg';
import avatarImg from '../../assets/avatar.jpg';
import meetingImg from '../../assets/meeting.jpg';
import { 
  Users, 
  CheckCircle2, 
  Clock, 
  Database, 
  Workflow, 
  Lock, 
  BarChart3, 
  Check, 
  HelpCircle 
} from 'lucide-react';

export default function CoreHR() {
  return (
    <div className="flex flex-col selection:bg-secondary selection:text-on-secondary">
      {/* Hero Section */}
      <section className="bg-primary-container text-white pt-24 pb-32 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-50 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto relative z-10 grid md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7 max-w-2xl">
            <p className="text-xs font-semibold text-accent mb-stack-md uppercase tracking-widest">Core HR Solutions</p>
            <h1 className="font-heading text-display-lg-mobile md:text-display-lg text-white mb-stack-lg leading-tight font-bold">
              A Smarter Way to<br/><span className="italic text-accent font-normal">Manage Your People.</span>
            </h1>
            <p className="text-body-lg text-tertiary-fixed-dim mb-stack-lg max-w-lg leading-relaxed">
              At Tudor Payroll Limited, we deliver reliable and adaptable Core HR solutions that help you manage your workforce with greater clarity and confidence. Our platform streamlines how you handle employee data, records, and processes—bringing everything together in one secure, centralised hub.
            </p>
            <p className="text-body-md text-tertiary-fixed-dim/80 mb-stack-lg max-w-lg leading-relaxed">
              Say goodbye to spreadsheets and duplicated entries. Say hello to smarter HR that powers performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contact" 
                className="bg-secondary text-white font-heading text-[16px] px-8 py-3 rounded-full font-bold hover:bg-secondary-container hover:text-on-secondary-container text-center transition-colors animate-fadeIn"
              >
                Explore Platform
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block md:col-span-5 relative">
            {/* Split layout: team collaboration photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-square">
              <img 
                src={collaborationImg} 
                alt="Modern corporate HR team coordinating employee schedules" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Results Bar */}
      <section className="border-b border-outline-variant bg-surface-container-lowest w-full">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">The Results</p>
          <blockquote className="font-heading text-lg md:text-xl font-bold text-primary-container leading-relaxed">
            “Empowering over <span className="italic text-accent font-normal">95k+ customers</span> with HR and payroll services”
          </blockquote>
        </div>
      </section>

      {/* Feature Section 1 */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-display-lg-mobile md:text-[40px] font-bold text-primary mb-stack-md leading-tight">
              All Your People Data <span className="italic text-accent font-normal">in One Place</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-stack-lg leading-relaxed">
              Our Core HR system gives you full visibility over your workforce—making it easier to track employment details, manage documents, monitor compliance, and keep your records up to date. Whether you’re overseeing a growing workforce or simply looking to reduce admin workload, our tools help you stay in control.
            </p>
          </div>
          
          <div className="bg-surface-container-lowest border border-surface-container rounded-xl p-8 shadow-md relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary/5 rounded-full blur-xl"></div>
            <div className="flex items-center gap-4 border-b border-surface-container pb-4 mb-6">
              <img 
                alt="Employee Avatar" 
                className="w-16 h-16 rounded-full border-2 border-surface object-cover" 
                src={avatarImg} 
              />
              <div>
                <h3 className="font-heading text-[20px] font-bold text-primary">Eleanor Vance</h3>
                <p className="text-sm text-on-surface-variant">Senior Marketing Analyst</p>
              </div>
              <span className="ml-auto bg-green-100 text-green-800 text-[12px] font-bold px-3 py-1 rounded-full">Active</span>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1">Department</span>
                <span className="text-sm font-semibold text-primary">Marketing &amp; Comms</span>
              </div>
              <div>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1">Start Date</span>
                <span className="text-sm font-semibold text-primary">14 Oct 2021</span>
              </div>
              <div>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1">Line Manager</span>
                <span className="text-sm font-semibold text-primary">Thomas H.</span>
              </div>
              <div>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1">Location</span>
                <span className="text-sm font-semibold text-primary">London, UK</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-surface-container flex gap-2">
              <div className="flex-grow bg-surface rounded p-3 text-center">
                <span className="block text-[10px] text-on-surface-variant uppercase mb-1 font-semibold">Allowance</span>
                <span className="font-bold text-primary">25 Days</span>
              </div>
              <div className="flex-grow bg-surface rounded p-3 text-center">
                <span className="block text-[10px] text-on-surface-variant uppercase mb-1 font-semibold">Used</span>
                <span className="font-bold text-primary">12 Days</span>
              </div>
              <div className="flex-grow bg-secondary/10 rounded p-3 text-center">
                <span className="block text-[10px] text-secondary uppercase mb-1 font-semibold">Remaining</span>
                <span className="font-bold text-secondary">13 Days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="bg-surface py-section-gap px-margin-mobile md:px-margin-desktop border-t border-surface-container-high w-full">
        <div className="max-w-container-max mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-display-lg-mobile md:text-display-lg font-bold text-primary mb-4">
              What We <span className="italic text-accent font-normal">Offer</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant">A robust suite of tools designed to simplify complex HR processes and empower your workforce.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Centralised Data */}
            <div className="bg-surface-container-lowest border border-surface-container p-8 rounded-xl shadow-sm hover:border-secondary/30 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-6">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-[24px] font-bold text-primary mb-3">Centralised Data Management</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                Store and manage all employee information in one secure location—no need for multiple systems or manual duplication.
              </p>
            </div>
            
            {/* Streamlined Processes */}
            <div className="bg-surface-container-lowest border border-surface-container p-8 rounded-xl shadow-sm hover:border-secondary/30 transition-colors">
              <div className="w-12 h-12 bg-primary-container/10 text-primary-container rounded-lg flex items-center justify-center mb-6">
                <Workflow className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-[24px] font-bold text-primary mb-3">Streamlined HR Processes</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                Automate core HR tasks like onboarding, offboarding, record keeping, and reporting—saving time and reducing errors.
              </p>
            </div>

            {/* Compliance */}
            <div className="bg-surface-container-lowest border border-surface-container p-8 rounded-xl shadow-sm hover:border-secondary/30 transition-colors">
              <div className="w-12 h-12 bg-primary-container/10 text-primary-container rounded-lg flex items-center justify-center mb-6">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-[24px] font-bold text-primary mb-3">Built-In Compliance</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                Stay compliant with evolving employment legislation and data privacy rules, including GDPR.
              </p>
            </div>

            {/* Insights */}
            <div className="bg-surface-container-lowest border border-surface-container p-8 rounded-xl shadow-sm hover:border-secondary/30 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-[24px] font-bold text-primary mb-3">Workforce Insights</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                Turn your HR data into actionable insight to improve planning, productivity, and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transform HR section */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-b border-outline-variant/30 w-full text-center">
        <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center">
          <div className="space-y-4">
            <h2 className="font-heading text-display-lg-mobile md:text-3xl font-bold text-primary leading-tight">
              Transform HR Into a <span className="italic text-accent font-normal">Strategic Asset</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              With Tudor Payroll’s Core HR solutions, your admin becomes your advantage. From small teams to large-scale operations, we help businesses shift from reactive HR tasks to proactive people management.
            </p>
            <p className="font-heading text-lg font-bold text-secondary">
              Manage better. Plan smarter. Grow stronger.
            </p>
          </div>
          
          {/* Added visual representation of boardroom meeting */}
          <div className="w-full max-w-3xl h-[280px] rounded-2xl overflow-hidden shadow-md border border-outline-variant/30">
            <img 
              src={meetingImg} 
              alt="HR team conducting a strategic workforce review meeting" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-primary text-white text-center w-full">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-display-lg-mobile md:text-display-lg mb-6 font-bold text-white leading-tight">
            Nurture Talent. <span className="italic text-accent font-normal">Inspire Growth.</span>
          </h2>
          <p className="text-body-lg text-tertiary-fixed-dim mb-10 max-w-xl mx-auto font-sans">
            At Tudor Payroll Limited, we believe in unlocking potential at every level. By creating space for learning, feedback, and progression, you don’t just retain employees—you build future leaders who are motivated to make a difference.
          </p>
          <div className="flex justify-center">
            <Link 
              to="/contact" 
              className="bg-secondary text-white font-heading text-[16px] px-8 py-3 rounded-full font-bold hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
