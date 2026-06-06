import React from 'react';
import { Link } from 'react-router-dom';
import workstationImg from '../../assets/workstation.jpg';
import analyticsImg from '../../assets/analytics.jpg';
import planningImg from '../../assets/planning.jpg';
import { 
  Clock, 
  ArrowRight, 
  Database, 
  BarChart3, 
  CheckCircle2, 
  Users,
  Layers,
  LineChart,
  Calendar,
  ShieldCheck,
  Zap,
  TrendingUp
} from 'lucide-react';

export default function WorkforceManagement() {
  return (
    <div className="flex flex-col selection:bg-secondary selection:text-on-secondary">
      {/* Hero Section */}
      <section className="bg-primary text-on-primary relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 hero-pattern opacity-50 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 flex flex-col gap-stack-lg animate-fadeIn">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest">Workforce Solutions</p>
            <h1 className="font-heading text-display-lg-mobile md:text-display-lg text-on-primary leading-tight font-bold text-white">
              When Every <span className="italic text-accent font-normal">Second Counts.</span>
            </h1>
            <p className="text-body-lg text-tertiary-fixed-dim max-w-2xl leading-relaxed">
              At Tudor Payroll Limited, our workforce management solutions go beyond simple time tracking. With intuitive tools for time reporting, scheduling, and task management, we help you assign the right person to the right job—at the right time. Whether you're managing a construction site, a logistics fleet, or a security team, our platform supports efficiency, compliance, and employee wellbeing.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/contact" 
                className="bg-secondary text-on-secondary px-8 py-3.5 rounded-full font-heading text-sm hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-lg shadow-secondary/20 flex items-center gap-2 text-center"
              >
                Explore Solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative hidden lg:block">
            {/* Split layout showing scheduling workstation image layered with dashboard widgets */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-white/15 shadow-2xl">
              <img 
                src={workstationImg} 
                alt="Operations scheduling workstation" 
                className="w-full h-full object-cover brightness-50"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 bg-gradient-to-t from-primary/80 via-transparent to-primary/45">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-accent animate-spin" style={{ animationDuration: '10s' }} />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Real-Time Tracking</span>
                  </div>
                  <span className="text-xs font-bold text-green-400 bg-green-500/20 border border-green-500/30 px-2 py-0.5 rounded">Active</span>
                </div>
                
                <div className="space-y-4 my-auto">
                  <div>
                    <div className="flex justify-between text-xs text-white mb-1">
                      <span>Shift Coverage</span>
                      <span>94%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                      <div className="bg-accent h-full w-[94%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-white mb-1">
                      <span>Labour Cost Variance</span>
                      <span>-1.2%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                      <div className="bg-secondary-container h-full w-[40%] rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div className="bg-white/10 backdrop-blur-md rounded p-4 border border-white/10">
                    <div className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1">Efficiency</div>
                    <div className="font-heading text-xl font-bold text-white">99.1%</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded p-4 border border-white/10">
                    <div className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1">Coverage</div>
                    <div className="font-heading text-xl font-bold text-accent">Optimal</div>
                  </div>
                </div>
              </div>
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

      {/* What is Workforce Management? */}
      <section className="py-section-gap bg-background w-full">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-3">
                Overview
              </div>
              <h2 className="font-heading text-display-lg-mobile md:text-3xl font-bold text-primary mb-6">
                What is <span className="italic text-accent font-normal">Workforce Management?</span>
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                Workforce management is about optimising your most valuable resource—your people. It ensures your teams are productive, compliant, and cost-effective. From basic clock-ins to robust scheduling and absence management systems, our scalable solutions are built to match your organisation’s unique needs. Let’s connect to explore how we can enhance your operations with a workforce strategy that delivers lasting results.
              </p>
              
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-start gap-4 p-4 rounded-xl border border-outline-variant bg-surface">
                  <div className="w-10 h-10 rounded bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                    <Database className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-primary mb-1">Seamless Integration Across Systems</h4>
                    <p className="text-body-md text-sm text-on-surface-variant leading-relaxed">
                      Streamline your operations by connecting workforce tools with your HR and payroll systems. Our integrated solution reduces admin time, eliminates payroll errors, and ensures you’re always in line with the latest UK compliance standards. With a smooth and modern interface, employee adoption is seamless, and communication across departments is improved.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl border border-outline-variant bg-surface">
                  <div className="w-10 h-10 rounded bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-primary mb-1">Stay Ahead with Smarter Planning</h4>
                    <p className="text-body-md text-sm text-on-surface-variant leading-relaxed">
                      Today’s work environment demands real-time solutions. Our workforce management platform gives you full visibility into schedules, workloads, and business performance. Whether you’re managing full-time employees or shift-based workers, we give you the tools to react quickly, reduce costs, and boost efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Illustration */}
            <div className="bg-surface-container rounded-xl p-8 border border-outline-variant shadow-sm h-full min-h-[400px] flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-container opacity-50"></div>
              <img 
                alt="Dashboard showing workforce analytics" 
                className="relative z-10 w-full max-w-md rounded-lg shadow-lg border border-outline-variant transition-transform duration-500 group-hover:scale-105" 
                src={analyticsImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Smarter Scheduling and Resource Planning */}
      <section className="py-section-gap bg-surface border-y border-outline-variant/30 w-full">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">Efficiency</p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-bold text-primary mb-4">
              Smarter Scheduling &amp; <span className="italic text-accent font-normal">Resource Planning</span>
            </h2>
            <p className="text-body-md text-on-surface-variant">In the era of digital transformation, workforce planning is key to success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-12">
            {/* Save Time */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/40 shadow-sm flex flex-col justify-between min-h-[180px]">
              <div>
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded flex items-center justify-center mb-4">
                  <Clock className="h-5 w-5" />
                </div>
                <h4 className="font-heading text-base font-bold text-primary mb-2">Save Time</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Automate manual tasks and free up HR for strategic initiatives.</p>
              </div>
            </div>
            
            {/* Accurate Payroll Data */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/40 shadow-sm flex flex-col justify-between min-h-[180px]">
              <div>
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h4 className="font-heading text-base font-bold text-primary mb-2">Accurate Payroll Data</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Avoid errors with real-time time tracking and seamless integration.</p>
              </div>
            </div>
            
            {/* Better Insights */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/40 shadow-sm flex flex-col justify-between min-h-[180px]">
              <div>
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded flex items-center justify-center mb-4">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h4 className="font-heading text-base font-bold text-primary mb-2">Better Insights</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Identify inefficiencies and improve resource allocation.</p>
              </div>
            </div>
            
            {/* Boost Employee Experience */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/40 shadow-sm flex flex-col justify-between min-h-[180px]">
              <div>
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded flex items-center justify-center mb-4">
                  <Users className="h-5 w-5" />
                </div>
                <h4 className="font-heading text-base font-bold text-primary mb-2">Boost Employee Experience</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Offer transparency, fairness, and flexibility in scheduling.</p>
              </div>
            </div>
          </div>

          {/* Added visual representation of scheduling planning */}
          <div className="w-full h-[320px] rounded-2xl overflow-hidden border border-outline-variant/30 shadow-md">
            <img 
              src={planningImg} 
              alt="Detailed workforce allocation chart and laptop planning desk" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Strategic Workforce Planning Tips */}
      <section className="py-section-gap bg-background w-full">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 flex flex-col gap-stack-lg">
            <h2 className="font-heading text-headline-md font-bold text-primary">Strategic Workforce Planning Tips</h2>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Managing labor compliance and personnel distribution is a complex, continuous process. Here are key best practices:
            </p>
            <ul className="flex flex-col gap-4 mt-2">
              {[
                'Attract, retain, and grow future-ready employees.',
                'Address demographic and industry changes head-on.',
                'Track labour costs by project or role to ensure profitability.',
                'Monitor productivity and plan capacity for changing demands.',
                'Spot skill gaps early and plan succession effectively.'
              ].map((tip, idx) => (
                <li key={idx} className="flex items-start gap-3 text-body-md text-on-surface-variant">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-7 bg-primary text-on-primary rounded-3xl p-10 relative overflow-hidden shadow-xl grid-bg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="relative z-10 max-w-xl">
              <span className="text-xs font-bold text-secondary-container uppercase tracking-wider mb-2 block">Enterprise Integrations</span>
              <h3 className="font-heading text-2xl font-bold mb-4">
                Tailored Solutions for <span className="italic text-accent font-normal">Complex Needs</span>
              </h3>
              <p className="text-body-md text-tertiary-fixed-dim leading-relaxed mb-6">
                Whether you’re a small UK business or a large, multi-site operation, Tudor Payroll Limited offers flexible solutions including integration with industry leaders like SAP, UKG, and WorkForce Software. Our experts can support even the most complex scheduling, compliance, and staffing requirements.
              </p>
              <Link 
                to="/contact" 
                className="bg-secondary text-on-secondary px-6 py-3 rounded-full font-heading text-xs font-bold uppercase tracking-wider hover:bg-secondary-container hover:text-on-secondary-container transition-colors inline-block"
              >
                Connect With Our Specialists
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
