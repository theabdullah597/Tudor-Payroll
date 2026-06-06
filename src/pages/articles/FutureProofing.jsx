import React from 'react';
import { Link } from 'react-router-dom';
import futureImg from '../../assets/collaboration.jpg';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function FutureProofing() {
  return (
    <article className="pb-section-gap bg-background selection:bg-secondary/30 selection:text-primary">
      {/* Hero Article Header */}
      <section className="bg-primary text-on-primary py-section-gap relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col items-center text-center">
          <div className="mb-8 flex gap-3">
            <span className="bg-secondary/20 text-secondary-container px-3 py-1 rounded-full font-heading text-[10px] font-bold uppercase tracking-wider border border-secondary/30">
              Strategy
            </span>
            <span className="bg-white/10 text-tertiary-fixed-dim px-3 py-1 rounded-full font-heading text-[10px] font-bold uppercase tracking-wider border border-white/20">
              5 min read
            </span>
          </div>
          <h1 className="font-heading text-display-lg-mobile md:text-[50px] max-w-4xl text-balance mb-6 font-bold leading-tight text-white">
            Future-Proofing Your <span className="italic text-accent font-normal">Workforce</span>: Trends in UK Workforce Management
          </h1>
          <p className="text-body-lg text-tertiary-fixed-dim max-w-2xl mb-12">
            In an ever-evolving employment landscape, businesses across the UK are realising the need to stay ahead of workforce challenges.
          </p>
          <div className="flex items-center gap-4 pt-8 border-t border-white/10 w-full max-w-2xl justify-center">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center font-heading text-sm font-bold text-white border border-white/20">
              SD
            </div>
            <div className="text-left">
              <p className="font-heading text-[10px] font-bold uppercase text-secondary-container">Author</p>
              <p className="text-body-md text-on-primary font-semibold">Strategy Desk</p>
            </div>
            <div className="ml-auto text-right text-tertiary-fixed-dim text-body-md hidden sm:block">
              <p>October 24, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Layout */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Main Article Content */}
          <div className="lg:col-span-8 text-on-surface">
            {/* Back to Insights */}
            <Link to="/insights" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors text-xs font-semibold uppercase tracking-wider mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Insights
            </Link>

            {/* Feature Image */}
            <div className="w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden border border-outline-variant/30 shadow-lg mb-8">
              <img 
                src={futureImg} 
                alt="Future-Proofing Your Workforce featured banner" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-slate prose-lg max-w-none text-on-surface space-y-6">
              <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
                From changing employee expectations to advances in technology, successful organisations are those that can adapt quickly and effectively. Future-proofing your workforce isn’t just a buzzword—it’s a business strategy. Here are the key trends reshaping workforce management in the UK and what you can do to stay ahead.
              </p>
              
              <h2 className="font-heading text-headline-md font-bold text-primary mt-12 mb-6">
                1. Embracing Hybrid and Flexible Work Models
              </h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                The pandemic shifted the way we work—and there’s no going back. Hybrid working is no longer a temporary fix but a permanent feature in many UK workplaces. Employees expect flexibility, whether it’s the option to work remotely, compressed hours, or job sharing.
              </p>

              <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-8 my-8 shadow-sm flex flex-col gap-4">
                <h4 className="font-heading text-lg font-bold text-primary flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-secondary shrink-0" /> What this means for employers:
                </h4>
                <ul className="space-y-3 text-sm text-on-surface-variant leading-relaxed pl-4 list-disc">
                  <li>Clear remote work policies and communication tools are essential.</li>
                  <li>Rigid scheduling systems are outdated—flexible rostering software is the future.</li>
                  <li>Trust-based management is replacing presenteeism.</li>
                </ul>
                <p className="text-xs text-on-surface-variant italic">
                  Companies that embrace flexibility can attract and retain top talent while improving productivity and employee satisfaction.
                </p>
              </div>

              <h2 className="font-heading text-headline-md font-bold text-primary mt-12 mb-6">
                2. Technology’s Role in Workforce Planning
              </h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                The role of HR technology is more important than ever. From cloud-based HR systems to AI-driven analytics, UK businesses are investing in tools that automate tasks and support strategic decisions.
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Current tech trends include:
              </p>
              <ul className="space-y-4 my-8 pl-0 list-none text-body-md text-on-surface-variant">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 shrink-0" />
                  <span><strong>Smart scheduling tools</strong> for shift-based industries like construction, security, and logistics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 shrink-0" />
                  <span><strong>Workforce analytics</strong> to track performance, engagement, and turnover risks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 shrink-0" />
                  <span><strong>Digital onboarding and training</strong> to streamline new starter integration.</span>
                </li>
              </ul>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Embracing these tools not only boosts efficiency but helps businesses remain agile in a competitive landscape.
              </p>

              <h2 className="font-heading text-headline-md font-bold text-primary mt-12 mb-6">
                3. Employee Wellbeing and Engagement Take Centre Stage
              </h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                The UK workforce is placing greater importance on mental health, work-life balance, and meaningful work. Employers are expected to do more than just pay wages—they’re expected to create supportive, healthy environments.
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Leading strategies include:
              </p>
              <ul className="space-y-3 text-body-md text-on-surface-variant list-disc pl-5">
                <li>Mental health support, including access to EAPs (Employee Assistance Programmes).</li>
                <li>Clear career progression paths and recognition programmes.</li>
                <li>Regular check-ins and honest feedback loops.</li>
              </ul>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Businesses that invest in wellbeing reduce absenteeism, boost morale, and retain skilled staff.
              </p>

              <h2 className="font-heading text-headline-md font-bold text-primary mt-12 mb-6">
                4. How SMEs Can Stay Ahead
              </h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                You don’t need a big budget to future-proof your workforce. UK SMEs can make big impacts with small, strategic changes:
              </p>
              <ul className="space-y-3 text-body-md text-on-surface-variant list-disc pl-5">
                <li>Outsource payroll and HR admin to free up time and reduce compliance risks.</li>
                <li>Train managers in remote leadership, diversity, and performance coaching.</li>
                <li>Review and modernise policies to reflect current expectations—like flexible work, parental leave, and inclusivity.</li>
              </ul>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Future-ready businesses are proactive, not reactive. They anticipate change and adapt their workforce strategy accordingly.
              </p>

              <h2 className="font-heading text-headline-md font-bold text-primary mt-12 mb-6">
                Conclusion
              </h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Workforce management in the UK is evolving rapidly—and success lies in staying one step ahead. By embracing flexibility, leveraging technology, supporting wellbeing, and focusing on long-term strategy, businesses can build resilient, engaged teams that are ready for whatever comes next.
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed font-semibold">
                Partner with Tudor Payroll Limited for smart, future-focused payroll and workforce solutions that help your people and your business thrive.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 mt-12 lg:mt-0 space-y-8">
            {/* CTA Card */}
            <div className="bg-primary text-on-primary rounded-xl p-8 relative overflow-hidden shadow-md border border-primary-container">
              <div className="absolute inset-0 hero-pattern opacity-50 pointer-events-none"></div>
              <div className="relative z-10 space-y-4">
                <h3 className="font-heading text-xl font-bold text-white">Drive sustainable growth.</h3>
                <p className="text-tertiary-fixed-dim text-sm leading-relaxed">
                  Discover how Tudor Payroll’s systems keep your workforce aligned and automated.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider bg-secondary text-on-secondary px-6 py-3.5 rounded shadow-sm hover:bg-secondary-container hover:text-on-secondary-container transition-colors w-full justify-center"
                >
                  Speak to an Expert
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </article>
  );
}
