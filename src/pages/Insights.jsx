import React from 'react';
import { Link } from 'react-router-dom';
import mistakesImg from '../assets/workstation.jpg';
import futureImg from '../assets/collaboration.jpg';
import careersImg from '../assets/coworking.jpg';
import { 
  BookOpen, 
  Calendar, 
  ArrowRight, 
  Mail,
  MailCheck
} from 'lucide-react';

export default function Insights() {
  const articles = [
    {
      id: 'payroll-mistakes',
      category: 'COMPLIANCE',
      date: 'Oct 18, 2024',
      title: 'Hidden Costs of Payroll Mistakes',
      desc: 'An in-depth look at how seemingly minor compliance errors compound over time, leading to significant financial penalties and eroded employee trust.',
      path: '/insights/payroll-mistakes',
      author: 'Compliance Team',
      image: mistakesImg
    },
    {
      id: 'future-proofing',
      category: 'STRATEGY',
      date: 'Oct 24, 2024',
      title: 'Future-Proofing Your Workforce',
      desc: 'As automation and AI reshape the HR landscape, learn how proactive payroll structuring can prepare your organisation for the next decade of workforce dynamics.',
      path: '/insights/future-proofing',
      author: 'Strategy Desk',
      image: futureImg
    },
    {
      id: 'building-careers',
      category: 'HR TRENDS',
      date: 'Oct 12, 2024',
      title: 'Building Careers, Not Just Paychecks',
      desc: 'Exploring how modern total compensation statements and transparent payroll practices can become a core driver of employee retention and career satisfaction.',
      path: '/insights/building-careers',
      author: 'HR Insights',
      image: careersImg
    }
  ];

  return (
    <div className="flex flex-col pb-section-gap selection:bg-secondary selection:text-on-secondary">
      {/* Hero Section */}
      <section className="bg-primary text-on-primary py-section-gap px-margin-desktop relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-primary-container text-secondary-container px-4 py-1.5 rounded-full font-heading text-xs mb-stack-lg border border-outline/30">
            <BookOpen className="h-4 w-4" />
            <span>KNOWLEDGE BASE</span>
          </div>
          <h1 className="font-heading text-display-lg-mobile md:text-display-lg font-bold mb-stack-md max-w-3xl leading-tight">
            Insights &amp; <span className="italic text-accent font-normal">Articles</span>
          </h1>
          <p className="text-body-lg text-tertiary-fixed-dim max-w-2xl mb-stack-lg leading-relaxed">
            Expert perspectives, regulatory updates, and strategic advice for finance leaders and HR professionals navigating complex UK payroll landscapes.
          </p>
        </div>
      </section>

      {/* Featured Articles Grid Section */}
      <section className="py-section-gap px-margin-desktop bg-surface w-full">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-heading text-headline-md font-bold text-primary mb-2">
                Latest <span className="italic text-accent font-normal">Insights</span>
              </h2>
              <p className="text-body-md text-on-surface-variant">Stay ahead with our most recent expert analysis.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {articles.map((article) => (
              <article 
                key={article.id} 
                className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-secondary transition-all duration-300 flex flex-col group"
              >
                {/* Article image header matching the Stitch reference exactly */}
                <div className="aspect-video bg-surface-container relative overflow-hidden">
                  <img 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={article.image}
                  />
                  <div className="absolute top-4 left-4 bg-surface-container-lowest text-primary font-heading text-[10px] font-bold tracking-widest px-3 py-1 rounded shadow-sm">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-on-surface-variant text-xs mb-3 font-semibold">
                    <Calendar className="h-4 w-4 text-secondary" />
                    <span>{article.date}</span>
                    <span className="text-outline-variant">•</span>
                    <span>By {article.author}</span>
                  </div>
                  <h3 className="font-heading text-[20px] font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant mb-6 flex-grow leading-relaxed">
                    {article.desc}
                  </p>
                  <Link 
                    to={article.path} 
                    className="inline-flex items-center gap-2 text-secondary font-bold group-hover:text-primary transition-colors text-sm uppercase tracking-wider"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-section-gap px-margin-desktop bg-surface-container-low border-t border-outline-variant w-full">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-secondary text-on-secondary mb-6 shadow-sm">
            <MailCheck className="h-6 w-6" />
          </div>
          <h2 className="font-heading text-[32px] font-bold text-primary mb-3">Stay Informed</h2>
          <p className="text-body-lg text-on-surface-variant mb-8 max-w-xl mx-auto">
            Get the latest payroll insights, regulatory updates, and expert compliance advice delivered directly to your inbox.
          </p>
          <form 
            onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }} 
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <div className="flex-grow relative">
              <label className="sr-only" for="email-subscribe">Email address</label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-outline" />
              </div>
              <input 
                className="block w-full pl-10 pr-3 py-3 border border-outline-variant rounded bg-surface-container-lowest text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-shadow text-sm" 
                id="email-subscribe" 
                name="email" 
                placeholder="Enter your business email" 
                required 
                type="email"
              />
            </div>
            <button 
              className="bg-secondary text-on-secondary px-6 py-3 rounded font-heading text-sm font-semibold hover:bg-secondary-container hover:text-on-secondary-container transition-all active:scale-95 whitespace-nowrap" 
              type="submit"
            >
              Subscribe Now
            </button>
          </form>
          <p className="text-[10px] text-outline mt-4 font-semibold uppercase tracking-wider">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}
