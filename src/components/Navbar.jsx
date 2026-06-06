import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.jpeg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsMobileOpen, setSolutionsMobileOpen] = useState(false);
  const [resourcesMobileOpen, setResourcesMobileOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-4 z-50 max-w-container-max mx-4 xl:mx-auto rounded-2xl border border-outline-variant shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center w-full px-8 py-5 max-w-container-max mx-auto gap-8">

        {/* Brand/Logo */}
        <NavLink to="/" className="flex items-center gap-3 font-heading text-headline-md font-bold text-primary tracking-tight shrink-0">
          <img src={logo} alt="Tudor Logo" className="h-14 w-auto rounded object-contain" />
        </NavLink>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-10">
          {/* Home Link */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-body-md transition-colors duration-200 font-semibold py-2 ${isActive ? 'text-secondary border-b-2 border-secondary' : 'text-on-surface-variant hover:text-secondary'
              }`
            }
          >
            Home
          </NavLink>

          {/* Solutions Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1.5 text-body-md text-on-surface-variant hover:text-secondary font-semibold transition-colors focus:outline-none">
              Solutions
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 duration-200" />
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-white border border-outline-variant rounded-xl shadow-lg hidden group-hover:block z-50 p-2 transform origin-top animate-fadeIn">
              <Link to="/solutions" className="block px-4 py-2.5 text-body-md text-on-surface-variant hover:text-secondary hover:bg-surface rounded-lg font-medium transition-colors">
                Solutions Hub
              </Link>
              <hr className="border-outline-variant/30 my-1" />
              <Link to="/solutions/talent-careers" className="block px-4 py-2.5 text-body-md text-on-surface-variant hover:text-secondary hover:bg-surface rounded-lg font-medium transition-colors">
                Talent & Careers
              </Link>
              <Link to="/solutions/workforce-management" className="block px-4 py-2.5 text-body-md text-on-surface-variant hover:text-secondary hover:bg-surface rounded-lg font-medium transition-colors">
                Workforce Management
              </Link>
              <Link to="/solutions/payroll-reward" className="block px-4 py-2.5 text-body-md text-on-surface-variant hover:text-secondary hover:bg-surface rounded-lg font-medium transition-colors">
                Payroll & Reward
              </Link>
              <Link to="/solutions/core-hr" className="block px-4 py-2.5 text-body-md text-on-surface-variant hover:text-secondary hover:bg-surface rounded-lg font-medium transition-colors">
                Core HR
              </Link>
              <Link to="/solutions/staffing-recruitment" className="block px-4 py-2.5 text-body-md text-on-surface-variant hover:text-secondary hover:bg-surface rounded-lg font-medium transition-colors">
                Staffing & Recruitment
              </Link>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1.5 text-body-md text-on-surface-variant hover:text-secondary font-semibold transition-colors focus:outline-none">
              Resources
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 duration-200" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-outline-variant rounded-xl shadow-lg hidden group-hover:block z-50 p-2 transform origin-top animate-fadeIn">
              <Link to="/insights" className="block px-4 py-2.5 text-body-md text-on-surface-variant hover:text-secondary hover:bg-surface rounded-lg font-medium transition-colors">
                Insights
              </Link>
              <Link to="/about" className="block px-4 py-2.5 text-body-md text-on-surface-variant hover:text-secondary hover:bg-surface rounded-lg font-medium transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* Contact Us Link */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-body-md transition-colors duration-200 font-semibold py-2 ${isActive ? 'text-secondary border-b-2 border-secondary' : 'text-on-surface-variant hover:text-secondary'
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Actions (Desktop) */}
        <div className="hidden md:flex items-center space-x-stack-md">
          <NavLink
            to="/contact"
            className="px-6 py-2.5 bg-secondary text-on-secondary font-heading text-xs font-bold uppercase tracking-wider rounded-full hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-sm"
          >
            Get Started
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-surface-container rounded-b-2xl overflow-hidden px-6 py-4 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            {/* Home */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-body-md font-semibold text-on-surface-variant py-2 border-b border-outline-variant/30 block"
            >
              Home
            </Link>

            {/* Solutions Dropdown Menu */}
            <div>
              <button
                onClick={() => setSolutionsMobileOpen(!solutionsMobileOpen)}
                className="w-full flex justify-between items-center text-body-md font-semibold text-on-surface-variant py-2 border-b border-outline-variant/30 focus:outline-none"
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${solutionsMobileOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsMobileOpen && (
                <div className="bg-white/50 pl-4 py-2 space-y-2 rounded-lg mt-1">
                  <Link to="/solutions" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-on-surface-variant font-medium hover:text-secondary">Solutions Hub</Link>
                  <Link to="/solutions/talent-careers" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-on-surface-variant font-medium hover:text-secondary">Talent & Careers</Link>
                  <Link to="/solutions/workforce-management" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-on-surface-variant font-medium hover:text-secondary">Workforce Management</Link>
                  <Link to="/solutions/payroll-reward" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-on-surface-variant font-medium hover:text-secondary">Payroll & Reward</Link>
                  <Link to="/solutions/core-hr" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-on-surface-variant font-medium hover:text-secondary">Core HR</Link>
                  <Link to="/solutions/staffing-recruitment" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-on-surface-variant font-medium hover:text-secondary">Staffing & Recruitment</Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown Menu */}
            <div>
              <button
                onClick={() => setResourcesMobileOpen(!resourcesMobileOpen)}
                className="w-full flex justify-between items-center text-body-md font-semibold text-on-surface-variant py-2 border-b border-outline-variant/30 focus:outline-none"
              >
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform ${resourcesMobileOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesMobileOpen && (
                <div className="bg-white/50 pl-4 py-2 space-y-2 rounded-lg mt-1">
                  <Link to="/insights" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-on-surface-variant font-medium hover:text-secondary">Insights</Link>
                  <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-on-surface-variant font-medium hover:text-secondary">About</Link>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-body-md font-semibold text-on-surface-variant py-2 border-b border-outline-variant/30 block"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex flex-col space-y-2 pt-2">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 text-center bg-secondary text-on-secondary font-heading text-xs font-bold uppercase tracking-wider rounded-full hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-sm block"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
