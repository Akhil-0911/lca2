import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = ({ onStartAssessment }) => {
  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-xl p-8 md:p-12 lg:p-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary"></div>
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-secondary"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 rounded-full bg-accent"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-primary/30"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-xl mr-4 shadow-earth-md">
            <Icon name="Leaf" size={32} color="white" strokeWidth={2.5} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
            AI-Driven LCA Tool
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 leading-relaxed max-w-3xl mx-auto">
          Transform your sustainability assessment with intelligent life cycle analysis for metal production processes
        </p>

        {/* Description */}
        <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 mb-10 shadow-earth border border-border/50">
          <p className="text-lg text-card-foreground leading-relaxed max-w-2xl mx-auto">
            Empower sustainability professionals and manufacturers with AI-powered calculations that provide actionable insights for transitioning to circular economy practices. Get comprehensive environmental impact assessments in minutes, not weeks.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="default"
            size="lg"
            onClick={onStartAssessment}
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={20}
            className="px-8 py-4 text-lg font-semibold shadow-earth-md hover:shadow-earth-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Assessment
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            iconName="PlayCircle"
            iconPosition="left"
            iconSize={20}
            className="px-8 py-4 text-lg font-medium"
          >
            Watch Demo
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/30">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">5 Min</div>
            <div className="text-sm text-muted-foreground">Quick Assessment</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary mb-1">AI-Powered</div>
            <div className="text-sm text-muted-foreground">Smart Calculations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">Comprehensive</div>
            <div className="text-sm text-muted-foreground">Detailed Reports</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;