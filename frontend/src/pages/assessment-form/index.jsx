import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LCAAssessmentAPI, MockDataFallback } from '../../services/lcaApi';

import Header from '../../components/ui/Header';
import StepperNavigation from './components/StepperNavigation';
import MetalTypeStep from './components/MetalTypeStep';
import ProcessRouteStep from './components/ProcessRouteStep';
import ProductionScaleStep from './components/ProductionScaleStep';
import ProductionDetailsStep from './components/ProductionDetailsStep';
import WasteManagementStep from './components/WasteManagementStep';
import RecycledContentStep from './components/RecycledContentStep';
import EnergySourceStep from './components/EnergySourceStep';
import TransportStep from './components/TransportStep';
import EndOfLifeStep from './components/EndOfLifeStep';
import DemoTemplateButton from './components/DemoTemplateButton';
import NavigationControls from './components/NavigationControls';
import LoadingSpinner from './components/LoadingSpinner';
import Icon from '../../components/AppIcon';

const AssessmentForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isApplyingTemplate, setIsApplyingTemplate] = useState(false);
  const [errors, setErrors] = useState({});
  
  const [formData, setFormData] = useState({
    // Step 1: Metal Type
    metalType: '',
    
    // Step 2: Process Route
    processRoute: '',
    isMetallurgy: false,
    processClass: '',
    hasCircularity: false,
    
    // Step 3: Production Scale
    productionScale: '',
    
    // Step 4: Production Details (Model Parameters)
    totalInputs: 0,
    totalOutputs: 0,
    materialEfficiency: 0,
    secondaryMaterialFraction: 0,
    
    // Step 5: Waste Management (Model Parameters)
    scrapRatio: 0,
    recyclingRate: 0,
    wasteRatio: 0,
    energyRecoveryRate: 0,
    wasteStreams: {},
    
    // Step 6: Recycled Content
    recycledContent: 0,
    
    // Step 7: Energy Source
    energySource: '',
    
    // Step 8: Transport
    transportMode: '',
    transportDistance: '',
    customDistance: 0,
    
    // Step 9: End of Life
    endOfLifeScenario: '',
    recoveryRate: '',
    customRecoveryRate: 0
  });

  const totalSteps = 9;

  useEffect(() => {
    document.title = 'Assessment Form - EcoLCA Pro';
  }, []);

  const updateFormData = (updates) => {
    setFormData(prev => ({ ...prev, ...updates }));
    // Clear related errors when field is updated
    const updatedFields = Object.keys(updates);
    setErrors(prev => {
      const newErrors = { ...prev };
      updatedFields?.forEach(field => {
        delete newErrors?.[field];
      });
      return newErrors;
    });
  };

  const validateCurrentStep = () => {
    const newErrors = {};
    
    switch (currentStep) {
      case 1:
        if (!formData?.metalType) {
          newErrors.metalType = 'Please select a metal type';
        }
        break;
      case 2:
        if (!formData?.processRoute) {
          newErrors.processRoute = 'Please select a process route';
        }
        break;
      case 3:
        if (!formData?.productionScale || parseFloat(formData?.productionScale) <= 0) {
          newErrors.productionScale = 'Please enter a valid production scale';
        }
        break;
      case 4:
        if (!formData?.totalInputs || parseFloat(formData?.totalInputs) <= 0) {
          newErrors.totalInputs = 'Please enter valid total material inputs';
        }
        if (!formData?.totalOutputs || parseFloat(formData?.totalOutputs) <= 0) {
          newErrors.totalOutputs = 'Please enter valid total material outputs';
        }
        break;
      case 5:
        // Waste management step - optional validation, but show warnings
        break;
      case 6:
        if (formData?.recycledContent === null || formData?.recycledContent === undefined) {
          newErrors.recycledContent = 'Please set the recycled content percentage';
        }
        break;
      case 7:
        if (!formData?.energySource) {
          newErrors.energySource = 'Please select an energy source';
        }
        break;
      case 8:
        if (!formData?.transportMode) {
          newErrors.transportMode = 'Please select a transport mode';
        }
        if (!formData?.transportDistance) {
          newErrors.transportDistance = 'Please select a transport distance range';
        }
        break;
      case 9:
        if (!formData?.endOfLifeScenario) {
          newErrors.endOfLifeScenario = 'Please select an end-of-life scenario';
        }
        if (formData?.endOfLifeScenario && formData?.endOfLifeScenario !== 'landfill' && !formData?.recoveryRate) {
          newErrors.recoveryRate = 'Please select a recovery rate';
        }
        break;
      default:
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData?.metalType;
      case 2: return formData?.processRoute;
      case 3: return formData?.productionScale && parseFloat(formData?.productionScale) > 0;
      case 4: return formData?.totalInputs && formData?.totalOutputs && parseFloat(formData?.totalInputs) > 0 && parseFloat(formData?.totalOutputs) > 0;
      case 5: return true; // Waste management step is optional but valuable
      case 6: return formData?.recycledContent !== null && formData?.recycledContent !== undefined;
      case 7: return formData?.energySource;
      case 8: return formData?.transportMode && formData?.transportDistance;
      case 9: return formData?.endOfLifeScenario && (formData?.endOfLifeScenario === 'landfill' || formData?.recoveryRate);
      default: return false;
    }
  };

  const handleStepClick = (stepNumber) => {
    if (stepNumber < currentStep || validateCurrentStep()) {
      setCurrentStep(stepNumber);
    }
  };

  const handleNext = () => {
    if (validateCurrentStep() && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleApplyTemplate = async (templateData) => {
    setIsApplyingTemplate(true);
    
    try {
      console.log('🔄 Applying template data to form...');
      
      // Apply template data to form
      setFormData(templateData);
      setCurrentStep(1);
      setErrors({});
      
      // Small delay to let React update
      await new Promise(resolve => setTimeout(resolve, 500));
      
      console.log('✅ Template applied successfully!');
      console.log('🚀 Auto-submitting assessment for ML processing...');
      
      // Auto-submit the assessment to get ML results
      try {
        // Import the API service
        const { LCAAssessmentAPI, MockDataFallback } = await import('../../services/lcaApi');
        
        let results;
        
        try {
          // Real AI API call with ML models
          results = await LCAAssessmentAPI.submitAssessment(templateData);
          console.log('✅ Using real ML model predictions');
        } catch (apiError) {
          console.warn('⚠️ ML API unavailable, using calculated fallback:', apiError.message);
          // Fallback to mock data
          results = await MockDataFallback.generateMockResults(templateData);
        }
        
        // Structure results for dashboard
        const assessmentResults = {
          assessmentId: `LCA-TEMPLATE-${Date.now()}`,
          carbonFootprint: results.carbon_footprint,
          energyConsumption: results.energy_consumption,
          waterUsage: results.water_usage,
          circularityIndex: results.circularity_index,
          environmentalEfficiency: results.environmental_efficiency,
          modelConfidence: results.model_confidence,
          recommendations: results.recommendations || [
            "✅ Excellent aluminum recycling setup with high circularity",
            "🌱 Renewable energy optimizes environmental footprint", 
            "🚢 Maritime transport provides efficient logistics",
            "♻️ 85% recycled content maximizes resource efficiency",
            "🎯 Consider increasing to 90% recycled content for peak performance"
          ],
          timestamp: new Date().toISOString(),
          inputData: templateData,
          usingMockData: results.mock_data || false,
          templateUsed: true,
          mlOptimized: true
        };

        // Store results for dashboard
        localStorage.setItem('lcaResults', JSON.stringify(assessmentResults));
        
        console.log('🎯 Results calculated and stored. Navigating to dashboard...');
        
        // Navigate to results dashboard
        navigate('/results-dashboard');
        
      } catch (error) {
        console.error('❌ Auto-submission failed:', error);
        // If auto-submission fails, just apply the template
        console.log('📝 Template applied - you can manually navigate through steps or submit');
      }
      
    } catch (error) {
      console.error('❌ Template application failed:', error);
    } finally {
      setIsApplyingTemplate(false);
    }
  };

  const handleSubmit = async () => {
    if (!validateCurrentStep()) return;
    
    setIsSubmitting(true);
    
    try {
      // Attempt to use real AI models first, fallback to mock data
      let results;
      
      try {
        // Real AI API call
        results = await LCAAssessmentAPI.submitAssessment(formData);
        console.log('✅ Using real AI model predictions');
      } catch (apiError) {
        console.warn('⚠️ API unavailable, using mock data fallback:', apiError.message);
        // Fallback to mock data
        results = await MockDataFallback.generateMockResults(formData);
      }
      
      // Structure results for dashboard
      const assessmentResults = {
        assessmentId: `LCA-${Date.now()}`,
        carbonFootprint: results.carbon_footprint,
        energyConsumption: results.energy_consumption,
        waterUsage: results.water_usage,
        circularityIndex: results.circularity_index,
        environmentalEfficiency: results.environmental_efficiency,
        modelConfidence: results.model_confidence,
        recommendations: results.recommendations || [
          "Consider increasing recycled content to 90% for optimal sustainability",
          "Transition to renewable energy sources to reduce carbon footprint by 70%",
          "Implement closed-loop water recycling systems to minimize water usage",
          "Optimize transport routes to reduce logistics emissions by 25%",
          "Explore remanufacturing options to extend product lifecycle"
        ],
        timestamp: new Date().toISOString(),
        inputData: formData,
        usingMockData: results.mock_data || false
      };

      // Store results in localStorage for the results dashboard
      localStorage.setItem('lcaResults', JSON.stringify(assessmentResults));
      
      // Navigate to results dashboard
      navigate('/results-dashboard');
      
    } catch (error) {
      console.error('Assessment submission failed:', error);
      setErrors({ submit: 'Failed to process assessment. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <MetalTypeStep formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 2:
        return <ProcessRouteStep formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 3:
        return <ProductionScaleStep formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 4:
        return <ProductionDetailsStep formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 5:
        return <WasteManagementStep formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 6:
        return <RecycledContentStep formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 7:
        return <EnergySourceStep formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 8:
        return <TransportStep formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 9:
        return <EndOfLifeStep formData={formData} updateFormData={updateFormData} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="max-w-5xl mx-auto px-6 py-12">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4">
              <Icon name="ClipboardList" size={40} color="var(--color-primary)" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Sustainability Assessment Form
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete this comprehensive evaluation to analyze the environmental impact of your metal production process and receive actionable sustainability insights.
            </p>
          </div>

          {/* Demo Template */}
          <div className="mb-8">
            <DemoTemplateButton 
              onApplyTemplate={handleApplyTemplate}
              isLoading={isApplyingTemplate}
            />
          </div>

          {/* Stepper Navigation */}
          <StepperNavigation 
            currentStep={currentStep}
            totalSteps={totalSteps}
            onStepClick={handleStepClick}
          />

          {/* Form Content */}
          <div className="bg-card rounded-xl shadow-earth p-8 mb-8">
            {renderCurrentStep()}
            
            {errors?.submit && (
              <div className="mt-6 p-4 bg-error/10 border border-error/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="AlertCircle" size={20} color="var(--color-error)" />
                  <p className="text-sm text-error">{errors?.submit}</p>
                </div>
              </div>
            )}

            <NavigationControls
              currentStep={currentStep}
              totalSteps={totalSteps}
              onPrevious={handlePrevious}
              onNext={handleNext}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              canProceed={canProceed()}
            />
          </div>

          {/* Progress Summary */}
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle2" size={20} color="var(--color-success)" />
                <span className="text-sm font-medium text-foreground">
                  Progress: {currentStep} of {totalSteps} steps completed
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-32 bg-border rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-muted-foreground">
                  {Math.round((currentStep / totalSteps) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      {(isSubmitting || isApplyingTemplate) && (
        <LoadingSpinner 
          message={isSubmitting ? "Processing your sustainability assessment..." : "Applying demo template..."}
        />
      )}
    </div>
  );
};

export default AssessmentForm;