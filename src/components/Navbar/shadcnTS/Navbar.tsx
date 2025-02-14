import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

interface NavLink {
  text: string;
  href: string;
}

interface NavbarProps {
  logo?: string;
  brandName?: string;
  links?: NavLink[];
  className?: string;
  isResponsive?: boolean;
  theme?: 'light' | 'dark';
  onLinkClick?: (link: NavLink) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  logo,
  brandName = 'Brand',
  links = [],
  className = '',
  isResponsive = true,
  theme = 'light',
  onLinkClick
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, link: NavLink) => {
    e.preventDefault();
    if (onLinkClick) {
      onLinkClick(link);
    }
    setIsOpen(false);
  };

  return (
    <nav className={`
      w-full border-b relative
      ${theme === 'dark' ? 'bg-background text-foreground border-border' : 'bg-white border-border'}
      ${className}
    `}>
      <div className="flex h-16 items-center px-8">
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex ml-auto gap-4">
          {links.map((link) => (
            <Button
              key={link.text}
              variant="ghost"
              onClick={(e) => handleLinkClick(e, link)}
            >
              {link.text}
            </Button>
          ))}
        </div>

        {/* Mobile Navigation */}
        {isResponsive && (
          <div className="md:hidden ml-auto">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-full left-0 right-0 z-50 border-t bg-background shadow-lg">
                <div className="flex flex-col p-4">
                  {links.map((link) => (
                    <Button
                      key={link.text}
                      variant="ghost"
                      className="justify-start h-12"
                      onClick={(e) => handleLinkClick(e, link)}
                    >
                      {link.text}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;