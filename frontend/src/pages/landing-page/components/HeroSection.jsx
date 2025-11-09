import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = ({ onStartAssessment }) => {
  return (
    <div className="relative bg-gradient-to-br from-primary/8 via-background to-secondary/8 rounded-3xl p-12 md:p-16 lg:p-20 overflow-hidden border border-border/50 shadow-earth-lg">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary"></div>
        <div className="absolute top-32 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent"></div>
        <div className="absolute bottom-20 left-32 w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary/50 to-secondary/50"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Main Title */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl mr-6 shadow-earth-lg">
            <Icon name="Leaf" size={40} color="white" strokeWidth={2.5} />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-foreground leading-tight">
            AI-Driven LCA Tool
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-muted-foreground font-medium mb-12 leading-relaxed max-w-4xl mx-auto">
          Transform your sustainability assessment with intelligent life cycle analysis for metal production processes
        </p>

        {/* Description */}
        <div className="bg-card/90 backdrop-blur-md rounded-2xl p-8 mb-16 shadow-earth-lg border border-border/50">
          <p className="text-xl text-card-foreground leading-relaxed max-w-3xl mx-auto font-medium">
            Empower sustainability professionals and manufacturers with AI-powered calculations that provide actionable insights for transitioning to circular economy practices. Get comprehensive environmental impact assessments in minutes, not weeks.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <Button
            variant="default"
            size="lg"
            onClick={onStartAssessment}
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={24}
            className="px-12 py-6 text-xl font-bold shadow-earth-lg hover:shadow-earth-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Assessment
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            iconName="PlayCircle"
            iconPosition="left"
            iconSize={24}
            className="px-12 py-6 text-xl font-bold border-2"
          >
            Watch Demo
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-border/30">
          <div className="text-center group">
            <div className="text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">5 Min</div>
            <div className="text-base text-muted-foreground font-medium">Quick Assessment</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-black text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">AI-Powered</div>
            <div className="text-base text-muted-foreground font-medium">Smart Calculations</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-black text-accent mb-2 group-hover:scale-110 transition-transform duration-300">Comprehensive</div>
            <div className="text-base text-muted-foreground font-medium">Detailed Reports</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;