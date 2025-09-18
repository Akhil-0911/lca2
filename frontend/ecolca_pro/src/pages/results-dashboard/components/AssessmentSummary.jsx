import React from 'react';
import Icon from '../../../components/AppIcon';

const AssessmentSummary = ({ assessmentData }) => {
  const mockData = {
    metalType: 'Aluminum',
    processRoute: 'Recycling',
    productionScale: 5000,
    recycledContent: 85,
    energySource: 'Renewable Mix',
    assessmentDate: '2025-09-15',
    assessmentId: 'LCA-2025-0915-001',
    ...assessmentData
  };

  const summaryItems = [
    {
      label: 'Metal Type',
      value: mockData?.metalType,
      icon: 'Zap'
    },
    {
      label: 'Process Route',
      value: mockData?.processRoute,
      icon: 'Settings'
    },
    {
      label: 'Production Scale',
      value: `${mockData?.productionScale?.toLocaleString()} tons/year`,
      icon: 'TrendingUp'
    },
    {
      label: 'Recycled Content',
      value: `${mockData?.recycledContent}%`,
      icon: 'RotateCcw'
    },
    {
      label: 'Energy Source',
      value: mockData?.energySource,
      icon: 'Zap'
    },
    {
      label: 'Assessment Date',
      value: new Date(mockData.assessmentDate)?.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      icon: 'Calendar'
    }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-earth">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Assessment Summary</h3>
            <p className="text-sm text-muted-foreground">Input parameters used for this analysis</p>
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground">Assessment ID</div>
            <div className="text-sm font-mono text-foreground">{mockData?.assessmentId}</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {summaryItems?.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Icon name={item?.icon} size={16} strokeWidth={2} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-muted-foreground font-medium">{item?.label}</div>
              <div className="text-sm font-semibold text-foreground truncate">{item?.value}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={16} className="text-primary mt-0.5" strokeWidth={2} />
          <div className="text-sm">
            <p className="font-medium text-primary mb-1">Methodology Note</p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              This assessment follows ISO 14040/14044 standards for Life Cycle Assessment. 
              Results are based on industry-standard databases and peer-reviewed methodologies 
              for {mockData?.metalType?.toLowerCase()} production via {mockData?.processRoute?.toLowerCase()}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentSummary;