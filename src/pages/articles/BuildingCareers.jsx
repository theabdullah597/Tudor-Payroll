import React from 'react';
import { Link } from 'react-router-dom';
import careersImg from '../../assets/coworking.jpg';
import {
  ArrowLeft,
  Calendar,
  User,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function BuildingCareers() {
  return (
    <article className="pb-section-gap bg-background selection:bg-secondary/30 selection:text-primary">
      {/* Hero Article Header */}
      <section className="bg-primary text-on-primary py-section-gap relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col items-center text-center">
          <div className="mb-8 flex gap-3">
            <span className="bg-secondary/20 text-secondary-container px-3 py-1 rounded-full font-heading text-[10px] font-bold uppercase tracking-wider border border-secondary/30">
              HR Trends
            </span>
            <span className="bg-white/10 text-tertiary-fixed-dim px-3 py-1 rounded-full font-heading text-[10px] font-bold uppercase tracking-wider border border-white/20">
              5 min read
            </span>
          </div>
          <h1 className="font-heading text-display-lg-mobile md:text-[50px] max-w-4xl text-balance mb-6 font-bold leading-tight text-white">
            Building Careers, Not <span className="italic text-accent font-normal">Just Jobs</span>: How Businesses Can Inspire Long-Term Talent
          </h1>
          <p className="text-body-lg text-tertiary-fixed-dim max-w-2xl mb-12">
            In today’s competitive job market, it takes more than a payslip to keep top talent engaged.
          </p>
          <div className="flex items-center gap-4 pt-8 border-t border-white/10 w-full max-w-2xl justify-center">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center font-heading text-sm font-bold text-white border border-white/20">
              HI
            </div>
            <div className="text-left">
              <p className="font-heading text-[10px] font-bold uppercase text-secondary-container">Author</p>
              <p className="text-body-md text-on-primary font-semibold">HR Insights</p>
            </div>
            <div className="ml-auto text-right text-tertiary-fixed-dim text-body-md hidden sm:block">
              <p>October 12, 2024</p>
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
                src={careersImg}
                alt="Building Careers, Not Just Jobs featured banner"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-slate prose-lg max-w-none text-on-surface space-y-6">
              <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
                UK businesses are realising the value of long-term employee development—not just filling vacancies, but investing in people’s futures. By shifting the focus from “jobs” to “careers,” organisations can boost retention, strengthen culture, and build a more resilient workforce.
              </p>

              <h2 className="font-heading text-headline-md font-bold text-primary mt-12 mb-6">
                The Career vs Job Mindset: Why It Matters
              </h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                A “job” provides income and structure—but a “career” offers growth, purpose, and progression. When employees feel like they’re building something meaningful, they’re more likely to stay committed and perform at their best.
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                In industries like construction, logistics, and security, where retention can be a challenge, giving workers clear opportunities to advance their skills and roles can make a major difference.
              </p>

              <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-8 my-8 shadow-sm flex flex-col gap-4">
                <h4 className="font-heading text-lg font-bold text-primary">Career-focused workplaces benefit from:</h4>
                <ul className="space-y-2 text-sm text-on-surface-variant leading-relaxed pl-4 list-disc">
                  <li>Lower staff turnover</li>
                  <li>Higher engagement and morale</li>
                  <li>A stronger employer brand</li>
                </ul>
                <p className="text-xs text-on-surface-variant italic m-0">
                  Employees today are asking: Where is this taking me? The right employer has an answer.
                </p>
              </div>

              <h2 className="font-heading text-headline-md font-bold text-primary mt-12 mb-6">
                2. Supporting Internal Growth: Progression in Practice
              </h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Building careers internally starts with visibility and access. Employees need to see how they can move forward—and know you’ll support them in getting there.
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Ways to encourage internal growth include:
              </p>
              <ul className="space-y-3 pl-5 list-disc text-body-md text-on-surface-variant">
                <li>Clear promotion paths and role progression frameworks</li>
                <li>Mentorship programmes connecting junior and senior staff</li>
                <li>Training budgets and CPD support for relevant qualifications</li>
                <li>Regular development reviews with goals, not just performance ratings</li>
              </ul>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Even small steps—like providing training for site supervisors or upskilling drivers in compliance tech—show investment in your team’s potential.
              </p>

              <h2 className="font-heading text-headline-md font-bold text-primary mt-12 mb-6">
                3. Retention Through Recognition and Culture
              </h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Career development isn’t just about climbing the ladder—it’s also about feeling valued. Employees who are recognised, encouraged, and involved are more likely to stay.
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Top UK retention strategies include:
              </p>
              <ul className="space-y-3 pl-5 list-disc text-body-md text-on-surface-variant">
                <li>Celebrating milestones and achievements (not just tenure)</li>
                <li>Offering personalised career plans, even for frontline staff</li>
                <li>Creating feedback-rich environments where ideas are welcomed</li>
                <li>Promoting from within wherever possible</li>
              </ul>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                A strong company culture—where people feel they belong—keeps careers growing and staff loyal.
              </p>

              <h2 className="font-heading text-headline-md font-bold text-primary mt-12 mb-6">
                4. The Role of HR in Career Strategy
              </h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                HR and workforce management teams are essential in building long-term career paths. It’s no longer just about recruitment—it’s about retention and development.
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                HR can drive career-building by:
              </p>
              <ul className="space-y-4 my-8 pl-0 list-none text-body-md text-on-surface-variant">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 shrink-0" />
                  <span>Mapping roles and progression routes for each department.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 shrink-0" />
                  <span>Identifying skill gaps and future leaders.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 shrink-0" />
                  <span>Partnering with training providers and apprenticeship schemes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 shrink-0" />
                  <span>Aligning individual growth with business goals.</span>
                </li>
              </ul>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                For businesses without in-house HR, partnering with firms like <strong>Tudor Payroll Limited</strong> gives you access to expert guidance, tailored workforce planning, and ongoing support—helping you build not just a team, but a talent pipeline.
              </p>

              <h2 className="font-heading text-headline-md font-bold text-primary mt-12 mb-6">
                Conclusion
              </h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                When you invest in careers—not just jobs—you invest in your future. Businesses that focus on long-term talent development build loyal, skilled, and motivated teams. Whether you’re in security, construction, logistics, or beyond, now is the time to inspire your workforce, support their growth, and shape a future that benefits everyone.
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed font-semibold">
                Let Tudor Payroll Limited help you build the workforce of tomorrow—starting today.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 mt-12 lg:mt-0 space-y-8">
            {/* CTA Card */}
            <div className="bg-primary text-on-primary rounded-xl p-8 relative overflow-hidden shadow-md border border-primary-container">
              <div className="absolute inset-0 hero-pattern opacity-50 pointer-events-none"></div>
              <div className="relative z-10 space-y-4">
                <h3 className="font-heading text-xl font-bold text-white">Unlock potential.</h3>
                <p className="text-tertiary-fixed-dim text-sm leading-relaxed">
                  Partner with Tudor Payroll Limited to establish long-term employee development tracks.
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
