import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessOverview = () => {
  const steps = [
    {
      step: 1,
      icon: "Settings",
      title: "Configure Assessment",
      description: "Select metal type, production process, and scale parameters through our intuitive 5-step form."
    },
    {
      step: 2,
      icon: "Cpu",
      title: "AI Analysis",
      description: "Our advanced algorithms calculate environmental impact metrics including carbon footprint and energy consumption."
    },
    {
      step: 3,
      icon: "BarChart3",
      title: "Visual Results",
      description: "View comprehensive dashboards with interactive charts comparing conventional vs circular economy metrics."
    },
    {
      step: 4,
      icon: "Lightbulb",
      title: "Get Recommendations",
      description: "Receive actionable insights and optimization strategies tailored to your specific production process."
    },
    {
      step: 5,
      icon: "Download",
      title: "Export Reports",
      description: "Generate professional PDF reports with embedded charts and recommendations for stakeholders."
    }
  ];

  return (
    <div className="bg-card rounded-xl p-8 md:p-12 shadow-earth-md border border-border">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-card-foreground mb-4">
          How It Works
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Complete your sustainability assessment in 5 simple steps, from configuration to comprehensive reporting
        </p>
      </div>
      <div className="space-y-8">
        {steps?.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6 group">
            {/* Step Number & Icon */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-earth">
                {step?.step}
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={step?.icon} size={28} color="var(--color-primary)" strokeWidth={2} />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                {step?.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step?.description}
              </p>
            </div>

            {/* Connector Line */}
            {index < steps?.length - 1 && (
              <div className="hidden md:block w-px h-16 bg-border ml-6"></div>
            )}
          </div>
        ))}
      </div>
      {/* Demo CTA */}
      <div className="mt-12 pt-8 border-t border-border text-center">
        <div className="bg-accent/10 rounded-lg p-6 inline-block">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Icon name="Zap" size={20} color="var(--color-accent)" strokeWidth={2.5} />
            <span className="font-semibold text-foreground">Quick Demo Available</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Try our "Aluminum Recycling" preset to see the tool in action
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessOverview;