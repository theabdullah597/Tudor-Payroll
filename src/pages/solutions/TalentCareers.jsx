import React from 'react';
import { Link } from 'react-router-dom';
import meetingImg from '../../assets/meeting.jpg';
import collaborationImg from '../../assets/collaboration.jpg';
import trainingImg from '../../assets/training.jpg';
import { 
  Briefcase, 
  TrendingUp, 
  GraduationCap, 
  Users, 
  BarChart3, 
  Workflow, 
  Brain, 
  Cpu, 
  Eye, 
  Milestone, 
  RefreshCw, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function TalentCareers() {
  return (
    <div className="flex flex-col selection:bg-secondary selection:text-on-secondary">
      {/* Hero Section */}
      <header className="bg-primary text-on-primary relative overflow-hidden pt-20 pb-section-gap">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 space-y-stack-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-secondary-container">
              <Briefcase className="h-4 w-4 text-accent" />
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">Talent &amp; Career Management</span>
            </div>
            <h1 className="font-heading text-display-lg-mobile md:text-display-lg font-bold leading-tight max-w-4xl text-white">
              Empowering People. <span className="italic text-accent font-normal">Shaping Futures.</span>
            </h1>
            <p className="text-body-lg text-tertiary-fixed-dim max-w-2xl leading-relaxed">
              At Tudor Payroll Limited, we believe your people are your most valuable asset. Supporting their development isn’t just good business—it’s the key to building an agile, future-ready workforce. Our tools and expertise help you create an environment where careers flourish, performance improves, and talent thrives.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/contact" 
                className="bg-secondary text-on-secondary rounded-full px-8 py-3.5 font-heading text-sm hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-lg shadow-secondary/20 flex items-center gap-2 text-center"
              >
                Explore Platform <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Premium Mentorship and Training Illustration */}
          <div className="lg:col-span-5 relative w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src={meetingImg} 
              alt="Mentorship and training collaboration in a modern office" 
              className="w-full h-full object-cover animate-fadeIn"
            />
          </div>
        </div>
      </header>

      {/* Results Bar */}
      <section className="border-b border-outline-variant bg-surface-container-lowest w-full">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">The Results</p>
          <blockquote className="font-heading text-lg md:text-xl font-bold text-primary-container leading-relaxed">
            “Empowering over <span className="italic text-accent font-normal">95k+ customers</span> with HR and payroll services”
          </blockquote>
        </div>
      </section>

      {/* Aligning Talent Section */}
      <section className="py-section-gap bg-background w-full">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-surface-container-high h-[500px]">
            <img 
              alt="Corporate team meeting in a modern glass office discussing talent strategy over charts." 
              className="w-full h-full object-cover" 
              src={collaborationImg}
            />
            {/* Glass overlay card */}
            <div className="absolute bottom-6 left-6 right-6 bg-surface/90 backdrop-blur-md p-6 rounded-xl border border-outline-variant shadow-lg">
              <div className="flex items-center gap-4 mb-2">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                <h4 className="font-heading text-sm font-bold text-on-surface">Retention Rate</h4>
              </div>
              <p className="text-3xl font-heading font-bold text-secondary">92%</p>
            </div>
          </div>
          
          <div className="space-y-stack-lg lg:pl-12">
            <h2 className="font-heading text-display-lg-mobile md:text-[36px] font-bold text-on-surface leading-tight">
              Aligning Talent <span className="italic text-accent font-normal">with Strategy</span>
            </h2>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              We provide smart workforce solutions that help you align individual strengths with your business goals. Whether you’re building future leaders or helping new hires find their path, our approach ensures your people feel valued, guided, and ready to grow.
            </p>
            
            <ul className="space-y-5 pt-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-secondary/10 p-2 rounded-lg text-secondary">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-primary mb-1">Build strategic talent pipelines</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Nurture talent within the organisation to keep roles filled dynamically.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-secondary/10 p-2 rounded-lg text-secondary">
                  <Workflow className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-primary mb-1">Strengthen leadership agility</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Prepare next-gen managers to lead confidently in volatile climates.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-secondary/10 p-2 rounded-lg text-secondary">
                  <Brain className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-primary mb-1">Empower internal mobility</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Promote cross-functional growth that keeps employees motivated and aligned.</p>
                </div>
              </li>
            </ul>
            
            <p className="text-body-md text-on-surface font-semibold italic pt-4">
              Because every employee has the potential to lead, innovate and grow—given the right support.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-section-gap bg-surface-container-lowest w-full border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-stack-sm">
            <h2 className="font-heading text-display-lg-mobile md:text-4xl font-bold text-on-surface leading-tight">
              Because every employee could be your <span className="italic text-accent font-normal">next top performer</span>
            </h2>
            <p className="text-body-md text-on-surface-variant">
              Unlock hidden potential with an ecosystem designed for continuous development and strategic alignment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1: Smart Tools */}
            <div className="lg:col-span-2 bg-surface border border-outline-variant rounded-2xl p-8 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Cpu className="h-48 w-48 text-secondary" />
              </div>
              <div className="relative z-10 w-full lg:w-2/3">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6 text-white">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-on-surface">Smart, user-friendly talent tools</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                  Our career and talent solutions are built to fit your organisation—not the other way around. Whether you favour structured career planning or want to encourage self-driven development, Tudor Payroll Limited gives you the flexibility to choose what works best.
                </p>
              </div>
            </div>
            
            {/* Card 2: Visibility */}
            <div className="bg-primary text-on-primary rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-secondary-container">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">Clear visibility into your workforce</h3>
                <p className="text-on-primary-container text-sm leading-relaxed mb-6">
                  Gain full insight into the skills, strengths and aspirations of your team. Our tools help you understand what motivates your people and where to focus your development efforts for long-term success.
                </p>
              </div>
            </div>

            {/* Card 3: Tailored Growth */}
            <div className="bg-surface border border-outline-variant rounded-2xl p-8 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6 text-white">
                <Milestone className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-on-surface">Tailored growth opportunities</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Offer meaningful learning and development options that align with both business goals and employee ambitions. From reskilling to progression planning, we help embed growth and adaptability into your workplace culture.
              </p>
            </div>

            {/* Card 4: Future-proof */}
            <div className="lg:col-span-2 bg-surface border border-outline-variant rounded-2xl p-8 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6 text-white">
                  <RefreshCw className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-on-surface">Build the future of your workforce</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Future-proof your business by aligning your people strategy with long-term goals. Empower your employees to lead their own careers and contribute to your organisation’s success every step of the way.
                </p>
              </div>
              <div className="w-full md:w-1/3 rounded-lg overflow-hidden shadow border border-outline-variant/30 h-32">
                <img 
                  src={trainingImg} 
                  alt="Tudor training program and workshop" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-gap bg-background w-full">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="bg-primary rounded-3xl p-12 relative overflow-hidden shadow-2xl grid-bg">
            <div className="relative z-10 space-y-6">
              <h2 className="font-heading text-display-lg-mobile md:text-display-lg text-white font-bold leading-tight">
                Nurture Talent. <span className="italic text-accent font-normal">Inspire Growth.</span>
              </h2>
              <p className="text-body-lg text-on-primary-container max-w-2xl mx-auto">
                At Tudor Payroll Limited, we believe in unlocking potential at every level. By creating space for learning, feedback, and progression, you don’t just retain employees—you build future leaders who are motivated to make a difference.
              </p>
              <div className="pt-6">
                <Link 
                  to="/contact" 
                  className="bg-secondary text-on-secondary rounded-full px-10 py-4 font-heading text-sm hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-lg hover:scale-105 inline-block transform duration-200"
                >
                  Start Your Transformation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
