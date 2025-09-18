import React from 'react';
import Button from '../../../components/ui/Button';

const NavigationControls = ({ 
  currentStep, 
  totalSteps, 
  onPrevious, 
  onNext, 
  onSubmit, 
  isSubmitting, 
  canProceed 
}) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="flex items-center justify-between pt-6 border-t border-border">
      <div className="flex-1">
        {!isFirstStep && (
          <Button
            variant="outline"
            onClick={onPrevious}
            iconName="ChevronLeft"
            iconPosition="left"
            disabled={isSubmitting}
          >
            Previous
          </Button>
        )}
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="text-sm text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </span>
      </div>
      
      <div className="flex-1 flex justify-end">
        {isLastStep ? (
          <Button
            variant="default"
            onClick={onSubmit}
            loading={isSubmitting}
            disabled={!canProceed}
            iconName="Send"
            iconPosition="right"
          >
            Submit Assessment
          </Button>
        ) : (
          <Button
            variant="default"
            onClick={onNext}
            disabled={!canProceed || isSubmitting}
            iconName="ChevronRight"
            iconPosition="right"
          >
            Next Step
          </Button>
        )}
      </div>
    </div>
  );
};

export default NavigationControls;