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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-earth">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
            <Icon name="Leaf" size={24} color="white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-heading font-semibold text-foreground leading-tight">
              EcoLCA Pro
            </h1>
            <span className="text-xs text-muted-foreground font-caption">
              Sustainability Assessment
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigationItems?.map((item) => (
            <Button
              key={item?.path}
              variant={isActivePath(item?.path) ? "default" : "ghost"}
              size="sm"
              onClick={() => handleNavigation(item?.path)}
              iconName={item?.icon}
              iconPosition="left"
              iconSize={18}
              className="transition-all duration-200 ease-out"
            >
              {item?.label}
            </Button>
          ))}
          
          {/* More Menu */}
          <div className="relative ml-4 pl-4 border-l border-border">
            <div className="flex items-center space-x-1">
              {secondaryItems?.map((item) => (
                <Button
                  key={item?.action}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSecondaryAction(item?.action)}
                  iconName={item?.icon}
                  iconPosition="left"
                  iconSize={18}
                  className="transition-all duration-200 ease-out"
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
        <div className="md:hidden bg-background border-t border-border shadow-earth-md animate-slide-in">
          <nav className="px-6 py-4 space-y-2">
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
                className="justify-start transition-all duration-200 ease-out"
              >
                {item?.label}
              </Button>
            ))}
            
            <div className="pt-2 mt-4 border-t border-border">
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
                  className="justify-start transition-all duration-200 ease-out"
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