import React from 'react';
import Icon from '../../../components/AppIcon';

const RecycledContentStep = ({ formData, updateFormData }) => {
  const handleSliderChange = (e) => {
    const value = parseInt(e?.target?.value);
    updateFormData({ recycledContent: value });
  };

  const getImpactLevel = (percentage) => {
    if (percentage >= 80) return { level: 'Excellent', color: 'text-success', bg: 'bg-success' };
    if (percentage >= 60) return { level: 'Good', color: 'text-success', bg: 'bg-success' };
    if (percentage >= 40) return { level: 'Moderate', color: 'text-warning', bg: 'bg-warning' };
    if (percentage >= 20) return { level: 'Fair', color: 'text-warning', bg: 'bg-warning' };
    return { level: 'Poor', color: 'text-error', bg: 'bg-error' };
  };

  const impact = getImpactLevel(formData?.recycledContent || 0);

  const getBenefitText = (percentage) => {
    if (percentage >= 80) return 'Outstanding circular economy practices with minimal virgin material usage.';
    if (percentage >= 60) return 'Strong sustainability performance with significant recycled content.';
    if (percentage >= 40) return 'Moderate environmental benefits from recycled material integration.';
    if (percentage >= 20) return 'Basic recycling efforts with room for improvement.';
    return 'High reliance on virgin materials with significant environmental impact.';
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mx-auto mb-4">
          <Icon name="Recycle" size={32} color="var(--color-success)" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Recycled Content Percentage
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Specify the percentage of recycled materials in your production process. Higher recycled content significantly reduces environmental impact.
        </p>
      </div>
      <div className="max-w-md mx-auto">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground">
              Recycled Content
            </label>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">
                {formData?.recycledContent || 0}%
              </span>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                impact?.level === 'Excellent' || impact?.level === 'Good' ? 'bg-success/10 text-success' :
                impact?.level === 'Moderate'|| impact?.level === 'Fair' ? 'bg-warning/10 text-warning' : 'bg-error/10 text-error'
              }`}>
                {impact?.level}
              </span>
            </div>
          </div>

          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={formData?.recycledContent || 0}
              onChange={handleSliderChange}
              className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, var(--color-success) 0%, var(--color-success) ${formData?.recycledContent || 0}%, var(--color-muted) ${formData?.recycledContent || 0}%, var(--color-muted) 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>0% Virgin</span>
              <span>50% Mixed</span>
              <span>100% Recycled</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-card border border-border rounded-lg p-4 max-w-md mx-auto">
        <div className="flex items-center space-x-3 mb-3">
          <Icon name="Leaf" size={20} color="var(--color-success)" />
          <h4 className="text-sm font-medium text-foreground">
            Environmental Impact
          </h4>
        </div>
        <p className="text-xs text-muted-foreground mb-3">
          {getBenefitText(formData?.recycledContent || 0)}
        </p>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">CO₂ Reduction:</span>
          <span className="font-medium text-success">
            ~{Math.round((formData?.recycledContent || 0) * 0.8)}%
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
        <div className="bg-muted/30 rounded-lg p-3 text-center">
          <div className="w-8 h-8 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-xs font-bold text-error">0%</span>
          </div>
          <p className="text-xs text-muted-foreground">Virgin Only</p>
        </div>
        <div className="bg-muted/30 rounded-lg p-3 text-center">
          <div className="w-8 h-8 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-xs font-bold text-warning">25%</span>
          </div>
          <p className="text-xs text-muted-foreground">Low Recycled</p>
        </div>
        <div className="bg-muted/30 rounded-lg p-3 text-center">
          <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-xs font-bold text-success">75%</span>
          </div>
          <p className="text-xs text-muted-foreground">High Recycled</p>
        </div>
        <div className="bg-muted/30 rounded-lg p-3 text-center">
          <div className="w-8 h-8 bg-success/30 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-xs font-bold text-success">100%</span>
          </div>
          <p className="text-xs text-muted-foreground">Fully Circular</p>
        </div>
      </div>
    </div>
  );
};

export default RecycledContentStep;