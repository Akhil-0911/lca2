import React from 'react';
import Icon from '../../../components/AppIcon';

const WasteManagementStep = ({ formData, updateFormData }) => {
  const handleScrapRatioChange = (e) => {
    const value = parseFloat(e?.target?.value) || 0;
    updateFormData({ scrapRatio: Math.min(100, Math.max(0, value)) });
  };

  const handleRecyclingRateChange = (e) => {
    const value = parseFloat(e?.target?.value) || 0;
    updateFormData({ recyclingRate: Math.min(100, Math.max(0, value)) });
  };

  const handleWasteRatioChange = (e) => {
    const value = parseFloat(e?.target?.value) || 0;
    updateFormData({ wasteRatio: Math.min(100, Math.max(0, value)) });
  };

  const handleEnergyRecoveryRateChange = (e) => {
    const value = parseFloat(e?.target?.value) || 0;
    updateFormData({ energyRecoveryRate: Math.min(100, Math.max(0, value)) });
  };

  const getCircularityScore = () => {
    const scrap = formData?.scrapRatio || 0;
    const recycling = formData?.recyclingRate || 0;
    const energyRecovery = formData?.energyRecoveryRate || 0;
    const waste = formData?.wasteRatio || 0;
    
    // Circularity = (scrap use + recycling + energy recovery) - waste
    return Math.max(0, (scrap + recycling + energyRecovery) / 3 - waste);
  };

  const getCircularityLevel = (score) => {
    if (score >= 80) return { level: 'Excellent', color: 'text-success', bg: 'bg-success' };
    if (score >= 60) return { level: 'Good', color: 'text-success', bg: 'bg-success' };
    if (score >= 40) return { level: 'Fair', color: 'text-warning', bg: 'bg-warning' };
    if (score >= 20) return { level: 'Poor', color: 'text-error', bg: 'bg-error' };
    return { level: 'Very Poor', color: 'text-error', bg: 'bg-error' };
  };

  const circularityScore = getCircularityScore();
  const circularity = getCircularityLevel(circularityScore);

  const handleWasteStreamChange = (stream, value) => {
    const wasteStreams = {
      ...formData?.wasteStreams,
      [stream]: value
    };
    updateFormData({ wasteStreams });
  };

  const wasteStreamOptions = [
    { 
      id: 'slag', 
      label: 'Metallurgical Slag', 
      description: 'By-product from smelting/refining',
      icon: 'Zap'
    },
    { 
      id: 'dust', 
      label: 'Filter Dust', 
      description: 'Collected particulate matter',
      icon: 'Cloud'
    },
    { 
      id: 'water', 
      label: 'Process Water', 
      description: 'Contaminated water streams',
      icon: 'Droplets'
    },
    { 
      id: 'offgas', 
      label: 'Off-gas Treatment', 
      description: 'Cleaned exhaust gases',
      icon: 'Wind'
    },
    { 
      id: 'tailings', 
      label: 'Mine Tailings', 
      description: 'Mineral processing residue',
      icon: 'Mountain'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
          <Icon name="Recycle" size={32} color="var(--color-success)" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Waste Management & Circularity
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Configure waste management strategies and circular economy practices. These parameters are essential for circularity scoring and environmental impact assessment.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* Scrap Ratio */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground">
              Scrap Input Ratio
            </label>
            <span className="text-lg font-bold text-secondary">
              {formData?.scrapRatio?.toFixed(1) || '0.0'}%
            </span>
          </div>
          
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={formData?.scrapRatio || 0}
              onChange={handleScrapRatioChange}
              className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, var(--color-secondary) 0%, var(--color-secondary) ${formData?.scrapRatio || 0}%, var(--color-muted) ${formData?.scrapRatio || 0}%, var(--color-muted) 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>0% Virgin</span>
              <span>50% Mixed</span>
              <span>100% Scrap</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Percentage of input materials from scrap metal sources
          </p>
        </div>

        {/* Recycling Rate */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground">
              Internal Recycling Rate
            </label>
            <span className="text-lg font-bold text-success">
              {formData?.recyclingRate?.toFixed(1) || '0.0'}%
            </span>
          </div>
          
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={formData?.recyclingRate || 0}
              onChange={handleRecyclingRateChange}
              className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, var(--color-success) 0%, var(--color-success) ${formData?.recyclingRate || 0}%, var(--color-muted) ${formData?.recyclingRate || 0}%, var(--color-muted) 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>0% Linear</span>
              <span>50% Mixed</span>
              <span>100% Circular</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Percentage of process waste that is recycled back into production
          </p>
        </div>

        {/* Waste Ratio */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground">
              Final Waste Ratio
            </label>
            <span className="text-lg font-bold text-error">
              {formData?.wasteRatio?.toFixed(1) || '0.0'}%
            </span>
          </div>
          
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={formData?.wasteRatio || 0}
              onChange={handleWasteRatioChange}
              className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, var(--color-error) 0%, var(--color-error) ${formData?.wasteRatio || 0}%, var(--color-muted) ${formData?.wasteRatio || 0}%, var(--color-muted) 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>0% Zero Waste</span>
              <span>25% Moderate</span>
              <span>100% All Waste</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Percentage of inputs that become unrecoverable waste
          </p>
        </div>

        {/* Energy Recovery Rate */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground">
              Energy Recovery Rate
            </label>
            <span className="text-lg font-bold text-warning">
              {formData?.energyRecoveryRate?.toFixed(1) || '0.0'}%
            </span>
          </div>
          
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={formData?.energyRecoveryRate || 0}
              onChange={handleEnergyRecoveryRateChange}
              className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, var(--color-warning) 0%, var(--color-warning) ${formData?.energyRecoveryRate || 0}%, var(--color-muted) ${formData?.energyRecoveryRate || 0}%, var(--color-muted) 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>0% No Recovery</span>
              <span>50% Partial</span>
              <span>100% Full Recovery</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Percentage of waste heat/energy that is captured and reused
          </p>
        </div>

        {/* Circularity Score Display */}
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Icon name="RotateCcw" size={20} color="var(--color-primary)" />
              <h4 className="text-sm font-medium text-foreground">
                Circularity Score
              </h4>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">
                {circularityScore.toFixed(1)}%
              </span>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                circularity?.level === 'Excellent' || circularity?.level === 'Good' ? 'bg-success/10 text-success' :
                circularity?.level === 'Fair' ? 'bg-warning/10 text-warning' : 'bg-error/10 text-error'
              }`}>
                {circularity?.level}
              </span>
            </div>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Scrap Utilization:</span>
              <span className="font-medium">{formData?.scrapRatio?.toFixed(1) || '0.0'}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Internal Recycling:</span>
              <span className="font-medium">{formData?.recyclingRate?.toFixed(1) || '0.0'}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Energy Recovery:</span>
              <span className="font-medium">{formData?.energyRecoveryRate?.toFixed(1) || '0.0'}%</span>
            </div>
          </div>
        </div>

        {/* Waste Stream Management */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">
            Waste Stream Management
          </h4>
          <div className="space-y-3">
            {wasteStreamOptions.map(stream => (
              <div key={stream.id} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Icon name={stream.icon} size={16} color="var(--color-muted-foreground)" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-foreground">
                    {stream.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stream.description}
                  </div>
                </div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={formData?.wasteStreams?.[stream.id] || false}
                    onChange={(e) => handleWasteStreamChange(stream.id, e.target.checked)}
                    className="form-checkbox h-4 w-4 text-primary"
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-4 max-w-md mx-auto">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} color="var(--color-accent)" className="mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-foreground mb-1">
              Circular Economy Impact
            </h4>
            <p className="text-xs text-muted-foreground">
              Higher scrap utilization, recycling rates, and energy recovery improve circularity scores. Lower waste ratios reduce environmental impact. These parameters directly influence AI model predictions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteManagementStep;