import React from 'react';
import { Link } from 'react-router-dom';
import dashboardImg from '../assets/dashboard.jpg';
import boardroomImg from '../assets/boardroom.jpg';
import workshopImg from '../assets/workshop.jpg';
import { 
  Clock, 
  CreditCard, 
  GraduationCap, 
  Users, 
  UserPlus, 
  MapPin, 
  Building2, 
  Cpu, 
  BarChart3, 
  ArrowRight,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Briefcase
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-section-gap pb-section-gap selection:bg-secondary selection:text-on-secondary">
      {/* Centered Hero Section */}
      <section className="relative bg-primary text-on-primary pt-32 pb-40 overflow-hidden">
        {/* Decorative Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-secondary-container mb-6 animate-fadeIn">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">Premium HR &amp; Payroll Infrastructure</span>
          </div>
          
          <h1 className="font-heading text-display-lg-mobile md:text-[56px] font-bold leading-tight max-w-4xl mb-6 tracking-tight text-white">
            Tailored HR, Payroll &amp; <span className="italic text-accent font-normal">Workforce Solutions</span>
          </h1>
          
          <p className="text-body-lg text-tertiary-fixed-dim max-w-2xl mb-10 leading-relaxed">
            Empowering your organisation with compliant, robust, and employee-centric technology. We handle the administrative complexity so you can focus on driving growth.
          </p>
          
          <div className="flex justify-center w-full mb-16">
            <Link 
              to="/contact" 
              className="px-10 py-4 bg-secondary text-on-secondary font-heading text-sm font-bold uppercase tracking-wider rounded-full shadow-lg shadow-secondary/20 hover:bg-secondary-container hover:text-on-secondary-container hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Premium Hero Mockup Image */}
          <div className="w-full max-w-4xl rounded-2xl border border-white/15 overflow-hidden shadow-2xl bg-primary-container relative animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="bg-primary/80 px-4 py-3 flex items-center gap-2 border-b border-white/10">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
              </div>
              <span className="text-xs text-tertiary-fixed-dim font-medium uppercase tracking-wider mx-auto">Tudor Payroll Suite - Live Analytics</span>
            </div>
            <img 
              src={dashboardImg} 
              alt="Tudor payroll dashboard showing interactive visual graphs and employee data widgets" 
              className="w-full h-auto object-cover max-h-[380px] brightness-95"
            />
          </div>
        </div>
      </section>

      {/* The Results Section */}
      <section className="w-full relative -mt-16 z-20">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-white/90 backdrop-blur-md border border-outline-variant rounded-2xl py-8 px-10 shadow-xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">The Results</p>
            <blockquote className="font-heading text-xl md:text-2xl font-bold text-primary-container leading-relaxed">
              “Empowering over <span className="italic text-accent font-normal">95k+ customers</span> with HR and payroll services”
            </blockquote>
          </div>
        </div>
      </section>

      {/* How We Can Help You Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full py-6">
        <div className="bg-surface-container-lowest rounded-2xl p-8 md:p-14 border border-outline-variant/40 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center shadow-sm">
          <div className="lg:w-1/2 space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-1">
              Partnership
            </div>
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-primary leading-tight">
              How We Can <span className="italic text-accent font-normal">Help You</span>
            </h2>
            <div className="w-16 h-1 bg-secondary rounded mb-6"></div>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              At Tudor Payroll Limited, we provide end-to-end support across payroll, HR, and workforce management to help your business thrive. Whether you’re scaling up, navigating compliance, or simply looking to streamline internal processes, our expert team is here to deliver tailored solutions that make a real difference. We take the time to understand your challenges and work closely with you to build a people-focused, future-ready organisation.
            </p>
          </div>
          <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-outline-variant/30 h-[320px] md:h-[400px]">
            <img 
              src={boardroomImg} 
              alt="Tudor Payroll specialists collaborating in a modern Manchester boardroom discussing client strategies" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-headline-md font-bold text-primary mb-3">Our Tailored Services</h2>
          <p className="text-body-md text-on-surface-variant">Explore our comprehensive range of services designed to simplify management and elevate compliance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Card 1: Workforce Management */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/60 p-8 flex flex-col shadow-sm hover:shadow-md hover:border-secondary/30 transition-all duration-300">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-primary mb-3">Workforce Management</h3>
            <p className="text-body-md text-on-surface-variant flex-grow mb-6">
              Take control of your workforce with our smart, streamlined management services. From scheduling and shift planning to tracking attendance and performance, Tudor Payroll Limited ensures your operations run efficiently and compliantly.
            </p>
            <Link 
              to="/solutions/workforce-management" 
              className="font-heading text-xs font-bold uppercase tracking-wider text-secondary hover:text-primary flex items-center gap-1.5 mt-auto transition-colors"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Card 2: Payroll & Reward */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/60 p-8 flex flex-col shadow-sm hover:shadow-md hover:border-secondary/30 transition-all duration-300">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6">
              <CreditCard className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-primary mb-3">Payroll &amp; Reward</h3>
            <p className="text-body-md text-on-surface-variant flex-grow mb-6">
              Our accurate, fully compliant payroll services take the pressure off your team and keep your staff happy. We also help you design reward strategies that motivate performance while staying aligned with your business goals.
            </p>
            <Link 
              to="/solutions/payroll-reward" 
              className="font-heading text-xs font-bold uppercase tracking-wider text-secondary hover:text-primary flex items-center gap-1.5 mt-auto transition-colors"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Card 3: Talent & Careers */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/60 p-8 flex flex-col shadow-sm hover:shadow-md hover:border-secondary/30 transition-all duration-300">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-primary mb-3">Talent &amp; Careers</h3>
            <p className="text-body-md text-on-surface-variant flex-grow mb-6">
              Empowering your workforce through smart solutions and industry insight. Our platform combines cutting-edge technology with proven HR expertise to help you nurture talent, improve performance tracking, encourage continuous feedback, and drive skills development. We support your mission to attract, retain, and grow the people who power your success.
            </p>
            <Link 
              to="/solutions/talent-careers" 
              className="font-heading text-xs font-bold uppercase tracking-wider text-secondary hover:text-primary flex items-center gap-1.5 mt-auto transition-colors"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Card 4: Core HR */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/60 p-8 flex flex-col shadow-sm hover:shadow-md hover:border-secondary/30 transition-all duration-300">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-primary mb-3">Core HR</h3>
            <p className="text-body-md text-on-surface-variant flex-grow mb-6">
              From employee onboarding to day-to-day HR administration, Tudor Payroll Limited offers reliable Core HR support tailored to your business. Our solutions simplify compliance, communication and records management so you can focus on your people.
            </p>
            <Link 
              to="/solutions/core-hr" 
              className="font-heading text-xs font-bold uppercase tracking-wider text-secondary hover:text-primary flex items-center gap-1.5 mt-auto transition-colors"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Card 5: Staffing & Recruitment (Span 2 cols on lg for visual interest) */}
          <div className="bg-primary text-on-primary rounded-xl border border-primary-container p-8 flex flex-col shadow-sm hover:shadow-md lg:col-span-2 relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-secondary-container mb-6">
                <UserPlus className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-white">Staffing &amp; Recruitment</h3>
              <p className="text-body-md text-tertiary-fixed-dim flex-grow mb-6 max-w-xl">
                Need the right people, right now? Our staffing and recruitment experts connect you with qualified candidates across a range of sectors. Whether it’s temporary cover or long-term placements, we deliver talent that fits your culture and goals.
              </p>
              <Link 
                to="/solutions/staffing-recruitment" 
                className="font-heading text-xs font-bold uppercase tracking-wider text-secondary-container hover:text-white flex items-center gap-1.5 mt-auto transition-colors"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Tudor Payroll Limited? */}
      <section className="bg-surface py-section-gap w-full border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">Our Advantages</p>
            <h2 className="font-heading text-display-lg-mobile md:text-display-lg font-bold text-primary">
              Why Choose <span className="italic text-accent font-normal">Tudor Payroll Limited</span>?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Point 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/20 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-5 text-secondary">
                <MapPin className="h-6 w-6" />
              </div>
              <h4 className="font-heading text-body-lg font-bold text-primary mb-2">Local Expertise &amp; National Coverage</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Comprehensive support across the UK, with in-depth knowledge of regional HR regulations.</p>
            </div>
            
            {/* Point 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/20 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-5 text-secondary">
                <Building2 className="h-6 w-6" />
              </div>
              <h4 className="font-heading text-body-lg font-bold text-primary mb-2">HR &amp; Payroll Solutions for Every Business</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Tailored solutions for all business types, from SMEs to large corporations.</p>
            </div>
            
            {/* Point 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/20 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-5 text-secondary">
                <Cpu className="h-6 w-6" />
              </div>
              <h4 className="font-heading text-body-lg font-bold text-primary mb-2">Employee-Centric Technology</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Reliable, user-friendly technology designed to streamline HR and payroll processes.</p>
            </div>
            
            {/* Point 4 */}
            <div className="flex flex-col items-center text-center p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/20 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-5 text-secondary">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h4 className="font-heading text-body-lg font-bold text-primary mb-2">Industry-Leading HR Insights</h4>
              <p className="text-body-md text-on-surface-variant text-sm">Access to up-to-date data and insights, keeping your HR strategies ahead of the curve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our company mission is to exceed expectations */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full py-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">Our Foundation</p>
          <h2 className="font-heading text-display-lg-mobile md:text-4xl font-bold text-primary">
            Our Company Mission is to <span className="italic text-accent font-normal">Exceed Expectations</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-2 row-span-2 bg-primary text-on-primary p-8 md:p-10 rounded-2xl flex flex-col justify-end min-h-[260px] relative overflow-hidden group">
            <div className="absolute inset-0 hero-pattern opacity-30 pointer-events-none"></div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-secondary/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-secondary-container">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">Empower Businesses</h3>
              <p className="text-body-md text-tertiary-fixed-dim max-w-md">
                Equipping organisations with digital infrastructure, compliance mechanisms, and custom services that motivate teams and fuel long-term expansion.
              </p>
            </div>
          </div>

          {[
            { title: 'Ensure Compliance', desc: 'Full alignment with HMRC guidelines & UK laws.' },
            { title: 'Deliver Innovation', desc: 'Using cloud platforms and secure modern tech.' },
            { title: 'Promote Data-Driven Decisions', desc: 'Clear reporting and workforce analytics.' },
            { title: 'Provide Local Expertise', desc: 'Expert regional knowledge and advisory.' },
            { title: 'Foster Long-Term Partnerships', desc: 'Built on accuracy, trust, and care.' },
            { title: 'Support Sustainable Growth', desc: 'Scalable payroll that expands as you do.' }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 flex flex-col justify-between hover:bg-surface-container-low transition-colors duration-300 min-h-[140px]"
            >
              <h4 className="font-heading text-base font-bold text-primary mb-2">{item.title}</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Brand Mission Banner Image */}
        <div className="w-full h-[240px] md:h-[340px] rounded-2xl overflow-hidden shadow-md border border-outline-variant/30 mt-8">
          <img 
            src={workshopImg} 
            alt="Tudor Payroll consulting team holding an interactive workforce strategy workshop" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
