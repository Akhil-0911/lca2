import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const certifications = [
    {
      icon: "Shield",
      title: "ISO 14040/14044",
      description: "Certified LCA Standards"
    },
    {
      icon: "Lock",
      title: "SSL Secured",
      description: "Enterprise Security"
    },
    {
      icon: "Award",
      title: "GHG Protocol",
      description: "Compliant Methodology"
    },
    {
      icon: "CheckCircle",
      title: "GDPR Compliant",
      description: "Data Protection"
    }
  ];

  const stats = [
    {
      number: "500+",
      label: "Assessments Completed",
      icon: "TrendingUp"
    },
    {
      number: "50+",
      label: "Manufacturing Partners",
      icon: "Building2"
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      icon: "Clock"
    },
    {
      number: "24/7",
      label: "Expert Support",
      icon: "Headphones"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Trust Badges */}
      <div className="bg-card rounded-xl p-8 shadow-earth border border-border">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-heading font-bold text-card-foreground mb-2">
            Trusted by Industry Leaders
          </h3>
          <p className="text-muted-foreground">
            Certified and compliant with international sustainability standards
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications?.map((cert, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={cert?.icon} size={28} color="var(--color-primary)" strokeWidth={2} />
              </div>
              <h4 className="font-semibold text-foreground mb-1 text-sm">
                {cert?.title}
              </h4>
              <p className="text-xs text-muted-foreground">
                {cert?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Statistics */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 border border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-background rounded-lg mx-auto mb-3 shadow-earth">
                <Icon name={stat?.icon} size={20} color="var(--color-primary)" strokeWidth={2.5} />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat?.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;