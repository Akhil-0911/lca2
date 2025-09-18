import React from 'react';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const ProcessRouteStep = ({ formData, updateFormData }) => {
  const processOptions = [
    { 
      value: 'smelting', 
      label: 'Smelting & Pyrometallurgy',
      description: 'High-temperature metal extraction from ore using furnaces'
    },
    { 
      value: 'recycling', 
      label: 'Secondary Recycling',
      description: 'Metal recovery from scrap and waste materials'
    },
    { 
      value: 'alloying', 
      label: 'Alloying & Blending',
      description: 'Combining metals to create specialized alloy compositions'
    }
  ];

  const handleProcessChange = (value) => {
    updateFormData({ processRoute: value });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-4">
          <Icon name="Settings" size={32} color="var(--color-secondary)" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Choose Process Route
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Select the production method that best describes your manufacturing process. This classification is critical for AI model accuracy.
        </p>
      </div>
      <div className="max-w-md mx-auto">
        <Select
          label="Process Route"
          description="Select the primary production method for your metal processing"
          options={processOptions}
          value={formData?.processRoute}
          onChange={handleProcessChange}
          placeholder="Choose a process route..."
          required
          searchable
        />
      </div>
      <div className="bg-muted/50 rounded-lg p-4 max-w-md mx-auto">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-foreground mb-1">
              Why Process Selection Matters
            </h4>
            <p className="text-xs text-muted-foreground">
              Different process routes have varying environmental footprints based on energy requirements, waste generation, and resource efficiency. This selection affects AI model predictions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessRouteStep;