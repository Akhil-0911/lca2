import React from 'react';
import Icon from '../../../components/AppIcon';

const StepperNavigation = ({ currentStep, totalSteps, onStepClick }) => {
  const steps = [
    { id: 1, title: 'Metal Type', icon: 'Zap' },
    { id: 2, title: 'Process Route', icon: 'Settings' },
    { id: 3, title: 'Production Scale', icon: 'BarChart3' },
    { id: 4, title: 'Production Details', icon: 'Calculator' },
    { id: 5, title: 'Waste Management', icon: 'Recycle' },
    { id: 6, title: 'Recycled Content', icon: 'RotateCcw' },
    { id: 7, title: 'Energy Source', icon: 'Battery' },
    { id: 8, title: 'Transport', icon: 'Truck' },
    { id: 9, title: 'End of Life', icon: 'ArrowUpRight' }
  ];

  return (
    <div className="w-full bg-card rounded-xl p-6 shadow-earth mb-8">
      <div className="flex items-center justify-between">
        {/* Desktop Stepper */}
        <div className="hidden md:flex items-center w-full">
          {steps?.map((step, index) => (
            <React.Fragment key={step?.id}>
              <div 
                className={`flex items-center cursor-pointer transition-all duration-200 ${
                  step?.id <= currentStep ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => onStepClick(step?.id)}
              >
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                  step?.id === currentStep 
                    ? 'bg-primary border-primary text-primary-foreground' 
                    : step?.id < currentStep 
                      ? 'bg-success border-success text-success-foreground'
                      : 'bg-background border-border text-muted-foreground'
                }`}>
                  {step?.id < currentStep ? (
                    <Icon name="Check" size={16} />
                  ) : (
                    <Icon name={step?.icon} size={16} />
                  )}
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${
                    step?.id <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    Step {step?.id}
                  </p>
                  <p className={`text-xs ${
                    step?.id <= currentStep ? 'text-muted-foreground' : 'text-muted-foreground/70'
                  }`}>
                    {step?.title}
                  </p>
                </div>
              </div>
              {index < steps?.length - 1 && (
                <div className={`flex-1 h-0.5 mx-4 transition-all duration-200 ${
                  step?.id < currentStep ? 'bg-success' : 'bg-border'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Stepper */}
        <div className="md:hidden flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
              <Icon name={steps?.[currentStep - 1]?.icon} size={16} />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-foreground">
                Step {currentStep} of {totalSteps}
              </p>
              <p className="text-xs text-muted-foreground">
                {steps?.[currentStep - 1]?.title}
              </p>
            </div>
          </div>
          <div className="flex space-x-1">
            {steps?.map((step) => (
              <div
                key={step?.id}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  step?.id === currentStep 
                    ? 'bg-primary' 
                    : step?.id < currentStep 
                      ? 'bg-success' :'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepperNavigation;