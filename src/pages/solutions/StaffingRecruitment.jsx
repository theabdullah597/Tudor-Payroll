import React from 'react';
import { Link } from 'react-router-dom';
import interviewerImg from '../../assets/interviewer.jpg';
import coworkingImg from '../../assets/coworking.jpg';
import { 
  UserCheck, 
  Building2, 
  Infinity as InfinityIcon, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  TrendingUp,
  Users
} from 'lucide-react';

export default function StaffingRecruitment() {
  return (
    <div className="flex flex-col selection:bg-secondary selection:text-on-secondary">
      {/* Hero Section */}
      <section className="bg-primary text-on-primary relative overflow-hidden py-section-gap">
        <div className="absolute inset-0 hero-pattern opacity-50 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[500px]">
          <div className="lg:col-span-7 flex flex-col gap-stack-lg">
            <span className="text-xs font-semibold text-accent tracking-wider uppercase">Staffing &amp; Recruitment Solutions</span>
            <h1 className="font-heading text-display-lg-mobile md:text-display-lg font-bold leading-tight text-on-primary">
              Right People. Right Roles. <span className="italic text-accent font-normal">Real Results.</span>
            </h1>
            <p className="text-body-lg text-tertiary-fixed-dim max-w-2xl leading-relaxed">
              At Tudor Payroll Limited, we understand that your people power your business. That’s why we go beyond just filling vacancies—we match the right talent with the right opportunities to drive performance and long-term growth. We deliver flexible staffing and recruitment services that are built around your needs.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link 
                to="/contact" 
                className="px-8 py-3.5 bg-secondary text-on-secondary rounded-full font-heading text-sm font-bold uppercase tracking-wider hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-lg text-center"
              >
                Find Talent
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src={interviewerImg} 
              alt="Professional interviewer speaking with a candidate in a modern, well-lit recruitment office" 
              className="w-full h-full object-cover animate-fadeIn"
            />
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface w-full">
        <div className="max-w-container-max mx-auto flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-stack-sm mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">Our Process</p>
            <h2 className="font-heading text-display-lg-mobile md:text-headline-md font-bold text-primary">
              Our Approach: <span className="italic text-accent font-normal">People First</span>, Results Always
            </h2>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              We believe in more than just filling vacancies. Our recruitment process is built around understanding your business goals, culture, and specific needs—so we can deliver candidates who don’t just fit the job but also fit the team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Approach Card 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-surface-variant shadow-sm hover:shadow-md transition-shadow flex flex-col gap-stack-md group">
              <div className="w-12 h-12 bg-primary-container text-secondary-container rounded flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors shrink-0">
                <UserCheck className="h-6 w-6 text-secondary group-hover:text-white" />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary">Pre-vetted Professionals</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed text-sm">
                Pre-vetted professionals with the right qualifications and experience.
              </p>
            </div>
            
            {/* Approach Card 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-surface-variant shadow-sm hover:shadow-md transition-shadow flex flex-col gap-stack-md group">
              <div className="w-12 h-12 bg-primary-container text-secondary-container rounded flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors shrink-0">
                <Building2 className="h-6 w-6 text-secondary group-hover:text-white" />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary">Sector-specific</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed text-sm">
                Sector-specific staffing for logistics drivers, site workers, guards, and more.
              </p>
            </div>
            
            {/* Approach Card 3 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-surface-variant shadow-sm hover:shadow-md transition-shadow flex flex-col gap-stack-md group">
              <div className="w-12 h-12 bg-primary-container text-secondary-container rounded flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors shrink-0">
                <InfinityIcon className="h-6 w-6 text-secondary group-hover:text-white" />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary">Flexible Contracts</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed text-sm">
                Flexible contracts – temp, temp-to-perm, and permanent placements.
              </p>
            </div>
            
            {/* Approach Card 4 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-surface-variant shadow-sm hover:shadow-md transition-shadow flex flex-col gap-stack-md group">
              <div className="w-12 h-12 bg-primary-container text-secondary-container rounded flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors shrink-0">
                <Zap className="h-6 w-6 text-secondary group-hover:text-white" />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary">Quick Turnaround</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed text-sm">
                Quick turnaround to minimise downtime and keep your projects on track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tudor Payroll Limited? */}
      <section className="py-section-gap bg-surface-container-low border-y border-outline-variant/30 w-full">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-display-lg-mobile md:text-headline-md font-bold text-primary">
              Why <span className="italic text-accent font-normal">Tudor Payroll Limited</span>?
            </h2>
            <p className="text-body-md text-on-surface-variant mt-2">Streamlined administration that saves time and boosts efficiency.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Save Time */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/40 shadow-sm flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded flex items-center justify-center mb-4">
                  <Clock className="h-5 w-5" />
                </div>
                <h4 className="font-heading text-base font-bold text-primary mb-2">Save Time</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Automate manual tasks and free up HR for strategic initiatives.</p>
              </div>
            </div>
            
            {/* Accurate Payroll Data */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/40 shadow-sm flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h4 className="font-heading text-base font-bold text-primary mb-2">Accurate Payroll Data</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Avoid errors with real-time time tracking and seamless integration.</p>
              </div>
            </div>
            
            {/* Better Insights */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/40 shadow-sm flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded flex items-center justify-center mb-4">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h4 className="font-heading text-base font-bold text-primary mb-2">Better Insights</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Identify inefficiencies and improve resource allocation.</p>
              </div>
            </div>
            
            {/* Boost Employee Experience */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/40 shadow-sm flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded flex items-center justify-center mb-4">
                  <Users className="h-5 w-5" />
                </div>
                <h4 className="font-heading text-base font-bold text-primary mb-2">Boost Employee Experience</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Offer transparency, fairness, and flexibility in scheduling.</p>
              </div>
            </div>
          </div>

          {/* Premium recruitment illustration banner */}
          <div className="w-full h-[240px] md:h-[340px] rounded-2xl overflow-hidden shadow-md border border-outline-variant/30 mt-8">
            <img 
              src={coworkingImg} 
              alt="Diverse team of recruitment experts brainstorming in a vibrant coworking office space" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background w-full">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 flex flex-col gap-stack-lg">
            <h2 className="font-heading text-[32px] font-bold text-primary leading-tight">
              Why Partner with <span className="italic text-accent font-normal">Tudor Payroll Limited</span>?
            </h2>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              We leverage broad networks and sector compliance experience to secure candidate matching that fits your long-term roadmap.
            </p>
            <ul className="flex flex-col gap-5 mt-4">
              {[
                { title: 'Wide Pool of Talent', desc: 'Access to a wide pool of vetted professionals with up-to-date credentials and sector-specific experience.' },
                { title: 'Full Verification & Compliance', desc: 'We handle all background checks, Right to Work verification, and industry compliance—so you don’t have to.' },
                { title: 'Personal Touch Support', desc: 'Our expert team offers a personal touch and sector-specific insight, providing ongoing recruitment support.' },
                { title: 'Focused on Culture Match', desc: 'We prioritise skills, attitude, and culture fit—because the right hire is about more than just a CV.' }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-heading text-sm font-bold text-primary mb-1 uppercase tracking-wider">{item.title}</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-6 bg-primary text-on-primary rounded-3xl p-10 relative overflow-hidden shadow-xl grid-bg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Build Stronger Teams, <span className="italic text-accent font-normal">Faster</span>
              </h3>
              <p className="text-body-md text-tertiary-fixed-dim leading-relaxed mb-6">
                With Tudor Payroll Limited, recruitment doesn’t have to be a burden. We make it simple, efficient, and reliable—so you can focus on your business while we find the people to move it forward.
              </p>
              <p className="text-body-lg text-secondary-container font-semibold italic mb-8">
                Let’s talk staffing that makes a real difference.
              </p>
              <Link 
                to="/contact" 
                className="bg-secondary text-on-secondary px-8 py-3.5 rounded-full font-heading text-xs font-bold uppercase tracking-wider hover:bg-secondary-container hover:text-on-secondary-container transition-colors inline-block"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

