import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const DemoTemplateButton = ({ onApplyTemplate, isLoading }) => {
  const handleApplyTemplate = async () => {
    console.log('🚀 Applying ML-Optimized Template...');
    
    const demoData = {
      // Step 1: Metal Type
      metalType: 'aluminum',
      
      // Step 2: Process Route
      processRoute: 'recycling',
      isMetallurgy: false,
      processClass: 'secondary',
      hasCircularity: true,
      
      // Step 3: Production Scale
      productionScale: '500',
      
      // Step 4: Production Details (Optimized for ML Models)
      totalInputs: '120',
      totalOutputs: '100',
      materialEfficiency: '83.3',
      secondaryMaterialFraction: '75',
      
      // Step 5: Waste Management (Critical for ML)
      scrapRatio: '15',
      recyclingRate: '85',
      wasteRatio: '8',
      energyRecoveryRate: '45',
      wasteStreams: {
        slag: true,
        dust: true,
        water: false,
        offgas: true,
        tailings: false
      },
      
      // Step 6: Recycled Content
      recycledContent: '85',
      
      // Step 7: Energy Source
      energySource: 'renewable',
      
      // Step 8: Transport
      transportMode: 'ship',
      transportDistance: 'regional',
      customDistance: '250',
      
      // Step 9: End of Life
      endOfLifeScenario: 'recycling',
      recoveryRate: 'high',
      customRecoveryRate: '90'
    };
    
    console.log('📊 Template Data:', demoData);
    
    // Apply template and automatically process
    await onApplyTemplate(demoData);
  };

  return (
    <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6 border border-accent/20">
      <div className="flex items-start space-x-4">
        <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg flex-shrink-0">
          <Icon name="Sparkles" size={24} color="var(--color-accent)" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            ML-Optimized Demo & Auto-Calculate
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Complete aluminum recycling scenario that fills all 9 steps and automatically submits to your trained ML models for instant results. No manual steps required!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-4">
            <div className="bg-background/50 rounded-lg p-2 text-center">
              <Icon name="Zap" size={16} color="var(--color-primary)" className="mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Aluminum</p>
            </div>
            <div className="bg-background/50 rounded-lg p-2 text-center">
              <Icon name="Recycle" size={16} color="var(--color-success)" className="mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Recycling</p>
            </div>
            <div className="bg-background/50 rounded-lg p-2 text-center">
              <Icon name="BarChart3" size={16} color="var(--color-accent)" className="mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">500 tons</p>
            </div>
            <div className="bg-background/50 rounded-lg p-2 text-center">
              <Icon name="Settings" size={16} color="var(--color-warning)" className="mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">83% Efficiency</p>
            </div>
            <div className="bg-background/50 rounded-lg p-2 text-center">
              <Icon name="Leaf" size={16} color="var(--color-success)" className="mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Renewable</p>
            </div>
            <div className="bg-background/50 rounded-lg p-2 text-center">
              <Icon name="Ship" size={16} color="var(--color-info)" className="mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Ship+Regional</p>
            </div>
          </div>
          <Button
            variant="default"
            onClick={handleApplyTemplate}
            loading={isLoading}
            iconName="Zap"
            iconPosition="left"
            className="w-full md:w-auto"
          >
            Fill Form & Calculate Results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DemoTemplateButton;