import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import LandingPage from './pages/landing-page';
import ResultsDashboard from './pages/results-dashboard';
import AssessmentForm from './pages/assessment-form';
import ConnectionTest from './components/ConnectionTest';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AssessmentForm />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/results-dashboard" element={<ResultsDashboard />} />
        <Route path="/assessment-form" element={<AssessmentForm />} />
        <Route path="/test-connection" element={<ConnectionTest />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
