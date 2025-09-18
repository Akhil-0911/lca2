import React from 'react';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const EnergySourceStep = ({ formData, updateFormData }) => {
  const energyOptions = [
    { 
      value: 'coal', 
      label: 'Coal',
      description: 'Traditional fossil fuel with high carbon emissions'
    },
    { 
      value: 'grid', 
      label: 'Grid Mix',
      description: 'Standard electrical grid with mixed energy sources'
    },
    { 
      value: 'renewable', 
      label: 'Renewable Mix',
      description: 'Clean energy from solar, wind, and hydroelectric sources'
    }
  ];

  const handleEnergyChange = (value) => {
    updateFormData({ energySource: value });
  };

  const getEnergyImpact = (energyType) => {
    switch (energyType) {
      case 'coal': 
        return { 
          level: 'High Impact', 
          color: 'text-error', 
          bg: 'bg-error/10',
          icon: 'Zap',
          emissions: '820-1,050 kg CO₂/MWh',
          description: 'Highest carbon footprint with significant environmental impact'
        };
      case 'grid': 
        return { 
          level: 'Medium Impact', 
          color: 'text-warning', 
          bg: 'bg-warning/10',
          icon: 'Power',
          emissions: '400-600 kg CO₂/MWh',
          description: 'Mixed energy sources with moderate environmental impact'
        };
      case 'renewable': 
        return { 
          level: 'Low Impact', 
          color: 'text-success', 
          bg: 'bg-success/10',
          icon: 'Leaf',
          emissions: '10-50 kg CO₂/MWh',
          description: 'Clean energy with minimal environmental footprint'
        };
      default: 
        return { 
          level: 'Unknown', 
          color: 'text-muted-foreground', 
          bg: 'bg-muted/10',
          icon: 'Battery',
          emissions: 'Select energy source',
          description: 'Choose an energy source to see environmental impact'
        };
    }
  };

  const impact = getEnergyImpact(formData?.energySource);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center w-16 h-16 bg-warning/10 rounded-full mx-auto mb-4">
          <Icon name="Battery" size={32} color="var(--color-warning)" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Energy Source
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Select your primary energy source for production operations. Energy choice significantly impacts your carbon footprint and sustainability metrics.
        </p>
      </div>
      <div className="max-w-md mx-auto">
        <Select
          label="Primary Energy Source"
          description="Choose the main energy source for your production facility"
          options={energyOptions}
          value={formData?.energySource}
          onChange={handleEnergyChange}
          placeholder="Select energy source..."
          required
        />
      </div>
      {formData?.energySource && (
        <div className={`border border-border rounded-lg p-4 max-w-md mx-auto ${impact?.bg}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Icon name={impact?.icon} size={20} color="var(--color-primary)" />
              <h4 className="text-sm font-medium text-foreground">
                Carbon Emissions
              </h4>
            </div>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${impact?.bg} ${impact?.color}`}>
              {impact?.level}
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Emission Range:</span>
              <span className="font-medium text-foreground">{impact?.emissions}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              {impact?.description}
            </p>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        <div className="bg-error/5 border border-error/20 rounded-lg p-4 text-center">
          <Icon name="Zap" size={24} color="var(--color-error)" className="mx-auto mb-2" />
          <h4 className="text-sm font-medium text-foreground mb-1">Coal</h4>
          <p className="text-xs text-error mb-2">High Emissions</p>
          <p className="text-xs text-muted-foreground">820-1,050 kg CO₂/MWh</p>
        </div>
        <div className="bg-warning/5 border border-warning/20 rounded-lg p-4 text-center">
          <Icon name="Power" size={24} color="var(--color-warning)" className="mx-auto mb-2" />
          <h4 className="text-sm font-medium text-foreground mb-1">Grid Mix</h4>
          <p className="text-xs text-warning mb-2">Medium Emissions</p>
          <p className="text-xs text-muted-foreground">400-600 kg CO₂/MWh</p>
        </div>
        <div className="bg-success/5 border border-success/20 rounded-lg p-4 text-center">
          <Icon name="Leaf" size={24} color="var(--color-success)" className="mx-auto mb-2" />
          <h4 className="text-sm font-medium text-foreground mb-1">Renewable</h4>
          <p className="text-xs text-success mb-2">Low Emissions</p>
          <p className="text-xs text-muted-foreground">10-50 kg CO₂/MWh</p>
        </div>
      </div>
      <div className="bg-muted/50 rounded-lg p-4 max-w-md mx-auto">
        <div className="flex items-start space-x-3">
          <Icon name="TrendingDown" size={20} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-foreground mb-1">
              Sustainability Tip
            </h4>
            <p className="text-xs text-muted-foreground">
              Switching to renewable energy can reduce your production carbon footprint by up to 95% compared to coal-based energy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergySourceStep;