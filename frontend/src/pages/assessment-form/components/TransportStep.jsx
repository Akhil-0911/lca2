import React from 'react';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const TransportStep = ({ formData, updateFormData }) => {
  const transportModes = [
    { 
      value: 'truck', 
      label: 'Truck Transport',
      description: 'Road transport for regional distribution'
    },
    { 
      value: 'rail', 
      label: 'Rail Transport',
      description: 'Energy-efficient overland transport for bulk materials'
    },
    { 
      value: 'ship', 
      label: 'Maritime Shipping',
      description: 'Low-emission ocean transport for international trade'
    },
    { 
      value: 'air', 
      label: 'Air Freight',
      description: 'Fast but high-emission transport for urgent deliveries'
    },
    { 
      value: 'multimodal', 
      label: 'Multimodal',
      description: 'Combination of transport modes for optimized logistics'
    }
  ];

  const distanceRanges = [
    { value: 'local', label: 'Local (<50 km)', description: 'Regional processing and distribution' },
    { value: 'regional', label: 'Regional (50-500 km)', description: 'National or cross-border transport' },
    { value: 'continental', label: 'Continental (500-2000 km)', description: 'Continental shipping routes' },
    { value: 'intercontinental', label: 'Intercontinental (>2000 km)', description: 'Global supply chains' }
  ];

  const handleTransportModeChange = (value) => {
    updateFormData({ transportMode: value });
  };

  const handleDistanceRangeChange = (value) => {
    updateFormData({ transportDistance: value });
  };

  const handleCustomDistanceChange = (e) => {
    const value = parseFloat(e?.target?.value) || 0;
    updateFormData({ customDistance: value });
  };

  const getTransportImpact = (mode) => {
    const impacts = {
      truck: { level: 'High', color: 'text-error', emissions: '60-150 g CO₂/ton-km' },
      rail: { level: 'Medium', color: 'text-warning', emissions: '20-40 g CO₂/ton-km' },
      ship: { level: 'Low', color: 'text-success', emissions: '10-40 g CO₂/ton-km' },
      air: { level: 'Very High', color: 'text-error', emissions: '500-1500 g CO₂/ton-km' },
      multimodal: { level: 'Variable', color: 'text-primary', emissions: 'Depends on mode combination' }
    };
    return impacts[mode] || { level: 'Unknown', color: 'text-muted-foreground', emissions: 'Select transport mode' };
  };

  const impact = getTransportImpact(formData?.transportMode);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
          <Icon name="Truck" size={32} color="var(--color-primary)" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Transport & Logistics
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Specify transportation details for your supply chain. Transport significantly impacts the overall lifecycle carbon footprint.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* Transport Mode Selection */}
        <Select
          label="Primary Transport Mode"
          description="Choose the main transportation method for your materials"
          options={transportModes}
          value={formData?.transportMode}
          onChange={handleTransportModeChange}
          placeholder="Select transport mode..."
          required
        />

        {/* Transport Distance */}
        <Select
          label="Transport Distance Range"
          description="Select the typical distance range for your supply chain"
          options={distanceRanges}
          value={formData?.transportDistance}
          onChange={handleDistanceRangeChange}
          placeholder="Select distance range..."
          required
        />

        {/* Custom Distance Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Specific Distance (Optional)
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              step="0.1"
              value={formData?.customDistance || ''}
              onChange={handleCustomDistanceChange}
              placeholder="Enter distance in kilometers"
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
            />
            <span className="absolute right-3 top-2 text-sm text-muted-foreground">km</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Override distance range with specific value for more accurate calculations
          </p>
        </div>
      </div>

      {/* Transport Impact Display */}
      {formData?.transportMode && (
        <div className="bg-card border border-border rounded-lg p-4 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Icon name="Activity" size={20} color="var(--color-primary)" />
              <h4 className="text-sm font-medium text-foreground">
                Transport Emissions
              </h4>
            </div>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              impact?.level === 'Very High' || impact?.level === 'High' ? 'bg-error/10 text-error' :
              impact?.level === 'Medium' ? 'bg-warning/10 text-warning' : 
              impact?.level === 'Low' ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'
            }`}>
              {impact?.level} Impact
            </span>
          </div>
          <p className="text-xs text-muted-foreground mb-2">
            Emissions: {impact?.emissions}
          </p>
        </div>
      )}

      <div className="bg-muted/50 rounded-lg p-4 max-w-md mx-auto">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} color="var(--color-accent)" className="mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-foreground mb-1">
              Supply Chain Impact
            </h4>
            <p className="text-xs text-muted-foreground">
              Transportation can account for 10-30% of total lifecycle emissions. Optimizing transport modes and distances significantly improves sustainability performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportStep;