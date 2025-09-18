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
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
          <Icon name="Zap" size={32} color="var(--color-primary)" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Select Metal Type
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Choose the primary metal or critical mineral for your production process. This selection determines the baseline environmental impact calculations and available processing routes.
        </p>
      </div>
      <div className="max-w-md mx-auto">
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
      <div className="bg-muted/50 rounded-lg p-4 max-w-md mx-auto">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-foreground mb-1">
              Why Metal Selection Matters
            </h4>
            <p className="text-xs text-muted-foreground">
              Different metals and critical minerals have varying environmental footprints based on extraction methods, energy requirements, recyclability potential, and geopolitical supply chain factors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetalTypeStep;