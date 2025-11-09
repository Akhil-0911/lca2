import React from 'react';
import Icon from '../../../components/AppIcon';

const RecommendationCard = ({ recommendation, priority, impact, category, description }) => {
  const getPriorityConfig = (priority) => {
    const configs = {
      high: {
        color: 'bg-red-50 text-red-700 border-red-200',
        icon: 'AlertTriangle',
        iconColor: 'text-red-500'
      },
      medium: {
        color: 'bg-amber-50 text-amber-700 border-amber-200',
        icon: 'AlertCircle',
        iconColor: 'text-amber-500'
      },
      low: {
        color: 'bg-green-50 text-green-700 border-green-200',
        icon: 'CheckCircle',
        iconColor: 'text-green-500'
      }
    };
    return configs?.[priority] || configs?.medium;
  };

  const getImpactBadge = (impact) => {
    const badges = {
      'High Impact': 'bg-red-100 text-red-800 border-red-200',
      'Medium Impact': 'bg-amber-100 text-amber-800 border-amber-200',
      'Low Impact': 'bg-green-100 text-green-800 border-green-200'
    };
    return badges?.[impact] || badges?.['Medium Impact'];
  };

  const priorityConfig = getPriorityConfig(priority);

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-earth hover:shadow-earth-md transition-all duration-200">
      <div className="flex items-start space-x-4">
        <div className={`p-2 rounded-lg ${priorityConfig?.color}`}>
          <Icon name={priorityConfig?.icon} size={20} className={priorityConfig?.iconColor} strokeWidth={2} />
        </div>
        
        <div className="flex-1 space-y-3">
          <div className="flex items-start justify-between">
            <h4 className="font-semibold text-foreground text-base leading-tight">{recommendation}</h4>
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getImpactBadge(impact)}`}>
              {impact}
            </span>
          </div>
          
          {category && (
            <div className="flex items-center space-x-2">
              <Icon name="Tag" size={14} className="text-muted-foreground" strokeWidth={2} />
              <span className="text-sm text-muted-foreground font-medium">{category}</span>
            </div>
          )}
          
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          
          <div className="flex items-center justify-between pt-2">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${priorityConfig?.color}`}>
              {priority?.charAt(0)?.toUpperCase() + priority?.slice(1)} Priority
            </span>
            <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors duration-200">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;