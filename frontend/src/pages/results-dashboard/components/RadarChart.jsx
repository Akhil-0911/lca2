import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

const RadarChartComponent = ({ data }) => {
  const chartData = [
    {
      subject: 'Carbon Footprint',
      conventional: data?.conventional?.carbon || 85,
      circular: data?.circular?.carbon || 35,
      fullMark: 100
    },
    {
      subject: 'Energy Use',
      conventional: data?.conventional?.energy || 90,
      circular: data?.circular?.energy || 45,
      fullMark: 100
    },
    {
      subject: 'Water Usage',
      conventional: data?.conventional?.water || 75,
      circular: data?.circular?.water || 30,
      fullMark: 100
    },
    {
      subject: 'Waste Generation',
      conventional: data?.conventional?.waste || 80,
      circular: data?.circular?.waste || 25,
      fullMark: 100
    },
    {
      subject: 'Resource Depletion',
      conventional: data?.conventional?.resources || 95,
      circular: data?.circular?.resources || 40,
      fullMark: 100
    },
    {
      subject: 'Toxicity',
      conventional: data?.conventional?.toxicity || 70,
      circular: data?.circular?.toxicity || 20,
      fullMark: 100
    }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-earth">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Environmental Impact Comparison</h3>
        <p className="text-sm text-muted-foreground">
          Conventional vs Circular Economy Approach (Lower values indicate better performance)
        </p>
      </div>
      
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={chartData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
            <PolarGrid stroke="#E5E7EB" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fontSize: 12, fill: '#6B7280' }}
              className="text-xs"
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]} 
              tick={{ fontSize: 10, fill: '#9CA3AF' }}
              tickCount={5}
            />
            <Radar
              name="Conventional"
              dataKey="conventional"
              stroke="#DC2626"
              fill="#DC2626"
              fillOpacity={0.1}
              strokeWidth={2}
            />
            <Radar
              name="Circular Economy"
              dataKey="circular"
              stroke="#059669"
              fill="#059669"
              fillOpacity={0.1}
              strokeWidth={2}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="line"
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RadarChartComponent;