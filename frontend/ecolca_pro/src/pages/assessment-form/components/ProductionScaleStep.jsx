import React from 'react';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ProductionScaleStep = ({ formData, updateFormData, errors }) => {
  const handleScaleChange = (e) => {
    const value = e?.target?.value;
    updateFormData({ productionScale: value });
  };

  const getScaleCategory = (scale) => {
    const numScale = parseFloat(scale);
    if (numScale < 100) return { category: 'Small Scale', color: 'text-success', icon: 'Home' };
    if (numScale < 1000) return { category: 'Medium Scale', color: 'text-warning', icon: 'Building' };
    return { category: 'Large Scale', color: 'text-error', icon: 'Factory' };
  };

  const scaleInfo = formData?.productionScale ? getScaleCategory(formData?.productionScale) : null;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4">
          <Icon name="BarChart3" size={32} color="var(--color-accent)" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Production Scale
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Enter your annual production capacity in metric tons. This helps calculate the total environmental impact of your operations.
        </p>
      </div>
      <div className="max-w-md mx-auto">
        <Input
          label="Annual Production Capacity"
          type="number"
          placeholder="Enter production scale..."
          value={formData?.productionScale}
          onChange={handleScaleChange}
          description="Production capacity in metric tons per year"
          error={errors?.productionScale}
          required
          min="0.1"
          step="0.1"
          className="text-center"
        />
        
        <div className="flex items-center justify-center mt-2">
          <span className="text-sm text-muted-foreground">tons/year</span>
        </div>
      </div>
      {scaleInfo && (
        <div className="bg-card border border-border rounded-lg p-4 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Icon name={scaleInfo?.icon} size={20} color="var(--color-primary)" />
              <h4 className="text-sm font-medium text-foreground">
                Production Category
              </h4>
            </div>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              scaleInfo?.category === 'Large Scale' ? 'bg-error/10 text-error' :
              scaleInfo?.category === 'Medium Scale'? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'
            }`}>
              {scaleInfo?.category}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            {scaleInfo?.category === 'Large Scale' && 'High-volume industrial production with significant environmental considerations.'}
            {scaleInfo?.category === 'Medium Scale' && 'Mid-size manufacturing operations with moderate environmental impact.'}
            {scaleInfo?.category === 'Small Scale' && 'Boutique or specialized production with lower environmental footprint.'}
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        <div className="bg-muted/30 rounded-lg p-4 text-center">
          <Icon name="TrendingDown" size={24} color="var(--color-success)" className="mx-auto mb-2" />
          <h4 className="text-sm font-medium text-foreground mb-1">Small Scale</h4>
          <p className="text-xs text-muted-foreground">&lt; 100 tons/year</p>
        </div>
        <div className="bg-muted/30 rounded-lg p-4 text-center">
          <Icon name="TrendingUp" size={24} color="var(--color-warning)" className="mx-auto mb-2" />
          <h4 className="text-sm font-medium text-foreground mb-1">Medium Scale</h4>
          <p className="text-xs text-muted-foreground">100 - 1,000 tons/year</p>
        </div>
        <div className="bg-muted/30 rounded-lg p-4 text-center">
          <Icon name="Activity" size={24} color="var(--color-error)" className="mx-auto mb-2" />
          <h4 className="text-sm font-medium text-foreground mb-1">Large Scale</h4>
          <p className="text-xs text-muted-foreground">&gt; 1,000 tons/year</p>
        </div>
      </div>
    </div>
  );
};

export default ProductionScaleStep;