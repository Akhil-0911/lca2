import React from 'react';
import Icon from '../../../components/AppIcon';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Zap",
      title: "Lightning Fast Analysis",
      description: "Complete comprehensive LCA assessments in minutes instead of weeks with our AI-powered calculation engine."
    },
    {
      icon: "Target",
      title: "Precision Insights",
      description: "Get accurate environmental impact metrics for carbon footprint, energy consumption, and water usage."
    },
    {
      icon: "Recycle",
      title: "Circular Economy Focus",
      description: "Optimize your transition to sustainable practices with actionable recommendations for circular processes."
    },
    {
      icon: "BarChart3",
      title: "Visual Analytics",
      description: "Interactive charts and dashboards make complex sustainability data easy to understand and present."
    },
    {
      icon: "FileText",
      title: "Professional Reports",
      description: "Generate comprehensive PDF reports with embedded charts and recommendations for stakeholders."
    },
    {
      icon: "Shield",
      title: "Industry Compliance",
      description: "Meet regulatory requirements and industry standards with certified assessment methodologies."
    }
  ];

  return (
    <div className="bg-card rounded-xl p-8 md:p-12 shadow-earth-md border border-border">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-card-foreground mb-4">
          Why Choose EcoLCA Pro?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Built specifically for sustainability professionals who need reliable, fast, and comprehensive life cycle assessments
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits?.map((benefit, index) => (
          <div key={index} className="group">
            <div className="bg-background rounded-lg p-6 h-full border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-earth-md">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={benefit?.icon} size={24} color="var(--color-primary)" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {benefit?.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;