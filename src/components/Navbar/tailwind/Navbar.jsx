import React, { useState } from 'react';

const Navbar = ({
  logo,
  brandName = 'Brand',
  links = [],
  className = '',
  isResponsive = true,
  theme = 'light',
  onLinkClick
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e, link) => {
    e.preventDefault()
    if (onLinkClick) {
      onLinkClick(link);
    }
    if (isResponsive) {
      setIsOpen(false);
    }
  };

  // Base theme classes
  const themeClasses = theme === 'dark' 
    ? 'bg-gray-900 text-white border-gray-700'
    : 'bg-white text-gray-800 border-gray-200';

  return (
    <nav 
      className={`
        relative w-full
        ${themeClasses}
        border-b
        ${className}
      `}
      role="navigation"
      aria-label="main navigation"
    >
      {/* Container for max width and centering */}
      <div className="w-full flex items-center justify-between px-8 py-4">
        {/* Brand section with reduced padding */}
        <div className="flex items-center gap-4">
          {logo ? (
            <img 
              src={logo} 
              alt={`${brandName} logo`}
              className="h-10 w-10 object-contain"
            />
          ) : (
            <img 
              src="/api/placeholder/40/40" 
              alt="Placeholder logo"
              className="h-10 w-10 object-contain"
            />
          )}
          <span className="text-lg font-semibold">{brandName}</span>
        </div>

        {/* Mobile menu button - removed background color */}
        {isResponsive && (
          <button
            className="md:hidden p-2 rounded-lg"
            aria-label="menu"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block w-full h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-gray-800'} transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-full h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-gray-800'} transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-gray-800'} transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        )}

        {/* Navigation links with z-index and consistent text colors */}
        <div className={`
          ${isResponsive ? 'md:flex' : 'flex'}
          ${isResponsive && isOpen ? 'absolute top-full left-0 right-0 flex z-50' : 'hidden'}
          ${isResponsive && isOpen ? `${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-b` : ''}
          ${isResponsive && isOpen ? 'flex-col px-8 py-4' : 'flex-row items-center gap-4'}
          transition-all duration-300 ease-in-out
        `}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`
                py-2 px-3 rounded-lg
                transition duration-150 ease-in-out
                ${theme === 'dark' 
                  ? 'text-white hover:bg-gray-800' 
                  : 'text-gray-800 hover:bg-gray-100'}
                ${isResponsive && isOpen ? 'w-full' : ''}
              `}
              onClick={(e) => handleLinkClick(e, link)}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;