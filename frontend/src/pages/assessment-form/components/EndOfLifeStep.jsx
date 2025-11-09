import React from 'react';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const EndOfLifeStep = ({ formData, updateFormData }) => {
  const endOfLifeOptions = [
    { 
      value: 'recycling', 
      label: 'Material Recycling',
      description: 'Recovery and reprocessing into new materials (highest circularity)'
    },
    { 
      value: 'reuse', 
      label: 'Direct Reuse',
      description: 'Use in same or similar applications without reprocessing'
    },
    { 
      value: 'remanufacturing', 
      label: 'Remanufacturing',
      description: 'Restoration to original specifications and quality'
    },
    { 
      value: 'energy_recovery', 
      label: 'Energy Recovery',
      description: 'Thermal treatment with energy recovery (for applicable materials)'
    },
    { 
      value: 'downcycling', 
      label: 'Downcycling',
      description: 'Conversion to lower-grade applications'
    },
    { 
      value: 'landfill', 
      label: 'Landfill Disposal',
      description: 'Final disposal with no recovery (least sustainable)'
    }
  ];

  const recoveryRateRanges = [
    { value: 'high', label: 'High Recovery (80-95%)', description: 'Advanced recovery systems' },
    { value: 'medium', label: 'Medium Recovery (50-80%)', description: 'Standard recovery processes' },
    { value: 'low', label: 'Low Recovery (20-50%)', description: 'Basic recovery infrastructure' },
    { value: 'minimal', label: 'Minimal Recovery (<20%)', description: 'Limited recovery capabilities' }
  ];

  const handleEndOfLifeChange = (value) => {
    updateFormData({ endOfLifeScenario: value });
  };

  const handleRecoveryRateChange = (value) => {
    updateFormData({ recoveryRate: value });
  };

  const handleCustomRecoveryChange = (e) => {
    const value = parseFloat(e?.target?.value) || 0;
    updateFormData({ customRecoveryRate: Math.min(100, Math.max(0, value)) });
  };

  const getEndOfLifeImpact = (scenario) => {
    const impacts = {
      recycling: { 
        level: 'Excellent', 
        color: 'text-success', 
        circularityBonus: '+40%',
        description: 'Highest environmental benefit with closed-loop material flows'
      },
      reuse: { 
        level: 'Excellent', 
        color: 'text-success', 
        circularityBonus: '+35%',
        description: 'Minimal processing required, excellent resource efficiency'
      },
      remanufacturing: { 
        level: 'Very Good', 
        color: 'text-success', 
        circularityBonus: '+30%',
        description: 'Restoration extends product life significantly'
      },
      energy_recovery: { 
        level: 'Moderate', 
        color: 'text-warning', 
        circularityBonus: '+15%',
        description: 'Energy benefit but material value is lost'
      },
      downcycling: { 
        level: 'Fair', 
        color: 'text-warning', 
        circularityBonus: '+10%',
        description: 'Some material recovery but reduced quality'
      },
      landfill: { 
        level: 'Poor', 
        color: 'text-error', 
        circularityBonus: '0%',
        description: 'No resource recovery, highest environmental burden'
      }
    };
    return impacts[scenario] || { 
      level: 'Unknown', 
      color: 'text-muted-foreground', 
      circularityBonus: '0%',
      description: 'Select end-of-life scenario to see impact'
    };
  };

  const impact = getEndOfLifeImpact(formData?.endOfLifeScenario);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
          <Icon name="RotateCcw" size={32} color="var(--color-success)" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          End-of-Life Scenario
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Define how materials will be managed at the end of their useful life. This significantly impacts overall sustainability and circularity performance.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* End-of-Life Scenario Selection */}
        <Select
          label="Primary End-of-Life Pathway"
          description="Choose the main pathway for material recovery or disposal"
          options={endOfLifeOptions}
          value={formData?.endOfLifeScenario}
          onChange={handleEndOfLifeChange}
          placeholder="Select end-of-life scenario..."
          required
        />

        {/* Recovery Rate Selection */}
        {formData?.endOfLifeScenario && formData?.endOfLifeScenario !== 'landfill' && (
          <Select
            label="Material Recovery Rate"
            description="Select the expected recovery efficiency for your scenario"
            options={recoveryRateRanges}
            value={formData?.recoveryRate}
            onChange={handleRecoveryRateChange}
            placeholder="Select recovery rate..."
            required
          />
        )}

        {/* Custom Recovery Rate Input */}
        {formData?.endOfLifeScenario && formData?.endOfLifeScenario !== 'landfill' && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Specific Recovery Rate (Optional)
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                max="100"
                step="1"
                value={formData?.customRecoveryRate || ''}
                onChange={handleCustomRecoveryChange}
                placeholder="Enter recovery rate percentage"
                className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
              />
              <span className="absolute right-3 top-2 text-sm text-muted-foreground">%</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Override rate range with specific value for more accurate calculations
            </p>
          </div>
        )}
      </div>

      {/* End-of-Life Impact Display */}
      {formData?.endOfLifeScenario && (
        <div className="bg-card border border-border rounded-lg p-4 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Icon name="Target" size={20} color="var(--color-primary)" />
              <h4 className="text-sm font-medium text-foreground">
                Circularity Impact
              </h4>
            </div>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              impact?.level === 'Excellent' || impact?.level === 'Very Good' ? 'bg-success/10 text-success' :
              impact?.level === 'Moderate' || impact?.level === 'Fair' ? 'bg-warning/10 text-warning' : 
              'bg-error/10 text-error'
            }`}>
              {impact?.level}
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">Circularity Bonus:</span>
            <span className="text-xs font-medium text-primary">{impact?.circularityBonus}</span>
          </div>
          <p className="text-xs text-muted-foreground">
            {impact?.description}
          </p>
        </div>
      )}

      <div className="bg-muted/50 rounded-lg p-4 max-w-md mx-auto">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} color="var(--color-accent)" className="mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-foreground mb-1">
              Circular Economy Hierarchy
            </h4>
            <p className="text-xs text-muted-foreground">
              The circular economy prioritizes: Reuse → Remanufacturing → Recycling → Energy Recovery → Disposal. 
              Higher-level strategies provide greater environmental and economic benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndOfLifeStep;