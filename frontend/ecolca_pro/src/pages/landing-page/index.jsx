import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ProcessOverview from './components/ProcessOverview';
import TrustSignals from './components/TrustSignals';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartAssessment = () => {
    navigate('/assessment-form');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        <div className="container mx-auto px-6 py-12 space-y-16">
          {/* Hero Section */}
          <section>
            <HeroSection onStartAssessment={handleStartAssessment} />
          </section>

          {/* Benefits Section */}
          <section>
            <BenefitsSection />
          </section>

          {/* Process Overview */}
          <section>
            <ProcessOverview />
          </section>

          {/* Trust Signals */}
          <section>
            <TrustSignals />
          </section>

          {/* Final CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-12 text-white shadow-earth-lg">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Transform Your Sustainability Assessment?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join leading manufacturers in making data-driven decisions for a more sustainable future
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleStartAssessment}
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors duration-300 shadow-earth-md hover:shadow-earth-lg transform hover:scale-105"
                >
                  Start Your Assessment Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-card border-t border-border mt-16">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                    <span className="text-white font-bold text-lg">E</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      EcoLCA Pro
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Sustainability Assessment Platform
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 max-w-md">
                  Empowering manufacturers with AI-driven life cycle analysis for sustainable metal production processes and circular economy transitions.
                </p>
                <div className="text-sm text-muted-foreground">
                  © {new Date()?.getFullYear()} EcoLCA Pro. All rights reserved.
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Assessment Tool</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Results Dashboard</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Contact</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>support@ecolcapro.com</li>
                  <li>+1 (555) 123-4567</li>
                  <li>24/7 Expert Support</li>
                  <li>Enterprise Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;