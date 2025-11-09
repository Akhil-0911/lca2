import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import MetricCard from './components/MetricCard';
import RadarChartComponent from './components/RadarChart';
import ComparisonBarChart from './components/ComparisonBarChart';
import RecommendationCard from './components/RecommendationCard';
import ExportSection from './components/ExportSection';
import AssessmentSummary from './components/AssessmentSummary';

const ResultsDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [assessmentData, setAssessmentData] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  // Real LCA results data (loaded from localStorage)
  const [resultsData, setResultsData] = useState(null);
  
  // Default fallback results structure
  const defaultResults = {
    metrics: {
      carbonFootprint: {
        value: 0,
        unit: 'tons CO₂',
        trend: 'neutral',
        trendValue: 'N/A',
        color: 'neutral'
      },
      energyConsumption: {
        value: 0,
        unit: 'MJ',
        trend: 'neutral',
        trendValue: 'N/A',
        color: 'neutral'
      },
      waterUsage: {
        value: 0,
        unit: 'm³',
        trend: 'neutral',
        trendValue: 'N/A',
        color: 'neutral'
      },
      circularityIndex: {
        value: 0,
        unit: '(0-1 scale)',
        trend: 'neutral',
        trendValue: 'N/A',
        color: 'neutral'
      }
    },
    chartData: {
      conventional: {
        carbon: 85,
        energy: 90,
        water: 75,
        waste: 80,
        resources: 95,
        toxicity: 70,
        co2: 12.5,
        energyValue: 850,
        waterValue: 45.8
      },
      circular: {
        carbon: 35,
        energy: 45,
        water: 30,
        waste: 25,
        resources: 40,
        toxicity: 20,
        co2: 4.2,
        energyValue: 320,
        waterValue: 18.3
      }
    },
    recommendations: [
      {
        recommendation: "Increase recycled aluminum content to 95%",
        priority: "high",
        impact: "High Impact",
        category: "Material Optimization",
        description: "Further increasing recycled content can reduce energy consumption by an additional 15% and decrease carbon footprint by 2.1 tons CO₂ annually."
      },
      {
        recommendation: "Implement closed-loop water recycling system",
        priority: "medium",
        impact: "Medium Impact",
        category: "Resource Efficiency",
        description: "Installing water recycling infrastructure can reduce freshwater consumption by 40% and minimize wastewater discharge."
      },
      {
        recommendation: "Optimize furnace temperature control systems",
        priority: "medium",
        impact: "Medium Impact",
        category: "Energy Efficiency",
        description: "Advanced temperature control can improve energy efficiency by 8-12% while maintaining product quality standards."
      },
      {
        recommendation: "Source renewable energy for remaining 25% grid mix",
        priority: "low",
        impact: "High Impact",
        category: "Energy Transition",
        description: "Transitioning to 100% renewable energy can eliminate remaining scope 2 emissions and improve sustainability credentials."
      }
    ]
  };

  useEffect(() => {
    // Load real assessment results from localStorage
    const loadResults = async () => {
      setIsLoading(true);
      try {
        // Get assessment data from navigation state or localStorage
        const data = location?.state?.assessmentData || JSON.parse(localStorage.getItem('lcaAssessmentData') || '{}');
        setAssessmentData(data);
        
        // Load real LCA results from localStorage (saved by assessment form)
        const savedResults = localStorage.getItem('lcaResults');
        if (savedResults) {
          const lcaResults = JSON.parse(savedResults);
          
          console.log('📊 Loading real LCA results from aluminum ML models:', lcaResults);
          
          // Transform real API results to dashboard format
          const transformedResults = {
            ...defaultResults,
            metrics: {
              carbonFootprint: {
                value: lcaResults.carbonFootprint || 0,
                unit: 'tons CO₂',
                trend: lcaResults.carbonFootprint < 100 ? 'down' : 'up',
                trendValue: lcaResults.usingMockData ? 'Mock Data' : 'ML Prediction',
                color: lcaResults.carbonFootprint < 100 ? 'success' : 'warning'
              },
              energyConsumption: {
                value: lcaResults.energyConsumption || 0,
                unit: 'MJ',
                trend: lcaResults.energyConsumption < 1000 ? 'down' : 'up',
                trendValue: lcaResults.usingMockData ? 'Mock Data' : 'ML Prediction',
                color: lcaResults.energyConsumption < 1000 ? 'success' : 'warning'
              },
              waterUsage: {
                value: lcaResults.waterUsage || 0,
                unit: 'm³',
                trend: lcaResults.waterUsage < 50 ? 'down' : 'up',
                trendValue: lcaResults.usingMockData ? 'Mock Data' : 'ML Prediction',
                color: lcaResults.waterUsage < 50 ? 'success' : 'warning'
              },
              circularityIndex: {
                value: lcaResults.circularityIndex || 0,
                unit: '(0-1 scale)',
                trend: lcaResults.circularityIndex > 0.7 ? 'up' : 'down',
                trendValue: lcaResults.usingMockData ? 'Mock Data' : 'ML Prediction',
                color: lcaResults.circularityIndex > 0.7 ? 'success' : 'warning'
              }
            },
            
            // Use real recommendations from ML models
            recommendations: (lcaResults.recommendations || []).map((rec, index) => ({
              recommendation: rec,
              priority: index === 0 ? "high" : index === 1 ? "medium" : "low",
              impact: index < 2 ? "High Impact" : "Medium Impact",
              category: rec.includes('energy') ? 'Energy' : rec.includes('water') ? 'Water' : rec.includes('carbon') ? 'Carbon' : 'Material',
              description: `ML-generated recommendation based on your aluminum assessment data.`
            })),
            
            // Generate real chartData from ML predictions
            chartData: {
              conventional: {
                carbon: 85,  // Baseline conventional aluminum
                energy: 90,
                water: 75,
                waste: 80,
                resources: 95,
                toxicity: 70,
                co2: 250,  // Typical conventional aluminum CO2
                energyValue: 2500,  // Typical conventional energy
                waterValue: 3000   // Typical conventional water
              },
              circular: {
                // Use actual ML predictions for circular economy performance
                carbon: Math.max(10, Math.min(100, (lcaResults.carbonFootprint / 250) * 100)),
                energy: Math.max(10, Math.min(100, (lcaResults.energyConsumption / 2500000) * 100)),
                water: Math.max(10, Math.min(100, (lcaResults.waterUsage / 3000) * 100)),
                waste: Math.max(10, 100 - (lcaResults.circularityIndex * 80)),
                resources: Math.max(20, lcaResults.circularityIndex * 100),
                toxicity: Math.max(10, 50 - (lcaResults.environmentalEfficiency * 30)),
                co2: lcaResults.carbonFootprint,  // Real ML prediction
                energyValue: lcaResults.energyConsumption,  // Real ML prediction
                waterValue: lcaResults.waterUsage  // Real ML prediction
              }
            }
          };
          
          setResultsData(transformedResults);
          console.log('✅ Real aluminum ML results loaded successfully');
          
        } else {
          console.warn('⚠️ No saved LCA results found, using default values');
          setResultsData(defaultResults);
        }
        
        // Simulate loading delay for better UX
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      } catch (error) {
        console.error('Failed to load assessment results:', error);
        setResultsData(defaultResults);
      } finally {
        setIsLoading(false);
      }
    };

    loadResults();
  }, [location?.state]);

  const handleNewAssessment = () => {
    navigate('/assessment-form');
  };

  const handleExportReport = (format, data) => {
    console.log(`Exporting report in ${format} format:`, data);
    // Here you would implement actual export functionality
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'BarChart3' },
    { id: 'details', label: 'Detailed Analysis', icon: 'TrendingUp' },
    { id: 'recommendations', label: 'Recommendations', icon: 'Lightbulb' },
    { id: 'export', label: 'Export', icon: 'Download' }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Processing Your Assessment</h3>
              <p className="text-muted-foreground text-lg">Analyzing environmental impact with AI-powered models...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Use resultsData or fallback to defaults 
  const mockResults = resultsData || defaultResults;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-3">LCA Assessment Results</h1>
              <p className="text-xl text-muted-foreground">
                Environmental Impact Analysis for {assessmentData?.metalType || 'Aluminum'} Production
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button
                variant="outline"
                onClick={handleNewAssessment}
                iconName="Plus"
                iconPosition="left"
                iconSize={20}
                className="font-semibold"
              >
                New Assessment
              </Button>
              <Button
                variant="default"
                onClick={() => setActiveTab('export')}
                iconName="Download"
                iconPosition="left"
                iconSize={20}
                className="font-semibold"
              >
                Export Report
              </Button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mb-12">
            <div className="border-b border-border">
              <nav className="flex space-x-8 overflow-x-auto">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                      activeTab === tab?.id
                        ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                    }`}
                  >
                    <Icon name={tab?.icon} size={16} strokeWidth={2} />
                    <span>{tab?.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Assessment Summary */}
              <AssessmentSummary assessmentData={assessmentData} />

              {/* Key Metrics */}
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6">Key Environmental Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <MetricCard
                    title="Carbon Footprint"
                    value={resultsData?.metrics?.carbonFootprint?.value || defaultResults.metrics.carbonFootprint.value}
                    unit={resultsData?.metrics?.carbonFootprint?.unit || defaultResults.metrics.carbonFootprint.unit}
                    icon="Zap"
                    trend={resultsData?.metrics?.carbonFootprint?.trend || defaultResults.metrics.carbonFootprint.trend}
                    trendValue={resultsData?.metrics?.carbonFootprint?.trendValue || defaultResults.metrics.carbonFootprint.trendValue}
                    color={resultsData?.metrics?.carbonFootprint?.color || defaultResults.metrics.carbonFootprint.color}
                  />
                  <MetricCard
                    title="Energy Consumption"
                    value={resultsData?.metrics?.energyConsumption?.value || defaultResults.metrics.energyConsumption.value}
                    unit={resultsData?.metrics?.energyConsumption?.unit || defaultResults.metrics.energyConsumption.unit}
                    icon="Battery"
                    trend={resultsData?.metrics?.energyConsumption?.trend || defaultResults.metrics.energyConsumption.trend}
                    trendValue={resultsData?.metrics?.energyConsumption?.trendValue || defaultResults.metrics.energyConsumption.trendValue}
                    color={resultsData?.metrics?.energyConsumption?.color || defaultResults.metrics.energyConsumption.color}
                  />
                  <MetricCard
                    title="Water Usage"
                    value={resultsData?.metrics?.waterUsage?.value || defaultResults.metrics.waterUsage.value}
                    unit={resultsData?.metrics?.waterUsage?.unit || defaultResults.metrics.waterUsage.unit}
                    icon="Droplets"
                    trend={resultsData?.metrics?.waterUsage?.trend || defaultResults.metrics.waterUsage.trend}
                    trendValue={resultsData?.metrics?.waterUsage?.trendValue || defaultResults.metrics.waterUsage.trendValue}
                    color={resultsData?.metrics?.waterUsage?.color || defaultResults.metrics.waterUsage.color}
                  />
                  <MetricCard
                    title="Circularity Index"
                    value={resultsData?.metrics?.circularityIndex?.value || defaultResults.metrics.circularityIndex.value}
                    unit={resultsData?.metrics?.circularityIndex?.unit || defaultResults.metrics.circularityIndex.unit}
                    icon="RotateCcw"
                    trend={resultsData?.metrics?.circularityIndex?.trend || defaultResults.metrics.circularityIndex.trend}
                    trendValue={resultsData?.metrics?.circularityIndex?.trendValue || defaultResults.metrics.circularityIndex.trendValue}
                    color={resultsData?.metrics?.circularityIndex?.color || defaultResults.metrics.circularityIndex.color}
                  />
                </div>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <RadarChartComponent data={resultsData?.chartData || defaultResults.chartData} />
                <ComparisonBarChart data={resultsData?.chartData || defaultResults.chartData} />
              </div>
            </div>
          )}

          {activeTab === 'details' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6">Detailed Environmental Analysis</h2>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  <RadarChartComponent data={mockResults?.chartData} />
                  <ComparisonBarChart data={mockResults?.chartData} />
                </div>
              </div>
              
              <AssessmentSummary assessmentData={assessmentData} />
            </div>
          )}

          {activeTab === 'recommendations' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Sustainability Recommendations</h2>
                <p className="text-muted-foreground mb-6">
                  AI-powered recommendations from aluminum ML models to optimize your environmental impact
                </p>
                
                <div className="space-y-6">
                  {(resultsData?.recommendations || defaultResults.recommendations)?.map((rec, index) => (
                    <RecommendationCard
                      key={index}
                      recommendation={rec?.recommendation}
                      priority={rec?.priority}
                      impact={rec?.impact}
                      category={rec?.category}
                      description={rec?.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'export' && (
            <div className="space-y-8">
              <ExportSection 
                assessmentData={assessmentData} 
                onExport={handleExportReport}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsDashboard;