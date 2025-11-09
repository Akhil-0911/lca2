import React from 'react';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const MetalTypeStep = ({ formData, updateFormData }) => {
  const metalOptions = [
    { 
      value: 'aluminum', 
      label: 'Aluminum',
      description: 'Lightweight metal with excellent corrosion resistance'
    },
    { 
      value: 'copper', 
      label: 'Copper',
      description: 'Highly conductive metal for electrical applications'
    },
    { 
      value: 'steel', 
      label: 'Steel',
      description: 'Strong alloy of iron and carbon for construction'
    },
    { 
      value: 'lithium', 
      label: 'Lithium',
      description: 'Critical mineral for battery production and energy storage'
    },
    { 
      value: 'cobalt', 
      label: 'Cobalt',
      description: 'Critical mineral for battery cathodes and superalloys'
    },
    { 
      value: 'nickel', 
      label: 'Nickel',
      description: 'Critical mineral for stainless steel and battery production'
    },
    { 
      value: 'rare_earth', 
      label: 'Rare Earth Elements',
      description: 'Critical minerals for electronics, magnets, and green technology'
    },
    { 
      value: 'zinc', 
      label: 'Zinc',
      description: 'Corrosion-resistant metal for galvanizing and alloys'
    },
    { 
      value: 'titanium', 
      label: 'Titanium',
      description: 'High-strength, lightweight metal for aerospace and medical applications'
    }
  ];

  const handleMetalChange = (value) => {
    updateFormData({ metalType: value });
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl mx-auto mb-6 shadow-earth-lg">
          <Icon name="Zap" size={40} color="white" strokeWidth={2.5} />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Select Metal Type
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-lg leading-relaxed">
          Choose the primary metal or critical mineral for your production process. This selection determines the baseline environmental impact calculations and available processing routes.
        </p>
      </div>
      
      <div className="max-w-lg mx-auto">
        <Select
          label="Metal Type"
          description="Select the metal or critical mineral you want to analyze for environmental impact"
          options={metalOptions}
          value={formData?.metalType}
          onChange={handleMetalChange}
          placeholder="Choose a metal or critical mineral..."
          required
          searchable
        />
      </div>
      
      <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8 max-w-lg mx-auto border border-border/50">
        <div className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-10 h-10 bg-primary/20 rounded-xl flex-shrink-0 mt-1">
            <Icon name="Info" size={24} color="var(--color-primary)" strokeWidth={2.5} />
          </div>
          <div>
            <h4 className="text-lg font-bold text-foreground mb-3">
              Why Metal Selection Matters
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Different metals and critical minerals have varying environmental footprints based on extraction methods, energy requirements, recyclability potential, and geopolitical supply chain factors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetalTypeStep;