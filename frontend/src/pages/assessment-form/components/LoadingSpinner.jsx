import React from 'react';
import Icon from '../../../components/AppIcon';

const LoadingSpinner = ({ message = "Processing your assessment..." }) => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-card rounded-xl p-8 shadow-earth-lg max-w-sm w-full mx-4">
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
            <div className="animate-spin">
              <Icon name="Loader2" size={32} color="var(--color-primary)" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Analyzing Environmental Impact
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {message}
          </p>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;