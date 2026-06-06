import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import WorkforceManagement from './pages/solutions/WorkforceManagement';
import PayrollReward from './pages/solutions/PayrollReward';
import TalentCareers from './pages/solutions/TalentCareers';
import CoreHR from './pages/solutions/CoreHR';
import StaffingRecruitment from './pages/solutions/StaffingRecruitment';
import Insights from './pages/Insights';
import PayrollMistakes from './pages/articles/PayrollMistakes';
import FutureProofing from './pages/articles/FutureProofing';
import BuildingCareers from './pages/articles/BuildingCareers';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="insights" element={<Insights />} />
          
          {/* Article Pages */}
          <Route path="insights/payroll-mistakes" element={<PayrollMistakes />} />
          <Route path="insights/future-proofing" element={<FutureProofing />} />
          <Route path="insights/building-careers" element={<BuildingCareers />} />
          
          {/* Legal Pages */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
          
          {/* Solutions Hub & Subroutes */}
          <Route path="solutions" element={<Solutions />} />
          <Route path="solutions/workforce-management" element={<WorkforceManagement />} />
          <Route path="solutions/payroll-reward" element={<PayrollReward />} />
          <Route path="solutions/talent-careers" element={<TalentCareers />} />
          <Route path="solutions/core-hr" element={<CoreHR />} />
          <Route path="solutions/staffing-recruitment" element={<StaffingRecruitment />} />

          {/* Catch-all Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
