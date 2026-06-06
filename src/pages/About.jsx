import React from 'react';
import meetingImg from '../assets/meeting.jpg';
import collaborationImg from '../assets/collaboration.jpg';
import { 
  Building, 
  TrendingUp, 
  Lightbulb, 
  LineChart, 
  ShieldAlert, 
  Settings, 
  HeartHandshake 
} from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col selection:bg-secondary selection:text-on-secondary">
      {/* Hero Section */}
      <section className="bg-primary relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="font-heading text-label-sm text-accent mb-4 tracking-widest uppercase">Company Overview</span>
            <h1 className="font-heading text-display-lg-mobile md:text-[50px] text-on-primary mb-6 font-bold leading-tight">
              About <span className="italic text-accent font-normal">Tudor Payroll Limited</span>
            </h1>
            <p className="text-body-lg text-on-primary-container max-w-2xl leading-relaxed">
              Building trust through precision. We provide intelligent payroll infrastructure designed for modern businesses that demand accuracy, security, and effortless control.
            </p>
          </div>
          <div className="lg:col-span-5 relative w-full h-[280px] md:h-[340px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src={meetingImg} 
              alt="Modern corporate headquarters of Tudor Payroll Limited" 
              className="w-full h-full object-cover animate-fadeIn"
            />
          </div>
        </div>
      </section>

      {/* Our Story & Mission Section */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-heading text-[32px] font-bold text-primary leading-tight">
                Our Story &amp; <span className="italic text-accent font-normal">Mission</span>
              </h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Founded with a vision to eliminate payroll friction, we empower businesses with innovative, secure solutions that drive sustainable growth. We believe payroll isn't just admin—it's a critical relationship of trust between a company and its people. Our mission is to make that relationship flawless, accurate, and completely compliant.
              </p>
            </div>
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md border border-outline-variant/30 h-[220px]">
              <img 
                src={collaborationImg} 
                alt="Tudor Payroll specialists collaborating in a modern office setup" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Large Feature Card */}
            <div className="md:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant/50 p-8 shadow-[0_4px_20px_rgba(10,31,68,0.03)] hover:shadow-[0_8px_30px_rgba(10,31,68,0.06)] transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-surface-container-high rounded-bl-full -mr-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="w-12 h-12 bg-secondary/15 rounded flex items-center justify-center mb-6 relative z-10 text-secondary">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-[20px] font-bold text-on-surface mb-4 relative z-10">Empowering Businesses</h3>
              <p className="text-body-md text-on-surface-variant max-w-md relative z-10 leading-relaxed">
                We transform complex compliance and regulatory requirements into streamlined, automated workflows, allowing HR and finance teams to focus on strategic initiatives rather than administrative burdens.
              </p>
            </div>

            {/* Small Stat Card */}
            <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-8 relative overflow-hidden shadow-md">
              <div className="absolute inset-0 grid-bg opacity-20"></div>
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[180px]">
                <div className="w-10 h-10 border border-on-primary-container rounded flex items-center justify-center mb-6 text-secondary-container">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-display-lg-mobile font-bold text-secondary-container mb-2">99.9%</div>
                  <div className="font-heading text-label-sm text-on-primary-container uppercase tracking-wider">Processing Accuracy</div>
                </div>
              </div>
            </div>

            {/* Medium Card 1 */}
            <div className="md:col-span-6 bg-surface-container-lowest rounded-xl border border-outline-variant/50 p-8 shadow-[0_4px_20px_rgba(10,31,68,0.03)]">
              <div className="w-10 h-10 bg-secondary/10 rounded flex items-center justify-center mb-6 text-secondary">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-[20px] font-bold text-on-surface mb-3">Innovative Solutions</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Leveraging advanced API architectures and secure cloud infrastructure to deliver real-time data visibility and seamless system integrations.
              </p>
            </div>

            {/* Medium Card 2 */}
            <div className="md:col-span-6 bg-surface-container-lowest rounded-xl border border-outline-variant/50 p-8 shadow-[0_4px_20px_rgba(10,31,68,0.03)]">
              <div className="w-10 h-10 bg-secondary/10 rounded flex items-center justify-center mb-6 text-secondary">
                <LineChart className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-[20px] font-bold text-on-surface mb-3">Sustainable Growth</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Building scalable systems designed to adapt and expand alongside your organization, ensuring long-term operational resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-section-gap bg-surface-container-low border-y border-outline-variant/50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-heading text-label-sm text-secondary mb-2 block tracking-widest uppercase">Our Principles</span>
            <h2 className="font-heading text-display-lg-mobile md:text-headline-md font-bold text-primary leading-tight">
              The Foundation of <span className="italic text-accent font-normal">Our Operations</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="border-t border-outline-variant pt-6">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="h-6 w-6 text-secondary" />
                <h4 className="font-heading text-[18px] font-bold text-on-surface">Uncompromising Security</h4>
              </div>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Bank-level encryption and rigorous compliance protocols safeguard sensitive employee data at every transaction touchpoint.
              </p>
            </div>
            {/* Value 2 */}
            <div className="border-t border-outline-variant pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="h-6 w-6 text-secondary" />
                <h4 className="font-heading text-[18px] font-bold text-on-surface">Precision &amp; Accuracy</h4>
              </div>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Automated validation layers and continuous auditing mechanisms eliminate human error in complex calculations and compliance reporting.
              </p>
            </div>
            {/* Value 3 */}
            <div className="border-t border-outline-variant pt-6">
              <div className="flex items-center gap-3 mb-4">
                <HeartHandshake className="h-6 w-6 text-secondary" />
                <h4 className="font-heading text-[18px] font-bold text-on-surface">Expert Partnership</h4>
              </div>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Dedicated UK-based payroll and HR support teams providing strategic guidance and rapid resolution for total business continuity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
