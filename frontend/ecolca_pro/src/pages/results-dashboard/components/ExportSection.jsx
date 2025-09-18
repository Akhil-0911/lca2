import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ExportSection = ({ assessmentData, onExport }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportFormat, setExportFormat] = useState('pdf');

  const handleExport = async (format) => {
    setIsExporting(true);
    try {
      // Simulate export process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (onExport) {
        onExport(format, assessmentData);
      }
      
      // Create mock download
      const fileName = `lca-assessment-report-${new Date()?.toISOString()?.split('T')?.[0]}.${format}`;
      console.log(`Exporting ${fileName}...`);
      
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const exportOptions = [
    {
      format: 'pdf',
      label: 'PDF Report',
      description: 'Complete assessment with charts and recommendations',
      icon: 'FileText',
      size: '~2.5 MB'
    },
    {
      format: 'excel',
      label: 'Excel Data',
      description: 'Raw data and calculations for further analysis',
      icon: 'FileSpreadsheet',
      size: '~850 KB'
    },
    {
      format: 'json',
      label: 'JSON Data',
      description: 'Machine-readable format for API integration',
      icon: 'Code',
      size: '~45 KB'
    }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-earth">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Export Assessment Report</h3>
        <p className="text-sm text-muted-foreground">
          Download your complete LCA analysis in various formats
        </p>
      </div>
      <div className="space-y-4">
        {exportOptions?.map((option) => (
          <div key={option?.format} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors duration-200">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-primary/10 text-primary rounded-lg">
                <Icon name={option?.icon} size={20} strokeWidth={2} />
              </div>
              <div>
                <h4 className="font-medium text-foreground">{option?.label}</h4>
                <p className="text-sm text-muted-foreground">{option?.description}</p>
                <span className="text-xs text-muted-foreground">{option?.size}</span>
              </div>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleExport(option?.format)}
              disabled={isExporting}
              loading={isExporting && exportFormat === option?.format}
              iconName="Download"
              iconPosition="left"
              iconSize={16}
            >
              Export
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-muted/30 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={16} className="text-primary mt-0.5" strokeWidth={2} />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-1">Report Contents Include:</p>
            <ul className="space-y-1 text-xs">
              <li>• Assessment parameters and methodology</li>
              <li>• Environmental impact metrics and calculations</li>
              <li>• Interactive charts and visualizations</li>
              <li>• Sustainability recommendations and action items</li>
              <li>• Comparative analysis with industry benchmarks</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportSection;