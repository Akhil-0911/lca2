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
    <div className="w-full bg-card rounded-xl px-16 py-8 shadow-earth mb-8 min-h-[120px] max-w-none overflow-x-auto">
      <div className="flex items-center justify-between h-full w-full min-w-[1200px]">
        {/* Desktop Stepper */}
        <div className="hidden xl:flex items-center w-full justify-between py-4 px-2">
          {steps?.map((step, index) => (
            <div key={step?.id} className="flex items-center flex-1">
              <div 
                className={`flex items-center cursor-pointer transition-all duration-200 hover:scale-105 ${
                  step?.id <= currentStep ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => onStepClick(step?.id)}
              >
                <div className={`flex items-center justify-center w-9 h-9 rounded-full border-2 transition-all duration-200 ${
                  step?.id === currentStep 
                    ? 'bg-primary border-primary text-primary-foreground shadow-lg' 
                    : step?.id < currentStep 
                      ? 'bg-success border-success text-success-foreground'
                      : 'bg-background border-border text-muted-foreground'
                }`}>
                  {step?.id < currentStep ? (
                    <Icon name="Check" size={14} />
                  ) : (
                    <Icon name={step?.icon} size={14} />
                  )}
                </div>
                <div className="ml-2 min-w-0">
                  <p className={`text-[11px] font-semibold ${
                    step?.id <= currentStep ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    Step {step?.id}
                  </p>
                  <p className={`text-[9px] truncate ${
                    step?.id <= currentStep ? 'text-muted-foreground' : 'text-muted-foreground/70'
                  }`}>
                    {step?.title}
                  </p>
                </div>
              </div>
              {index < steps?.length - 1 && (
                <div className={`flex-1 h-1 mx-2 rounded-full transition-all duration-200 ${
                  step?.id < currentStep ? 'bg-success' : 'bg-border'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Large Screen Stepper - More Compact */}
        <div className="hidden lg:flex xl:hidden items-center w-full justify-center py-4 overflow-x-auto">
          <div className="flex items-center space-x-1 min-w-max px-2">
            {steps?.map((step, index) => (
              <React.Fragment key={step?.id}>
                <div 
                  className={`flex flex-col items-center cursor-pointer transition-all duration-200 min-w-[60px] ${
                    step?.id <= currentStep ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => onStepClick(step?.id)}
                >
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                    step?.id === currentStep 
                      ? 'bg-primary border-primary text-primary-foreground' 
                      : step?.id < currentStep 
                        ? 'bg-success border-success text-success-foreground'
                        : 'bg-background border-border text-muted-foreground'
                  }`}>
                    {step?.id < currentStep ? (
                      <Icon name="Check" size={14} />
                    ) : (
                      <Icon name={step?.icon} size={14} />
                    )}
                  </div>
                  <div className="mt-1 text-center">
                    <p className="text-[9px] font-medium">Step {step?.id}</p>
                    <p className="text-[8px] truncate max-w-[50px]">{step?.title}</p>
                  </div>
                </div>
                {index < steps?.length - 1 && (
                  <div className={`w-3 h-0.5 transition-all duration-200 ${
                    step?.id < currentStep ? 'bg-success' : 'bg-border'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Medium Screen Stepper - Numbers Only */}
        <div className="hidden md:flex lg:hidden items-center w-full justify-center py-4">
          <div className="flex items-center space-x-1">
            {steps?.map((step, index) => (
              <React.Fragment key={step?.id}>
                <div 
                  className={`flex items-center justify-center w-7 h-7 rounded-full border-2 cursor-pointer transition-all duration-200 ${
                    step?.id === currentStep 
                      ? 'bg-primary border-primary text-primary-foreground' 
                      : step?.id < currentStep 
                        ? 'bg-success border-success text-success-foreground'
                        : 'bg-background border-border text-muted-foreground'
                  }`}
                  onClick={() => onStepClick(step?.id)}
                  title={`Step ${step?.id}: ${step?.title}`}
                >
                  {step?.id < currentStep ? (
                    <Icon name="Check" size={12} />
                  ) : (
                    <span className="text-xs font-bold">{step?.id}</span>
                  )}
                </div>
                {index < steps?.length - 1 && (
                  <div className={`w-2 h-0.5 transition-all duration-200 ${
                    step?.id < currentStep ? 'bg-success' : 'bg-border'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="ml-4 text-center">
            <p className="text-sm font-semibold text-foreground">
              {steps?.[currentStep - 1]?.title}
            </p>
          </div>
        </div>

        {/* Mobile Stepper */}
        <div className="md:hidden flex items-center justify-between w-full py-4">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg">
              <Icon name={steps?.[currentStep - 1]?.icon} size={18} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-semibold text-foreground">
                Step {currentStep} of {totalSteps}
              </p>
              <p className="text-xs text-muted-foreground">
                {steps?.[currentStep - 1]?.title}
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            {steps?.map((step) => (
              <div
                key={step?.id}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  step?.id === currentStep 
                    ? 'bg-primary shadow-md' 
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