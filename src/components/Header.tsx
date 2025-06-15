import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const companyDropdownItems = [
    { label: 'About Us', href: '/company/about-us' },
    { label: 'Why Us', href: '/company/why-us' },
    { label: 'How We Work', href: '/company/how-we-work' },
    { label: 'Mission and Vision', href: '/company/mission-vision' },
    { label: 'Testimonials', href: '/company/testimonials' }
  ];

  const technologiesDropdownItems = [
    { label: 'SLS Technology', href: '/technologies/sls' },
    { label: 'SLA Technology', href: '/technologies/sla' },
    { label: 'FDM Technology', href: '/technologies/fdm' }
  ];

  const navItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Company', 
      href: '/company',
      dropdown: companyDropdownItems
    },
    { 
      label: 'Technologies', 
      href: '/technologies',
      dropdown: technologiesDropdownItems
    },
    { label: 'Applications', href: '/applications' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Media', href: '/media' },
    { label: 'Contact Us', href: '/contact' }
  ];

  const isActiveRoute = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-royal-blue-600 to-royal-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R3D</span>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-900">Rapid3D</h1>
              <p className="text-xs text-gray-600">Engineering Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActiveRoute(item.href)
                      ? 'text-royal-blue-600 border-b-2 border-royal-blue-600' 
                      : 'text-gray-700 hover:text-royal-blue-600'
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 animate-fade-in">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        to={dropdownItem.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-royal-blue-50 hover:text-royal-blue-600 transition-colors duration-200"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-royal-blue-600 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                      isActiveRoute(item.href)
                        ? 'text-royal-blue-600 bg-royal-blue-50' 
                        : 'text-gray-700 hover:text-royal-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-royal-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;