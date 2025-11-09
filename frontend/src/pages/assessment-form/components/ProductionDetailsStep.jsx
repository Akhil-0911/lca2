import React from 'react';
import Icon from '../../../components/AppIcon';

const ProductionDetailsStep = ({ formData, updateFormData }) => {
  const handleTotalInputsChange = (e) => {
    const value = parseFloat(e?.target?.value) || 0;
    updateFormData({ totalInputs: value });
    // Auto-calculate total outputs based on material efficiency if available
    if (formData?.materialEfficiency) {
      updateFormData({ totalOutputs: value * formData.materialEfficiency / 100 });
    }
  };

  const handleTotalOutputsChange = (e) => {
    const value = parseFloat(e?.target?.value) || 0;
    updateFormData({ totalOutputs: value });
    // Auto-calculate material efficiency
    if (formData?.totalInputs && formData?.totalInputs > 0) {
      updateFormData({ materialEfficiency: (value / formData.totalInputs) * 100 });
    }
  };

  const handleMaterialEfficiencyChange = (e) => {
    const value = parseFloat(e?.target?.value) || 0;
    updateFormData({ materialEfficiency: Math.min(100, Math.max(0, value)) });
    // Auto-calculate total outputs if total inputs are available
    if (formData?.totalInputs) {
      updateFormData({ totalOutputs: formData.totalInputs * value / 100 });
    }
  };

  const handleSecondaryMaterialChange = (e) => {
    const value = parseInt(e?.target?.value) || 0;
    updateFormData({ secondaryMaterialFraction: Math.min(100, Math.max(0, value)) });
  };

  const getEfficiencyLevel = (efficiency) => {
    if (efficiency >= 90) return { level: 'Excellent', color: 'text-success', bg: 'bg-success' };
    if (efficiency >= 80) return { level: 'Very Good', color: 'text-success', bg: 'bg-success' };
    if (efficiency >= 70) return { level: 'Good', color: 'text-warning', bg: 'bg-warning' };
    if (efficiency >= 60) return { level: 'Fair', color: 'text-warning', bg: 'bg-warning' };
    return { level: 'Poor', color: 'text-error', bg: 'bg-error' };
  };

  const efficiency = getEfficiencyLevel(formData?.materialEfficiency || 0);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
          <Icon name="Calculator" size={32} color="var(--color-primary)" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Production Details
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Specify detailed production parameters. These values are critical for accurate AI model predictions and environmental impact calculations.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* Total Inputs */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Total Material Inputs (tons/year) *
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              step="0.1"
              value={formData?.totalInputs || ''}
              onChange={handleTotalInputsChange}
              placeholder="Enter total input materials"
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
              required
            />
            <span className="absolute right-3 top-2 text-sm text-muted-foreground">tons/year</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Total weight of all raw materials, scrap, and secondary materials entering the process
          </p>
        </div>

        {/* Total Outputs */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Total Material Outputs (tons/year) *
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              step="0.1"
              value={formData?.totalOutputs || ''}
              onChange={handleTotalOutputsChange}
              placeholder="Enter total output materials"
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
              required
            />
            <span className="absolute right-3 top-2 text-sm text-muted-foreground">tons/year</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Total weight of finished products and recoverable by-products leaving the process
          </p>
        </div>

        {/* Material Efficiency */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground">
              Material Efficiency
            </label>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">
                {formData?.materialEfficiency?.toFixed(1) || '0.0'}%
              </span>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                efficiency?.level === 'Excellent' || efficiency?.level === 'Very Good' ? 'bg-success/10 text-success' :
                efficiency?.level === 'Good' || efficiency?.level === 'Fair' ? 'bg-warning/10 text-warning' : 'bg-error/10 text-error'
              }`}>
                {efficiency?.level}
              </span>
            </div>
          </div>
          
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={formData?.materialEfficiency || 0}
              onChange={handleMaterialEfficiencyChange}
              className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${formData?.materialEfficiency || 0}%, var(--color-muted) ${formData?.materialEfficiency || 0}%, var(--color-muted) 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>0% Poor</span>
              <span>50% Average</span>
              <span>100% Perfect</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Ratio of useful output to total input materials (Output ÷ Input × 100)
          </p>
        </div>

        {/* Secondary Material Fraction */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground">
              Secondary Material Fraction
            </label>
            <span className="text-lg font-bold text-secondary">
              {formData?.secondaryMaterialFraction || 0}%
            </span>
          </div>
          
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={formData?.secondaryMaterialFraction || 0}
              onChange={handleSecondaryMaterialChange}
              className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, var(--color-secondary) 0%, var(--color-secondary) ${formData?.secondaryMaterialFraction || 0}%, var(--color-muted) ${formData?.secondaryMaterialFraction || 0}%, var(--color-muted) 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>0% Virgin</span>
              <span>50% Mixed</span>
              <span>100% Secondary</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Percentage of input materials that are recycled, reused, or recovered (not virgin materials)
          </p>
        </div>
      </div>

      {/* Calculation Summary */}
      {formData?.totalInputs && formData?.totalOutputs && (
        <div className="bg-card border border-border rounded-lg p-4 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Icon name="BarChart3" size={20} color="var(--color-primary)" />
              <h4 className="text-sm font-medium text-foreground">
                Production Summary
              </h4>
            </div>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Material Loss:</span>
              <span className="font-medium">{((formData.totalInputs - formData.totalOutputs) / formData.totalInputs * 100).toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Waste Generated:</span>
              <span className="font-medium">{(formData.totalInputs - formData.totalOutputs).toFixed(1)} tons/year</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Secondary Materials:</span>
              <span className="font-medium">{(formData.totalInputs * (formData.secondaryMaterialFraction || 0) / 100).toFixed(1)} tons/year</span>
            </div>
          </div>
        </div>
      )}

      <div className="bg-muted/50 rounded-lg p-4 max-w-md mx-auto">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} color="var(--color-accent)" className="mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-foreground mb-1">
              Model Input Parameters
            </h4>
            <p className="text-xs text-muted-foreground">
              These values are used directly by AI models for environmental efficiency prediction, circularity scoring, and process classification. Accurate data improves prediction quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionDetailsStep;