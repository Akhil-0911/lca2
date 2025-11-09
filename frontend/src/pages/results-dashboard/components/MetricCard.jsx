import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricCard = ({ title, value, unit, icon, trend, trendValue, color = 'primary' }) => {
  const getColorClasses = (colorType) => {
    const colors = {
      primary: 'bg-gradient-to-br from-primary/10 to-primary/20 text-primary border-primary/30',
      success: 'bg-gradient-to-br from-green-50 to-green-100 text-green-700 border-green-300',
      warning: 'bg-gradient-to-br from-amber-50 to-amber-100 text-amber-700 border-amber-300',
      error: 'bg-gradient-to-br from-red-50 to-red-100 text-red-700 border-red-300'
    };
    return colors?.[colorType] || colors?.primary;
  };

  const getTrendIcon = () => {
    if (trend === 'up') return 'TrendingUp';
    if (trend === 'down') return 'TrendingDown';
    return 'Minus';
  };

  const getTrendColor = () => {
    if (trend === 'up') return 'text-red-500';
    if (trend === 'down') return 'text-green-500';
    return 'text-gray-500';
  };

  return (
    <div className="bg-card rounded-2xl border border-border p-8 shadow-earth-md hover:shadow-earth-lg transition-all duration-300 group">
      <div className="flex items-start justify-between mb-6">
        <div className={`p-4 rounded-xl ${getColorClasses(color)} group-hover:scale-110 transition-transform duration-300`}>
          <Icon name={icon} size={28} strokeWidth={2.5} />
        </div>
        {trend && (
          <div className={`flex items-center space-x-2 ${getTrendColor()} bg-background rounded-lg px-3 py-2 border border-border/50`}>
            <Icon name={getTrendIcon()} size={18} strokeWidth={2.5} />
            <span className="text-sm font-bold">{trendValue}</span>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide">{title}</h3>
        <div className="flex items-baseline space-x-3">
          <span className="text-3xl font-black text-foreground">{value}</span>
          <span className="text-base text-muted-foreground font-medium">{unit}</span>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;