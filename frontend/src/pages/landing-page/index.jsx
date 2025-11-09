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
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16 space-y-24 max-w-7xl">
          {/* Hero Section */}
          <section className="relative">
            <HeroSection onStartAssessment={handleStartAssessment} />
          </section>

          {/* Benefits Section */}
          <section className="relative">
            <BenefitsSection />
          </section>

          {/* Process Overview */}
          <section className="relative">
            <ProcessOverview />
          </section>

          {/* Trust Signals */}
          <section className="relative">
            <TrustSignals />
          </section>

          {/* Final CTA Section */}
          <section className="text-center relative">
            <div className="bg-gradient-to-br from-primary via-primary to-secondary rounded-2xl p-16 text-white shadow-earth-lg relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-3xl"></div>
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                  Ready to Transform Your Sustainability Assessment?
                </h2>
                <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
                  Join leading manufacturers in making data-driven decisions for a more sustainable future
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button
                    onClick={handleStartAssessment}
                    className="bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-earth-lg hover:shadow-earth-xl transform hover:scale-105"
                  >
                    Start Your Assessment Now
                  </button>
                  <button className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 shadow-earth-md">
                    Schedule Demo
                  </button>
                </div>
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