import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ComparisonBarChart = ({ data }) => {
  const chartData = [
    {
      category: 'CO₂ Emissions',
      conventional: data?.conventional?.co2 || 12.5,
      circular: data?.circular?.co2 || 4.2,
      unit: 'tons CO₂'
    },
    {
      category: 'Energy Use',
      conventional: data?.conventional?.energy || 850,
      circular: data?.circular?.energy || 320,
      unit: 'MJ/kWh'
    },
    {
      category: 'Water Usage',
      conventional: data?.conventional?.water || 45.8,
      circular: data?.circular?.water || 18.3,
      unit: 'm³'
    }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      const data = payload?.[0]?.payload;
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-earth-md">
          <p className="font-medium text-foreground mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry?.color }}>
              {entry?.name}: {entry?.value} {data?.unit}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-earth">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Resource Consumption Comparison</h3>
        <p className="text-sm text-muted-foreground">
          Side-by-side comparison of environmental metrics
        </p>
      </div>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis 
              dataKey="category" 
              tick={{ fontSize: 12, fill: '#6B7280' }}
              axisLine={{ stroke: '#E5E7EB' }}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#6B7280' }}
              axisLine={{ stroke: '#E5E7EB' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar 
              dataKey="conventional" 
              name="Conventional" 
              fill="#DC2626" 
              radius={[4, 4, 0, 0]}
            />
            <Bar 
              dataKey="circular" 
              name="Circular Economy" 
              fill="#059669" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComparisonBarChart;