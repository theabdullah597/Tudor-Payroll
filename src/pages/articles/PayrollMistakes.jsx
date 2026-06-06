import React from 'react';
import { Link } from 'react-router-dom';
import mistakesImg from '../../assets/workstation.jpg';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  ArrowRight,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

export default function PayrollMistakes() {
  return (
    <article className="pb-section-gap bg-background selection:bg-secondary/30 selection:text-primary">
      {/* Hero Article Header */}
      <section className="bg-primary text-on-primary py-section-gap relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col items-center text-center">
          <div className="mb-8 flex gap-3">
            <span className="bg-secondary/20 text-secondary-container px-3 py-1 rounded-full font-heading text-[10px] font-bold uppercase tracking-wider border border-secondary/30">
              Compliance
            </span>
            <span className="bg-white/10 text-tertiary-fixed-dim px-3 py-1 rounded-full font-heading text-[10px] font-bold uppercase tracking-wider border border-white/20">
              5 min read
            </span>
          </div>
          <h1 className="font-heading text-display-lg-mobile md:text-[50px] max-w-4xl text-balance mb-6 font-bold leading-tight text-white">
            The Hidden Costs of <span className="italic text-accent font-normal">Payroll Mistakes</span> – and How to Avoid Them
          </h1>
          <p className="text-body-lg text-tertiary-fixed-dim max-w-2xl mb-12">
            In the fast-paced world of business, payroll might seem like a background process — but when mistakes happen, the consequences can ripple across your entire organisation.
          </p>
          <div className="flex items-center gap-4 pt-8 border-t border-white/10 w-full max-w-2xl justify-center">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center font-heading text-sm font-bold text-white border border-white/20">
              EJ
            </div>
            <div className="text-left">
              <p className="font-heading text-[10px] font-bold uppercase text-secondary-container">Author</p>
              <p className="text-body-md text-on-primary font-semibold">Eleanor James, Head of Compliance</p>
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
                src={mistakesImg} 
                alt="Hidden Costs of Payroll Mistakes featured banner" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-slate prose-lg max-w-none text-on-surface space-y-6">
              <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
                In the fast-paced world of business, payroll might seem like a background process — but when mistakes happen, the consequences can ripple across your entire organisation. From fines to frustrated staff, getting payroll wrong is more costly than many realise. Here’s a look at what’s at stake and how UK employers can avoid common pitfalls.
              </p>
              
              <h2 className="font-heading text-headline-md font-bold text-primary mt-12 mb-6">
                Why Payroll Accuracy Matters
              </h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Payroll isn’t just about making sure staff are paid on time. It’s a legal obligation tied to tax compliance, pension contributions, and employee rights. A simple misstep — like underpaying a team member or submitting incorrect figures to HMRC — can erode trust, trigger penalties, and even attract investigations.
              </p>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                In the UK, where employment law is tightly regulated, payroll errors are taken seriously. Beyond compliance, accurate payroll reflects your professionalism and commitment to your staff.
              </p>
              
              <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-8 my-8 shadow-sm flex flex-col gap-4">
                <h4 className="font-heading text-lg font-bold text-primary flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-secondary shrink-0" /> Common Payroll Pitfalls
                </h4>
                <p className="text-sm text-on-surface-variant m-0 leading-relaxed">
                  Some of the most frequent payroll issues include:
                </p>
                <ul className="space-y-2 text-sm text-on-surface-variant leading-relaxed pl-4 list-disc">
                  <li>Miscalculating wages (especially with variable hours or shift work)</li>
                  <li>Missing Real Time Information (RTI) submissions to HMRC</li>
                  <li>Incorrect National Insurance or pension contributions</li>
                  <li>Failing to update tax codes or new starter information properly</li>
                  <li>Not keeping up with legislative changes (e.g. minimum wage adjustments)</li>
                </ul>
                <p className="text-xs text-on-surface-variant italic">
                  Even one or two errors across a large workforce can lead to significant financial loss and administrative chaos.
                </p>
              </div>

              <h2 className="font-heading text-headline-md font-bold text-primary mt-12 mb-6">
                The Real Costs: Financial, Legal, and Reputational
              </h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Payroll mistakes can cost far more than a quick fix. Here’s what’s at stake:
              </p>
              
              <ul className="space-y-4 my-8 pl-0 list-none text-body-md text-on-surface-variant">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 shrink-0" />
                  <span><strong>HMRC Penalties:</strong> Late submissions or incorrect returns may lead to fines or interest charges.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 shrink-0" />
                  <span><strong>Employee Disputes:</strong> Errors in pay can lead to grievances, high turnover, or even employment tribunal claims.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 shrink-0" />
                  <span><strong>Lost Productivity:</strong> Time spent correcting issues, reissuing payslips, or handling complaints drains HR resources.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-1 shrink-0" />
                  <span><strong>Brand Damage:</strong> Unhappy employees or negative press can hurt your reputation and recruitment efforts.</span>
                </li>
              </ul>
              
              <p className="text-body-md text-on-surface font-semibold">
                In short, getting payroll wrong costs time, money, and trust.
              </p>

              <h2 className="font-heading text-headline-md font-bold text-primary mt-12 mb-6">
                Best Practices for Error-Free Payroll
              </h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Avoiding payroll issues starts with structure, systems, and support. Here’s how:
              </p>
              <ul className="space-y-3 text-body-md text-on-surface-variant list-disc pl-5">
                <li><strong>Automate where possible:</strong> Payroll software reduces manual errors and ensures compliance with RTI and pension auto-enrolment.</li>
                <li><strong>Stay up to date:</strong> Regularly review HMRC guidelines, tax code changes, and legislation.</li>
                <li><strong>Conduct internal audits:</strong> Periodically check payroll calculations, especially for variable pay staff.</li>
                <li><strong>Partner with professionals:</strong> Outsourcing payroll to a trusted UK-based provider, like <strong>Tudor Payroll Limited</strong>, ensures accuracy, compliance, and peace of mind.</li>
              </ul>

              <h2 className="font-heading text-headline-md font-bold text-primary mt-12 mb-6">
                Conclusion
              </h2>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Payroll may be behind the scenes, but its impact is front and centre. Avoiding costly mistakes isn’t just about compliance—it’s about caring for your people and protecting your business. With the right systems and support in place, payroll can run smoothly, allowing you to focus on growth.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 mt-12 lg:mt-0 space-y-8">
            {/* CTA Card */}
            <div className="bg-primary text-on-primary rounded-xl p-8 relative overflow-hidden shadow-md border border-primary-container">
              <div className="absolute inset-0 hero-pattern opacity-50 pointer-events-none"></div>
              <div className="relative z-10 space-y-4">
                <h3 className="font-heading text-xl font-bold text-white">Stop relying on spreadsheets.</h3>
                <p className="text-tertiary-fixed-dim text-sm leading-relaxed">
                  Discover how Tudor Payroll’s managed services eliminate compliance risks and streamline your operations.
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

