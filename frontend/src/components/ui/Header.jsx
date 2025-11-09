import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { label: 'Home', path: '/landing-page', icon: 'Home' },
    { label: 'Assessment', path: '/assessment-form', icon: 'ClipboardList' },
    { label: 'Results', path: '/results-dashboard', icon: 'BarChart3' },
  ];

  const secondaryItems = [
    { label: 'Export Reports', icon: 'Download', action: 'export' },
    { label: 'Help', icon: 'HelpCircle', action: 'help' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleSecondaryAction = (action) => {
    if (action === 'export') {
      // Handle export functionality
      console.log('Export reports');
    } else if (action === 'help') {
      // Handle help functionality
      console.log('Show help');
    }
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => location?.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-earth">
      <div className="flex items-center justify-between h-20 px-6 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-earth-md">
            <Icon name="Leaf" size={28} color="white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-heading font-bold text-foreground leading-tight">
              EcoLCA Pro
            </h1>
            <span className="text-xs text-muted-foreground font-medium tracking-wide">
              AI-Powered Sustainability
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navigationItems?.map((item) => (
            <Button
              key={item?.path}
              variant={isActivePath(item?.path) ? "default" : "ghost"}
              size="sm"
              onClick={() => handleNavigation(item?.path)}
              iconName={item?.icon}
              iconPosition="left"
              iconSize={18}
              className="transition-all duration-300 ease-out hover:scale-105 font-medium"
            >
              {item?.label}
            </Button>
          ))}
          
          {/* More Menu */}
          <div className="relative ml-6 pl-6 border-l border-border/50">
            <div className="flex items-center space-x-2">
              {secondaryItems?.map((item) => (
                <Button
                  key={item?.action}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSecondaryAction(item?.action)}
                  iconName={item?.icon}
                  iconPosition="left"
                  iconSize={18}
                  className="transition-all duration-300 ease-out hover:scale-105 font-medium"
                >
                  {item?.label}
                </Button>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          iconName={isMobileMenuOpen ? "X" : "Menu"}
          iconSize={24}
        />
      </div>
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border shadow-earth-lg animate-slide-in">
          <nav className="px-6 py-6 space-y-3">
            {navigationItems?.map((item) => (
              <Button
                key={item?.path}
                variant={isActivePath(item?.path) ? "default" : "ghost"}
                size="sm"
                fullWidth
                onClick={() => handleNavigation(item?.path)}
                iconName={item?.icon}
                iconPosition="left"
                iconSize={18}
                className="justify-start transition-all duration-300 ease-out font-medium"
              >
                {item?.label}
              </Button>
            ))}
            
            <div className="pt-3 mt-6 border-t border-border/50 space-y-2">
              {secondaryItems?.map((item) => (
                <Button
                  key={item?.action}
                  variant="ghost"
                  size="sm"
                  fullWidth
                  onClick={() => handleSecondaryAction(item?.action)}
                  iconName={item?.icon}
                  iconPosition="left"
                  iconSize={18}
                  className="justify-start transition-all duration-300 ease-out font-medium"
                >
                  {item?.label}
                </Button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;